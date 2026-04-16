import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import multer from 'multer';
import { enrichCandidatesWithGemini } from './services/gemini.js';
import { rankCandidates } from './services/scoring.js';
import { allowedMimeTypes, extractTextFromFile } from './services/textExtraction.js';

dotenv.config();

const app = express();
const port = Number(process.env.PORT) || 5000;
const MAX_RESUMES = 50;
const MAX_FILE_SIZE_BYTES = 5 * 1024 * 1024;

app.use(
  cors({
    origin: process.env.FRONTEND_ORIGIN || 'http://localhost:5173',
  }),
);
app.use(express.json({ limit: '1mb' }));

const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: MAX_FILE_SIZE_BYTES,
    files: MAX_RESUMES,
  },
  fileFilter: (_req, file, callback) => {
    if (allowedMimeTypes.has(file.mimetype)) {
      callback(null, true);
      return;
    }
    callback(new Error(`Unsupported file type for ${file.originalname}`));
  },
});

app.get('/api/health', (_req, res) => {
  res.json({
    status: 'ok',
    service: 'resume-screening-backend',
  });
});

app.post('/api/screen', upload.array('resumes', MAX_RESUMES), async (req, res) => {
  const { jobTitle = '', jobDescription = '', useGemini = 'false' } = req.body;
  const files = req.files ?? [];

  if (!jobDescription.trim()) {
    res.status(400).json({ error: 'Job description is required' });
    return;
  }

  if (!Array.isArray(files) || files.length === 0) {
    res.status(400).json({ error: 'At least one resume file is required' });
    return;
  }

  try {
    const extracted = await Promise.all(
      files.map(async (file) => ({
        fileName: file.originalname,
        resumeText: await extractTextFromFile(file),
      })),
    );

    let ranked = rankCandidates({ jobDescription, candidates: extracted });
    if (useGemini === 'true') {
      ranked = await enrichCandidatesWithGemini({
        jobTitle,
        jobDescription,
        candidates: ranked,
      });
    }

    res.json({
      jobTitle,
      totalCandidates: ranked.length,
      topCandidates: ranked,
    });
  } catch (error) {
    res.status(500).json({
      error: 'Failed to process resumes',
      details: error.message,
    });
  }
});

app.use((error, _req, res, _next) => {
  res.status(400).json({
    error: error.message || 'Request failed',
  });
});

app.listen(port, () => {
  console.log(`Backend running on http://localhost:${port}`);
});
