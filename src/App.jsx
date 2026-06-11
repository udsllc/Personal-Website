import NavBar from './components/NavBar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Gallery from './components/Gallery'
import Films from './components/Films'
import Listening from './components/Listening'
import Contact from './components/Contact'

export default function App() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Gallery />
        <Films />
        <Listening />
        <Contact />
      </main>
    </>
  )
}
