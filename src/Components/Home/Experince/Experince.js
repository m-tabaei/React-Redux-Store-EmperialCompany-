import { useDarkMode } from "../../DarkMode/DarkModeContext";

function Experince() {
  const { isDarkMode } = useDarkMode();
  return (

    <section className={`experience section ${isDarkMode ? 'dark-mode' : ''}`}>
      <h2 className="sectionTitle">
        Lorem ipsum dolor sit amet consectetur
        {' '}
        <br />
        lorem consectetur consectetur dolor sit amet consec
      </h2>

      <div className="experience_container container grid">
        <div className="experience_content grid">
          <div className="experienceData">
            <h2 className="experience_number">20</h2>
            <span className="experience_description">
              Year
              <br />
              Experience
            </span
              >
          </div>

          <div className="experienceData">
            <h2 className="experience_number">75</h2>
            <span className="experience_description">
              Complete
              <br />
              Sells
            </span
              >
          </div>

          <div className="experienceData">
            <h2 className="experience_number">650+</h2>
            <span className="experience_description">
              Number of
              <br />
              Costumer
            </span
              >
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experince;
