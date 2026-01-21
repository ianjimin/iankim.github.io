import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import ProjectModal from './ProjectModal'

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const projects = [
    {
      title: 'Omnidirectional Hydrophone Design',
      description: 'Designed an omnidirectional hydrophone from concept to manufacturing at Massa Products Corporation. Developed elastomer molding strategy, mechanical mounting brackets, and CNC/3D-printed assembly fixtures. Created COMSOL multiphysics models to evaluate acoustic output, mechanical stress, and electrical coupling.',
      tags: ['COMSOL', 'SolidWorks', 'CNC', '3D Printing', 'Acoustic Design'],
      link: '#',
      images: [
        '/images/projects/hydrophone-1.jpg',
        '/images/projects/hydrophone-2.jpg',
        '/images/projects/hydrophone-3.jpg'
      ],
      details: [
        'Designed elastomer molding strategy for acoustic elements',
        'Created mechanical mounting brackets and assembly fixtures',
        'Developed COMSOL models for acoustic output evaluation',
        'Validated mechanical stress and electrical coupling',
        'Managed full product lifecycle from concept to manufacturing'
      ],
      technologies: ['COMSOL Multiphysics', 'SolidWorks', 'CNC Machining', '3D Printing', 'FEA', 'Acoustic Simulation']
    },
    {
      title: 'TR-317 Automated Sorting System',
      description: 'Developed a complete quality control automation system using Python, Tkinter, and OCR technology. Transformed the QC process from a 4-step, 7.5-10 hour workflow to a streamlined 2-step, 2-3 hour process, reducing processing time by 70-80% for batches of 500 ceramics.',
      tags: ['Python', 'OCR', 'Tkinter', 'SQLite', 'Automation'],
      link: '#',
      images: [
        '/images/projects/tr317-sorting-1.jpg',
        '/images/projects/tr317-sorting-2.jpg',
        '/images/projects/tr317-sorting-3.jpg',
        '/images/projects/tr317-sorting-4.jpg'
      ],
      details: [
        'Built Tkinter-based GUI application with SQLite database for data management',
        'Implemented OCR system using Tesseract with custom preprocessing pipeline (CLAHE, adaptive thresholding, dilation)',
        'Designed serial number recognition system with regex filtering (format: C0#####)',
        'Created scanning module with live feed, preprocessing toggles, and progress tracking',
        'Eliminated need for pre-arranging ceramics by serial number before sorting',
        'Reduced total QC time from 7.5-10 hours to 2-3 hours for 500 ceramics',
        'Integrated box-to-stack workflow with automated stack creation and verification'
      ],
      technologies: ['Python', 'Tesseract OCR', 'Tkinter', 'SQLite3', 'OpenCV', 'Image Processing', 'Regex']
    },
    {
      title: '1U Cubesat – NU Aerospace',
      description: 'Optimized camera payload bracket design under mass constraints using SolidWorks FEA, validating structural performance. Fabricated and assembled flight-hardware components using CNC machining and 3D printing, producing GD&T drawings.',
      tags: ['SolidWorks', 'FEA', 'CNC', 'Aerospace', 'GD&T'],
      link: '#',
      images: [
        '/images/projects/cubesat-1.jpg',
        '/images/projects/cubesat-2.jpg',
        '/images/projects/cubesat-3.jpg'
      ],
      details: [
        'Optimized bracket design under strict mass constraints',
        'Performed FEA analysis to validate structural performance',
        'Fabricated flight-hardware components using CNC and 3D printing',
        'Created detailed GD&T drawings for manufacturing',
        'Supported system-level assembly and testing'
      ],
      technologies: ['SolidWorks', 'FEA', 'CNC Machining', '3D Printing', 'GD&T', 'Aerospace Engineering']
    },
    {
      title: 'Pond Upgrade Acoustic Simulation',
      description: 'Modeled acoustic behavior of existing pond and multiple redesign concepts using k-Wave pseudo-spectral simulation. Analyzed reverberation data to select optimal 25-ft square wall design that balances acoustic performance with construction feasibility and testing space requirements.',
      tags: ['MATLAB', 'k-Wave', 'Acoustic Simulation', '3D Modeling'],
      link: '#',
      images: [
        '/images/projects/pond-simulation-1.jpg',
        '/images/projects/pond-simulation-2.jpg',
        '/images/projects/pond-simulation-3.jpg',
        '/images/projects/pond-simulation-4.jpg',
        '/images/projects/pond-simulation-5.jpg'
      ],
      details: [
        'Created 3D voxel-based geometries from engineering schematics using pixel counting and PCHIP interpolation',
        'Implemented both equation-based and CAD import (STL-to-voxel) geometry creation methods',
        'Modeled layered media (bedrock → mud → water → air) with concrete wall support structures',
        'Ran 3D elastic simulations (pstdElastic3D) with 20-40 million voxels, requiring 50-100GB RAM',
        'Simulated 50ms duration (35,000 timesteps) with 5kHz spherical pressure source',
        'Analyzed pressure time series using Hilbert transform, dB conversion, and linear fitting',
        'Compared multiple designs: Shannon\'s design, rounded (60ft & 80ft), and square (20ft & 25ft)',
        'Selected 25-ft square wall design for optimal reverberation reduction while preserving test space',
        'Validated design with hand calculations using cylindrical spreading model and reflection coefficients'
      ],
      technologies: ['MATLAB', 'k-Wave', '3D Voxel Modeling', 'Acoustic Simulation', 'Signal Processing', 'STL Processing', 'PCHIP Interpolation']
    },
    {
      title: 'Dual Deployment Rocket',
      description: 'Designed and built a dual-deployment rocket system, laser-cutting and 3D-printing structural components and soldering onboard avionics. Simulated flight dynamics in OpenRocket to optimize stability, apogee altitude, and deployment timing.',
      tags: ['Design', '3D Printing', 'OpenRocket', 'Avionics'],
      link: '#',
      images: [
        '/images/projects/rocket-1.jpg',
        '/images/projects/rocket-2.jpg',
        '/images/projects/rocket-3.jpg'
      ],
      details: [
        'Designed dual-deployment recovery system',
        'Fabricated structural components via laser cutting and 3D printing',
        'Assembled and soldered onboard avionics systems',
        'Simulated and optimized flight dynamics in OpenRocket',
        'Achieved optimal stability and deployment timing'
      ],
      technologies: ['OpenRocket', '3D Printing', 'Laser Cutting', 'Avionics', 'Flight Simulation']
    },
    {
      title: 'TR-232 10 Pack Material Classifier',
      description: 'Developed machine learning models (Random Forest and CNN) to predict ceramic pack quality based on impedance data. Investigated crack formation using COMSOL stress analysis, providing data-driven fail criteria for quality control.',
      tags: ['Machine Learning', 'COMSOL', 'Python', 'Quality Control'],
      link: '#',
      images: [
        '/images/projects/tr232-classifier-1.jpg',
        '/images/projects/tr232-classifier-2.jpg',
        '/images/projects/tr232-classifier-3.jpg',
        '/images/projects/tr232-classifier-4.jpg'
      ],
      details: [
        'Trained Random Forest model using impedance features (peak locations, noise levels, peak sizes, patterns)',
        'Developed 1D CNN with multiple convolutional blocks (32→64→128 filters) for pattern recognition',
        'Achieved confident binary classification (good/bad) with specialized feature detection',
        'Modeled 10-pack geometry and forces in COMSOL to identify stress concentrations causing cracks',
        'Analyzed Von Mises stress and electric potential distributions',
        'Provided decisive, data-backed fail criteria for quality control processes',
        'Investigated cracking during 10-pack creation process (gluing, fixturing, baking)'
      ],
      technologies: ['Python', 'Scikit-learn', 'TensorFlow/Keras', 'COMSOL', 'Machine Learning', 'FEA', 'Impedance Analysis']
    },
    {
      title: 'Water Wick Testing & Analysis',
      description: 'Conducted comprehensive testing of various wick designs and materials to analyze impact on quarter-wave resonance and impedance. Performed hundreds of trials using spray and dip tests with statistical analysis.',
      tags: ['Testing', 'Data Analysis', 'Materials', 'Acoustics'],
      link: '#',
      images: [
        '/images/projects/water-wick-1.jpg',
        '/images/projects/water-wick-2.jpg',
        '/images/projects/water-wick-3.jpg'
      ],
      details: [
        'Conducted hundreds of trials across various wick designs and materials',
        'Employed spray and dip tests to analyze water scenario impacts',
        'Measured changes in quarter-wave resonance and impedance characteristics',
        'Graphically visualized performance differences from control conditions',
        'Calculated standard deviations to quantify performance variations',
        'Provided data-driven recommendations for optimal wick material selection'
      ],
      technologies: ['Experimental Design', 'Statistical Analysis', 'Data Visualization', 'Acoustic Testing']
    },
    {
      title: 'Brain Impact Analysis Research',
      description: 'Performed modal analysis in Ansys on MRI-based brain meshes to identify dominant vibration modes relevant to impact response. Developed Python-based visualization tools to generate interactive 3D vector fields for analyzing brain reactivity under simulated collision forces.',
      tags: ['ANSYS', 'Python', 'Modal Analysis', 'Research', 'Data Visualization'],
      link: '#',
      images: [
        '/images/projects/brain-analysis-1.jpg',
        '/images/projects/brain-analysis-2.jpg',
        '/images/projects/brain-analysis-3.jpg'
      ],
      details: [
        'Conducted modal analysis on MRI-based brain meshes using Ansys',
        'Identified dominant vibration modes for impact response',
        'Developed Python visualization tools for 3D vector field analysis',
        'Analyzed brain reactivity under simulated collision forces',
        'Contributed to understanding of traumatic brain injury mechanics'
      ],
      technologies: ['ANSYS', 'Python', 'Modal Analysis', 'FEA', 'Data Visualization', 'Biomechanics']
    }
  ]

  const handleProjectClick = (project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setTimeout(() => setSelectedProject(null), 300)
  }

  return (
    <>
      <section id="projects" className="projects" ref={ref}>
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">
              <strong>Featured</strong> Projects
            </h2>
            <p className="section-subtitle">
              A collection of projects I've <em>built</em> and <strong>contributed</strong> to
            </p>
          </motion.div>

          <div className="projects-list">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="project-item"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ x: 10 }}
                onClick={() => handleProjectClick(project)}
                style={{ cursor: 'pointer' }}
              >
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag, i) => (
                      <span key={i}>{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="project-arrow">→</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  )
}
