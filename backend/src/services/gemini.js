import { GoogleGenerativeAI } from '@google/generative-ai';

const DEFAULT_GEMINI_MODEL = 'gemini-1.5-flash';

const getGeminiClient = () => {
  if (!process.env.GEMINI_API_KEY) {
    return null;
  }
  return new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
};

const enrichCandidatesWithGemini = async ({ jobTitle, jobDescription, candidates }) => {
  const client = getGeminiClient();
  if (!client || candidates.length === 0) {
    return candidates;
  }

  const model = client.getGenerativeModel({
    model: process.env.GEMINI_MODEL || DEFAULT_GEMINI_MODEL,
  });

  const enhancedCandidates = await Promise.all(
    candidates.map(async (candidate) => {
      const prompt = `Job title: ${jobTitle}
Job description: ${jobDescription}
Candidate summary: ${candidate.resumePreview}
Matched skills: ${candidate.matchedSkills.join(', ') || 'none'}
Missing skills: ${candidate.missingSkills.join(', ') || 'none'}

Return only JSON with keys "whyFit" and "risks". Each value should be a short bullet-style string.`;

      try {
        const response = await model.generateContent(prompt);
        const content = response.response.text().trim();
        const parsed = JSON.parse(content.replace(/```json|```/g, '').trim());
        return {
          ...candidate,
          aiInsights: {
            whyFit: parsed.whyFit ?? '',
            risks: parsed.risks ?? '',
          },
        };
      } catch {
        return {
          ...candidate,
          aiInsights: {
            whyFit: '',
            risks: '',
          },
        };
      }
    }),
  );

  return enhancedCandidates;
};

export { enrichCandidatesWithGemini };
