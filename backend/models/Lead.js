import db from '../database/db.js';
import { z } from 'zod';

export const leadSchema = z.object({
  fullName: z.string().min(2, 'Full name must be at least 2 characters').max(100, 'Full name must be less than 100 characters'),
  email: z.string().email('Please provide a valid email address'),
  skillLevel: z.enum(['beginner', 'some-experience', 'intermediate', 'advanced', '']).optional().or(z.literal('')),
});

export class Lead {
  /**
   * Create a new lead in the database
   * @param {Object} data - Lead data (fullName, email, skillLevel)
   * @param {string|null} ipAddress - IP address of the user
   * @param {string|null} userAgent - User agent string
   * @returns {Object} Created lead object
   */
  static create(data, ipAddress = null, userAgent = null) {
    // Validate input
    const validated = leadSchema.parse(data);
    
    // Check if email already exists
    const existing = db.findByEmail(validated.email);
    if (existing) {
      // Return existing lead if email already exists
      return {
        id: existing.id,
        fullName: existing.fullName,
        email: existing.email,
        skillLevel: existing.skillLevel,
        createdAt: existing.created_at,
        welcomeEmailSent: existing.welcome_email_sent,
        emailStatus: existing.email_status,
      };
    }
    
    // Create new lead
    const newLead = {
      fullName: validated.fullName,
      email: validated.email.toLowerCase().trim(),
      skillLevel: validated.skillLevel || null,
      ipAddress,
      userAgent,
    };
    
    const created = db.create(newLead);
    
    return {
      id: created.id,
      fullName: created.fullName,
      email: created.email,
      skillLevel: created.skillLevel,
      createdAt: created.created_at,
      welcomeEmailSent: created.welcome_email_sent || false,
      emailStatus: created.email_status || 'pending',
    };
  }

  /**
   * Find a lead by email
   * @param {string} email - Email address to search for
   * @returns {Object|null} Lead object or null if not found
   */
  static findByEmail(email) {
    const lead = db.findByEmail(email);
    
    if (!lead) return null;
    
    return {
      id: lead.id,
      fullName: lead.fullName,
      email: lead.email,
      skillLevel: lead.skillLevel,
      createdAt: lead.created_at,
      ipAddress: lead.ipAddress,
      userAgent: lead.userAgent,
      welcomeEmailSent: lead.welcome_email_sent || false,
      welcomeEmailSentAt: lead.welcome_email_sent_at,
      followUpEmailsSent: lead.followup_emails_sent || [],
      lastEmailSentAt: lead.last_email_sent_at,
      emailStatus: lead.email_status || 'pending',
    };
  }

  /**
   * Get all leads (for admin purposes)
   * @returns {Array} Array of lead objects
   */
  static getAll() {
    const leads = db.getAll();
    
    return leads
      .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
      .map(lead => ({
        id: lead.id,
        fullName: lead.fullName,
        email: lead.email,
        skillLevel: lead.skillLevel,
        createdAt: lead.created_at,
        ipAddress: lead.ipAddress,
        userAgent: lead.userAgent,
      }));
  }

  /**
   * Get lead count
   * @returns {number} Total number of leads
   */
  static getCount() {
    return db.getCount();
  }
}

