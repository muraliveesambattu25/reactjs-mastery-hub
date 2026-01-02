import express from 'express';
import { captureLead, downloadGuide, getAllLeads } from '../controllers/leadController.js';

const router = express.Router();

// POST /api/leads - Capture lead and generate PDF
router.post('/', captureLead);

// GET /api/leads/download/:filename - Download PDF
router.get('/download/:filename', downloadGuide);

// GET /api/leads/all - Get all leads (admin - add auth in production)
router.get('/all', getAllLeads);

export default router;

