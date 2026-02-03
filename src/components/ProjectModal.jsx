import { useEffect } from 'react'

export default function ProjectModal({ project, isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!project || !isOpen) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          ×
        </button>
        <div className="modal-content">
          <div className="modal-images">
            {project.images && project.images.length > 0 ? (
              project.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${project.title} - Image ${index + 1}`}
                  className="modal-image"
                />
              ))
            ) : (
              <div className="modal-placeholder">
                <span>No images available</span>
              </div>
            )}
          </div>
          <div className="modal-info">
            <h2 className="modal-title">{project.title}</h2>
            <p className="modal-description">{project.description}</p>
            {project.details && (
              <div className="modal-details">
                <h3>Details</h3>
                <ul>
                  {project.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              </div>
            )}
            {project.technologies && (
              <div className="modal-technologies">
                <h3>Technologies & Tools</h3>
                <div className="modal-tags">
                  {project.technologies.map((tech, index) => (
                    <span key={index}>{tech}</span>
                  ))}
                </div>
              </div>
            )}
            {project.link && project.link !== '#' && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="modal-link"
              >
                View Project →
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
