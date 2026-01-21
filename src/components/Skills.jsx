import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { motion } from 'framer-motion'

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const skills = [
    {
      title: 'CAD & Design',
      description: 'Creating precise 3D models, technical drawings, and manufacturing-ready designs with industry-standard tools.',
      tags: ['SolidWorks', 'GD&T', 'Technical Drawing', '3D Printing', 'CNC Machining']
    },
    {
      title: 'Simulation & Analysis',
      description: 'Multiphysics modeling and analysis for acoustic systems, structural mechanics, and fluid dynamics.',
      tags: ['COMSOL', 'ANSYS', 'FEA', 'MATLAB', 'k-Wave']
    },
    {
      title: 'Programming & Automation',
      description: 'Developing software solutions for automation, data analysis, and computer vision applications.',
      tags: ['Python', 'MATLAB', 'Java', 'C++', 'Computer Vision']
    },
    {
      title: 'Research & Development',
      description: 'Conducting research in soft tissue mechanics, modal analysis, and experimental validation.',
      tags: ['Research', 'Modal Analysis', 'Experimental Design', 'Data Visualization', 'Technical Writing']
    }
  ]

  return (
    <section id="skills" className="skills" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <strong>Skills</strong>
        </motion.h2>

        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Technologies I <em>work with</em>
        </motion.p>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="skill-category"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="skill-header">
                <h4 className="skill-title">{skill.title}</h4>
                <div className="skill-stars">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="star">★</span>
                  ))}
                </div>
              </div>
              <p className="skill-description">{skill.description}</p>
              <div className="skill-tags">
                {skill.tags.map((tag, i) => (
                  <span key={i}>{tag}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
