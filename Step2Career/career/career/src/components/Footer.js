import React from 'react';
import './Footer.css'; // Make sure to create this CSS file

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-info">
          <h3>Contact Us</h3>
          <p>Email: <a href="mailto:info@yourcompany.com">info@yourcompany.com</a></p>
          <p>Phone: +1 (555) 123-4567</p>
          <p>Address: 123 Career Avenue, Suite 100, City, State, ZIP</p>
        </div>
        <div className="footer-social">
          <h3>Follow Us</h3>
          <ul>
            <li><a href="https://www.facebook.com/yourcompany" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://twitter.com/yourcompany" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="https://www.linkedin.com/company/yourcompany" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="https://www.instagram.com/yourcompany" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          </ul>
        </div>
        <div className="footer-logo">
          <img src={require('../img/logo (2).png')} alt="Company Logo" />
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
