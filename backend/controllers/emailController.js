import db from '../database/db.js';
import { sendEmail } from '../services/emailService.js';
import { getFollowUpEmailTemplate, getFollowUpEmailSubject } from '../services/emailTemplates.js';

/**
 * Unsubscribe a user from emails
 */
export async function unsubscribe(req, res, next) {
  try {
    const { email, token } = req.query;

    if (!email || !token) {
      return res.status(400).json({
        success: false,
        message: 'Email and token are required',
      });
    }

    const lead = db.findByEmail(email);

    if (!lead) {
      return res.status(404).json({
        success: false,
        message: 'Email not found',
      });
    }

    // Simple token validation (using lead ID)
    if (lead.id.toString() !== token) {
      return res.status(401).json({
        success: false,
        message: 'Invalid token',
      });
    }

    // Update lead status
    db.update(lead.id, {
      email_status: 'unsubscribed',
      last_email_sent_at: new Date().toISOString(),
    });

    res.json({
      success: true,
      message: 'You have been successfully unsubscribed from our emails.',
    });
  } catch (error) {
    next(error);
  }
}

/**
 * Resubscribe a user to emails
 */
export async function resubscribe(req, res, next) {
  try {
    const { email, token } = req.body;

    if (!email || !token) {
      return res.status(400).json({
        success: false,
        message: 'Email and token are required',
      });
    }

    const lead = db.findByEmail(email);

    if (!lead) {
      return res.status(404).json({
        success: false,
        message: 'Email not found',
      });
    }

    // Simple token validation
    if (lead.id.toString() !== token) {
      return res.status(401).json({
        success: false,
        message: 'Invalid token',
      });
    }

    // Update lead status
    db.update(lead.id, {
      email_status: 'active',
    });

    res.json({
      success: true,
      message: 'You have been successfully resubscribed to our emails.',
    });
  } catch (error) {
    next(error);
  }
}

/**
 * Manually send test email (admin endpoint)
 */
export async function sendTestEmail(req, res, next) {
  try {
    const { email, type } = req.body;

    if (!email) {
      return res.status(400).json({
        success: false,
        message: 'Email is required',
      });
    }

    const lead = db.findByEmail(email) || {
      id: 1,
      fullName: 'Test User',
      email,
      skillLevel: 'beginner',
    };

    let emailHtml, subject;

    if (type === 'welcome') {
      const { getWelcomeEmailTemplate } = await import('../services/emailTemplates.js');
      emailHtml = getWelcomeEmailTemplate(lead, null);
      subject = 'Welcome to ReactMastery - Your Course Guide is Ready!';
    } else if (type && type.startsWith('day')) {
      emailHtml = getFollowUpEmailTemplate(type, lead);
      subject = getFollowUpEmailSubject(type);
    } else {
      return res.status(400).json({
        success: false,
        message: 'Invalid email type. Use "welcome" or follow-up type (e.g., "day3-javascript")',
      });
    }

    const result = await sendEmail({
      to: email,
      subject,
      html: emailHtml,
    });

    if (result.success) {
      res.json({
        success: true,
        message: 'Test email sent successfully',
        messageId: result.messageId,
      });
    } else {
      res.status(500).json({
        success: false,
        message: 'Failed to send test email',
        error: result.error,
      });
    }
  } catch (error) {
    next(error);
  }
}

/**
 * Get email status for a lead
 */
export async function getEmailStatus(req, res, next) {
  try {
    const { email } = req.params;

    const lead = db.findByEmail(email);

    if (!lead) {
      return res.status(404).json({
        success: false,
        message: 'Email not found',
      });
    }

    res.json({
      success: true,
      email: lead.email,
      emailStatus: lead.email_status,
      welcomeEmailSent: lead.welcome_email_sent,
      welcomeEmailSentAt: lead.welcome_email_sent_at,
      followUpEmailsSent: lead.followup_emails_sent || [],
      lastEmailSentAt: lead.last_email_sent_at,
    });
  } catch (error) {
    next(error);
  }
}

