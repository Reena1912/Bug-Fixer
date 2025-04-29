import './ThemeToggle.css';
export default function ThemeToggle({ darkMode, toggleTheme }) {
    return (
      <button className="toggle-btn" onClick={toggleTheme}>
        {darkMode ? "🌞" : "🌙"}
      </button>
    );
  }