import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { motion } from 'framer-motion'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section id="about" className="about" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          About <strong>Me</strong>
        </motion.h2>

        <motion.div
          className="about-intro"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="about-lead">
            I'm a mechanical engineering student at Northeastern University with a passion for 
            <strong> electroacoustic design</strong>, <strong>multiphysics simulation</strong>, and 
            <strong> product development</strong>. I bridge theory and practice through hands-on 
            engineering experience and research.
          </p>
          <p className="about-lead">
            I'm most interested in problems where <strong>precision matters</strong>, where simulation 
            guides design, and where innovative solutions meet real-world manufacturing constraints.
          </p>
        </motion.div>

        <motion.div
          className="about-section"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="about-heading">How I think</h3>
          <p className="about-text">
            I care about <strong>reliability</strong> before innovation, constraints before optimization, 
            and systems that survive real-world conditions. I prefer robust designs that 
            fail predictably over elegant ones that fail unexpectedly.
          </p>
        </motion.div>

        <motion.div
          className="about-section"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="about-heading">Currently focused on</h3>
          <ul className="about-list">
            <li>• Electroacoustic transducer design and optimization</li>
            <li>• COMSOL multiphysics modeling for acoustic and mechanical systems</li>
            <li>• Automated quality control systems using computer vision</li>
            <li>• Aerospace engineering projects including cubesat development</li>
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
