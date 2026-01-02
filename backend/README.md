# ReactMastery Backend API

Backend server for lead capture and PDF generation.

## Setup

1. Install dependencies:
```bash
cd backend
npm install
```

2. Create `.env` file (copy from `.env.example` if needed):
```env
PORT=3001
NODE_ENV=development
FRONTEND_URL=http://localhost:8080

# Email Configuration (for Gmail)
SMTP_USER=your-email@gmail.com
SMTP_APP_PASSWORD=your-app-password
EMAIL_FROM="ReactMastery" <your-email@gmail.com>

# Alternative: Custom SMTP
# SMTP_HOST=smtp.example.com
# SMTP_PORT=587
# SMTP_SECURE=false
# SMTP_PASSWORD=your-password
```

3. Start the server:
```bash
npm run dev
```

The server will run on `http://localhost:3001`

## API Endpoints

### Health Check
- `GET /api/health` - Check server status

### Lead Capture
- `POST /api/leads` - Capture lead and generate PDF
  - Body: `{ fullName, email, skillLevel? }`
  - Returns: `{ success, message, lead, downloadUrl }`

### PDF Download
- `GET /api/leads/download/:filename` - Download generated PDF

### Admin (Optional)
- `GET /api/leads/all` - Get all leads (add authentication in production)

### Email Management
- `GET /api/emails/unsubscribe?email=...&token=...` - Unsubscribe from emails
- `POST /api/emails/resubscribe` - Resubscribe to emails
- `POST /api/emails/test` - Send test email (admin/testing)
- `GET /api/emails/status/:email` - Get email status for a lead

## Database

Leads are stored in JSON format at `backend/database/leads.json`

Each lead includes:
- Basic info (name, email, skill level)
- Email tracking (welcome email sent, follow-up emails sent)
- Timestamps (created_at, last_email_sent_at)
- Email status (pending, active, unsubscribed)

## PDF Storage

Generated PDFs are stored in `backend/public/downloads/`

## Email Features

### Welcome Email
- Automatically sent when a lead is captured
- Includes personalized greeting and course guide download link

### Follow-up Email Series
Automated emails sent at:
- Day 3: JavaScript Fundamentals Preview
- Day 5: React Basics Introduction
- Day 7: Success Stories & Testimonials
- Day 10: Enrollment Reminder & Special Offer
- Day 14: Final Call-to-Action

The email scheduler runs every hour to check for leads that need follow-up emails.

## Email Setup

### Gmail Setup (Recommended for Development)
1. Enable 2-Factor Authentication on your Gmail account
2. Generate an App Password: https://myaccount.google.com/apppasswords
3. Use the App Password in `SMTP_APP_PASSWORD`

### Other SMTP Providers
Configure using `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, and `SMTP_PASSWORD` in `.env`

