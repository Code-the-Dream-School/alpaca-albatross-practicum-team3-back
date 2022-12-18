import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './index.css';
import './pages/Home/home.css';
import './pages/Home/favoritespage.css';
import './pages/Home/login.css';
import './pages/Home/registration.css';
import './pages/Home/speech.css'
import { CookiesProvider } from 'react-cookie';
import { RecoilRoot } from 'recoil';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <CookiesProvider>
      <RecoilRoot>
        <Router>
          <App />
        </Router>
      </RecoilRoot>
    </CookiesProvider>
  </React.StrictMode>
);
