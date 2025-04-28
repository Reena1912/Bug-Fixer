import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaJs, FaPython, FaJava, FaCode } from 'react-icons/fa';
import { SiCplusplus, SiGo } from 'react-icons/si';
import './Home.css';
import '../Home/Features.css';
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

  return (
    <div className={`home-container ${darkMode ? 'dark' : ''}`}>
      {/* Background Image */}
      <div className={`background-image ${darkMode ? 'dark' : ''}`}></div>
      
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
      
      <div className="hero">
        <h1 className="hero-title">Whatever you want to code,</h1>
        <h1 className="hero-subtitle">
          our <span className="highlight">Code Fixer</span> has the answers
        </h1>
        <p className="hero-description">
          Review and improve your code effortlessly with AI-powered suggestions
        </p>
        <button className="get-started-btn" onClick={() => navigate('/review')}>
          Get Started
        </button>
        
        <Features />
       

 {/* Language Support Section */}
 <motion.section
        className="language-support"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">Supports All Major Languages</h2>
        <p className="section-subtitle">
          CodeFixer works seamlessly with your favorite programming languages
        </p>
        
        <div className="language-badges">
          {languages.map((lang) => (
            <motion.div
              key={lang.name}
              className="language-badge"
              whileHover={{ scale: 1.05 }}
              style={{ 
                backgroundColor: `${lang.color}20`,
                border: `1px solid ${lang.color}`,
                color: lang.color
              }}
            >
              <span className="language-icon">{lang.icon}</span>
              {lang.name}
            </motion.div>
          ))}
        </div>
      </motion.section>

        <motion.section 
        className="success-example"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="success-title">See It In Action</h2>
        <p className="success-subtitle">
          Watch how CodeFixer improves your code in real-world scenarios
        </p>
        
        <div className="success-image-container">
          <img 
            src="/success.png" 
            alt="CodeFixer finding and fixing code issues"
            className="success-image"
          />
          <div className="success-badge">
            <span className="badge-icon">✨</span>
            <span className="badge-text">AI-Powered Analysis</span>
          </div>
        </div>
      </motion.section>
      

       {/* Testimonials Section */}
       <motion.section
        className="testimonials"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">What Developers Say</h2>
        <div className="testimonial-cards">
          <div className="testimonial-card">
            <p>"CodeFixer reduced our code review time by 40%"</p>
            
          </div>
          <div className="testimonial-card">
            <p>"The best AI assistant for catching subtle bugs"</p>
            
          </div>
        </div>
      </motion.section>

    
        
      </div>
    </div>
  );
}
