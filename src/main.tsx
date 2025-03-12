import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './Components/App.tsx';

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
