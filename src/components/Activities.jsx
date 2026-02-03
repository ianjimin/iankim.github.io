import { useRef } from 'react'

export default function Activities() {
  const ref = useRef(null)

  const labels = [
    { 
      name: 'Island Records', 
      logos: ['/images/island-logo.jpg', '/images/island-logo.jpeg', '/images/island-logo.png', '/images/island.jpg', '/images/island.jpeg', '/images/island.png'],
      fallback: 'ISLAND'
    },
    { 
      name: 'Paper Route Empire', 
      logos: ['/images/pre-logo.jpg', '/images/pre-logo.jpeg', '/images/pre-logo.png', '/images/pre.jpg', '/images/pre.jpeg', '/images/pre.png'],
      fallback: 'PRE'
    },
    { 
      name: 'Motorsport Team', 
      logos: ['/images/motorsport-logo.jpg', '/images/motorsport-logo.jpeg', '/images/motorsport-logo.png', '/images/motorsport.jpg', '/images/motorsport.jpeg', '/images/motorsport.png'],
      fallback: 'MOTORSPORT'
    },
    { 
      name: 'Empire', 
      logos: ['/images/empire-logo.jpg', '/images/empire-logo.jpeg', '/images/empire-logo.png', '/images/empire.jpg', '/images/empire.jpeg', '/images/empire.png'],
      fallback: 'EMPIRE'
    }
  ]

  // Helper function to try loading images with fallback
  const handleImageError = (e, labelName) => {
    const labelData = labels.find(l => l.name === labelName)
    if (!labelData) {
      showFallback(e)
      return
    }
    
    const currentSrc = e.target.src
    const baseUrl = window.location.origin
    const relativePath = currentSrc.replace(baseUrl, '')
    
    // Find which logo path we tried
    let currentIndex = labelData.logos.findIndex(logo => relativePath.includes(logo) || currentSrc.includes(logo))
    
    // If not found, try to find by filename
    if (currentIndex === -1) {
      const filename = relativePath.split('/').pop()
      currentIndex = labelData.logos.findIndex(logo => logo.includes(filename))
    }
    
    if (currentIndex >= 0 && currentIndex < labelData.logos.length - 1) {
      // Try next image path
      e.target.src = labelData.logos[currentIndex + 1]
    } else {
      // All images failed, show fallback
      showFallback(e)
    }
  }

  const showFallback = (e) => {
    e.target.style.display = 'none'
    const fallback = e.target.parentElement?.querySelector('.label-fallback')
    if (fallback) fallback.style.display = 'flex'
  }

  const productionCredits = [
    {
      title: 'Major Label Releases',
      description: 'Produced and mixed major-label releases garnering millions of streams worldwide',
      achievements: [
        'State-level award winner',
        'Millions of streams worldwide',
        'Major label collaborations'
      ]
    },
    {
      title: 'Team Management',
      description: 'Managed a team of freelance producers and artists, overseeing label contracts, payments, and music clearance',
      achievements: [
        'Label contract management',
        'Payment processing',
        'Music clearance coordination'
      ]
    },
    {
      title: 'Music Production',
      description: 'Freelance music production and mixing since 2019',
      achievements: [
        'Professional mixing and mastering',
        'Artist collaboration',
        'Creative direction'
      ]
    }
  ]

  return (
    <section id="activities" className="activities" ref={ref}>
      <div className="container">
        <h2 className="section-title">
          <strong>Activities</strong>
        </h2>

        <p className="section-subtitle">
          Music production, creative work, and <em>what keeps me inspired</em>
        </p>

        <div className="activities-content">
          <div className="production-credits">
            <div className="labels-showcase">
              <h3 className="labels-heading">
                Labels I Worked With
              </h3>
              <div className="labels-background">
                {labels.map((label, index) => (
                  <div key={index} className="label-item">
                    <div className="label-logo-container">
                      <img
                        src={label.logos[0]}
                        alt={label.name}
                        className="label-logo"
                        onError={(e) => handleImageError(e, label.name)}
                      />
                      <div className="label-fallback" style={{ display: 'none' }}>
                        {label.fallback}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <h3 className="activities-heading">Production Credits</h3>
            <div className="credits-grid">
              {productionCredits.map((credit, index) => (
                <div key={index} className="credit-card">
                  <h4 className="credit-title">{credit.title}</h4>
                  <p className="credit-description">{credit.description}</p>
                  <ul className="credit-achievements">
                    {credit.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                    </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="spotify-playlist">
            <h3 className="activities-heading">Featured Playlist</h3>
            <div className="playlist-container">
              <iframe
                data-testid="embed-iframe"
                style={{ borderRadius: '12px', width: '100%', border: 'none' }}
                src="https://open.spotify.com/embed/playlist/3pDYQXFxLLBkn3J7mD3NeB?utm_source=generator"
                width="100%"
                height="352"
                frameBorder="0"
                allowFullScreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title="Spotify Playlist"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
