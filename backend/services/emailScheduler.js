import cron from 'node-cron';
import db from '../database/db.js';
import { sendEmail } from './emailService.js';
import { getFollowUpEmailTemplate, getFollowUpEmailSubject } from './emailTemplates.js';

/**
 * Follow-up email schedule (days after lead creation)
 */
const FOLLOW_UP_SCHEDULE = [
  { day: 3, type: 'day3-javascript' },
  { day: 5, type: 'day5-react-basics' },
  { day: 7, type: 'day7-testimonials' },
  { day: 10, type: 'day10-enrollment' },
  { day: 14, type: 'day14-final' },
];

/**
 * Send follow-up emails to leads that are due
 */
async function sendFollowUpEmails() {
  try {
    const leads = db.getLeadsForFollowUp();
    const now = new Date();

    console.log(`Checking ${leads.length} leads for follow-up emails...`);

    for (const lead of leads) {
      const createdAt = new Date(lead.created_at);
      const daysSinceCreation = Math.floor((now - createdAt) / (1000 * 60 * 60 * 24));

      // Check which follow-up email should be sent
      for (const schedule of FOLLOW_UP_SCHEDULE) {
        if (daysSinceCreation >= schedule.day) {
          // Check if this email hasn't been sent yet
          const emailsSent = lead.followup_emails_sent || [];
          if (!emailsSent.includes(schedule.type)) {
            await sendFollowUpEmail(lead, schedule.type);
            break; // Only send one email per check
          }
        }
      }
    }
  } catch (error) {
    console.error('Error in sendFollowUpEmails:', error);
  }
}

/**
 * Send a specific follow-up email to a lead
 */
async function sendFollowUpEmail(lead, emailType) {
  try {
    // Skip if unsubscribed
    if (lead.email_status === 'unsubscribed') {
      console.log(`Skipping email to ${lead.email} - unsubscribed`);
      return;
    }

    const emailHtml = getFollowUpEmailTemplate(emailType, lead);
    const subject = getFollowUpEmailSubject(emailType);

    const result = await sendEmail({
      to: lead.email,
      subject,
      html: emailHtml,
    });

    if (result.success) {
      // Update lead with email status
      const emailsSent = lead.followup_emails_sent || [];
      emailsSent.push(emailType);

      db.update(lead.id, {
        followup_emails_sent: emailsSent,
        last_email_sent_at: new Date().toISOString(),
        email_status: 'active',
      });

      console.log(`Follow-up email (${emailType}) sent successfully to ${lead.email}`);
    } else {
      console.error(`Failed to send follow-up email (${emailType}) to ${lead.email}:`, result.error);
    }
  } catch (error) {
    console.error(`Error sending follow-up email (${emailType}) to ${lead.email}:`, error);
  }
}

/**
 * Initialize email scheduler
 * Runs every hour to check for leads that need follow-up emails
 */
export function initializeEmailScheduler() {
  // Run every hour at minute 0
  cron.schedule('0 * * * *', () => {
    console.log('Running scheduled follow-up email check...');
    sendFollowUpEmails();
  });

  // Also run immediately on startup (for testing)
  console.log('Email scheduler initialized. Checking for follow-up emails...');
  sendFollowUpEmails();

  console.log('Email scheduler will run every hour to send follow-up emails.');
}

/**
 * Manually trigger follow-up email check (for testing)
 */
export async function triggerFollowUpCheck() {
  await sendFollowUpEmails();
}

