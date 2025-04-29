import { Link } from 'react-router-dom';
import './UseCases.css';
import Navbar from '../../components/Navbar/Navbar';
import { motion } from 'framer-motion';
import { FaRocket, FaLightbulb, FaShieldAlt, FaGlobe, FaGraduationCap, FaPlug } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';

export default function UseCases() {
  const useCases = [
    {
      title: "AI-Powered Code Completion",
      description: "Real-time suggestions as you type, powered by advanced AI models that understand your coding style.",
      icon: <FaLightbulb className="case-icon" />,
      benefit: "40% faster coding",
      color: "#bb86fc"
    },
    {
      title: "Intelligent Bug Detection",
      description: "Identifies potential runtime errors and logical flaws with 92% accuracy before execution.",
      icon: <FaShieldAlt className="case-icon" />,
      benefit: "60% less debugging time",
      color: "#bb86fc"
    },
    {
      title: "Code Optimization",
      description: "Suggests performance improvements and architectural best practices tailored to your project.",
      icon: <FaRocket className="case-icon" />,
      benefit: "30% more efficient code",
      color: "#bb86fc"
    },
    {
      title: "Multi-Language Support",
      description: "Works with 20+ programming languages including Python, JavaScript, Go, Rust and TypeScript.",
      icon: <FaGlobe className="case-icon" />,
      benefit: "Universal solution",
      color: "#bb86fc"
    },
    {
      title: "Learning Assistant",
      description: "Interactive explanations for complex algorithms with code examples and visualizations.",
      icon: <FaGraduationCap className="case-icon" />,
      benefit: "Faster onboarding",
      color: "#bb86fc"
    },
    {
      title: "Seamless IDE Integration",
      description: "Native plugins for all major IDEs with real-time collaboration features.",
      icon: <FaPlug className="case-icon" />,
      benefit: "No context switching",
      color: "#bb86fc"
    }
  ];

  return (
    <>
      <Navbar />
      <div className="use-cases-page">
        <div className="particles-background"></div>

        <motion.div
          className="use-cases-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1>Supercharge Your Development</h1>
          <p className="subtitle">Discover how AI CodeFixer transforms your workflow with intelligent assistance</p>

          <div className="ai-stats">
            <div className="stat-item">
              <div className="stat-value">10,000+</div>
              <div className="stat-label">Developers</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">92%</div>
              <div className="stat-label">Accuracy</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">40%</div>
              <div className="stat-label">Faster Coding</div>
            </div>
          </div>
        </motion.div>

        <div className="use-cases-grid">
          {useCases.map((caseItem, index) => (
            <motion.div
              key={index}
              className="use-case-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              style={{ borderTop: `4px solid ${caseItem.color}` }}
            >
              <div className="icon-wrapper" style={{ color: caseItem.color }}>
                {caseItem.icon}
              </div>
              <h3>{caseItem.title}</h3>
              <p>{caseItem.description}</p>
              <span className="benefit-tag" style={{ backgroundColor: `${caseItem.color}20`, color: caseItem.color }}>
                {caseItem.benefit}
              </span>
              <Link to="/demo" className="learn-more">
                <span>Try Demo</span>
                <FiArrowRight />
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="cta-section">
          <h2>Ready to Transform Your Coding Experience?</h2>
          <p>Join thousands of developers boosting their productivity with AI CodeFixer</p>
          <div className="cta-buttons">
            <Link to="/demo" className="cta-button primary">
              Try Live Demo
            </Link>
            <Link to="/pricing" className="cta-button secondary">
              View Pricing
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}