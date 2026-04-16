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

const tokenize = (text) =>
  (text.toLowerCase().match(/[a-z0-9+#.]+/g) ?? []).filter(
    (token) => token.length > 2 && !stopWords.has(token),
  );

const extractYears = (text) => {
  const match = text.match(/(\d+)\s*\+?\s*(?:years?|yrs?)/i);
  return match ? Number.parseInt(match[1], 10) : 0;
};

const extractCandidateName = (originalName, text) => {
  const firstLine = (text.split('\n').find((line) => line.trim().length > 2) ?? '').trim();
  if (firstLine && /^[a-zA-Z .'-]+$/.test(firstLine) && firstLine.length < 60) {
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
  const missingSkills = [...jobSet].filter((token) => !resumeSet.has(token)).slice(0, 12);

  const matchRatio = jobSet.size === 0 ? 0 : matchedSkills.length / jobSet.size;
  const requiredYears = extractYears(jobDescription);
  const candidateYears = extractYears(resumeText);
  const yearsScore =
    requiredYears > 0 ? Math.min(1, candidateYears / Math.max(requiredYears, 1)) : 0.5;

  const score = Math.round((matchRatio * 0.75 + yearsScore * 0.25) * 100);
  const scoreLabel = score >= 85 ? 'High Match' : score >= 70 ? 'Good Match' : 'Potential';

  return {
    name: extractCandidateName(fileName, resumeText),
    score,
    match: scoreLabel,
    experience: `${candidateYears || 'N/A'} ${candidateYears === 1 ? 'year' : 'years'}`,
    matchedSkills: unique(matchedSkills).slice(0, 10),
    missingSkills: unique(missingSkills),
    resumePreview: resumeText.replace(/\s+/g, ' ').trim().slice(0, 420),
  };
};

const rankCandidates = ({ jobDescription, candidates }) =>
  candidates
    .map(({ fileName, resumeText }) => scoreCandidate({ jobDescription, resumeText, fileName }))
    .sort((a, b) => b.score - a.score);

export { rankCandidates };
