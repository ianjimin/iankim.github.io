import { useState } from 'react'

export default function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { href: '#projects', label: 'Projects' },
    { href: '#timeline', label: 'Experience' },
    { href: '#audio-production', label: 'Audio Production' },
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
              target={item.external ? '_blank' : undefined}
              rel={item.external ? 'noopener noreferrer' : undefined}
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
