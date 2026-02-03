export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-intro">
          <div className="hero-image-container">
            <img
              src="/images/headshot.png"
              alt="Ian Kim"
              className="hero-headshot"
              onError={(e) => {
                const src = e.target.src
                if (src.includes('.png')) {
                  e.target.src = src.replace('.png', '.jpg')
                } else if (src.includes('.jpg')) {
                  e.target.src = src.replace('.jpg', '.jpeg')
                }
              }}
            />
          </div>
          <p className="hero-greeting">Hello, I'm</p>
          <h1 className="hero-name">Ian Kim</h1>
          <p className="hero-role">Mechanical Engineering Student</p>
        </div>
        <div className="hero-main">
          <h2 className="hero-title">
            <span className="hero-title-line">I design and build</span>
            <span className="hero-title-line">systems that</span>
            <span className="hero-title-line">deliver</span>
          </h2>
        </div>
      </div>
    </section>
  )
}
