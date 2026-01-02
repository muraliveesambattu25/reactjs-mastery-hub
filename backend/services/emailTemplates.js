/**
 * Email templates for lead nurturing
 */

const baseStyles = `
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
    .content { background: #ffffff; padding: 30px; border: 1px solid #e5e7eb; }
    .button { display: inline-block; padding: 12px 30px; background: #3b82f6; color: white; text-decoration: none; border-radius: 6px; margin: 20px 0; }
    .button:hover { background: #2563eb; }
    .footer { background: #f9fafb; padding: 20px; text-align: center; font-size: 12px; color: #6b7280; border-radius: 0 0 8px 8px; }
    .unsubscribe { color: #6b7280; font-size: 11px; margin-top: 20px; }
    .highlight { background: #eff6ff; padding: 15px; border-left: 4px solid #3b82f6; margin: 20px 0; }
  </style>
`;

/**
 * Welcome email template
 */
export function getWelcomeEmailTemplate(leadData, downloadUrl) {
  const unsubscribeUrl = `${process.env.FRONTEND_URL || 'http://localhost:8080'}/unsubscribe?email=${encodeURIComponent(leadData.email)}&token=${leadData.id}`;
  
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  ${baseStyles}
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Welcome to ReactMastery!</h1>
    </div>
    <div class="content">
      <h2>Hello ${leadData.fullName}!</h2>
      
      <p>Thank you for downloading our <strong>8-Week ReactJS Mastery Course Guide</strong>! We're excited to have you on this journey.</p>
      
      <div class="highlight">
        <h3>🎯 What's Next?</h3>
        <p>You've taken the first step toward mastering React. Here's what you can expect:</p>
        <ul>
          <li><strong>Phase 1:</strong> JavaScript Fundamentals (Weeks 1-2)</li>
          <li><strong>Phase 2:</strong> React with JavaScript (Weeks 3-5)</li>
          <li><strong>Phase 3:</strong> React with TypeScript (Weeks 6-8)</li>
        </ul>
      </div>
      
      ${downloadUrl ? `
      <p><strong>Your Course Guide:</strong> If you haven't downloaded it yet, you can access it here:</p>
      <a href="${downloadUrl}" class="button">Download Course Guide</a>
      ` : ''}
      
      <p>Over the next few days, we'll send you valuable insights about:</p>
      <ul>
        <li>JavaScript fundamentals you need to know</li>
        <li>React best practices and patterns</li>
        <li>Success stories from our students</li>
        <li>Exclusive tips and resources</li>
      </ul>
      
      <a href="${process.env.FRONTEND_URL || 'http://localhost:8080'}/pricing" class="button">Explore Our Course</a>
      
      <p>If you have any questions, feel free to reply to this email. We're here to help!</p>
      
      <p>Best regards,<br>
      <strong>The ReactMastery Team</strong></p>
    </div>
    <div class="footer">
      <p>ReactMastery - Your Path to React Excellence</p>
      <p class="unsubscribe">
        <a href="${unsubscribeUrl}">Unsubscribe</a> | 
        <a href="${process.env.FRONTEND_URL || 'http://localhost:8080'}">Visit Website</a>
      </p>
    </div>
  </div>
</body>
</html>
  `.trim();
}

/**
 * Follow-up email templates
 */
export function getFollowUpEmailTemplate(emailType, leadData) {
  const unsubscribeUrl = `${process.env.FRONTEND_URL || 'http://localhost:8080'}/unsubscribe?email=${encodeURIComponent(leadData.email)}&token=${leadData.id}`;
  
  const templates = {
    'day3-javascript': {
      subject: 'JavaScript Fundamentals: Your Foundation for React',
      content: `
        <h2>Hello ${leadData.fullName}!</h2>
        <p>Great to see you're interested in mastering React! Before diving into React, let's talk about the JavaScript fundamentals that will make your React journey smoother.</p>
        
        <div class="highlight">
          <h3>Essential JavaScript Concepts for React:</h3>
          <ul>
            <li><strong>ES6+ Features:</strong> Arrow functions, destructuring, spread operators</li>
            <li><strong>Async JavaScript:</strong> Promises, async/await for API calls</li>
            <li><strong>Array Methods:</strong> map, filter, reduce - React's best friends</li>
            <li><strong>Modules:</strong> import/export for component organization</li>
          </ul>
        </div>
        
        <p>These concepts form the foundation of everything you'll do in React. Master them, and React will feel natural!</p>
        
        <a href="${process.env.FRONTEND_URL || 'http://localhost:8080'}/curriculum" class="button">View Full Curriculum</a>
      `,
    },
    'day5-react-basics': {
      subject: 'React Basics: Components, Props, and State',
      content: `
        <h2>Hi ${leadData.fullName}!</h2>
        <p>Ready to build your first React component? Let's explore the core concepts that make React powerful.</p>
        
        <div class="highlight">
          <h3>React Core Concepts:</h3>
          <ul>
            <li><strong>Components:</strong> Reusable building blocks of your UI</li>
            <li><strong>Props:</strong> Passing data between components</li>
            <li><strong>State:</strong> Managing dynamic data in your app</li>
            <li><strong>JSX:</strong> Writing HTML-like syntax in JavaScript</li>
          </ul>
        </div>
        
        <p>These are the building blocks of every React application. Once you understand these, you can build anything!</p>
        
        <a href="${process.env.FRONTEND_URL || 'http://localhost:8080'}/curriculum" class="button">Start Learning React</a>
      `,
    },
    'day7-testimonials': {
      subject: 'Success Stories: How Our Students Transformed Their Careers',
      content: `
        <h2>Hello ${leadData.fullName}!</h2>
        <p>You're not alone on this journey. Thousands of developers have transformed their careers with our ReactJS Mastery program.</p>
        
        <div class="highlight">
          <h3>What Our Students Say:</h3>
          <p><em>"I went from zero React knowledge to landing a job at a tech startup in just 8 weeks!"</em> - Sarah M.</p>
          <p><em>"The structured approach and real-world projects gave me the confidence to build production apps."</em> - John D.</p>
          <p><em>"Best investment in my career. The TypeScript section alone was worth it!"</em> - Mike T.</p>
        </div>
        
        <p>Join over 5,000+ students who've completed our program and are now building amazing React applications.</p>
        
        <a href="${process.env.FRONTEND_URL || 'http://localhost:8080'}/testimonials" class="button">Read More Success Stories</a>
      `,
    },
    'day10-enrollment': {
      subject: 'Limited Time: Special Offer on ReactJS Mastery Course',
      content: `
        <h2>Hi ${leadData.fullName}!</h2>
        <p>We noticed you've been exploring our course guide. Ready to take the next step?</p>
        
        <div class="highlight">
          <h3>What You Get:</h3>
          <ul>
            <li>✅ Complete 8-week curriculum with 40+ hours of content</li>
            <li>✅ 3 Enterprise-level projects for your portfolio</li>
            <li>✅ Lifetime access to all course materials</li>
            <li>✅ Certificate of completion</li>
            <li>✅ Community support and resources</li>
          </ul>
        </div>
        
        <p><strong>Special Offer:</strong> Enroll now and get access to exclusive bonus materials!</p>
        
        <a href="${process.env.FRONTEND_URL || 'http://localhost:8080'}/pricing" class="button">View Pricing & Enroll</a>
      `,
    },
    'day14-final': {
      subject: 'Last Chance: Start Your React Journey Today',
      content: `
        <h2>Hello ${leadData.fullName}!</h2>
        <p>This is our final email in this series. We wanted to make sure you have everything you need to start your React journey.</p>
        
        <div class="highlight">
          <h3>Why Choose ReactMastery?</h3>
          <ul>
            <li>📚 Comprehensive curriculum from JavaScript to TypeScript</li>
            <li>🏗️ Build 3 enterprise projects for your portfolio</li>
            <li>👨‍💼 Learn industry best practices</li>
            <li>🚀 Get job-ready in 8 weeks</li>
          </ul>
        </div>
        
        <p>Don't let another week pass by. Start building your React skills today!</p>
        
        <a href="${process.env.FRONTEND_URL || 'http://localhost:8080'}/pricing" class="button">Enroll Now</a>
        
        <p>If you have any questions, just reply to this email. We're here to help!</p>
      `,
    },
  };

  const template = templates[emailType];
  if (!template) {
    throw new Error(`Unknown email template type: ${emailType}`);
  }

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  ${baseStyles}
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>ReactMastery</h1>
    </div>
    <div class="content">
      ${template.content}
      
      <p>Best regards,<br>
      <strong>The ReactMastery Team</strong></p>
    </div>
    <div class="footer">
      <p>ReactMastery - Your Path to React Excellence</p>
      <p class="unsubscribe">
        <a href="${unsubscribeUrl}">Unsubscribe</a> | 
        <a href="${process.env.FRONTEND_URL || 'http://localhost:8080'}">Visit Website</a>
      </p>
    </div>
  </div>
</body>
</html>
  `.trim();
}

/**
 * Get email subject for follow-up emails
 */
export function getFollowUpEmailSubject(emailType) {
  const subjects = {
    'day3-javascript': 'JavaScript Fundamentals: Your Foundation for React',
    'day5-react-basics': 'React Basics: Components, Props, and State',
    'day7-testimonials': 'Success Stories: How Our Students Transformed Their Careers',
    'day10-enrollment': 'Limited Time: Special Offer on ReactJS Mastery Course',
    'day14-final': 'Last Chance: Start Your React Journey Today',
  };
  
  return subjects[emailType] || 'ReactMastery - Important Update';
}

