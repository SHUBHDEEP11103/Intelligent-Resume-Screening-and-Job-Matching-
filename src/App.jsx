import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import JobPanel from './components/JobPanel';
import UploadSection from './components/UploadSection';
import CandidateList from './components/CandidateList';

function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    // Check user preference or local storage here if needed
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="app-wrapper">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      
      <main className="container" style={{ marginTop: '5rem', paddingBottom: '4rem' }}>
        <Hero />
        
        <div className="dashboard-grid glass-panel" style={{ padding: '2rem', marginTop: '3rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            <JobPanel />
            <UploadSection />
          </div>
          
          <div style={{ marginTop: '3rem' }}>
            <CandidateList />
          </div>
        </div>
      </main>

      <style>{`
        .app-wrapper {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        .dashboard-grid {
          animation: slideUp 0.8s ease forwards;
          animation-delay: 0.2s;
          opacity: 0;
        }

        @media (max-width: 768px) {
          .dashboard-grid > div:first-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}

export default App;
