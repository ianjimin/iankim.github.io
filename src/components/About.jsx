export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">
          About <strong>Me</strong>
        </h2>
        <div className="about-intro">
          <p className="about-lead">
            I'm a mechanical engineering student at Northeastern University with a passion for
            <strong> electroacoustic design</strong>, <strong>multiphysics simulation</strong>, and
            <strong> product development</strong>. I bridge theory and practice through hands-on
            engineering experience and research.
          </p>
          <p className="about-lead">
            I'm most interested in problems where <strong>precision matters</strong>, where simulation
            guides design, and where innovative solutions meet real-world manufacturing constraints.
          </p>
        </div>
        <div className="about-section">
          <h3 className="about-heading">How I think</h3>
          <p className="about-text">
            I care about <strong>reliability</strong> before innovation, constraints before optimization,
            and systems that survive real-world conditions. I prefer robust designs that
            fail predictably over elegant ones that fail unexpectedly.
          </p>
        </div>
        <div className="about-section">
          <h3 className="about-heading">Currently focused on</h3>
          <ul className="about-list">
            <li>• Electroacoustic transducer design and optimization</li>
            <li>• COMSOL multiphysics modeling for acoustic and mechanical systems</li>
            <li>• Automated quality control systems using computer vision</li>
            <li>• Aerospace engineering projects including cubesat development</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
