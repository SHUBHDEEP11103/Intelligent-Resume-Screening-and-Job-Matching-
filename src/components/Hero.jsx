import React from 'react';

const Hero = () => {
  return (
    <section className="hero-section animate-fade-in">
      <div className="hero-content">
        <h1 className="heading-1">Intelligent Resume Screening <br/> & Job Matching System</h1>
        <p className="hero-subtitle">
          Eliminate bias and accelerate hiring. Our AI-driven recruitment system uses advanced NLP 
          to analyze resumes, match candidates with job descriptions, and rank applicants based on 
          skills, experience, and data-driven relevance.
        </p>
        <div className="hero-actions">
          <button className="btn-primary">Start Hiring</button>
          <button className="btn-secondary">View Demo</button>
        </div>
      </div>
      
      <div className="hero-graphics animate-slide-up">
        {/* Modern AI Resume Matching Visualization */}
        <div className="flow-container">
          
          {/* Resume Upload Node */}
          <div className="flow-node doc-node">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
              <polyline points="10 9 9 9 8 9"></polyline>
            </svg>
            <div className="node-label">Resumes</div>
          </div>

          {/* Connection Line 1 */}
          <div className="flow-path">
            <div className="path-dot"></div>
            <div className="path-dot" style={{ animationDelay: '0.4s' }}></div>
            <div className="path-dot" style={{ animationDelay: '0.8s' }}></div>
          </div>

          {/* AI Core Processing Node */}
          <div className="flow-node ai-node pulse-anim">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
              <rect x="9" y="9" width="6" height="6"></rect>
              <line x1="9" y1="1" x2="9" y2="4"></line>
              <line x1="15" y1="1" x2="15" y2="4"></line>
              <line x1="9" y1="20" x2="9" y2="23"></line>
              <line x1="15" y1="20" x2="15" y2="23"></line>
              <line x1="20" y1="9" x2="23" y2="9"></line>
              <line x1="20" y1="14" x2="23" y2="14"></line>
              <line x1="1" y1="9" x2="4" y2="9"></line>
              <line x1="1" y1="14" x2="4" y2="14"></line>
            </svg>
            <div className="node-label highlight-label">NLP Engine</div>
            <div className="glow-ring"></div>
          </div>

          {/* Connection Line 2 */}
          <div className="flow-path">
            <div className="path-dot" style={{ animationDelay: '0.2s', background: 'var(--success-color)' }}></div>
            <div className="path-dot" style={{ animationDelay: '0.6s', background: 'var(--success-color)' }}></div>
            <div className="path-dot" style={{ animationDelay: '1.0s', background: 'var(--success-color)' }}></div>
          </div>

          {/* Ranked Candidates Node */}
          <div className="flow-node result-node">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
            <div className="node-label">Ranked Matches</div>
          </div>

        </div>
      </div>

      <style>{`
        .hero-section {
          padding: 4rem 1rem 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .hero-content {
          max-width: 800px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        .hero-subtitle {
          font-size: 1.125rem;
          color: var(--text-secondary);
          margin-top: 1.5rem;
          margin-bottom: 2.5rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.6;
        }

        .hero-actions {
          display: flex;
          gap: 1rem;
          justify-content: center;
        }

        /* Modern Visualization Styles */
        .hero-graphics {
          margin-top: 4rem;
          width: 100%;
          max-width: 900px;
          display: flex;
          justify-content: center;
          position: relative;
          z-index: 1;
        }

        .flow-container {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          width: 100%;
          max-width: 800px;
          margin: 0 auto;
        }

        .flow-node {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: var(--surface-color);
          border: 1px solid var(--border-color);
          box-shadow: var(--shadow-sm);
          border-radius: 1rem;
          width: 110px;
          height: 110px;
          position: relative;
          z-index: 2;
          color: var(--text-primary);
          transition: all 0.3s ease;
          flex-shrink: 0; /* Prevents squishing */
        }

        .doc-node {
          color: var(--accent-secondary);
          border-color: rgba(6, 182, 212, 0.3);
        }

        .result-node {
          color: var(--success-color);
          border-color: rgba(16, 185, 129, 0.3);
        }

        .ai-node {
          width: 140px;
          height: 140px;
          border-radius: 50%;
          background: linear-gradient(145deg, var(--surface-color), var(--bg-color));
          border: 2px solid var(--accent-primary);
          color: var(--accent-primary);
          box-shadow: 0 0 20px rgba(99, 102, 241, 0.2);
        }

        .node-label {
          margin-top: 0.75rem;
          font-size: 0.8rem;
          font-weight: 600;
          text-align: center;
          white-space: nowrap; /* Prevents awkward text wrapping */
          position: absolute;
          bottom: -25px; /* Move label outside the node to prevent overflow cut-offs */
          left: 50%;
          transform: translateX(-50%);
        }

        .highlight-label {
          color: var(--text-primary);
        }

        .glow-ring {
          position: absolute;
          inset: -10px;
          border-radius: 50%;
          border: 1px solid var(--accent-secondary);
          opacity: 0.3;
          animation: spinPulse 6s linear infinite;
          pointer-events: none;
        }

        .glow-ring::after {
          content: "";
          position: absolute;
          top: -3px;
          left: 50%;
          width: 6px;
          height: 6px;
          background: var(--accent-secondary);
          border-radius: 50%;
          box-shadow: 0 0 10px var(--accent-secondary);
        }

        .flow-path {
          flex: 1;
          height: 2px;
          background: var(--border-color);
          position: relative;
          min-width: 40px; /* Let it shrink down more if needed */
        }

        .path-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--accent-secondary);
          opacity: 0;
          position: absolute;
          left: 0;
          animation: moveData 2s linear infinite;
          box-shadow: 0 0 8px currentColor;
        }

        @keyframes moveData {
          0% { left: 0; opacity: 0; transform: scale(0.5); }
          20% { opacity: 1; transform: scale(1); }
          80% { opacity: 1; transform: scale(1); }
          100% { left: 100%; opacity: 0; transform: scale(0.5); }
        }

        @keyframes spinPulse {
          0% { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(180deg) scale(1.05); }
          100% { transform: rotate(360deg) scale(1); }
        }
        
        .pulse-anim {
          animation: corePulse 3s infinite ease-in-out alternate;
        }
        
        @keyframes corePulse {
          0% { box-shadow: 0 0 20px rgba(99, 102, 241, 0.2); }
          100% { box-shadow: 0 0 40px rgba(99, 102, 241, 0.5); }
        }

        @media (max-width: 768px) {
          .flow-container {
            flex-direction: column;
            gap: 2rem;
          }
          .flow-path {
            width: 2px;
            height: 60px;
            min-width: 2px;
            padding: 20% 0;
            flex-direction: column;
          }
          .path-dot {
            left: 50%;
            top: 0;
            transform: translateX(-50%);
            animation: moveDataVertical 2s linear infinite;
          }
          @keyframes moveDataVertical {
            0% { top: 0; opacity: 0; }
            20% { opacity: 1; }
            80% { opacity: 1; }
            100% { top: 100%; opacity: 0; }
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
