import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaUser, FaEnvelope, FaLock, FaCode } from 'react-icons/fa';
import './AuthPages.css';

export default function Signup() {
  return (
    <motion.div 
      className="auth-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="auth-decoration">
        <div className="code-bubble bubble-1">const user = 🆕</div>
        <div className="code-bubble bubble-2">register(user);</div>
        <div className="code-bubble bubble-3">if (success) 🎉</div>
      </div>
      
      <motion.div 
        className="auth-form"
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <h2 className="auth-title">Create Account</h2>
        <p className="auth-subtitle">Join CodeFixer to supercharge your coding</p>
        
        <form className="form-group">
          <div className="input-field">
            <FaUser className="input-icon" />
            <input type="text" placeholder="Username" required />
          </div>
          
          <div className="input-field">
            <FaEnvelope className="input-icon" />
            <input type="email" placeholder="Email" required />
          </div>
          
          <div className="input-field">
            <FaLock className="input-icon" />
            <input type="password" placeholder="Password" required />
          </div>
          
          <div className="input-field">
            <FaLock className="input-icon" />
            <input type="password" placeholder="Confirm Password" required />
          </div>
          
          <div className="form-options">
            <label className="remember-me">
              <input type="checkbox" required />
              <span>I agree to the <Link to="/terms">Terms</Link> and <Link to="/privacy">Privacy Policy</Link></span>
            </label>
          </div>
          
          <motion.button 
            className="auth-button"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Sign Up
          </motion.button>
        </form>
        
        <div className="social-login">
          <p className="divider">or sign up with</p>
          
          <div className="social-icons">
            <motion.div whileHover={{ y: -3 }}>
              <FaCode className="social-icon github" />
            </motion.div>
          </div>
        </div>
        
        <p className="auth-footer">
          Already have an account? <Link to="/login" className="auth-link">Login</Link>
        </p>
      </motion.div>
    </motion.div>
  );
}