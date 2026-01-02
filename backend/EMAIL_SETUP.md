# Email Setup Guide

## Where Leads Are Stored

Leads are stored in: **`backend/database/leads.json`**

This JSON file contains all captured leads with the following information:
- Personal details (name, email, skill level)
- Email tracking status
- Timestamps
- IP address and user agent (for analytics)

## Email Configuration

### Option 1: Gmail (Easiest for Development)

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate App Password**:
   - Go to: https://myaccount.google.com/apppasswords
   - Select "Mail" and "Other (Custom name)"
   - Enter "ReactMastery Backend"
   - Copy the generated 16-character password

3. **Add to `.env` file**:
```env
SMTP_USER=your-email@gmail.com
SMTP_APP_PASSWORD=your-16-char-app-password
EMAIL_FROM="ReactMastery" <your-email@gmail.com>
```

### Option 2: SendGrid (Recommended for Production)

1. Sign up at https://sendgrid.com (free tier: 100 emails/day)
2. Create API key
3. Add to `.env`:
```env
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_USER=apikey
SMTP_PASSWORD=your-sendgrid-api-key
EMAIL_FROM="ReactMastery" <noreply@yourdomain.com>
```

### Option 3: Custom SMTP

```env
SMTP_HOST=smtp.your-provider.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-username
SMTP_PASSWORD=your-password
EMAIL_FROM="ReactMastery" <noreply@yourdomain.com>
```

## Email Features

### Welcome Email
- **Trigger**: Immediately after lead capture
- **Content**: Personalized greeting, course overview, download link
- **Status**: Tracked in database (`welcome_email_sent`)

### Follow-up Email Series
Automated emails sent based on days since lead creation:
- **Day 3**: JavaScript Fundamentals Preview
- **Day 5**: React Basics Introduction  
- **Day 7**: Success Stories & Testimonials
- **Day 10**: Enrollment Reminder & Special Offer
- **Day 14**: Final Call-to-Action

**Scheduler**: Runs every hour to check for leads needing follow-up emails

## Testing Emails

### Test Welcome Email
```bash
curl -X POST http://localhost:3001/api/emails/test \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","type":"welcome"}'
```

### Test Follow-up Email
```bash
curl -X POST http://localhost:3001/api/emails/test \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","type":"day3-javascript"}'
```

### Check Email Status
```bash
curl http://localhost:3001/api/emails/status/test@example.com
```

## Unsubscribe

Users can unsubscribe via:
```
GET /api/emails/unsubscribe?email=user@example.com&token=lead-id
```

The unsubscribe link is automatically included in all emails.

## Troubleshooting

### Emails Not Sending
1. Check `.env` file has correct SMTP credentials
2. Verify email service is configured (Gmail App Password, SendGrid API key, etc.)
3. Check server logs for error messages
4. Test email configuration: `curl http://localhost:3001/api/health`

### Gmail Issues
- Make sure 2FA is enabled
- Use App Password, not regular password
- Check spam folder
- Gmail has daily sending limits (500 emails/day for free accounts)

### Email Scheduler Not Working
- Check server logs for scheduler initialization
- Verify cron job is running (runs every hour)
- Manually trigger: Check leads that need follow-up emails

