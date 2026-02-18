import { useState } from 'react'

export default function Hero() {
  const [aboutOpen, setAboutOpen] = useState(false)

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-top">
          <div className="hero-intro-wrap">
            <div className="hero-image-container">
              <img
                src="/images/headshot.png"
                alt="Ian Kim"
                className="hero-headshot"
                onError={(e) => {
                  const src = e.target.src
                  if (src.includes('.png')) {
                    e.target.src = src.replace('.png', '.jpg')
                  } else if (src.includes('.jpg')) {
                    e.target.src = src.replace('.jpg', '.jpeg')
                  }
                }}
              />
            </div>
            <div className="hero-intro">
              <p className="hero-greeting">Hello, I'm</p>
              <h1 className="hero-name">Ian Kim</h1>
              <p className="hero-role">MechE Student</p>
            </div>
          </div>

          {aboutOpen && (
            <div className="hero-about-panel">
              <button
                type="button"
                className="hero-about-close"
                onClick={() => setAboutOpen(false)}
                aria-label="Close"
              >
                ×
              </button>
              <h3 className="hero-about-title">About Me</h3>
              <p className="hero-about-text">
                I'm a mechanical engineering student passionate about <strong>acoustics</strong> and <strong>AI</strong>—especially work that blends modeling, signal-driven insight, and real-world hardware constraints.
              </p>
              <p className="hero-about-text">
                I've built that foundation through hands-on experience: a co-op at Massa Products designing hydrophones from concept through manufacturing, research in Northeastern's Soft Tissue Mechanics Lab, and coursework across CAD, FEA, multiphysics simulation, and manufacturing.
              </p>
              <p className="hero-about-text">
                <strong>Goals:</strong> Seeking co-op and full-time roles in electroacoustic design, product development, or multiphysics simulation.
              </p>
              <div className="hero-about-grid">
                <div>
                  <h4 className="hero-about-heading">Personal</h4>
                  <p className="hero-about-text">
                    Music production (major-label releases), NU Aerospace, volunteer work, building things with my hands.
                  </p>
                </div>
                <div>
                  <h4 className="hero-about-heading">Education</h4>
                  <p className="hero-about-text">
                    <strong>Northeastern</strong> — B.S. MechE (2027). Focus: electroacoustic design, multiphysics simulation. Previously Colby College.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="hero-main">
          <h2 className="hero-title">
            <span className="hero-title-line">Passionate about</span>
            <span className="hero-title-line">
              <span className="hero-accent">Acoustic Design</span> + <span className="hero-accent">ML</span>
            </span>
          </h2>
        </div>

        <div className="hero-links">
          <a href="mailto:iank8992@gmail.com">Email</a>
          <a href="https://www.linkedin.com/in/ian-kim30/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/ianjimin" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
        </div>
        <button
          type="button"
          className={`hero-about-btn ${aboutOpen ? 'active' : ''}`}
          onClick={() => setAboutOpen(!aboutOpen)}
          aria-label={aboutOpen ? 'Close about' : 'Learn more about me'}
          aria-expanded={aboutOpen}
        >
          {aboutOpen ? '×' : 'Click here to learn more about me'}
        </button>
      </div>
    </section>
  )
}
