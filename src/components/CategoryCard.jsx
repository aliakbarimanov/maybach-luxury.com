// import Link
import { Link } from "react-router-dom";

const CategoryCard = ({ data }) => {

  return (
    <Link
      to="#"
      className="categoryCard"
    >
      <div className="categoryCardOverlay"></div>
      <img src={data.image} alt={data.name} />
      <div className="categoryCardDescription">
        <h2 className="cardTitle">{data.name}</h2>
        <Link to={`${data.name}`} className="cardBtn">
          shop now
        </Link>
      </div>
    </Link>
  );
};

export default CategoryCard;
