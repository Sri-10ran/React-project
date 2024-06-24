import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './FirstHead.css';

function FirstHead() {
  const [activeLink, setActiveLink] = useState('#home'); // Default active link

  const handleLinkClick = (href) => {
    setActiveLink(href);
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary" style={{ background: '#3572EF', position: 'fixed', top: 0, width: '100%', zIndex: 1000,boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)'}}>
      <Container>
        <Navbar.Brand href="#home" className="text-light">
          <img
            alt="Ace Folds Logo"
            src="logo.png"
            width="160"
            height="160"
            className="d-inline-block align-top"
            style={{ objectFit: 'contain' }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto nav-links">
            {[
              { href: '#home', label: 'Home' },
              { href: '#about', label: 'About' },
              { href: '#services', label: 'Services' },
              { href: '#pricing', label: 'Pricing' },
              { href: '#faq', label: 'FAQ' },
              { href: '#contact', label: 'Contact' },
            ].map((link) => (
              <Nav.Link
                key={link.href}
                href={link.href}
                className={activeLink === link.href ? 'active' : ''}
                onClick={() => handleLinkClick(link.href)}
              >
                {link.label}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default FirstHead;
