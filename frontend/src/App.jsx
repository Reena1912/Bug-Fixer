import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UseCases from './pages/UseCases';
import './App.css';
import Home from './pages/Home/Home';
import Reviewer from './pages/Reviewer/Reviewer';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode');
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home darkMode={darkMode} toggleTheme={toggleTheme} />} />
        <Route path="/use-cases" element={<UseCases darkMode={darkMode} toggleTheme={toggleTheme} />} />
        <Route path="/review" element={<Reviewer darkMode={darkMode} toggleTheme={toggleTheme} />} />
       
      </Routes>
    </Router>
  );
}