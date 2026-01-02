# ReactMastery - ReactJS Learning Platform

A comprehensive ReactJS training platform designed to take students from JavaScript fundamentals to enterprise React developers through a structured 8-week intensive curriculum. The platform features a modern, responsive design built with React, TypeScript, and Tailwind CSS.

## Project Overview

ReactMastery is an educational platform that offers:
- **8-Week Intensive Curriculum**: From JavaScript fundamentals to enterprise React with TypeScript
- **Three Learning Phases**: Phase 1 (JavaScript Fundamentals), Phase 2 (React with JavaScript), Phase 3 (React with TypeScript)
- **Project-Based Learning**: Hands-on React applications and portfolio projects
- **Comprehensive Content**: Covers ES6+, React Hooks, Routing, State Management, Testing, Performance, TypeScript, and React 19 Features

## Project info

**URL**: https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

## Backend Setup

The project includes a backend API for lead capture and PDF generation:

1. Navigate to backend directory:
```sh
cd backend
```

2. Install backend dependencies:
```sh
npm install
```

3. Create `.env` file in backend directory:
```env
PORT=3001
NODE_ENV=development
FRONTEND_URL=http://localhost:8080
```

4. Start the backend server:
```sh
npm run dev
```

5. Create `.env` file in project root for frontend:
```env
VITE_API_URL=http://localhost:3001
```

6. Start both frontend and backend:
- Frontend: `npm run dev` (from project root)
- Backend: `npm run dev` (from backend directory)

See [backend/SETUP.md](backend/SETUP.md) for detailed setup instructions and troubleshooting.

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

**Frontend:**
- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

**Backend:**
- Node.js + Express
- SQLite (better-sqlite3)
- PDFKit (PDF generation)
- Zod (validation)

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
