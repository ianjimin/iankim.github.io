import Nav from './components/Nav'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Services from './components/Services'
import Timeline from './components/Timeline'
import Activities from './components/Activities'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ThemeProvider from './context/ThemeContext'

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <Nav />
        <main>
          <Hero />
          <Projects />
          <About />
          <Services />
          <Timeline />
          <Activities />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
