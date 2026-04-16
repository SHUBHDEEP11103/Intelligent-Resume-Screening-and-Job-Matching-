import React from 'react';

const Navbar = ({ theme, toggleTheme }) => {
  return (
    <nav className="glass-panel navbar">
      <div className="container nav-content">
        <div className="logo-section">
          <svg className="logo-mark" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="logo-text">NeuralHire AI</span>
        </div>
        
        <div className="nav-actions">
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
            {theme === 'dark' ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            )}
            <span className="toggle-text">{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
          </button>
        </div>
      </div>
      
      <style>{`
        .navbar {
          position: fixed;
          top: 1rem;
          left: 50%;
          transform: translateX(-50%);
          width: calc(100% - 4rem);
          max-width: 1200px;
          z-index: 1000;
          padding: 0;
          border-radius: 9999px; /* Pill shape */
        }

        .navbar:hover {
          transform: translateX(-50%) translateY(-2px);
          box-shadow: var(--shadow-lg);
        }

        .nav-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 4rem;
          padding: 0 1.5rem;
        }

        .logo-section {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-weight: 700;
          font-size: 1.25rem;
          color: var(--text-primary);
        }

        .logo-mark {
          width: 24px;
          height: 24px;
          color: var(--accent-primary);
          animation: pulse 3s infinite;
        }

        .logo-text {
          background: linear-gradient(to right, var(--accent-primary), var(--accent-secondary));
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .theme-toggle {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: transparent;
          border: 1px solid var(--border-color);
          color: var(--text-primary);
          padding: 0.5rem 1rem;
          border-radius: 9999px;
          transition: all 0.2s ease;
          font-weight: 500;
          font-size: 0.9rem;
        }

        .theme-toggle svg {
          width: 18px;
          height: 18px;
        }

        .theme-toggle:hover {
          background: var(--surface-color);
          border-color: var(--accent-primary);
          color: var(--accent-primary);
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
