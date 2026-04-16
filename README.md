# Intelligent Resume Screening and Job Matching

This project now includes:
- A Vite + React frontend
- A Node.js + Express backend for resume screening

## Setup

```bash
npm install
cp .env.example .env
```

If you want AI insights with Gemini, set `GEMINI_API_KEY` in `.env`.

## Run

- Frontend only: `npm run dev`
- Backend only: `npm run server`
- Frontend + backend together: `npm run dev:full`

Backend default URL: `http://localhost:5000`

## Backend API

### Health check

`GET /api/health`

Response:

```json
{
  "status": "ok",
  "service": "resume-screening-backend"
}
```

### Resume screening

`POST /api/screen` (multipart/form-data)

Fields:
- `jobTitle` (optional)
- `jobDescription` (required)
- `useGemini` (`true` or `false`, optional)
- `resumes` (required, up to 50 files: PDF, DOCX, TXT)

Response:

```json
{
  "jobTitle": "Senior Frontend Engineer",
  "totalCandidates": 2,
  "topCandidates": [
    {
      "name": "Candidate Name",
      "score": 88,
      "match": "High Match",
      "experience": "5 years",
      "matchedSkills": ["react", "javascript"],
      "missingSkills": ["typescript"],
      "resumePreview": "..."
    }
  ]
}
```
