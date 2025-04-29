import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UseCases from './pages/UseCases/UseCases';
import './App.css';
import Home from './pages/Home/Home';
import Reviewer from './pages/Reviewer/Reviewer';
import ResourcePage from './pages/Resource/ResourcePage';
import Login from './components/Navbar/Login';
import Signup from './components/Navbar/Signup';
import ForgotPassword from './components/Navbar/ForgotPassword';
import Pricing from './pages/Pricing/Pricing';
import Demo from './pages/UseCases/Demo';


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
        <Route path="/resources" element={<ResourcePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/review" element={<Reviewer darkMode={darkMode} toggleTheme={toggleTheme} />} />

      </Routes>
    </Router>
  );
}