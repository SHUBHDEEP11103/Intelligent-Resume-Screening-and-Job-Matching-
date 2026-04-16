import React from 'react';

const candidates = [
  { id: 1, name: 'Priya Sharma', role: 'Frontend Developer', score: 92, experience: '5 years', match: 'High Match' },
  { id: 2, name: 'Rahul Desai', role: 'UI Engineer', score: 85, experience: '4.5 years', match: 'Good Match' },
  { id: 3, name: 'Ananya Patel', role: 'React Developer', score: 78, experience: '3 years', match: 'Potential' },
];

const CandidateList = () => {
  return (
    <div className="candidates-container animate-fade-in" style={{ animationDelay: '0.3s' }}>
      <div className="candidates-header">
        <h2 className="heading-2">Top Ranked Candidates</h2>
        <div className="filter-actions">
          <button className="btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}>
            Filter Matches
          </button>
        </div>
      </div>

      <div className="candidates-grid">
        {candidates.map((candidate, index) => (
          <div className="candidate-card" key={candidate.id} style={{ animationDelay: `${0.4 + index * 0.1}s` }}>
            <div className="card-header">
              <div className="avatar">
                {candidate.name.charAt(0)}
              </div>
              <div className="info">
                <h3>{candidate.name}</h3>
                <p>{candidate.role} • {candidate.experience}</p>
              </div>
              <div className="score-container">
                <div className="circular-progress" style={{ '--progress': `${candidate.score}%` }}>
                  <span>{candidate.score}</span>
                </div>
              </div>
            </div>
            
            <div className="card-body">
              <div className="skills-matched">
                <strong>Matched Skills:</strong> React, JavaScript, CSS Architecture
              </div>
              <div className="bias-indicator">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                Objective Evaluation Applied
              </div>
            </div>
            
            <div className="card-actions">
              <button className="btn-primary view-btn">View Profile</button>
              <button className="btn-secondary short-btn">Shortlist</button>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .candidates-container {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .candidates-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 1rem;
        }

        .candidates-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 1.5rem;
        }

        .candidate-card {
          background: var(--surface-color);
          border: 1px solid var(--border-color);
          border-radius: 1rem;
          padding: 1.5rem;
          transition: all 0.3s ease;
          animation: slideUp 0.6s ease forwards;
          opacity: 0;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .candidate-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-md);
          border-color: var(--accent-primary);
        }

        .card-header {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .avatar {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.25rem;
          font-weight: 700;
        }

        .info {
          flex: 1;
        }

        .info h3 {
          font-size: 1.1rem;
          color: var(--text-primary);
          margin-bottom: 0.25rem;
        }

        .info p {
          font-size: 0.85rem;
          color: var(--text-secondary);
        }

        .score-container {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .card-body {
          background: rgba(0, 0, 0, 0.02);
          border-radius: 0.5rem;
          padding: 1rem;
          font-size: 0.875rem;
        }

        .dark .card-body {
          background: rgba(255, 255, 255, 0.02);
        }

        .skills-matched {
          color: var(--text-primary);
          margin-bottom: 0.75rem;
        }

        .skills-matched strong {
          color: var(--text-secondary);
        }

        .bias-indicator {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--success-color);
          font-weight: 500;
          font-size: 0.8rem;
        }

        .card-actions {
          display: flex;
          gap: 0.75rem;
          margin-top: auto;
        }

        .view-btn {
          flex: 1;
          padding: 0.5rem;
          font-size: 0.9rem;
        }

        .short-btn {
          flex: 1;
          padding: 0.5rem;
          font-size: 0.9rem;
        }
      `}</style>
    </div>
  );
};

export default CandidateList;
