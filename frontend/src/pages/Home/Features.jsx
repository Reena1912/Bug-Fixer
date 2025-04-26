import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './Features.css';
export default function Features() {
  const navigate = useNavigate();
  const features = [
    {
      title: "AI Code Review",
      description: "Deep analysis with intelligent suggestions tailored to your codebase.",
      icon: "🤖",
      path: "/review",
      color: "#6366f1",
      bgColor: "bg-indigo-100"
    },
    {
      title: "Bug Detection",
      description: "Scan your code to instantly find and explain bugs with suggested fixes.",
      icon: "🐞",
      path: "/errors",
      color: "#10b981",
      bgColor: "bg-green-100"
    },

    {
      title: "Performance Boost",
      description: "Detect and optimize bottlenecks for faster execution.",
      icon: "⚡",
      path: "/performance",
      color: "#f59e0b",
      bgColor: "bg-yellow-100"
    }
  ];

  return (
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
            className={`feature-card ${feature.bgColor}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            onClick={() => navigate(feature.path)}
            style={{
              borderLeft: `6px solid ${feature.color}`,
              cursor: "pointer",
              padding: "1.5rem",
              borderRadius: "1rem"
            }}
          >
            {/* Feature card content */}
            <div className="feature-icon-container" style={{ marginBottom: "1rem" }}>
                  <span
                    className="feature-icon"
                    style={{
                      fontSize: "2rem",
                      background: feature.color,
                      borderRadius: "0.75rem",
                      padding: "0.5rem"
                    }}
                  >
                    {feature.icon}
                  </span>
                </div>
                <h3 style={{ marginBottom: "0.5rem" }}>{feature.title}</h3>
                <p style={{ fontSize: "0.9rem", color: "#4B5563" }}>{feature.description}</p>
                <div className="feature-underline" style={{ backgroundColor: feature.color, height: "3px", marginTop: "0.75rem", width: "50%" }}></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}