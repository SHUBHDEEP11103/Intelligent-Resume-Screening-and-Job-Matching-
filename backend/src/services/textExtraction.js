import mammoth from 'mammoth';
import pdfParse from 'pdf-parse';

const allowedMimeTypes = new Set([
  'application/pdf',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'text/plain',
  'application/msword',
]);

const extractTextFromFile = async (file) => {
  if (!allowedMimeTypes.has(file.mimetype)) {
    throw new Error(`Unsupported file type for ${file.originalname}`);
  }

  if (file.mimetype === 'application/pdf') {
    const result = await pdfParse(file.buffer);
    return result.text ?? '';
  }

  if (
    file.mimetype ===
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document' ||
    file.originalname.toLowerCase().endsWith('.docx')
  ) {
    const result = await mammoth.extractRawText({ buffer: file.buffer });
    return result.value ?? '';
  }

  return file.buffer.toString('utf-8');
};

export { extractTextFromFile, allowedMimeTypes };
