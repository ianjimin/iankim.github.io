import { useRef, useState } from 'react'

export default function Contact() {
  const ref = useRef(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  return (
    <section id="contact" className="contact" ref={ref}>
      <div className="container">
        <div className="contact-header">
          <h2 className="section-title">Get In <strong>Touch</strong></h2>
          <p className="contact-subtitle">
            Have a project in mind? <em>Let's work together!</em>
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h3 className="contact-name">IAN KIM</h3>
            <p className="contact-bio">
              I'm a mechanical engineering student at Northeastern University - I design, simulate, 
              and build solutions that bridge theory and practice. Thanks for exploring my work!
            </p>
            <div className="contact-details">
              <p>
                <strong>Email:</strong>{' '}
                <a href="mailto:iank8992@gmail.com">iank8992@gmail.com</a>
              </p>
              <p>
                <strong>Phone:</strong> (901) 338-1837
              </p>
              <p>
                <strong>Location:</strong> Boston, MA
              </p>
            </div>
            <div className="contact-links">
              <a href="https://www.linkedin.com/in/ian-kim30/" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a href="https://github.com/ianjimin" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                Resume
              </a>
            </div>
          </div>

          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >
            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="company">Company</label>
              <input
                type="text"
                id="company"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject *</label>
              <input
                type="text"
                id="subject"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                rows="6"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              />
            </div>
            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
