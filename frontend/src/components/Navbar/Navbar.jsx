import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Navbar.css';
import { FaUser, FaSignInAlt, FaHome } from 'react-icons/fa';

export default function Navbar() {
  return (
    <motion.nav 
      className="navbar dark"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100 }}
    >
      <motion.div whileHover={{ scale: 1.05 }}>
        <Link to="/" className="logo">
          <span className="logo-highlight">Code</span>Fixer
        </Link>
      </motion.div>
      
      <div className="nav-links">
        <motion.div whileHover={{ scale: 1.05 }}>
          <Link to="/" className="nav-link home-link">
            <FaHome /> Home
          </Link>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }}>
          <Link to="/review" className="nav-link">Review</Link>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }}>
          <Link to="/use-cases" className="nav-link">Use Cases</Link>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }}>
          <Link to="/resources" className="nav-link">Resources</Link>
        </motion.div>
        
        <div className="auth-buttons">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link to="/login" className="login-btn">
              <FaSignInAlt /> Login
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link to="/signup" className="signup-btn">
              <FaUser /> Sign Up
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
}