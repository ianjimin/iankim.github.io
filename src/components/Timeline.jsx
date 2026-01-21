import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { motion } from 'framer-motion'

export default function Timeline() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1, margin: '-100px' })

  const timelineItems = [
    {
      type: 'education',
      title: 'Mechanical Engineering Student',
      company: 'Northeastern University',
      location: 'Boston, MA',
      period: '2021 - Present',
      description: 'Pursuing Bachelor of Science in Mechanical Engineering with focus on electroacoustic design, multiphysics simulation, and product development.',
      achievements: [
        'Coursework in CAD, FEA, multiphysics simulation, and manufacturing',
        'Active in aerospace engineering projects including cubesat development',
        'Research in soft tissue mechanics and acoustic systems'
      ],
      icon: '🎓',
      image: '/images/timeline/northeastern-logo.jpg',
      coops: [
        {
          title: 'Mechanical Engineering Co-op',
          company: 'Massa Products Corporation',
          location: 'Hingham, MA',
          period: '2024',
          description: 'Designed and developed acoustic transducers from concept to manufacturing, working on product development and multiphysics simulation.',
          achievements: [
            'Designed omnidirectional hydrophone from concept to manufacturing',
            'Developed elastomer molding strategies and mechanical mounting systems',
            'Created COMSOL multiphysics models for acoustic and mechanical analysis',
            'Designed CNC and 3D-printed assembly and test fixtures'
          ],
          image: '/images/timeline/massa-logo.jpg'
        }
      ]
    },
    {
      type: 'education',
      title: 'Student',
      company: 'Colby College',
      location: 'Waterville, ME',
      period: '2019 - 2021',
      description: 'Completed foundational coursework before transferring to Northeastern University.',
      achievements: [
        'Completed general education requirements',
        'Developed strong foundation in mathematics and sciences'
      ],
      icon: '🎓',
      image: '/images/timeline/colby-logo.jpg',
      featuredArticle: {
        title: 'Colby Creates: A Practical Look at Entrepreneurship',
        url: 'https://news.colby.edu/story/colby-creates-a-practical-look-at-entrepreneurship/',
        description: 'Featured in Colby College news'
      }
    },
    {
      type: 'work',
      title: 'Project Intern',
      company: 'Uganda Development and Health Associates',
      location: 'Remote',
      period: 'Jun 2024 - Aug 2024',
      description: 'Worked on development and health projects supporting community initiatives in Uganda.',
      achievements: [
        'Supported project planning and implementation',
        'Contributed to health and development initiatives',
        'Collaborated with international team members'
      ],
      icon: '🌍',
      image: '/images/timeline/udha-logo.jpg'
    },
    {
      type: 'work',
      title: 'Product Intern',
      company: 'Avinet Research Supplies',
      location: 'Portland, ME · Remote',
      period: 'Jan 2024 - Feb 2024',
      description: 'Worked on product development and research supply solutions.',
      achievements: [
        'Supported product development initiatives',
        'Contributed to research supply solutions',
        'Gained experience in product management'
      ],
      icon: '📦',
      image: '/images/timeline/avinet-logo.jpg'
    },
    {
      type: 'research',
      title: 'Research Assistant',
      company: 'Soft Tissue Mechanics Lab',
      location: 'Northeastern University',
      period: '2023 - Present',
      description: 'Conducting research in biomechanics, performing modal analysis and developing visualization tools for brain impact analysis.',
      achievements: [
        'Performed modal analysis in ANSYS on MRI-based brain meshes',
        'Developed Python-based visualization tools for 3D vector field analysis',
        'Analyzed brain reactivity under simulated collision forces',
        'Contributed to understanding of traumatic brain injury mechanics'
      ],
      icon: '🔬',
      image: '/images/timeline/soft-tissue-lab-logo.jpg',
      featuredArticle: {
        title: 'PEAK Awardees Jump into Fall Projects',
        url: 'http://undergraduate.northeastern.edu/research/news/peak-awardees-jump-into-fall-projects/',
        description: 'Featured in Northeastern Undergraduate Research & Fellowships'
      }
    },
    {
      type: 'work',
      title: 'Automated Material Sorting System',
      company: 'Quality Control Project',
      location: 'Northeastern University',
      period: '2023',
      description: 'Led development of an automated material sorting system using computer vision and 3D printing.',
      achievements: [
        'Designed custom test fixtures via 3D-printed prototyping',
        'Developed computer-vision software in Python',
        'Reduced quality-control processing time by 80%'
      ],
      icon: '🤖',
      image: '/images/timeline/qc-project-logo.jpg'
    }
  ]

  return (
    <section id="timeline" className="timeline" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Experience <strong>Timeline</strong>
        </motion.h2>

        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          My journey in <em>mechanical engineering</em> and <strong>research</strong>
        </motion.p>

        <div className="timeline-container">
          {timelineItems.map((item, index) => (
            <motion.div
              key={index}
              className={`timeline-item timeline-item-${item.type}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
            >
              <div className="timeline-marker">
                <span className="timeline-icon">{item.icon}</span>
              </div>
              
              <div className="timeline-content">
                {item.image && (
                  <div className="timeline-image-container">
                    <img 
                      src={item.image} 
                      alt={`${item.company} logo`}
                      className="timeline-image"
                      onError={(e) => {
                        e.target.style.display = 'none'
                      }}
                    />
                  </div>
                )}
                <div className="timeline-header">
                  <div className="timeline-title-row">
                    <h3 className="timeline-title">{item.title}</h3>
                    <span className="timeline-type-badge">{item.type}</span>
                  </div>
                  <div className="timeline-company">{item.company}</div>
                  <div className="timeline-meta">
                    <span className="timeline-location">{item.location}</span>
                    <span className="timeline-period">{item.period}</span>
                  </div>
                </div>
                
                <p className="timeline-description">{item.description}</p>
                
                {item.achievements && item.achievements.length > 0 && (
                  <ul className="timeline-achievements">
                    {item.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                )}

                {item.featuredArticle && (
                  <motion.div
                    className="timeline-featured-article"
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.15 }}
                  >
                    <div className="featured-article-label">Featured Article</div>
                    <a
                      href={item.featuredArticle.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="featured-article-link"
                    >
                      <span className="featured-article-icon">📰</span>
                      <div className="featured-article-content">
                        <h4 className="featured-article-title">{item.featuredArticle.title}</h4>
                        {item.featuredArticle.description && (
                          <p className="featured-article-description">{item.featuredArticle.description}</p>
                        )}
                      </div>
                      <span className="featured-article-arrow">→</span>
                    </a>
                  </motion.div>
                )}

                {item.coops && item.coops.length > 0 && (
                  <div className="timeline-coops">
                    {item.coops.map((coop, coopIndex) => (
                      <motion.div
                        key={coopIndex}
                        className="timeline-coop"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.4 + index * 0.15 + coopIndex * 0.1 }}
                      >
                        <div className="coop-connector"></div>
                        <div className="coop-content">
                          {coop.image && (
                            <div className="coop-image-container">
                              <img 
                                src={coop.image} 
                                alt={`${coop.company} logo`}
                                className="coop-image"
                                onError={(e) => {
                                  e.target.style.display = 'none'
                                }}
                              />
                            </div>
                          )}
                          <div className="coop-header">
                            <div className="coop-title-row">
                              <h4 className="coop-title">{coop.title}</h4>
                              <span className="coop-badge">Co-op</span>
                            </div>
                            <div className="coop-company">{coop.company}</div>
                            <div className="coop-meta">
                              <span className="coop-location">{coop.location}</span>
                              <span className="coop-period">{coop.period}</span>
                            </div>
                          </div>
                          <p className="coop-description">{coop.description}</p>
                          {coop.achievements && coop.achievements.length > 0 && (
                            <ul className="coop-achievements">
                              {coop.achievements.map((achievement, i) => (
                                <li key={i}>{achievement}</li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
