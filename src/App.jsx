import Nav from './components/Nav'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Timeline from './components/Timeline'
import Activities from './components/Activities'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Nav />
      <main>
        <Hero />
        <Projects />
        <Timeline />
        <Activities />
      </main>
      <Footer />
    </div>
  )
}

export default App
