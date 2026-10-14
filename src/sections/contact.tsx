
function Contact() {
  return (
    <section className="contact" id="booking">
      <div className="contact-container">
        <div className="contact-heading">
          <p className="section-label">CONTACT</p>

          <h2>Plan your arrival.</h2>

          <p>
            Whether you are planning a long stay, a family celebration,
            or a quiet escape, our team can help shape the details
            of your visit.
          </p>
        </div>

        <div className="contact-layout">
          <form className="contact-form">
            <div className="contact-fields">
              <label>
                <span>NAME</span>
                <input type="text" placeholder="Your full name" />
              </label>

              <label>
                <span>EMAIL</span>
                <input type="email" placeholder="Email address" />
              </label>

              <label>
                <span>ARRIVAL</span>
                <input type="text" placeholder="Preferred arrival date" />
              </label>

              <label>
                <span>GUESTS</span>
                <input type="number" min="1" placeholder="Number of guests" />
              </label>
            </div>

            <label className="contact-message">
              <span>MESSAGE</span>
              <textarea placeholder="Tell us about your stay" rows={5} />
            </label>

            <div className="contact-actions">
              <button type="submit">SEND ENQUIRY</button>
              <a href="/brochure.pdf" download>
                DOWNLOAD BROCHURE
              </a>
            </div>
          </form>

          <aside className="contact-info">
            <article className="contact-info-card">
              <p>LOCATION</p>
              <h3>Private Island, Indonesia</h3>
              <span>
                A secluded retreat where the horizon feels personal
                and the pace is yours alone.
              </span>
            </article>

            <article className="contact-info-card">
              <p>CONTACT</p>
              <h3>Email our team</h3>
              <span>
                Our team is available to help with stays,
                experiences, and private events.
              </span>
            </article>

            <article className="contact-info-card">
              <p>SOCIAL</p>
              <h3>Visit Instagram</h3>
              <span>
                Follow the island's rhythm, seasonal stories,
                and quiet moments from the resort.
              </span>
            </article>
          </aside>
        </div>
      </div>
    </section>
  )
}

export default Contact
