# Backend Setup Instructions

## Prerequisites

- Node.js v18 or v20 (v24 may have compatibility issues with better-sqlite3)
- npm or yarn

## Installation

1. Navigate to backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

**Note:** If you encounter build errors with `better-sqlite3`, try:
- Using Node.js v18 or v20 (recommended)
- Or install with: `npm install --build-from-source`

3. Create `.env` file:
```env
PORT=3001
NODE_ENV=development
FRONTEND_URL=http://localhost:8080
```

4. Start the server:
```bash
npm run dev
```

The server will be available at `http://localhost:3001`

## Troubleshooting

### better-sqlite3 Build Errors

If you see C++ compilation errors:
1. Use Node.js v18 or v20 (not v24+)
2. Install build tools:
   - macOS: `xcode-select --install`
   - Linux: `sudo apt-get install build-essential`
   - Windows: Install Visual Studio Build Tools

### Alternative: Use Different Database

If SQLite continues to cause issues, you can switch to:
- PostgreSQL with `pg` package
- MongoDB with `mongodb` package
- Or use a cloud database service

## Testing

Test the API:
```bash
# Health check
curl http://localhost:3001/api/health

# Capture a lead
curl -X POST http://localhost:3001/api/leads \
  -H "Content-Type: application/json" \
  -d '{"fullName":"John Doe","email":"john@example.com","skillLevel":"beginner"}'
```

