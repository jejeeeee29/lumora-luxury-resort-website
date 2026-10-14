
function OurStory() {
  return (
    <section className="our-story" id="our-story">
      <div className="our-story-container">
        <div className="our-story-heading">
          <p className="section-label">OUR STORY</p>

          <h2>
            A resort built for the long
            <br />
            view.
          </h2>

          <p className="our-story-intro">
            LUMORA was created to feel timeless, not trendy.
            We believe that luxury is the absence of noise,
            the presence of nature, and the freedom to move slowly.
          </p>
        </div>

        <div className="our-story-feature">
          <div className="our-story-image">
            <img
              src="/images/our-story.png"
              alt="Tropical architecture surrounded by nature"
            />
          </div>

          <div className="our-story-content">
            <h3>Architecture that breathes.</h3>

            <p>
              Every residence is designed to open to the breeze,
              frame the horizon, and dissolve the boundary between
              indoors and out. The result is a sanctuary that feels
              private, peaceful, and deeply connected to the island.
            </p>

            <ul>
              <li>
                Private villas with ocean views and open-air living spaces.
              </li>
              <li>
                A curated pace that favors stillness over activity.
              </li>
              <li>
                Dining that celebrates the island's daily harvest.
              </li>
            </ul>

            <a href="#story" className="story-button">
              READ OUR STORY
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurStory
