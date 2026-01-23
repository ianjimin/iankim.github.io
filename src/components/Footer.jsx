import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <motion.div
          className="footer-content"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="footer-text">© 2026 Ian Kim. Made with 💙</p>
          <div className="footer-links">
            <a href="https://www.linkedin.com/in/ian-kim30/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="https://github.com/ianjimin" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="#resume">Resume</a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
