
import Reveal from '../reveal'

function Experiences() {
  return (
    <section className="experiences" id="experiences">
      <div className="experiences-container">
        <div className="experiences-heading">
          <p className="section-label">EXPERIENCES</p>

          <h2>Days shaped by the tides.</h2>

          <p className="experiences-description">
            From sunrise sailing to sunset rituals, every experience
            is designed to reconnect you with the island and the moment.
          </p>
        </div>

        <div className="experience-grid">
          <Reveal delay={0}>
            <article className="experience-card">
              <img
                src="/images/sailing.png"
                alt="Sunrise sailing"
              />

              <div className="experience-card-content">
                <p className="experience-time">MORNING</p>
                <h3>Sunrise Sailing</h3>
                <p>
                  Begin the day with calm waters, warm light, and a quiet
                  passage across the island's outer reef.
                </p>
              </div>
            </article>
          </Reveal>

          <Reveal delay={180}>
            <article className="experience-card">
              <img
                src="/images/island-walk.png"
                alt="Island walk"
              />

              <div className="experience-card-content">
                <p className="experience-time">AFTERNOON</p>
                <h3>Island Walk</h3>
                <p>
                  Follow a guided path through the island's interior,
                  with stories of the landscape, the sea, and the seasons.
                </p>
              </div>
            </article>
          </Reveal>

          <Reveal delay={360}>
            <article className="experience-card">
              <img
                src="/images/sunset-ritual.png"
                alt="Sunset ritual"
              />

              <div className="experience-card-content">
                <p className="experience-time">EVENING</p>
                <h3>Sunset Ritual</h3>
                <p>
                  Gather at the water's edge for a gentle close to the day,
                  with firelight, sound, and the changing sky.
                </p>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default Experiences
