import { StrictMode, Suspense, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Loader } from './components/loader/Loader.jsx';

function Root() {
  const [phase, setPhase] = useState('loading');

  useEffect(() => {
    const startExit = () => {
      setPhase((current) => (current === 'loading' ? 'exiting' : current));
    };

    if (document.readyState === 'complete') {
      // Let the spinner paint at least briefly before disassembling
      const timer = window.setTimeout(startExit, 400);
      return () => window.clearTimeout(timer);
    }

    window.addEventListener('load', startExit);
    return () => window.removeEventListener('load', startExit);
  }, []);

  return (
    <>
      {phase !== 'done' && (
        <Loader
          exiting={phase === 'exiting'}
          onExitComplete={() => setPhase('done')}
        />
      )}
      <Suspense fallback={null}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Suspense>
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Root />
  </StrictMode>,
);
