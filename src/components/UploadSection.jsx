import React, { useState } from 'react';

const UploadSection = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    setIsProcessing(true);
    
    // Simulate processing
    setTimeout(() => {
      setIsProcessing(false);
    }, 2500);
  };

  return (
    <div className="upload-container animate-slide-up" style={{ animationDelay: '0.1s' }}>
      <h2 className="heading-3 upload-heading">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
          <polyline points="17 8 12 3 7 8"></polyline>
          <line x1="12" y1="3" x2="12" y2="15"></line>
        </svg>
        Batch Resume Upload
      </h2>

      <div 
        className={`drop-zone ${isDragging ? 'dragging' : ''} ${isProcessing ? 'processing' : ''}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        {isProcessing ? (
          <div className="processing-state">
            <div className="spinner"></div>
            <p>Extracting data & applying NLP...</p>
          </div>
        ) : (
          <div className="upload-prompt">
            <svg className="upload-icon" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="12" y1="8" x2="12" y2="16"></line>
              <line x1="8" y1="12" x2="16" y2="12"></line>
            </svg>
            <h3>Drag & Drop Resumes</h3>
            <p>Supports PDF, DOCX (Max 50 files)</p>
            <button className="btn-primary" style={{ marginTop: '1rem' }}>Browse Files</button>
          </div>
        )}
      </div>

      <div className="upload-stats">
        <div className="stat-card">
          <span className="stat-value">1,240</span>
          <span className="stat-label">Total Processed</span>
        </div>
        <div className="stat-card">
          <span className="stat-value" style={{ color: 'var(--success-color)' }}>85%</span>
          <span className="stat-label">Bias Reduction</span>
        </div>
        <div className="stat-card">
          <span className="stat-value time-saved">12h</span>
          <span className="stat-label">Time Saved</span>
        </div>
      </div>

      <style>{`
        .upload-container {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          height: 100%;
        }

        .upload-heading {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--accent-secondary);
          margin-bottom: 0.5rem;
        }

        .drop-zone {
          flex: 1;
          border: 2px dashed var(--border-color);
          border-radius: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0, 0, 0, 0.02);
          transition: all 0.3s ease;
          min-height: 250px;
        }

        /* Dark mode adjustment for inner drop zone */
        .dark .drop-zone {
          background: rgba(255, 255, 255, 0.02);
        }

        .drop-zone.dragging {
          border-color: var(--accent-primary);
          background: rgba(99, 102, 241, 0.05);
          transform: scale(1.02);
        }

        .drop-zone.processing {
          border-color: var(--success-color);
          background: rgba(16, 185, 129, 0.05);
        }

        .upload-prompt {
          text-align: center;
          color: var(--text-secondary);
        }

        .upload-icon {
          color: var(--accent-secondary);
          margin-bottom: 1rem;
        }

        .upload-prompt h3 {
          color: var(--text-primary);
          margin-bottom: 0.5rem;
        }

        .processing-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          color: var(--success-color);
          font-weight: 500;
        }

        .spinner {
          width: 40px;
          height: 40px;
          border: 3px solid rgba(16, 185, 129, 0.2);
          border-top-color: var(--success-color);
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .upload-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
          margin-top: auto;
        }

        .stat-card {
          background: var(--surface-color);
          border: 1px solid var(--border-color);
          padding: 1rem;
          border-radius: 0.75rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          box-shadow: var(--shadow-sm);
        }

        .stat-value {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .stat-label {
          font-size: 0.75rem;
          color: var(--text-secondary);
          margin-top: 0.25rem;
        }

        .time-saved {
          color: var(--warning-color);
        }
      `}</style>
    </div>
  );
};

export default UploadSection;
