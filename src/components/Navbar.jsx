import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span className="logo-text">CS - Ticket System</span>
      </div>
      <div className="navbar-menu">
        <a href="#home">Home</a>
        <a href="#faq">FAQ</a>
        <a href="#chat">Chat</a>
        <a href="#blog">Blog</a>
        <a href="#download">Download</a>
        <a href="#contact">Contact</a>
        <button className="new-ticket-btn">
          + New Ticket
        </button>
      </div>
    </nav>
  );
};

export default Navbar;