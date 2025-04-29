
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaLock, FaEnvelope, FaGithub, FaGoogle, FaTwitter } from 'react-icons/fa';
import './AuthPages.css';


export default function Login() {
  return (
    <motion.div 
      className="auth-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="auth-decoration">
        <div className="code-bubble bubble-1">const user = 🔍</div>
        <div className="code-bubble bubble-2">login(user);</div>
        <div className="code-bubble bubble-3">if (authenticated) ✅</div>
      </div>
      
      <motion.div 
        className="auth-form"
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <h2 className="auth-title">Welcome Back</h2>
        <p className="auth-subtitle">Sign in to access your CodeFixer dashboard</p>
        
        <form className="form-group">
          <div className="input-field">
            <FaEnvelope className="input-icon" />
            <input type="email" placeholder="Email" required />
          </div>
          
          <div className="input-field">
            <FaLock className="input-icon" />
            <input type="password" placeholder="Password" required />
          </div>
          
          <div className="form-options">
            <label className="remember-me">
              <input type="checkbox" />
              <span>Remember me</span>
            </label>
            <Link to="/forgot-password" className="forgot-password">Forgot password?</Link>
          </div>
          
          <motion.button 
            className="auth-button"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Login
          </motion.button>
        </form>
        
        <div className="social-login">
          <p className="divider">or continue with</p>
          
          <div className="social-icons">
            <motion.div whileHover={{ y: -3 }}>
              <FaGoogle className="social-icon google" />
            </motion.div>
            <motion.div whileHover={{ y: -3 }}>
              <FaGithub className="social-icon github" />
            </motion.div>
            <motion.div whileHover={{ y: -3 }}>
              <FaTwitter className="social-icon twitter" />
            </motion.div>
          </div>
        </div>
        
        <p className="auth-footer">
          Don't have an account? <Link to="/signup" className="auth-link">Sign up</Link>
        </p>
      </motion.div>
    </motion.div>
  );
}