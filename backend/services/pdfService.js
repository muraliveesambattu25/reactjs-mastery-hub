import PDFDocument from 'pdfkit';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Generate a personalized course guide PDF
 * @param {Object} leadData - Lead information (fullName, email, skillLevel)
 * @returns {Promise<Object>} Object with fileName and filePath
 */
export function generateCourseGuide(leadData) {
  return new Promise((resolve, reject) => {
    const doc = new PDFDocument({
      size: 'A4',
      margins: { top: 50, bottom: 50, left: 50, right: 50 },
      info: {
        Title: 'ReactJS Mastery - 8 Week Course Guide',
        Author: 'ReactMastery',
        Subject: 'Complete ReactJS Learning Guide',
        Creator: 'ReactMastery Platform',
      },
    });

    const fileName = `course-guide-${Date.now()}-${Math.random().toString(36).substring(7)}.pdf`;
    const outputPath = path.join(__dirname, '../public/downloads', fileName);

    // Ensure downloads directory exists
    const downloadsDir = path.dirname(outputPath);
    if (!fs.existsSync(downloadsDir)) {
      fs.mkdirSync(downloadsDir, { recursive: true });
    }

    const stream = fs.createWriteStream(outputPath);
    doc.pipe(stream);

    // Header with React Blue color (removed emoji to fix font encoding)
    doc.fontSize(24)
       .fillColor('#1e40af')
       .font('Helvetica-Bold')
       .text('ReactJS Mastery Hub', { align: 'center' })
       .moveDown(0.5);

    doc.fontSize(18)
       .fillColor('#3b82f6')
       .font('Helvetica')
       .text('8-Week Complete Course Guide', { align: 'center' })
       .moveDown(2);

    // Personalized greeting
    doc.fontSize(14)
       .fillColor('#1f2937')
       .font('Helvetica-Bold')
       .text(`Hello ${leadData.fullName}!`, { align: 'left' })
       .moveDown();

    doc.fontSize(12)
       .fillColor('#4b5563')
       .font('Helvetica')
       .text('Thank you for your interest in our ReactJS Mastery program. This comprehensive guide outlines everything you\'ll learn in our structured 8-week intensive course designed to take you from JavaScript fundamentals to enterprise React developer.', { align: 'left' })
       .moveDown(2);

    // Course Overview Section
    doc.fontSize(16)
       .fillColor('#1e40af')
       .font('Helvetica-Bold')
       .text('Course Overview', { underline: true })
       .moveDown();

    doc.fontSize(12)
       .fillColor('#1f2937')
       .font('Helvetica')
       .text('Our 8-week intensive program is structured across three comprehensive phases:', { align: 'left' })
       .moveDown();

    // Phase 1: JavaScript Fundamentals
    doc.fontSize(14)
       .fillColor('#059669')
       .font('Helvetica-Bold')
       .text('Phase 1: JavaScript Fundamentals (Weeks 1-2)', { underline: true })
       .moveDown(0.5);
    
    doc.fontSize(11)
       .fillColor('#4b5563')
       .font('Helvetica')
       .text('Week 1: ES6+ Basics', { indent: 20 })
       .text('• Variables & Scoping (let, const, var)', { indent: 30 })
       .text('• Arrow Functions & Template Literals', { indent: 30 })
       .text('• Destructuring & Spread Operators', { indent: 30 })
       .text('• Default Parameters & Enhanced Object Literals', { indent: 30 })
       .moveDown(0.5);

    doc.fontSize(11)
       .fillColor('#4b5563')
       .text('Week 2: Advanced JavaScript', { indent: 20 })
       .text('• Promises & Async/Await', { indent: 30 })
       .text('• Array Methods & Functional Programming', { indent: 30 })
       .text('• ES6 Modules & Code Organization', { indent: 30 })
       .text('• Classes, Prototypes & Error Handling', { indent: 30 })
       .moveDown();

    // Phase 2: React with JavaScript
    doc.fontSize(14)
       .fillColor('#3b82f6')
       .font('Helvetica-Bold')
       .text('Phase 2: React with JavaScript (Weeks 3-5)', { underline: true })
       .moveDown(0.5);
    
    doc.fontSize(11)
       .fillColor('#4b5563')
       .font('Helvetica')
       .text('Week 3: React Fundamentals', { indent: 20 })
       .text('• Introduction to React & JSX', { indent: 30 })
       .text('• Components & Props', { indent: 30 })
       .text('• State & Event Handling', { indent: 30 })
       .text('• Conditional Rendering & Lists', { indent: 30 })
       .text('• Project: Todo App', { indent: 30 })
       .moveDown(0.5);

    doc.fontSize(11)
       .text('Week 4: React Intermediate', { indent: 20 })
       .text('• React Hooks Deep Dive', { indent: 30 })
       .text('• React Router & Navigation', { indent: 30 })
       .text('• Forms & Controlled Components', { indent: 30 })
       .text('• Context API for State Management', { indent: 30 })
       .text('• Projects: Contact Form, Theme Switcher', { indent: 30 })
       .moveDown(0.5);

    doc.fontSize(11)
       .text('Week 5: React Advanced', { indent: 20 })
       .text('• Performance Optimization', { indent: 30 })
       .text('• Testing with React Testing Library', { indent: 30 })
       .text('• State Management Solutions (Redux, Zustand)', { indent: 30 })
       .text('• Project: Shopping Cart App', { indent: 30 })
       .moveDown();

    // Phase 3: React with TypeScript
    doc.fontSize(14)
       .fillColor('#7c3aed')
       .font('Helvetica-Bold')
       .text('Phase 3: React with TypeScript (Weeks 6-8)', { underline: true })
       .moveDown(0.5);
    
    doc.fontSize(11)
       .fillColor('#4b5563')
       .font('Helvetica')
       .text('Week 6: TypeScript Fundamentals', { indent: 20 })
       .text('• TypeScript Basics & Setup', { indent: 30 })
       .text('• Types, Interfaces & Generics', { indent: 30 })
       .text('• TypeScript with React Components', { indent: 30 })
       .text('• Advanced TypeScript Patterns', { indent: 30 })
       .moveDown(0.5);

    doc.fontSize(11)
       .text('Week 7: Advanced TypeScript & React', { indent: 20 })
       .text('• React 19 Features with TypeScript', { indent: 30 })
       .text('• Advanced TypeScript Patterns in React', { indent: 30 })
       .text('• Performance Optimization with TypeScript', { indent: 30 })
       .text('• Testing with TypeScript', { indent: 30 })
       .moveDown(0.5);

    doc.fontSize(11)
       .text('Week 8: Enterprise Projects', { indent: 20 })
       .text('• Enterprise Project 1: E-commerce Platform', { indent: 30 })
       .text('• Enterprise Project 2: SaaS Dashboard', { indent: 30 })
       .text('• Enterprise Project 3: Social Media App', { indent: 30 })
       .moveDown(2);

    // What You'll Build Section
    doc.fontSize(16)
       .fillColor('#1e40af')
       .font('Helvetica-Bold')
       .text('Projects You\'ll Build', { underline: true })
       .moveDown();

    doc.fontSize(11)
       .fillColor('#4b5563')
       .font('Helvetica')
       .text('Throughout the course, you\'ll build real-world projects:', { align: 'left' })
       .moveDown(0.5);

    const projects = [
      'Todo App - Master React fundamentals',
      'Contact Form - Learn form handling and validation',
      'Theme Switcher - Implement Context API',
      'Shopping Cart App - State management mastery',
      'E-commerce Platform - Full-stack enterprise application',
      'SaaS Dashboard - Analytics and data visualization',
      'Social Media App - Real-time features and interactions'
    ];

    projects.forEach(project => {
      doc.text(`• ${project}`, { indent: 20 });
    });

    doc.moveDown(2);

    // Key Learning Outcomes
    doc.fontSize(16)
       .fillColor('#1e40af')
       .font('Helvetica-Bold')
       .text('Key Learning Outcomes', { underline: true })
       .moveDown();

    const outcomes = [
      'Master modern JavaScript (ES6+) fundamentals',
      'Build production-ready React applications',
      'Implement TypeScript in React projects',
      'Understand state management patterns',
      'Write comprehensive tests for React apps',
      'Optimize React applications for performance',
      'Deploy enterprise-level applications',
      'Follow industry best practices and patterns'
    ];

    doc.fontSize(11)
       .fillColor('#4b5563')
       .font('Helvetica');

    outcomes.forEach(outcome => {
      doc.text(`• ${outcome}`, { indent: 20 });
    });

    doc.moveDown(2);

    // Call to Action
    doc.fontSize(14)
       .fillColor('#dc2626')
       .font('Helvetica-Bold')
       .text('Ready to Start Your Journey?', { align: 'center', underline: true })
       .moveDown();

    doc.fontSize(12)
       .fillColor('#1f2937')
       .font('Helvetica')
       .text('Join thousands of developers who\'ve transformed their careers with our comprehensive ReactJS training program.', { align: 'center' })
       .moveDown();

    doc.fontSize(12)
       .fillColor('#3b82f6')
       .font('Helvetica-Bold')
       .text('Visit our website to enroll and start your journey to becoming a React expert!', { align: 'center' })
       .moveDown(2);

    // Footer
    doc.fontSize(10)
       .fillColor('#6b7280')
       .font('Helvetica')
       .text(`Generated on ${new Date().toLocaleDateString('en-US', { 
         year: 'numeric', 
         month: 'long', 
         day: 'numeric' 
       })}`, { align: 'center' })
       .moveDown(0.5);

    doc.text('ReactMastery - Your Path to React Excellence', { align: 'center' });

    doc.end();

    stream.on('finish', () => {
      resolve({ fileName, filePath: outputPath });
    });

    stream.on('error', reject);
  });
}

