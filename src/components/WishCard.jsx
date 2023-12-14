// import redux toolkit
import { useDispatch } from "react-redux";
import { removeFromWishList } from "../redux/slice/wishListSlice";

// import react-icons
import { HiMiniXMark } from "react-icons/hi2";

// import Link;
import { Link } from "react-router-dom";

const WishCard = ({ data }) => {
  const dispatch = useDispatch();

  return (
    <div className="wishCard">
      <HiMiniXMark className="xIcon" onClick={()=>dispatch(removeFromWishList(data))}/>
      <Link
        to={`http://localhost:3000/product-details/${data.id}`}
        className="wishCardImg"
      >
        <img src={`http://localhost:5000/${data.productImage}`} alt={data.name} />
      </Link>
      <div className="wishCardDetails">
        <h3 className="title">{data.name}</h3>
        <p className="description">{data.about}</p>
        <p className="price">€ {data.price} *</p>
      </div>
    </div>
  );
};

export default WishCard;
