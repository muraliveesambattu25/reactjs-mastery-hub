import { Lead } from '../models/Lead.js';
import { generateCourseGuide } from '../services/pdfService.js';
import { sendEmail } from '../services/emailService.js';
import { getWelcomeEmailTemplate } from '../services/emailTemplates.js';
import db from '../database/db.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Capture a new lead and generate PDF
 */
export async function captureLead(req, res, next) {
  try {
    const ipAddress = req.ip || req.connection.remoteAddress || req.headers['x-forwarded-for']?.split(',')[0];
    const userAgent = req.get('user-agent');

    // Create lead in database
    const lead = Lead.create(req.body, ipAddress, userAgent);

    // Generate PDF
    const { fileName, filePath } = await generateCourseGuide(req.body);
    const downloadUrl = `${req.protocol}://${req.get('host')}/api/leads/download/${fileName}`;

    // Send welcome email (async, don't wait for it)
    sendWelcomeEmail(lead, downloadUrl).catch(error => {
      console.error('Failed to send welcome email:', error);
      // Don't fail the request if email fails
    });

    // Return success with download link
    res.status(201).json({
      success: true,
      message: 'Lead captured successfully. PDF generated.',
      lead: {
        id: lead.id,
        email: lead.email,
        fullName: lead.fullName,
      },
      downloadUrl: `/api/leads/download/${fileName}`,
    });
  } catch (error) {
    // If email exists, still generate PDF but return existing lead info
    if (error.message && error.message.includes('already exists')) {
      try {
        const existingLead = Lead.findByEmail(req.body.email);
        const { fileName, filePath } = await generateCourseGuide(req.body);
        const downloadUrl = `${req.protocol}://${req.get('host')}/api/leads/download/${fileName}`;
        
        // Send welcome email if not sent yet
        if (!existingLead.welcome_email_sent) {
          sendWelcomeEmail(existingLead, downloadUrl).catch(error => {
            console.error('Failed to send welcome email:', error);
          });
        }
        
        return res.status(200).json({
          success: true,
          message: 'PDF generated successfully',
          lead: existingLead,
          downloadUrl: `/api/leads/download/${fileName}`,
        });
      } catch (pdfError) {
        return next(pdfError);
      }
    }
    next(error);
  }
}

/**
 * Download the generated PDF guide
 */
export async function downloadGuide(req, res, next) {
  try {
    const fileName = req.params.filename;
    
    // Security: Validate filename to prevent directory traversal
    if (!fileName || fileName.includes('..') || fileName.includes('/') || fileName.includes('\\')) {
      return res.status(400).json({
        success: false,
        message: 'Invalid filename',
      });
    }

    const filePath = path.join(__dirname, '../public/downloads', fileName);

    // Check if file exists
    if (!fs.existsSync(filePath)) {
      return res.status(404).json({
        success: false,
        message: 'File not found',
      });
    }

    // Set headers for PDF download
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename="ReactJS-Course-Guide.pdf"`);
    res.setHeader('Content-Length', fs.statSync(filePath).size);
    
    // Stream the file
    const fileStream = fs.createReadStream(filePath);
    fileStream.pipe(res);

    fileStream.on('error', (error) => {
      next(error);
    });
  } catch (error) {
    next(error);
  }
}

/**
 * Get all leads (admin endpoint - add authentication in production)
 */
export async function getAllLeads(req, res, next) {
  try {
    const leads = Lead.getAll();
    const count = Lead.getCount();
    
    res.json({
      success: true,
      count,
      leads,
    });
  } catch (error) {
    next(error);
  }
}

/**
 * Send welcome email to a new lead
 */
async function sendWelcomeEmail(lead, downloadUrl) {
  try {
    // Check if welcome email already sent
    if (lead.welcome_email_sent) {
      console.log(`Welcome email already sent to ${lead.email}`);
      return;
    }

    const emailHtml = getWelcomeEmailTemplate(lead, downloadUrl);
    const result = await sendEmail({
      to: lead.email,
      subject: 'Welcome to ReactMastery - Your Course Guide is Ready!',
      html: emailHtml,
    });

    if (result.success) {
      // Update lead with email status
      const updatedLead = db.update(lead.id, {
        welcome_email_sent: true,
        welcome_email_sent_at: new Date().toISOString(),
        last_email_sent_at: new Date().toISOString(),
        email_status: 'active',
      });
      console.log(`Welcome email sent successfully to ${lead.email}`);
      return updatedLead;
    } else {
      console.error(`Failed to send welcome email to ${lead.email}:`, result.error);
      throw new Error(result.error);
    }
  } catch (error) {
    console.error(`Error sending welcome email to ${lead.email}:`, error);
    throw error;
  }
}

