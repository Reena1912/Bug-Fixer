import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaRobot, FaBug, FaBolt, FaCode, FaShieldAlt, FaChartLine } from 'react-icons/fa';
import './Features.css';

export default function Features() {
  const navigate = useNavigate();

  const features = [
    {
      title: "AI Code Review",
      description: "Deep analysis with intelligent suggestions tailored to your codebase.",
      icon: <FaRobot className="feature-icon" />,
      path: "/review",
      color: "#bb86fc",
      delay: 0.1
    },
    {
      title: "Bug Detection",
      description: "Scan your code to instantly find and explain bugs with suggested fixes.",
      icon: <FaBug className="feature-icon" />,
      path: "/errors",
      color: "#03dac6",
      delay: 0.2
    },
    {
      title: "Performance Boost",
      description: "Detect and optimize bottlenecks for faster execution.",
      icon: <FaBolt className="feature-icon" />,
      path: "/performance",
      color: "#ff7597",
      delay: 0.3
    },
    {
      title: "Code Standardization",
      description: "Ensure consistent coding style across your entire project.",
      icon: <FaCode className="feature-icon" />,
      path: "/standards",
      color: "#6f7dfb",
      delay: 0.4
    },
    {
      title: "Security Analysis",
      description: "Identify vulnerabilities and security risks in your code.",
      icon: <FaShieldAlt className="feature-icon" />,
      path: "/security",
      color: "#61dafb",
      delay: 0.5
    },
    {
      title: "Quality Metrics",
      description: "Track and improve your code quality over time.",
      icon: <FaChartLine className="feature-icon" />,
      path: "/metrics",
      color: "#a162e8",
      delay: 0.6
    }
  ];

  return (
    <section className="features-section">
      <motion.h2 
        className="features-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <span className="title-decorator"></span>
        Advanced Code Intelligence
        <span className="title-decorator"></span>
      </motion.h2>

      <motion.p 
        className="features-subtitle"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
      >
        Powerful tools to elevate your development workflow
      </motion.p>

      <div className="features-grid">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="feature-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: feature.delay }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ 
              y: -10,
              boxShadow: `0 10px 25px -5px ${feature.color}40`
            }}
            onClick={() => navigate(feature.path)}
            style={{
              '--feature-color': feature.color,
              cursor: 'pointer'
            }}
          >
            <div className="feature-icon-container">
              <div className="feature-icon-wrapper">
                {feature.icon}
              </div>
            </div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
            <div className="feature-underline"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}