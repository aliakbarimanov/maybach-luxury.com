// import images
import retroCars from "../assets/images/about/retroCars.jpg";

// import Link
import { Link } from "react-router-dom";

const AboutCard = (data) => {

    return (
        <div className="aboutCard">
            <img src={data.data.image} alt="About image" />
            <Link to="#" className="cardOverlay">
                <div className="aboutCardDescription">
                    <h2 className="aboutCardTitle">{data.data.title}</h2>
                    <Link to="#" className="aboutCardbtn">read more</Link>
                </div>
            </Link>
        </div>
    )
}

export default AboutCard;