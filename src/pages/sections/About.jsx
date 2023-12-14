// import data
import data from "../../db/data";

// import components
import AboutCard from "../../components/AboutCard";

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="row">
          <div className="leftSide">
            <AboutCard data={data[0].about[0]} />
          </div>
          <div className="rightSide">
            <div className="smallCardsBox">
              <div className="smallCard">
                <AboutCard data={data[0].about[1]} />
              </div>
              <div className="smallCard">
                <AboutCard data={data[0].about[2]} />
              </div>
            </div>
            <div className="mediumCard">
              <AboutCard data={data[0].about[3]} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
