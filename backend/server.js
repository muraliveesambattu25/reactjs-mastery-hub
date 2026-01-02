import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import leadRoutes from './routes/leads.js';
import emailRoutes from './routes/emails.js';
import { errorHandler, notFoundHandler } from './middleware/errorHandler.js';
import { initializeEmailScheduler } from './services/emailScheduler.js';
import './database/db.js'; // Initialize database

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables with explicit path
dotenv.config({ path: path.join(__dirname, '.env') });

const app = express();
const PORT = process.env.PORT || 3001;
const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:8080';

// Middleware
app.use(cors({
  origin: FRONTEND_URL,
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Trust proxy for accurate IP addresses
app.set('trust proxy', true);

// Serve static files from public directory
app.use('/public', express.static('public'));

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    message: 'Server is running',
    timestamp: new Date().toISOString(),
  });
});

// API Routes
app.use('/api/leads', leadRoutes);
app.use('/api/emails', emailRoutes);

// 404 handler
app.use(notFoundHandler);

// Error handling middleware (must be last)
app.use(errorHandler);

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📝 API Health: http://localhost:${PORT}/api/health`);
  console.log(`🌐 Frontend URL: ${FRONTEND_URL}`);
  console.log(`📦 Environment: ${process.env.NODE_ENV || 'development'}`);
  
  // Initialize email scheduler for follow-up emails
  initializeEmailScheduler();
});

