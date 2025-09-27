import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h4>CS - Ticket System</h4>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry...
            (As per Figma design, simplified text)
          </p>
        </div>
        <div className="footer-section company">
          <h4>Company</h4>
          <ul>
            <li>About Us</li>
            <li>Our Mission</li>
            <li>Contact Sales</li>
          </ul>
        </div>
        <div className="footer-section services">
          <h4>Services</h4>
          <ul>
            <li>Products & Services</li>
            <li>Customer Status</li>
            <li>Download Apps</li>
          </ul>
        </div>
        <div className="footer-section information">
          <h4>Information</h4>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Join Us</li>
          </ul>
        </div>
        <div className="footer-section social-links">
          <h4>Social Links</h4>
          <ul>
            <li>CS - Ticket System</li>
            <li>Terms & Conditions</li>
            <li>support@test.com</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; 2025 CS - Ticket System. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;