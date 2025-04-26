import { Link } from 'react-router-dom';
import './Navbar.css';
import ThemeToggle from '../ThemeToggle/ThemeToggle';

export default function Navbar({ darkMode, toggleTheme }) {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">CodeFixer</Link>
      <div className="nav-links">
        <Link to="/review">Review</Link>
        <Link to="/use-cases" className="nav-link">Use Cases</Link>
        <Link to="#pricing">Pricing</Link>
        <ThemeToggle darkMode={darkMode} toggleTheme={toggleTheme} />
      </div>
    </nav>
  );
}