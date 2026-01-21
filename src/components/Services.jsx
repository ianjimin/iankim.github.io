import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { motion } from 'framer-motion'

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const services = [
    {
      title: 'Electroacoustic Design',
      description: 'Design and optimization of ultrasonic transducers and acoustic systems from concept to manufacturing.',
      features: ['COMSOL Modeling', 'Acoustic Analysis', 'Product Development']
    },
    {
      title: 'Simulation & Analysis',
      description: 'Multiphysics modeling, FEA, and acoustic propagation analysis for design validation and optimization.',
      features: ['COMSOL', 'ANSYS', 'MATLAB', 'k-Wave']
    },
    {
      title: 'Automation & Software',
      description: 'Python-based automation systems, computer vision applications, and data analysis tools.',
      features: ['Python', 'Computer Vision', 'Automation', 'Data Visualization']
    }
  ]

  return (
    <section id="services" className="services" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          What I <strong>Can Do</strong> For You
        </motion.h2>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <h3 className="service-title">
                <strong>{service.title}</strong>
              </h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
