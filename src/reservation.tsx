
function Reservation() {
  return (
    <section className="reservation" id="reservation">
      <div className="reservation-container">
        <div className="reservation-heading">
          <p className="section-label">RESERVATION</p>

          <h2>Begin your stay.</h2>

          <p>
            Choose your dates, select your residence, and let us
            prepare a stay that feels tailored to your arrival.
          </p>
        </div>

        <form
          className="reservation-form"
          onSubmit={(event) => event.preventDefault()}
        >
          <label>
            <span>ARRIVAL</span>
            <input type="date" required />
          </label>

          <label>
            <span>DEPARTURE</span>
            <input type="date" required />
          </label>

          <label>
            <span>GUESTS</span>
            <select defaultValue="2 adults">
              <option>1 adult</option>
              <option>2 adults</option>
              <option>3 adults</option>
              <option>4 adults</option>
              <option>5+ guests</option>
            </select>
          </label>

          <label>
            <span>RESIDENCE</span>
            <select defaultValue="">
              <option value="" disabled>Select residence</option>
              <option>Ocean Pavilion</option>
              <option>Cliffside Villa</option>
              <option>Sunset Residence</option>
            </select>
          </label>
        </form>

        <div className="reservation-bottom">
          <p>PLAN YOUR ESCAPE</p>

          <div className="reservation-actions">
            <button
              type="button"
              onClick={() => {
                document
                  .getElementById('booking')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              CHECK AVAILABILITY
            </button>

            <a href="#booking">CONTACT US</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Reservation
