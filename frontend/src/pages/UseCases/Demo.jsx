import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Demo.css';
import Navbar from '../../components/Navbar/Navbar';

export default function Demo() {
  const [activeTab, setActiveTab] = useState('example.js');
  const [code, setCode] = useState(`function calculateTotal(items) {
  // AI suggests this optimization
  return items.reduce((total, item) => 
    total + (item.price * item.quantity), 0);
}

// Try typing below to see AI suggestions:
`);

  const tabs = [
    { id: 'example.js', name: 'example.js' },
    { id: 'index.html', name: 'index.html' },
    { id: 'styles.css', name: 'styles.css' }
  ];

  const fileContents = {
    'example.js': `function calculateTotal(items) {
  // AI suggests this optimization
  return items.reduce((total, item) => 
    total + (item.price * item.quantity), 0);
}

// Try typing below to see AI suggestions:
`,
    'index.html': `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>AI CodeFixer Demo</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div id="app"></div>
  <script src="example.js"></script>
</body>
</html>`,
    'styles.css': `body {
  font-family: 'Inter', sans-serif;
  background-color: #121212;
  color: #e1e1e1;
  margin: 0;
  padding: 0;
}

#app {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}`
  };

  return (
    <>
      <Navbar />
      <div className="demo-page">
        <div className="demo-container">
          <motion.div 
            className="demo-header"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1>Live AI CodeFixer Demo</h1>
            <p className="subtitle">Experience the power of AI-assisted coding in real-time</p>
          </motion.div>

          <div className="demo-content">
            <div className="demo-editor">
              <div className="editor-header">
                <div className="editor-tabs">
                  {tabs.map(tab => (
                    <div 
                      key={tab.id}
                      className={`tab ${activeTab === tab.id ? 'active' : ''}`}
                      onClick={() => setActiveTab(tab.id)}
                    >
                      {tab.name}
                    </div>
                  ))}
                </div>
              </div>
              <div className="code-display">
                <pre>
                  {fileContents[activeTab]}
                </pre>
                <div className="ai-suggestion">
                  <div className="suggestion-header">
                    <span className="ai-label">AI Suggestion</span>
                  </div>
                  <div className="suggestion-content">
                    {activeTab === 'example.js' && "Consider adding error handling for cases where items might be null or undefined"}
                    {activeTab === 'index.html' && "Add meta description for better SEO and accessibility"}
                    {activeTab === 'styles.css' && "Consider using CSS variables for consistent theming"}
                  </div>
                </div>
              </div>
              <div className="editor-footer">
                <button className="run-button">
                  Run Code
                </button>
                <div className="ai-status">
                  <div className="status-indicator"></div>
                  <span>AI Assistant Active</span>
                </div>
              </div>
            </div>

            <div className="demo-features">
              <h3>Experience These Features</h3>
              <ul>
                <li>
                  <span className="feature-icon">⚡</span>
                  <span>Real-time code suggestions</span>
                </li>
                <li>
                  <span className="feature-icon">🔍</span>
                  <span>Bug detection as you type</span>
                </li>
                <li>
                  <span className="feature-icon">💡</span>
                  <span>Optimization recommendations</span>
                </li>
                <li>
                  <span className="feature-icon">📚</span>
                  <span>Documentation generation</span>
                </li>
              </ul>
              
              <div className="signup-cta">
                <h4>Ready for the full experience?</h4>
                <Link to="/pricing" className="signup-button">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}