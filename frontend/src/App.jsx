import { useState, useEffect } from 'react';
import "prismjs/themes/prism-tomorrow.css";
import Editor from "react-simple-code-editor";
import prism from "prismjs";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github.css";
import axios from 'axios';
import './App.css';
import { motion } from 'framer-motion';
import { toast, Toaster } from 'react-hot-toast';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';



function Home() {
  const navigate = useNavigate();

  const features = [
    {
      title: "AI Code Review",
      description: "Deep analysis with intelligent suggestions",
      icon: "🤖",
      path: "/review",
      color: "#6366f1"
    },
    {
      title: "Bug Detection",
      description: "Instant identification of potential errors",
      icon: "🔍",
      path: "/errors",
      color: "#10b981"
    },
    {
      title: "Performance Boost",
      description: "Optimize your code execution",
      icon: "⚡",
      path: "/performance",
      color: "#f59e0b"
    },
    {
      title: "Style Guide",
      description: "Enforce consistent coding patterns",
      icon: "🎨",
      path: "/style",
      color: "#ec4899"
    }
  ];


  return (
    <div className="home-container">
      <nav className="navbar">
        <h1 className="logo">CodeFixer</h1>
        <div className="nav-links">
          <a href="#">Use Cases</a>
          <a href="#">Resources</a>
          <a href="#">Pricing</a>
        </div>
      </nav>
      
      <div className="hero">
        <h1 className="hero-title">Whatever you want to code,</h1>
        <h1 className="hero-subtitle">our <span className="highlight">Code Fixer</span> has the answers</h1>
        <p className="hero-description">Review and improve your code effortlessly with AI-powered suggestions</p>
        <button className="get-started-btn" onClick={() => navigate('/review')}>Get Started</button>
        
        {/* Features Section */}
        <div className="features-section">
        <h2 className="features-title">
          <span className="title-decorator"></span>
          NEXT-GEN CODE ANALYSIS
          <span className="title-decorator"></span>
        </h2>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              onClick={() => navigate(feature.path)}
              style={{ '--feature-color': feature.color }}
            >
              <div className="feature-icon-container">
                <div className="feature-icon-backdrop"></div>
                <span className="feature-icon">{feature.icon}</span>
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              <div className="feature-underline"></div>
            </motion.div>
          ))}
        </div>
      </div>
        
        {/* Success Example Section */}
        <div className="success-example">
          <h2>See It In Action</h2>
          <div className="success-image">
            <img 
              src="success.png" 
              alt="Successful code review example" 
              style={{ maxWidth: '100%', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function Reviewer() {
  const [code, setCode] = useState(`function sum() {\n  return 1 + 1\n}`);
  const [review, setReview] = useState('');
  const [loading, setLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    prism.highlightAll();
    document.body.className = darkMode ? 'dark-mode' : '';
  }, [review, darkMode]);

  const reviewCode = async () => {
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:3000/ai/get-review', { code });
      setReview(response.data);
      setHistory(prev => [{ code, review: response.data }, ...prev]);
      toast.success("Code reviewed successfully!");
    } catch (err) {
      setReview("🚫 Error: Failed to fetch review. Please try again.");
      toast.error("Failed to fetch review");
    }
    setLoading(false);
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const copyReview = () => {
    navigator.clipboard.writeText(review);
    toast.success("Review copied to clipboard!");
  };

  return (
    <div className={`app-container ${darkMode ? 'dark' : 'light'}`}>
      <Toaster position="top-right" />
      <header className="header">
        <h1 className="logo">CodeFixer</h1>
        <div className="header-actions">
          <button className="toggle-btn" onClick={toggleTheme}>
            {darkMode ? "🌞 Light" : "🌙 Dark"}
          </button>
        </div>
      </header>

      <main className="main">
        <motion.div className="left" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <div className="code">
            <Editor
              value={code}
              onValueChange={setCode}
              highlight={code => prism.highlight(code, prism.languages.javascript, 'javascript')}
              padding={15}
              style={{
                fontFamily: '"Fira Code", monospace',
                fontSize: 16,
                height: '100%',
                backgroundColor: darkMode ? '#1e1e1e' : '#ffffff',
                color: darkMode ? '#ffffff' : '#000000'
              }}
            />
          </div>
          <button className="review-button" onClick={reviewCode} disabled={loading}>
            {loading ? 'Reviewing...' : 'Review Code'}
          </button>
        </motion.div>

        <motion.div className="right" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <div className="review-content">
            <Markdown rehypePlugins={[rehypeHighlight]}>{review}</Markdown>
          </div>
          {review && <button className="copy-btn" onClick={copyReview}>📋 Copy Review</button>}
        </motion.div>
      </main>

      <section className="history-section">
        <h2>🔁 Review History</h2>
        {history.map((item, index) => (
          <details key={index} className="history-item">
            <summary>Snippet {index + 1}</summary>
            <div className="history-code">
              <pre>{item.code}</pre>
            </div>
            <div className="history-review">
              <Markdown rehypePlugins={[rehypeHighlight]}>{item.review}</Markdown>
            </div>
          </details>
        ))}
      </section>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/review" element={<Reviewer />} />
        
      </Routes>
    </Router>
  );
}

export default App;