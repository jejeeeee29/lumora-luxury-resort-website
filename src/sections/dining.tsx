
function Dining() {
  return (
    <section className="dining" id="dining">
      <div className="dining-container">
        <div className="dining-heading">
          <p className="section-label">DINING</p>

          <h2>Flavors rooted in the island.</h2>

          <p>
            LUMORA's dining is guided by the day's catch,
            the garden's harvest, and the simple pleasure
            of eating close to the sea.
          </p>
        </div>

        <div className="dining-feature">
          <div className="dining-image">
            <img
              src="/images/dining.png"
              alt="Ocean view at LUMORA"
            />
          </div>

          <div className="dining-content">
            <h3>Sea-to-table simplicity.</h3>

            <p className="dining-description">
              Menus are shaped by the morning's catch, the island garden,
              and a preference for honest, uncomplicated flavors that let
              the ingredients speak.
            </p>

            <div className="dining-hours">
              <div>
                <span>BREAKFAST</span>
                <span>Hours to confirm</span>
              </div>

              <div>
                <span>LUNCH</span>
                <span>Hours to confirm</span>
              </div>

              <div>
                <span>DINNER</span>
                <span>Hours to confirm</span>
              </div>
            </div>

            <div className="dining-actions">
              <a href="#booking" className="dining-button">
                VIEW DINING
              </a>

              <a href="#booking" className="dining-button dining-button-outline">
                PRIVATE DINING
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Dining
