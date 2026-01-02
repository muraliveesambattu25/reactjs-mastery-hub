import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// JSON file-based database (simple alternative to SQLite)
const dbPath = path.join(__dirname, 'leads.json');

// Initialize database file if it doesn't exist
if (!fs.existsSync(dbPath)) {
  fs.writeFileSync(dbPath, JSON.stringify([], null, 2));
  console.log('Database file created');
}

// Read database
function readDB() {
  try {
    const data = fs.readFileSync(dbPath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading database:', error);
    return [];
  }
}

// Write to database
function writeDB(data) {
  try {
    fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
    return true;
  } catch (error) {
    console.error('Error writing to database:', error);
    return false;
  }
}

// Database operations
const db = {
  // Get all leads
  getAll() {
    return readDB();
  },

  // Find lead by email
  findByEmail(email) {
    const leads = readDB();
    return leads.find(lead => lead.email.toLowerCase() === email.toLowerCase()) || null;
  },

  // Create new lead
  create(leadData) {
    const leads = readDB();
    const newLead = {
      id: leads.length > 0 ? Math.max(...leads.map(l => l.id)) + 1 : 1,
      ...leadData,
      created_at: new Date().toISOString(),
      // Email tracking fields
      welcome_email_sent: false,
      welcome_email_sent_at: null,
      followup_emails_sent: [],
      last_email_sent_at: null,
      email_status: 'pending', // pending, active, unsubscribed
    };
    leads.push(newLead);
    writeDB(leads);
    return newLead;
  },

  // Update lead
  update(id, updates) {
    const leads = readDB();
    const index = leads.findIndex(lead => lead.id === id);
    if (index === -1) {
      return null;
    }
    leads[index] = { ...leads[index], ...updates };
    writeDB(leads);
    return leads[index];
  },

  // Find by ID
  findById(id) {
    const leads = readDB();
    return leads.find(lead => lead.id === id) || null;
  },

  // Get leads that need follow-up emails
  getLeadsForFollowUp() {
    const leads = readDB();
    const now = new Date();
    
    return leads.filter(lead => {
      // Only active leads
      if (lead.email_status !== 'active' && lead.email_status !== 'pending') {
        return false;
      }
      
      // Must have welcome email sent
      if (!lead.welcome_email_sent) {
        return false;
      }
      
      const createdAt = new Date(lead.created_at);
      const daysSinceCreation = Math.floor((now - createdAt) / (1000 * 60 * 60 * 24));
      
      // Check which follow-up emails should be sent
      const followUpSchedule = [
        { day: 3, type: 'day3-javascript' },
        { day: 5, type: 'day5-react-basics' },
        { day: 7, type: 'day7-testimonials' },
        { day: 10, type: 'day10-enrollment' },
        { day: 14, type: 'day14-final' },
      ];
      
      // Check if any follow-up email is due
      return followUpSchedule.some(schedule => {
        if (daysSinceCreation >= schedule.day) {
          // Check if this email hasn't been sent yet
          return !lead.followup_emails_sent || !lead.followup_emails_sent.includes(schedule.type);
        }
        return false;
      });
    });
  },

  // Get count
  getCount() {
    return readDB().length;
  },
};

console.log('Database initialized successfully (JSON file-based)');

export default db;

