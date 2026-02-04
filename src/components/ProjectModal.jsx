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

  const hasSampleFormat = project.sampleFormat && (project.what || project.how || project.why)

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
            {project.sampleLabel && (
              <span className="modal-sample-badge">{project.sampleLabel}</span>
            )}
            <h2 className="modal-title">{project.title}</h2>
            {project.origin && (
              <p className="modal-origin">
                <strong>Origin:</strong> {project.origin}
              </p>
            )}
            {hasSampleFormat ? (
              <>
                {project.what && (
                  <div className="modal-sample-section">
                    <h3>What</h3>
                    <p>{project.what}</p>
                  </div>
                )}
                {project.how && (
                  <div className="modal-sample-section">
                    <h3>How</h3>
                    <p>{project.how}</p>
                  </div>
                )}
                {project.why && (
                  <div className="modal-sample-section">
                    <h3>Why</h3>
                    <p>{project.why}</p>
                  </div>
                )}
                {project.individualContribution && (
                  <div className="modal-sample-section">
                    <h3>Individual Contribution</h3>
                    <p>{project.individualContribution}</p>
                  </div>
                )}
                {project.skillsUsed && (
                  <div className="modal-sample-section">
                    <h3>Skills Used / Lessons Learned</h3>
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
