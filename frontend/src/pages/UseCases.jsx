import { Link } from 'react-router-dom';
import './UseCases.css';
import Navbar from '../components/Navbar/Navbar';

export default function UseCases({ darkMode, toggleTheme }) {
  const useCases = [
    {
      title: "AI-Powered Code Completion",
      description: "Real-time suggestions as you type, powered by GPT-4 and OpenAI Codex models.",
      icon: "💡",
      benefit: "40% faster coding"
    },
    {
      title: "Intelligent Bug Detection",
      description: "Identifies syntax errors and logical flaws before execution using transformer models.",
      icon: "🐞",
      benefit: "60% less debugging time"
    },
    {
      title: "Code Optimization",
      description: "Suggests performance improvements and best practices for cleaner code.",
      icon: "⚡",
      benefit: "30% more efficient code"
    },
    {
      title: "Multi-Language Support",
      description: "Works with Python, JavaScript, Java, C++ and other popular languages.",
      icon: "🌐",
      benefit: "Universal solution"
    },
    {
      title: "Learning Assistant",
      description: "Explains complex code segments with NLP-powered documentation.",
      icon: "📚",
      benefit: "Faster onboarding"
    },
    {
      title: "Seamless IDE Integration",
      description: "Works in VS Code, JetBrains IDEs with cloud-based processing.",
      icon: "🔌",
      benefit: "No context switching"
    }
  ];

  return (
    <>
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
      <div className={`use-cases-page ${darkMode ? 'dark-mode' : ''}`}>
        <div className="use-cases-header">
          <h1>AI CodeFixer Use Cases</h1>
          <p className="subtitle">Transform your development workflow with our AI-powered assistant</p>
        </div>

        <div className="use-cases-grid">
          {useCases.map((caseItem, index) => (
            <div key={index} className="use-case-card">
              <div className="case-icon">{caseItem.icon}</div>
              <h3>{caseItem.title}</h3>
              <p>{caseItem.description}</p>
              <span className="benefit-tag">{caseItem.benefit}</span>
            </div>
          ))}
        </div>

        <Link to="/" className="back-link">
          ← Back to Home
        </Link>
      </div>
    </>
  );
}