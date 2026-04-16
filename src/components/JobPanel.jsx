import React, { useState } from 'react';

const JobPanel = () => {
  const [jobTitle, setJobTitle] = useState('Senior Software Engineer - Frontend');
  const [jobDesc, setJobDesc] = useState('We are looking for an experienced frontend engineer with strong React skills. Requirements: React, JavaScript, CSS/Vanilla CSS, HTML. Minimum 4 years experience. You will build highly interactive and aesthetic user interfaces.');

  return (
    <div className="job-panel animate-slide-up">
      <h2 className="heading-3 job-heading">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
          <polyline points="10 9 9 9 8 9"></polyline>
        </svg>
        Target Job Description
      </h2>
      
      <div className="input-group">
        <label>Job Title</label>
        <input 
          type="text" 
          value={jobTitle} 
          onChange={(e) => setJobTitle(e.target.value)} 
          className="styled-input"
        />
      </div>

      <div className="input-group">
        <label>Requirements (NLP Target)</label>
        <textarea 
          value={jobDesc} 
          onChange={(e) => setJobDesc(e.target.value)} 
          className="styled-input styled-textarea"
          rows="6"
        ></textarea>
      </div>

      <div className="nlp-tags">
        <span className="tag">React</span>
        <span className="tag">JavaScript</span>
        <span className="tag">CSS</span>
        <span className="tag">Frontend</span>
        <span className="tag">UI/UX</span>
      </div>

      <button className="btn-secondary update-btn">Update Criteria</button>

      <style>{`
        .job-panel {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .job-heading {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--accent-primary);
          margin-bottom: 0.5rem;
        }

        .input-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .input-group label {
          font-size: 0.875rem;
          font-weight: 500;
          color: var(--text-secondary);
        }

        .styled-input {
          background: var(--surface-color);
          border: 1px solid var(--border-color);
          color: var(--text-primary);
          padding: 0.75rem 1rem;
          border-radius: 0.5rem;
          font-family: inherit;
          font-size: 0.95rem;
          transition: border-color 0.2s, box-shadow 0.2s;
        }

        .styled-input:focus {
          outline: none;
          border-color: var(--accent-primary);
          box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.2);
        }

        .styled-textarea {
          resize: vertical;
          line-height: 1.5;
        }

        .nlp-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-top: 0.5rem;
        }

        .tag {
          background: rgba(99, 102, 241, 0.1);
          color: var(--accent-primary);
          padding: 0.25rem 0.75rem;
          border-radius: 1rem;
          font-size: 0.75rem;
          font-weight: 600;
          border: 1px solid rgba(99, 102, 241, 0.2);
        }

        .update-btn {
          margin-top: auto;
          align-self: flex-start;
        }
      `}</style>
    </div>
  );
};

export default JobPanel;
