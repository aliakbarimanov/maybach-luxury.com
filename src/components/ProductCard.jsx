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

  const existingProduct = wishListData.find((item) => item.id === data.id);

  return (
    <div className="productCard">
      <CiHeart
        className="heartIcon"
        onClick={() => dispatch(addToWishList(data))}
      />
      {existingProduct ? (
        <FaHeart
          className="heartIcon"
          onClick={() => dispatch(removeFromWishList(data))}
        />
      ) : (
        <CiHeart
          className="heartIcon"
          onClick={() => dispatch(addToWishList(data))}
        />
      )}
      <Link
        to={`http://localhost:3000/product-details/${data.id}`}
        className="productCardImg"
      >
        <img src={`http://localhost:5000/${data.productImage}`} alt={data.name} />
      </Link>
      <div className="productCardDetails">
        <h3 className="title">{data.name}</h3>
        <p className="description">If you’re looking for a unique gift or want to treat yourself.</p>
        <p className="price"> € {data.price} *</p>
      </div>
    </div>
  );
};

export default ProductCard;
