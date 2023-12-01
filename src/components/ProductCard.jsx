// import redux toolkit
import { useDispatch, useSelector } from "react-redux";
import {
  addToWishList,
  removeFromWishList,
} from "../redux/slice/wishListSlice";

// import react-icons
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa6";

// import Link;
import { Link } from "react-router-dom";

const ProductCard = ({ data }) => {
  const dispatch = useDispatch();
  const wishListData = useSelector((state) => state.wishList.wishListData);

  const existingProduct = wishListData.find(item=>item.id===data.id);

  return (
    <div className="productCard">
      <CiHeart className="heartIcon" onClick={()=>dispatch(addToWishList(data))}/>
      {
        existingProduct ? (
          <FaHeart className="heartIcon" onClick={()=>dispatch(removeFromWishList(data))}/>
        ) : (
          <CiHeart className="heartIcon" onClick={()=>dispatch(addToWishList(data))}/>
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
