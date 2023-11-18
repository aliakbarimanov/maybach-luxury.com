// import images
import bag from "../assets/images/about/bag.jpg";
import bags from "../assets/images/about/bags.jpg";
import eyewear from "../assets/images/about/eyewear.jpg";
import retroCars from "../assets/images/about/retroCars.jpg";

// import Link
import { Link } from "react-router-dom";

const AboutCard = () => {
    return (
        <div className="aboutCard">
            <img src={retroCars} alt="About image" />
            <Link to="#" className="cardOverlay">
                <div className="aboutCardDescription">
                    <h2 className="aboutCardTitle">the history</h2>
                    <Link to="#" className="aboutCardbtn">read more</Link>
                </div>
            </Link>
        </div>
    )
}

export default AboutCard;