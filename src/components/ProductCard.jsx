// import images
import bagOne from "../assets/images/categories/bags/bagOne.webp";

// import react-icons
import { CiHeart } from "react-icons/ci";

// import Link;
import { Link } from "react-router-dom";

const ProductCard = () => {
  return (
    <div className="productCard">
      <CiHeart className="heartIcon" />
      <div className="productCardImg">
        <img src={bagOne} alt="product" />
      </div>
      <div className="productCardDetails">
        <h3 className="title">bag two</h3>
        <p className="description">Lorem ipsum dolor sit amet.</p>
        <div className="priceColorBox">
          <p className="price">C999,9*</p>
          <div className="colors">
            <p className="colorTitle">Available colors:</p>
            <ul className="colorList">
              <li className="colorItem">
                <Link to="/">Red</Link>
              </li>
              <li className="colorItem">
                <Link to="/">Black</Link>
              </li>
              <li className="colorItem">
                <Link to="/">Yellow</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
