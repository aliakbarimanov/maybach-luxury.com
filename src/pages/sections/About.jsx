// import components
import AboutCard from "../../components/AboutCard";

const About = () => {
    return (
        <section className="about">
            <div className="container">
                <div className="row">
                    <div className="leftSide">
                        <AboutCard />
                    </div>
                    <div className="rightSide">
                        <div className="smallCardsBox">
                            <div className="smallCard">
                                <AboutCard />
                            </div>
                            <div className="smallCard">
                                <AboutCard />
                            </div>
                        </div>
                        <div className="mediumCard">
                            <AboutCard />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;