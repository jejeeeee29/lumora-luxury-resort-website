
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-brand">
          <a href="#" className="footer-logo">
            LUMORA
          </a>
          <p>A private escape in the heart of Indonesia.</p>
        </div>

        <div className="footer-column">
          <p className="footer-label">EXPLORE</p>
          <a href="#stays">STAYS</a>
          <a href="#experiences">EXPERIENCES</a>
          <a href="#dining">DINING</a>
          <a href="#our-story">OUR STORY</a>
          <a href="#booking">CONTACT</a>
        </div>

        <div className="footer-column">
          <p className="footer-label">CONNECT</p>
          <a href="https://instagram.com/" target="_blank" rel="noreferrer">
            INSTAGRAM ↗
          </a>
          <a href="mailto:hello@lumora.example">EMAIL ↗</a>
          <p>PRIVATE ISLAND, INDONESIA</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 LUMORA RESORT</p>
        <div>
          <a href="#privacy">PRIVACY</a>
          <a href="#terms">TERMS</a>
        </div>
        <a href="#top">BACK TO TOP ↑</a>
      </div>
    </footer>
  )
}

export default Footer
