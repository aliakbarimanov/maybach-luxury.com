// import react-icons
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa6";

// import Link;
import { Link } from "react-router-dom";

// import Context
import { Context } from "../utils/WishListContext";
import { useContext } from "react";

const ProductCard = ({ data }) => {
  const { addToWishList, wishList } = useContext(Context);
  const existingProduct = wishList.find(item=>item.id===data.id);

  return (
    <div className="productCard">
      {
        existingProduct ? (
          <FaHeart className="heartIcon" onClick={()=>addToWishList(data)}/>
        ) : (
          <CiHeart className="heartIcon" onClick={()=>addToWishList(data)}/>
        )
      }
      <Link
        to={`http://localhost:3000/product-details/${data.name}`}
        className="productCardImg"
      >
        <img src={data.image} alt={data.name} />
      </Link>
      <div className="productCardDetails">
        <h3 className="title">{data.name}</h3>
        <p className="description">{data.about}</p>
        <div className="priceColorBox">
          <p className="price">C{data.price}*</p>
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
