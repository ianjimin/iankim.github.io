export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">
          About <strong>Me</strong>
        </h2>
        <div className="about-layout">
          <div className="about-photo-wrap">
            <img
              src="/images/headshot.png"
              alt="Ian Kim"
              className="about-photo"
              onError={(e) => {
                if (e.target.src.includes('.png')) e.target.src = '/images/headshot.png'.replace('.png', '.jpg')
              }}
            />
          </div>
          <div className="about-narrative">
          <p className="about-lead">
            I chose mechanical engineering because I wanted to build things that matter—systems that bridge theory and real-world constraints. From acoustic transducers to automated quality control, I'm drawn to problems where <strong>precision</strong>, <strong>simulation</strong>, and <strong>manufacturing</strong> intersect.
          </p>
          <p className="about-lead">
            I'm qualified through hands-on experience: a co-op at Massa Products designing hydrophones from concept to manufacturing, research in soft tissue mechanics at Northeastern's Soft Tissue Mechanics Lab, and coursework in CAD, FEA, multiphysics simulation, and manufacturing. I've also worked as a Product Intern at Avinet Research Supplies and supported development initiatives with Uganda Development and Health Associates.
          </p>
          <p className="about-lead">
            <strong>Professional goals:</strong> I'm seeking co-op and full-time roles in electroacoustic design, product development, or multiphysics simulation. Long term, I want to lead technical projects that improve how we design, test, and manufacture acoustic and mechanical systems.
          </p>
        </div>
        </div>
        <div className="about-grid">
          <div className="about-section">
            <h3 className="about-heading">Personal</h3>
            <p className="about-text">
              Outside engineering, I'm involved in <strong>music production</strong>—I've produced and mixed major-label releases and worked with labels including Island Records and Paper Route Empire. I enjoy <strong>NU Aerospace</strong> projects (cubesat development), <strong>volunteer work</strong> with international development, and building things with my hands—from rockets to phone boxes for screen habits.
            </p>
          </div>
          <div className="about-section">
            <h3 className="about-heading">Education</h3>
            <p className="about-text">
              <strong>Northeastern University</strong> — B.S. Mechanical Engineering (expected graduation: 2027). Focus: electroacoustic design, multiphysics simulation, product development. Previously at Colby College (2023–2024).
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
