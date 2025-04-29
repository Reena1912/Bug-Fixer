import { motion } from 'framer-motion';

import './Pricing.css';
import Navbar from '../../components/Navbar/Navbar';

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "Free",
      description: "Perfect for individual developers getting started with AI coding",
      features: [
        "Basic code completion",
        "5 AI suggestions/day",
        "3 supported languages",
        "Community support"
      ],
      featured: false
    },
    {
      name: "Pro",
      price: "$19",
      period: "/month",
      description: "For professional developers and small teams",
      features: [
        "Advanced code completion",
        "Unlimited AI suggestions",
        "10+ supported languages",
        "Priority support",
        "Basic code optimization"
      ],
      featured: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For organizations needing advanced capabilities",
      features: [
        "All Pro features",
        "Self-hosted options",
        "Team collaboration",
        "Custom language models",
        "Dedicated support",
        "Code security scanning"
      ],
      featured: false
    }
  ];

  return (
    <>
      <Navbar />
      <div className="pricing-page">
        <motion.div 
          className="pricing-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1>Simple, Transparent Pricing</h1>
          <p className="subtitle">Choose the plan that fits your development needs</p>
        </motion.div>

        <div className="pricing-plans">
          {plans.map((plan, index) => (
            <motion.div 
              key={index}
              className={`plan-card ${plan.featured ? 'featured' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {plan.featured && <div className="featured-badge">Most Popular</div>}
              <h3>{plan.name}</h3>
              <div className="price">
                {plan.price}
                {plan.period && <span className="period">{plan.period}</span>}
              </div>
              <p className="plan-description">{plan.description}</p>
              <ul className="features">
                {plan.features.map((feature, i) => (
                  <li key={i}>
                    <span className="check-icon">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className={`plan-button ${plan.featured ? 'featured-button' : ''}`}>
                {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
              </button>
            </motion.div>
          ))}
        </div>

        <div className="enterprise-section">
          <h2>Need something more?</h2>
          <p>Our Enterprise plan offers custom solutions for large teams and organizations.</p>
          <button className="enterprise-button">
            Request Custom Quote
          </button>
        </div>

        <div className="faq-section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>Can I switch plans later?</h3>
              <p>Yes, you can upgrade or downgrade your plan at any time. Changes will be prorated.</p>
            </div>
            <div className="faq-item">
              <h3>Is there a free trial?</h3>
              <p>The Pro plan comes with a 14-day free trial. No credit card required.</p>
            </div>
            <div className="faq-item">
              <h3>How secure is my code?</h3>
              <p>We never store your code permanently. All processing happens in memory and is discarded after analysis.</p>
            </div>
            <div className="faq-item">
              <h3>What IDEs do you support?</h3>
              <p>VS Code, IntelliJ, PyCharm, WebStorm, and more. See our documentation for full list.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}