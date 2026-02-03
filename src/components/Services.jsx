export default function Services() {
  const services = [
    {
      title: 'Electroacoustic Design',
      description: 'Design and optimization of ultrasonic transducers and acoustic systems from concept to manufacturing.',
      features: ['COMSOL Modeling', 'Acoustic Analysis', 'Product Development']
    },
    {
      title: 'Simulation & Analysis',
      description: 'Multiphysics modeling, FEA, and acoustic propagation analysis for design validation and optimization.',
      features: ['COMSOL', 'ANSYS', 'MATLAB', 'k-Wave']
    },
    {
      title: 'Automation & Software',
      description: 'Python-based automation systems, computer vision applications, and data analysis tools.',
      features: ['Python', 'Computer Vision', 'Automation', 'Data Visualization']
    }
  ]

  return (
    <section id="services" className="services">
      <div className="container">
        <h2 className="section-title">
          What I <strong>Can Do</strong> For You
        </h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <h3 className="service-title">
                <strong>{service.title}</strong>
              </h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
