
import Reveal from '../reveal'

function Stays() {
  return (
    <section className="stays" id="stays">
      <div className="stays-container">
        <div className="stays-heading">
          <p className="section-label">STAYS</p>

          <h2>Villas designed for stillness.</h2>

          <p className="stays-description">
            Each residence is a private world with ocean views,
            open-air living, and a quiet rhythm that feels entirely your own.
          </p>
        </div>

        <div className="villa-grid">
          <Reveal delay={0}>
            <article className="villa-card">
              <img
                src="/images/villa-pavilion.png"
                alt="Ocean Pavilion"
              />

              <div className="villa-card-content">
                <p className="villa-category">BEACHFRONT</p>

                <h3>Ocean Pavilion</h3>

                <p>
                  A light-filled residence with direct beach access,
                  a private pool, and views that begin at sunrise.
                </p>

                <a href="#booking">
                  EXPLORE <span>↗</span>
                </a>
              </div>
            </article>
          </Reveal>

          <Reveal delay={180}>
            <article className="villa-card">
              <img
                src="/images/villa-cliff.png"
                alt="Cliffside Villa"
              />

              <div className="villa-card-content">
                <p className="villa-category">HILLTOP</p>

                <h3>Cliffside Villa</h3>

                <p>
                  Elevated living with panoramic views, a private
                  terrace, and a sense of seclusion above the shore.
                </p>

                <a href="#booking">
                  EXPLORE <span>↗</span>
                </a>
              </div>
            </article>
          </Reveal>

          <Reveal delay={360}>
            <article className="villa-card">
              <img
                src="/images/villa-sunset.png"
                alt="Sunset Residence"
              />

              <div className="villa-card-content">
                <p className="villa-category">FAMILY</p>

                <h3>Sunset Residence</h3>

                <p>
                  A spacious retreat for longer stays, with generous
                  indoor-outdoor flow and sunset views across the water.
                </p>

                <a href="#booking">
                  EXPLORE <span>↗</span>
                </a>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default Stays
