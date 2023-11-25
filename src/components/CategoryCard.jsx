// import Link
import { Link } from "react-router-dom";

const CategoryCard = ({data}) => {
    return (
        <div className="categoryCard">
            <div className="categoryCardOverlay"></div>
            <img src={data.image} alt="Category image" />
            <div className="categoryCardDescription">
                <h2 className="cardTitle">{data.name}</h2>
                <Link className="cardBtn">shop now</Link>
            </div>
        </div>
    )
}

export default CategoryCard;