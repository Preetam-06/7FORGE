'use client';

import { useState } from 'react';
import favicon from "./favicon.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-inner">

        <a href="/" className="brand">
          <img 
            src={favicon.src} 
            alt="7FORGE Logo" 
            style={{ width: '36px', height: '36px', objectFit: 'contain' }} 
          />
          <span className="brand-name">
            7FORGE
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="nav-links">
          <a href="/about">About</a>
          <a href="/solutions">Solutions</a>
          <a href="/work">Work</a>
          <a href="/pricing">Pricing</a>
          <a href="/contact">Contact</a>
        </nav>

        {/* Desktop Call To Action */}
        <a href="#home-cta" className="nav-cta">
          Let&apos;s Talk
          <span>→</span>
        </a>

        {/* Hamburger Trigger for Mobile */}
        <button 
          className={`mobile-toggle ${isOpen ? 'active' : ''}`} 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </button>

      </div>

      {/* Responsive Mobile Menu Drawer */}
      <nav className={`mobile-drawer ${isOpen ? 'open' : ''}`}>
        <a href="/app" onClick={() => setIsOpen(false)}>Home</a>
        <a href="/about" onClick={() => setIsOpen(false)}>About</a>
        <a href="/solutions" onClick={() => setIsOpen(false)}>Solutions</a>
        <a href="/work" onClick={() => setIsOpen(false)}>Work</a>
        <a href="/pricing" onClick={() => setIsOpen(false)}>Pricing</a>
        <a href="/contact" onClick={() => setIsOpen(false)}>Contact</a>
        
        {/* Mobile Call To Action inside drawer */}
        <a href="/contact" className="nav-cta" onClick={() => setIsOpen(false)}>
          Let&apos;s Talk <span>→</span>
        </a>
      </nav>
    </header>
  );
}