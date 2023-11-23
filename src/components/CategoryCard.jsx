// import images
import men from "../assets/images/shopping/men.jpg";

// import Link
import { Link } from "react-router-dom";

const CategoryCard = () => {
    return (
        <div className="categoryCard">
            <div className="categoryCardOverlay"></div>
            <img src={men} alt="Category image" />
            <div className="categoryCardDescription">
                <h2 className="cardTitle">men</h2>
                <Link className="cardBtn">shop now</Link>
            </div>
        </div>
    )
}

export default CategoryCard;