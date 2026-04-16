const stopWords = new Set([
  'the',
  'and',
  'for',
  'with',
  'that',
  'this',
  'are',
  'you',
  'your',
  'our',
  'have',
  'from',
  'will',
  'into',
  'their',
  'years',
  'year',
  'about',
  'required',
  'requirements',
  'experience',
  'skills',
  'role',
  'job',
  'work',
  'team',
]);

const MIN_TOKEN_LENGTH = 2;
const MAX_NAME_LENGTH = 60;
const MAX_MISSING_SKILLS = 12;
const MAX_MATCHED_SKILLS_DISPLAY = 10;
const RESUME_PREVIEW_LENGTH = 420;
const MATCH_RATIO_WEIGHT = 0.75;
const YEARS_SCORE_WEIGHT = 0.25;
const HIGH_MATCH_THRESHOLD = 85;
const GOOD_MATCH_THRESHOLD = 70;

const tokenize = (text) =>
  (text.toLowerCase().match(/[a-z0-9+#.]+/g) ?? []).filter(
    (token) => token.length > MIN_TOKEN_LENGTH && !stopWords.has(token),
  );

const extractYears = (text) => {
  const match = text.match(/(\d+)\s*\+?\s*(?:years?|yrs?)/i);
  return match ? Number.parseInt(match[1], 10) : 0;
};

const extractCandidateName = (originalName, text) => {
  const firstLine = (text.split('\n').find((line) => line.trim().length > MIN_TOKEN_LENGTH) ?? '').trim();
  if (firstLine && /^[a-zA-Z .'-]+$/.test(firstLine) && firstLine.length < MAX_NAME_LENGTH) {
    return firstLine;
  }
  return originalName.replace(/\.[^/.]+$/, '');
};

const unique = (items) => [...new Set(items)];

const scoreCandidate = ({ jobDescription, resumeText, fileName }) => {
  const jobTokens = tokenize(jobDescription);
  const resumeTokens = tokenize(resumeText);

  const jobSet = new Set(jobTokens);
  const resumeSet = new Set(resumeTokens);
  const matchedSkills = [...jobSet].filter((token) => resumeSet.has(token));
  const missingSkills = [...jobSet].filter((token) => !resumeSet.has(token)).slice(0, MAX_MISSING_SKILLS);

  const matchRatio = jobSet.size === 0 ? 0 : matchedSkills.length / jobSet.size;
  const requiredYears = extractYears(jobDescription);
  const candidateYears = extractYears(resumeText);
  const yearsScore =
    requiredYears > 0 ? Math.min(1, candidateYears / Math.max(requiredYears, 1)) : 0.5;

  const score = Math.round(
    (matchRatio * MATCH_RATIO_WEIGHT + yearsScore * YEARS_SCORE_WEIGHT) * 100,
  );
  const scoreLabel =
    score >= HIGH_MATCH_THRESHOLD
      ? 'High Match'
      : score >= GOOD_MATCH_THRESHOLD
        ? 'Good Match'
        : 'Potential';

  return {
    name: extractCandidateName(fileName, resumeText),
    score,
    match: scoreLabel,
    experience: `${candidateYears ?? 'N/A'} ${candidateYears === 1 ? 'year' : 'years'}`,
    matchedSkills: unique(matchedSkills).slice(0, MAX_MATCHED_SKILLS_DISPLAY),
    missingSkills: unique(missingSkills),
    resumePreview: resumeText.replace(/\s+/g, ' ').trim().slice(0, RESUME_PREVIEW_LENGTH),
  };
};

const rankCandidates = ({ jobDescription, candidates }) =>
  candidates
    .map(({ fileName, resumeText }) => scoreCandidate({ jobDescription, resumeText, fileName }))
    .sort((a, b) => b.score - a.score);

export { rankCandidates };
