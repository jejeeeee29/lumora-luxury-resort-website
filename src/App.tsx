import { useState } from 'react'
import './App.css'
import Introduction from './sections/introduction'
import Stays from './sections/stays'
import Experiences from './sections/experiences'
import Dining from './sections/dining'
import OurStory from './sections/ourstory'
import Contact from './sections/contact'
import Reservation from './reservation'
import Footer from './footer'
import Reveal from './reveal'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <main>
      <section className="hero">
        <nav className="navbar">
          <div className="logo">LUMORA</div>

          <button
            className="menu-toggle"
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? '✕' : '☰'}
          </button>

          <div className={`nav-links ${menuOpen ? 'nav-links-open' : ''}`}>
            <a href="#stays" onClick={() => setMenuOpen(false)}>STAYS</a>
            <a href="#experiences" onClick={() => setMenuOpen(false)}>EXPERIENCES</a>
            <a href="#dining" onClick={() => setMenuOpen(false)}>DINING</a>
            <a href="#story" onClick={() => setMenuOpen(false)}>OUR STORY</a>
          </div>

          <a href="#booking" className="reserve-link">
            RESERVE YOUR STAY
          </a>
        </nav>

        <div className="hero-content">
          <div className="eyebrow">
            <span className="eyebrow-line"></span>
            <span>PRIVATE ISLAND RESORT</span>
          </div>

          <h1>Escape to somewhere extraordinary.</h1>

          <p className="hero-description">
            A secluded sanctuary where nature, architecture, and slow living meet.
          </p>

          <div className="hero-actions">
            <a href="#booking" className="primary-button">
              RESERVE YOUR STAY
            </a>

            <a href="#story" className="secondary-link">
              EXPLORE LUMORA →
            </a>
          </div>
        </div>

        <div className="scroll-indicator">
          SCROLL TO DISCOVER
        </div>
        
        <div className="location">
          <span>08° 39′ S</span>
          <span>INDONESIA</span>
        </div>
      </section>
      
      <Reveal>
       <Introduction />
      </Reveal>
      <Stays />
      <Experiences />
      <Dining />
      <OurStory />
      <Contact />
      <Reservation />
      <Footer /> 

    </main>
  )
}

export default App