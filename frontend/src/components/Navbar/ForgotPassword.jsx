import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaArrowLeft } from 'react-icons/fa';
import './AuthPages.css';

export default function ForgotPassword() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    
    try {
      const response = await fetch('/api/auth/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      
      const data = await response.json();
      if (response.ok) {
        alert('Password reset link sent to your email!');
      } else {
        throw new Error(data.message || 'Failed to send reset link');
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <motion.div 
      className="auth-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="auth-decoration">
        <div className="code-bubble bubble-1">resetPassword(email);</div>
        <div className="code-bubble bubble-2">sendResetLink();</div>
        <div className="code-bubble bubble-3">if (success) ✉️</div>
      </div>
      
      <motion.div 
        className="auth-form"
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <Link to="/login" className="back-link">
          <FaArrowLeft /> Back to Login
        </Link>
        
        <h2 className="auth-title">Forgot Password</h2>
        <p className="auth-subtitle">Enter your email to receive a reset link</p>
        
        <form className="form-group" onSubmit={handleSubmit}>
          <div className="input-field">
            <FaEnvelope className="input-icon" />
            <input 
              type="email" 
              name="email"
              placeholder="Email" 
              required 
            />
          </div>
          
          <motion.button 
            className="auth-button"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
          >
            Send Reset Link
          </motion.button>
        </form>
        
        <p className="auth-footer">
          Don't have an account? <Link to="/signup" className="auth-link">Sign up</Link>
        </p>
      </motion.div>
    </motion.div>
  );
}