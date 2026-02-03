import { useState } from 'react'

export default function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { href: '#projects', label: 'Projects' },
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#timeline', label: 'Experience' },
    { href: '#activities', label: 'Activities' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <nav className={`nav ${isMobileMenuOpen ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#home" className="nav-logo">Ian Kim</a>
        <div className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
        <div className="nav-actions">
          <button
            className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  )
}
