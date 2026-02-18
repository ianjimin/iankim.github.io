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

  const getCategories = (p) =>
    p.sampleLabel ? p.sampleLabel.split('/').map((s) => s.trim()).filter(Boolean) : []
  const modalCategories = getCategories(project)
  const hasSampleFormat = project.sampleFormat && (project.background || project.techStack || project.impact || project.what || project.how || project.why)

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
                <figure key={index} className="modal-image-figure">
                  <img
                    src={image}
                    alt={`${project.title} - Image ${index + 1}`}
                    className="modal-image"
                  />
                  <figcaption className="modal-image-caption">
                    {project.imageCaptions && project.imageCaptions[index]
                      ? project.imageCaptions[index]
                      : `${project.title} — Image ${index + 1}`}
                  </figcaption>
                </figure>
              ))
            ) : project.previewImage ? (
              <figure className="modal-image-figure">
                <img
                  src={project.previewImage}
                  alt={`${project.title} preview`}
                  className="modal-image"
                />
                <figcaption className="modal-image-caption">{project.title}</figcaption>
              </figure>
            ) : (
              <div className="modal-placeholder">
                <span>No images available</span>
              </div>
            )}
          </div>
          <div className="modal-info">
            {modalCategories.length > 0 && (
              <div className="modal-sample-badges">
                {modalCategories.map((label) => (
                  <span key={label} className="modal-sample-badge">{label}</span>
                ))}
              </div>
            )}
            <h2 className="modal-title">{project.title}</h2>
            {(project.source || project.origin) && (
              <p className="modal-origin">
                <strong>Experience at:</strong> {project.source || project.origin}
              </p>
            )}
            {hasSampleFormat ? (
              <>
                {(project.background || project.what) && (
                  <div className="modal-sample-section">
                    <h3>Background</h3>
                    <p>{project.background || project.what}</p>
                  </div>
                )}
                {(project.techStack || project.how) && (
                  <div className="modal-sample-section">
                    <h3>Tech Stack & Approach</h3>
                    <p>{project.techStack || project.how}</p>
                  </div>
                )}
                {(project.impact || project.why) && (
                  <div className="modal-sample-section">
                    <h3>Impact</h3>
                    <p>{project.impact || project.why}</p>
                  </div>
                )}
                {project.skillsUsed && (
                  <div className="modal-sample-section">
                    <h3>Skills Used</h3>
                    <p>{project.skillsUsed}</p>
                  </div>
                )}
              </>
            ) : (
              <>
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
              </>
            )}
            {project.technologies && (
              <div className="modal-technologies">
                <h3>Highlights</h3>
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
