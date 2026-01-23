import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { motion } from 'framer-motion'

export default function Timeline() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1, margin: '-100px' })

  // Extract unique years from timeline items
  const extractYear = (period) => {
    if (!period) return null
    // Extract first year from period (e.g., "2021 - Present" -> "2021", "Jun 2024 - Aug 2024" -> "2024")
    const yearMatch = period.match(/\b(20\d{2})\b/)
    return yearMatch ? yearMatch[1] : null
  }

  const timelineItems = [
    {
      type: 'education',
      title: 'Mechanical Engineering Student',
      company: 'Northeastern University',
      location: 'Boston, MA',
      period: '2024 - Present',
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
          period: '2025',
          description: 'Designed and developed acoustic transducers from concept to manufacturing, working on product development and multiphysics simulation.',
          achievements: [
            'Designed omnidirectional hydrophone from concept to manufacturing',
            'Developed elastomer molding strategies and mechanical mounting systems',
            'Created COMSOL multiphysics models for acoustic and mechanical analysis',
            'Designed CNC and 3D-printed assembly and test fixtures'
          ],
          image: '/images/timeline/massa-logo.jpg'
        }
      ],
      research: [
        {
          title: 'Research Assistant',
          company: 'Soft Tissue Mechanics Lab',
          location: 'Northeastern University',
          period: '2024 - 2025',
          description: 'Conducting research in biomechanics, performing modal analysis and developing visualization tools for brain impact analysis.',
          achievements: [
            'Performed modal analysis in ANSYS on MRI-based brain meshes',
            'Developed Python-based visualization tools for 3D vector field analysis',
            'Analyzed brain reactivity under simulated collision forces',
            'Contributed to understanding of traumatic brain injury mechanics'
          ],
          image: '/images/timeline/soft-tissue-lab-logo.jpg',
          featuredArticle: {
            title: 'PEAK Awardees Jump into Fall Projects',
            url: 'http://undergraduate.northeastern.edu/research/news/peak-awardees-jump-into-fall-projects/',
            description: 'Featured in Northeastern Undergraduate Research & Fellowships',
            previewImage: '/images/timeline/peak-article-preview.jpg'
          }
        }
      ]
    },
    {
      type: 'work',
      title: 'Project Intern',
      company: 'Uganda Development and Health Associates',
      location: 'Remote',
      period: '2024',
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
      type: 'education',
      title: 'Student',
      company: 'Colby College',
      location: 'Waterville, ME',
      period: '2023 - 2024',
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
        description: 'Featured in Colby College news',
        previewImage: '/images/timeline/colby-article-preview.jpg'
      },
      internships: [
        {
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
          image: '/images/timeline/avinet-logo.jpg'
        }
      ]
    }
  ]

  // Get unique years only from main timeline items (not nested items)
  // Only show years that represent actual changes/transitions
  const getUniqueYears = () => {
    const years = new Set()
    timelineItems.forEach(item => {
      const year = extractYear(item.period)
      if (year) years.add(year)
    })
    return Array.from(years).sort((a, b) => parseInt(b) - parseInt(a))
  }

  const uniqueYears = getUniqueYears()

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
          {/* Year markers - only show unique years from main items, positioned on the line */}
          {uniqueYears.map((year) => {
            // Find the index of the first item with this year
            let itemIndex = -1
            timelineItems.forEach((item, idx) => {
              if (itemIndex === -1) {
                const itemYear = extractYear(item.period)
                if (itemYear === year) {
                  itemIndex = idx
                }
              }
            })
            
            // Position year marker to align with timeline marker circles
            // Timeline markers are at the top of each timeline-item
            // Calculate position as percentage of container height
            const totalItems = timelineItems.length
            let topPosition = '0%'
            
            if (itemIndex >= 0 && totalItems > 0) {
              if (totalItems === 1) {
                topPosition = '0%'
              } else {
                // Position markers evenly along the timeline
                // Account for padding at top and bottom to avoid overlap with content
                const topPadding = 5 // percentage
                const bottomPadding = 5 // percentage
                const availableSpace = 100 - topPadding - bottomPadding
                const positionInSpace = (itemIndex / (totalItems - 1)) * availableSpace
                topPosition = `${topPadding + positionInSpace}%`
              }
            }
            
            return (
              <motion.div
                key={`year-${year}`}
                className="timeline-year-marker"
                style={{ top: topPosition }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + itemIndex * 0.1 }}
              >
                <div className="year-marker-dot"></div>
                <div className="year-marker-label">{year}</div>
              </motion.div>
            )
          })}
          
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
                <div className="timeline-content-top">
                  {item.image && (
                    <div className="timeline-image-container">
                      <img 
                        src={item.image} 
                        alt={`${item.company} logo`}
                        className="timeline-image"
                        loading="lazy"
                        onError={(e) => {
                          // Try alternative extensions
                          const src = e.target.src
                          const baseUrl = window.location.origin
                          const relativePath = src.replace(baseUrl, '')
                          
                          if (relativePath.includes('.jpg')) {
                            e.target.src = relativePath.replace('.jpg', '.png')
                          } else if (relativePath.includes('.png')) {
                            e.target.src = relativePath.replace('.png', '.jpeg')
                          } else if (relativePath.includes('.jpeg')) {
                            e.target.style.display = 'none'
                          } else {
                            e.target.style.display = 'none'
                          }
                        }}
                        onLoad={(e) => {
                          // Ensure image is visible when loaded
                          e.target.style.display = 'block'
                          e.target.parentElement.style.display = 'flex'
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
                      {item.featuredArticle.previewImage && (
                        <div className="featured-article-preview">
                          <img 
                            src={item.featuredArticle.previewImage} 
                            alt="Article preview"
                            className="featured-article-image"
                            onError={(e) => {
                              e.target.style.display = 'none'
                            }}
                          />
                        </div>
                      )}
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
                    <div className="coops-label">Co-op Program</div>
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

                {item.research && item.research.length > 0 && (
                  <div className="timeline-research">
                    <div className="research-label">Research</div>
                    {item.research.map((research, researchIndex) => (
                      <motion.div
                        key={researchIndex}
                        className="timeline-research-item"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.4 + index * 0.15 + researchIndex * 0.1 }}
                      >
                        <div className="research-connector"></div>
                        <div className="research-content">
                          {research.image && (
                            <div className="research-image-container">
                              <img 
                                src={research.image} 
                                alt={`${research.company} logo`}
                                className="research-image"
                                onError={(e) => {
                                  e.target.style.display = 'none'
                                }}
                              />
                            </div>
                          )}
                          <div className="research-header">
                            <div className="research-title-row">
                              <h4 className="research-title">{research.title}</h4>
                              <span className="research-badge">Research</span>
                            </div>
                            <div className="research-company">{research.company}</div>
                            <div className="research-meta">
                              <span className="research-location">{research.location}</span>
                              <span className="research-period">{research.period}</span>
                            </div>
                          </div>
                          <p className="research-description">{research.description}</p>
                          {research.achievements && research.achievements.length > 0 && (
                            <ul className="research-achievements">
                              {research.achievements.map((achievement, i) => (
                                <li key={i}>{achievement}</li>
                              ))}
                            </ul>
                          )}
                          {research.featuredArticle && (
                            <motion.div
                              className="research-featured-article"
                              initial={{ opacity: 0, y: 10 }}
                              animate={isInView ? { opacity: 1, y: 0 } : {}}
                              transition={{ duration: 0.5, delay: 0.5 + index * 0.15 + researchIndex * 0.1 }}
                            >
                              <div className="featured-article-label">Featured Article</div>
                              <a
                                href={research.featuredArticle.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="featured-article-link"
                              >
                                {research.featuredArticle.previewImage && (
                                  <div className="featured-article-preview">
                                    <img 
                                      src={research.featuredArticle.previewImage} 
                                      alt="Article preview"
                                      className="featured-article-image"
                                      onError={(e) => {
                                        e.target.style.display = 'none'
                                      }}
                                    />
                                  </div>
                                )}
                                <span className="featured-article-icon">📰</span>
                                <div className="featured-article-content">
                                  <h4 className="featured-article-title">{research.featuredArticle.title}</h4>
                                  {research.featuredArticle.description && (
                                    <p className="featured-article-description">{research.featuredArticle.description}</p>
                                  )}
                                </div>
                                <span className="featured-article-arrow">→</span>
                              </a>
                            </motion.div>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}

                {item.internships && item.internships.length > 0 && (
                  <div className="timeline-internships">
                    <div className="internships-label">Internships</div>
                    {item.internships.map((internship, internshipIndex) => (
                      <motion.div
                        key={internshipIndex}
                        className="timeline-internship"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.4 + index * 0.15 + internshipIndex * 0.1 }}
                      >
                        <div className="internship-connector"></div>
                        <div className="internship-content">
                          {internship.image && (
                            <div className="internship-image-container">
                              <img 
                                src={internship.image} 
                                alt={`${internship.company} logo`}
                                className="internship-image"
                                onError={(e) => {
                                  e.target.style.display = 'none'
                                }}
                              />
                            </div>
                          )}
                          <div className="internship-header">
                            <div className="internship-title-row">
                              <h4 className="internship-title">{internship.title}</h4>
                              <span className="internship-badge">Internship</span>
                            </div>
                            <div className="internship-company">{internship.company}</div>
                            <div className="internship-meta">
                              <span className="internship-location">{internship.location}</span>
                              <span className="internship-period">{internship.period}</span>
                            </div>
                          </div>
                          <p className="internship-description">{internship.description}</p>
                          {internship.achievements && internship.achievements.length > 0 && (
                            <ul className="internship-achievements">
                              {internship.achievements.map((achievement, i) => (
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
