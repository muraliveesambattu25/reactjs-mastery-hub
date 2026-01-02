import express from 'express';
import { unsubscribe, resubscribe, sendTestEmail, getEmailStatus } from '../controllers/emailController.js';

const router = express.Router();

// GET /api/emails/unsubscribe - Unsubscribe from emails
router.get('/unsubscribe', unsubscribe);

// POST /api/emails/resubscribe - Resubscribe to emails
router.post('/resubscribe', resubscribe);

// POST /api/emails/test - Send test email (admin/testing)
router.post('/test', sendTestEmail);

// GET /api/emails/status/:email - Get email status for a lead
router.get('/status/:email', getEmailStatus);

export default router;

