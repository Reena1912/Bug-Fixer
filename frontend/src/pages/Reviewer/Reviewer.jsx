import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { toast, Toaster } from 'react-hot-toast';
import Navbar from '../../components/Navbar/Navbar';
import Editor from "react-simple-code-editor";
import prism from "prismjs";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import axios from 'axios';
import { 
  FiCopy, 
  FiCode, 
  FiTrash2,
  FiChevronDown,
  FiChevronUp,
  FiMaximize,
  FiMinimize,
  FiClock
} from 'react-icons/fi';
import { FaRobot, FaHistory, FaRegLightbulb } from 'react-icons/fa';
import './Reviewer.css';

export default function Reviewer() {
  const [code, setCode] = useState(`function sum() {\n  return 1 + 1\n}`);
  const [review, setReview] = useState('');
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState([]);
  const [expandedHistory, setExpandedHistory] = useState(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showTips, setShowTips] = useState(false);
  const editorRef = useRef(null);

  const codingTips = [
    "Always handle errors and edge cases in your code",
    "Use meaningful variable and function names",
    "Keep functions small and focused on a single task",
    "Comment complex logic but don't over-comment obvious code",
    "Follow consistent code formatting throughout your project"
  ];

  useEffect(() => {
    prism.highlightAll();
    document.body.className = 'dark-mode';
  }, [review]);

  const reviewCode = async () => {
    if (!code.trim()) {
      toast.error("Please enter some code to review");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post('http://localhost:3000/ai/get-review', { code });
      setReview(response.data);
      setHistory(prev => [{ 
        id: Date.now(),
        code, 
        review: response.data, 
        timestamp: new Date() 
      }, ...prev.slice(0, 9)]);
      toast.success("Code reviewed successfully!");
    } catch (err) {
      setReview("🚫 Error: Failed to fetch review. Please try again.");
      toast.error("Failed to fetch review");
      console.error(err);
    }
    setLoading(false);
  };

  const copyReview = () => {
    navigator.clipboard.writeText(review);
    toast.success("Review copied to clipboard!");
  };

  const clearHistory = () => {
    setHistory([]);
    toast.success("History cleared");
  };

  const toggleFullscreen = () => {
    if (!isFullscreen) {
      editorRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsFullscreen(!isFullscreen);
  };

  const deleteHistoryItem = (id) => {
    setHistory(prev => prev.filter(item => item.id !== id));
    toast.success("History item deleted");
  };

  return (
    <div className="app-container">
      <Toaster position="top-right" />
      <Navbar />
      
      <main className="main">
        <motion.div 
          className={`left ${isFullscreen ? 'fullscreen' : ''}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          ref={editorRef}
        >
          <div className="editor-header">
            <div className="editor-title">
              <FiCode className="header-icon" />
              <span>Code Editor</span>
              <button 
                className="tips-toggle"
                onClick={() => setShowTips(!showTips)}
                title="Show coding tips"
              >
                <FaRegLightbulb />
              </button>
            </div>
            <div className="editor-actions">
              <button 
                onClick={toggleFullscreen}
                className="fullscreen-toggle"
                title={isFullscreen ? 'Exit fullscreen' : 'Fullscreen'}
              >
                {isFullscreen ? <FiMinimize /> : <FiMaximize />}
              </button>
            </div>
          </div>

          <AnimatePresence>
            {showTips && (
              <motion.div 
                className="coding-tips"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
              >
                <h4>Coding Tips:</h4>
                <ul>
                  {codingTips.map((tip, i) => (
                    <li key={i}>{tip}</li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>

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
                backgroundColor: '#1e1e1e',
                color: '#ffffff'
              }}
            />
          </div>

          <motion.button 
            className={`review-button ${loading ? 'loading' : ''}`} 
            onClick={reviewCode} 
            disabled={loading}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {loading ? (
              <>
                <span className="spinner"></span>
                Analyzing...
              </>
            ) : (
              <>
                <FaRobot />
                Review Code
              </>
            )}
          </motion.button>
        </motion.div>

        {!isFullscreen && (
          <motion.div 
            className="right"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="review-header">
              <h3>
                <FaRobot />
                AI Code Review
              </h3>
              <div className="review-actions">
                {review && (
                  <motion.button 
                    className="copy-btn" 
                    onClick={copyReview}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FiCopy /> Copy
                  </motion.button>
                )}
              </div>
            </div>
            <div className="review-content">
              {review ? (
                <Markdown rehypePlugins={[rehypeHighlight]}>{review}</Markdown>
              ) : (
                <div className="empty-state">
                  <FaRobot size={48} />
                  <p>Your AI-powered code review will appear here</p>
                  <small>Click "Review Code" to analyze your code</small>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </main>

      {!isFullscreen && (
        <section className="history-section">
          <div className="section-header">
            <h2>
              <FaHistory />
              Review History
            </h2>
            {history.length > 0 && (
              <button 
                className="clear-history-btn"
                onClick={clearHistory}
              >
                <FiTrash2 /> Clear All
              </button>
            )}
          </div>
          {history.length > 0 ? (
            <div className="history-list">
              {history.map((item) => (
                <div key={item.id} className="history-item">
                  <div 
                    className="history-summary"
                    onClick={() => setExpandedHistory(expandedHistory === item.id ? null : item.id)}
                  >
                    <div className="history-title">
                      <span>Snippet {history.findIndex(h => h.id === item.id) + 1}</span>
                      <span className="timestamp">
                        <FiClock /> {item.timestamp.toLocaleTimeString()}
                      </span>
                    </div>
                    <div className="history-toggle">
                      {expandedHistory === item.id ? <FiChevronUp /> : <FiChevronDown />}
                    </div>
                  </div>
                  <AnimatePresence>
                    {expandedHistory === item.id && (
                      <motion.div
                        className="history-content"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                      >
                        <div className="history-code">
                          <pre>{item.code}</pre>
                        </div>
                        <div className="history-review">
                          <Markdown rehypePlugins={[rehypeHighlight]}>{item.review}</Markdown>
                        </div>
                        <button 
                          className="delete-history-item"
                          onClick={(e) => {
                            e.stopPropagation();
                            deleteHistoryItem(item.id);
                          }}
                        >
                          <FiTrash2 /> Delete
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          ) : (
            <div className="empty-history">
              <FaHistory size={48} />
              <p>No review history yet</p>
              <small>Your reviewed code snippets will appear here</small>
            </div>
          )}
        </section>
      )}
    </div>
  );
}