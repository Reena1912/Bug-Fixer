import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { toast, Toaster } from 'react-hot-toast';
import Navbar from '../../components/Navbar/Navbar';
import Editor from "react-simple-code-editor";
import prism from "prismjs";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import axios from 'axios';
import { FiCopy, FiCode, FiSun, FiMoon } from 'react-icons/fi';
import './Reviewer.css';



export default function Reviewer() {
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
      setHistory(prev => [{ code, review: response.data, timestamp: new Date() }, ...prev]);
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
    
<Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
      <main className="main">
        <motion.div className="left" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <div className="editor-header">
            <div className="editor-title">
              <FiCode className="header-icon" />
              <span>Code Editor</span>
            </div>
            <button 
              onClick={toggleTheme}
              className="theme-toggle-btn"
            >
              {darkMode ? <FiSun /> : <FiMoon />}
            </button>
          </div>
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
          <button 
            className={`review-button ${loading ? 'loading' : ''}`} 
            onClick={reviewCode} 
            disabled={loading}
          >
            {loading ? (
              <>
                <span className="spinner"></span>
                Reviewing...
              </>
            ) : 'Review Code'}
          </button>
        </motion.div>

        <motion.div className="right" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <div className="review-header">
            <h3>AI Code Review</h3>
            {review && (
              <button className="copy-btn" onClick={copyReview}>
                <FiCopy /> Copy
              </button>
            )}
          </div>
          <div className="review-content">
            {review ? (
              <Markdown rehypePlugins={[rehypeHighlight]}>{review}</Markdown>
            ) : (
              <div className="empty-state">
                <p>Your code review will appear here</p>
              </div>
            )}
          </div>
        </motion.div>
      </main>

      <section className="history-section">
        <div className="section-header">
          <h2>Review History</h2>
        </div>
        {history.length > 0 ? (
          history.map((item, index) => (
            <details key={index} className="history-item">
              <summary>
                <span>Snippet {index + 1}</span>
                <span className="timestamp">
                  {item.timestamp.toLocaleTimeString()}
                </span>
              </summary>
              <div className="history-content">
                <div className="history-code">
                  <pre>{item.code}</pre>
                </div>
                <div className="history-review">
                  <Markdown rehypePlugins={[rehypeHighlight]}>{item.review}</Markdown>
                </div>
              </div>
            </details>
          ))
        ) : (
          <div className="empty-history">
            <p>No review history yet</p>
          </div>
        )}
      </section>
    </div>
  );
}