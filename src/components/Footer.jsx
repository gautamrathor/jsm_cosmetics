import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>About JSM</h3>
          <p>Premium personal i care products for your daily needs.</p>
        </div>
        
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Available On</h3>
          <div className="marketplace-logos">
            <p>Amazon • Flipkart • Meesho • Snapdeal</p>
          </div>
        </div>
        
        <div className="footer-section">
          <h3>Contact Info</h3>
          <p>Email: info@jsmcosmetics.com</p>
          <p>Phone: +91 XXXXXXXXXX</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2025 JSM Cosmetics. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer;