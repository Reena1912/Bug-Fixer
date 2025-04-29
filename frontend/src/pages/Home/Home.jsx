import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaJs, FaPython, FaJava, FaCode } from 'react-icons/fa';
import { SiCplusplus, SiGo } from 'react-icons/si';
import './Home.css';
import Navbar from '../../components/Navbar/Navbar';
import Features from './Features';

export default function Home({ darkMode, toggleTheme }) {
  const navigate = useNavigate();

  const languages = [
    { name: 'JavaScript', icon: <FaJs />, color: '#3178c6' },
    { name: 'Python', icon: <FaPython />, color: '#3776ab' },
    { name: 'Java', icon: <FaJava />, color: '#007396' },
    { name: 'C++', icon: <SiCplusplus />, color: '#00599c' },
    { name: 'Go', icon: <SiGo />, color: '#00add8' },
    { name: 'TypeScript', icon: <FaCode />, color: '#3178c6' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="home-container dark">
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
      
      {/* Hero Section with proper spacing */}
      <motion.section 
        className="hero-section"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="hero-content">
          <motion.h1 className="hero-title" variants={itemVariants}>
            Whatever you want to code,
          </motion.h1>
          <motion.h1 className="hero-subtitle" variants={itemVariants}>
            our <span className="highlight">Code Fixer</span> has the answers
          </motion.h1>
          <motion.p className="hero-description" variants={itemVariants}>
            Review and improve your code effortlessly with AI-powered suggestions
          </motion.p>
          <motion.div variants={itemVariants} className="button-container">
            <button 
              className="get-started-btn" 
              onClick={() => navigate('/review')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </button>
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section with proper spacing */}
      <div className="section-spacer"></div>
      <Features />

      {/* Language Support Section */}
      <div className="section-spacer"></div>
      <motion.section
        className="language-support"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          Supports All Major Languages
        </motion.h2>
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          CodeFixer works seamlessly with your favorite programming languages
        </motion.p>
        
        <motion.div 
          className="language-badges"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.4
              }
            }
          }}
        >
          {languages.map((lang) => (
            <motion.div
              key={lang.name}
              className="language-badge"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: `0 0 15px ${lang.color}`
              }}
              style={{ 
                backgroundColor: `${lang.color}20`,
                border: `1px solid ${lang.color}`,
                color: lang.color
              }}
            >
              <motion.span 
                className="language-icon"
                whileHover={{ rotate: 15 }}
              >
                {lang.icon}
              </motion.span>
              {lang.name}
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Success Example Section */}
      <div className="section-spacer"></div>
      <motion.section 
        className="success-example"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2 
          className="success-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          See It In Action
        </motion.h2>
        <motion.p 
          className="success-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          Watch how CodeFixer improves your code in real-world scenarios
        </motion.p>
        
        <motion.div 
          className="success-image-container"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.01 }}
        >
          <img 
            src="/success.png" 
            alt="CodeFixer finding and fixing code issues"
            className="success-image"
          />
          <motion.div 
            className="success-badge"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.1 }}
          >
            <span className="badge-icon">✨</span>
            <span className="badge-text">AI-Powered Analysis</span>
          </motion.div>
        </motion.div>
      </motion.section>
      
      {/* Testimonials Section */}
      <div className="section-spacer"></div>
      <motion.section
        className="testimonials"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          What Developers Say
        </motion.h2>
        <motion.div 
          className="testimonial-cards"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
              }
            }
          }}
        >
          <motion.div 
            className="testimonial-card"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
            }}
            whileHover={{ y: -5 }}
          >
            <p>"CodeFixer reduced our code review time by 40%"</p>
          </motion.div>
          <motion.div 
            className="testimonial-card"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
            }}
            whileHover={{ y: -5 }}
          >
            <p>"The best AI assistant for catching subtle bugs"</p>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
}