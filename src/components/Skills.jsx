import { useRef } from 'react'

export default function Skills() {
  const ref = useRef(null)

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
        <h2 className="section-title">
          <strong>Skills</strong>
        </h2>

        <p className="section-subtitle">
          Technologies I <em>work with</em>
        </p>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-category">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
