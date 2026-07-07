import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App.jsx';
import { ThemeProvider } from './contexts/ThemeContext';
import Preloader from './components/Preloader.jsx';
import './index.css';

const Main = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <ThemeProvider>
      {isLoading ? (
        <Preloader onFinished={() => setIsLoading(false)} />
      ) : (
        <HashRouter>
          <App />
        </HashRouter>
      )}
    </ThemeProvider>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);