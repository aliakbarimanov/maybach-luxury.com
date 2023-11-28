// import react-icons
import { CiHeart } from "react-icons/ci";

// import Link;
import { Link } from "react-router-dom";

const ProductCard = ({data}) => {

  return (
    <div className="productCard">
      <CiHeart className="heartIcon" />
      <Link to="#" className="productCardImg">
        <img src={data.image} alt="product" />
      </Link>
      <div className="productCardDetails">
        <h3 className="title">{data.name}</h3>
        <p className="description">{data.name}</p>
        <div className="priceColorBox">
          <p className="price">C999,9*</p>
          <div className="colors">
            <p className="colorTitle">Available colors:</p>
            <ul className="colorList">
              <li className="colorItem">
                <Link className="firstColor" to="/"></Link>
              </li>
              <li className="colorItem">
                <Link className="secondColor" to="/"></Link>
              </li>
              <li className="colorItem">
                <Link className="thirdColor" to="/"></Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
