// import redux toolkit
import { useSelector } from "react-redux";

// import components
import WishCard from "../components/WishCard";

const WishList = () => {
  const wishListData = useSelector(state=>state.wishList.wishListData);

  return (
    <section className="wishListPage">
      <div className="container">
        <div className="row">
          <div className="wishListPageDetails">
            <h2 className="title">your wishlist</h2>
            <p className="description">
              Keep an eye on products you like by adding them to your wishlist.
            </p>
          </div>
          <ul className="wishList">
            {wishListData.map((item, id) => (
              <WishCard data={item} key={id} />
            ))}
          </ul>
          <p className={wishListData.length===0 ? "emptyNotification active" : "emptyNotification"}>Your wishlist is empty.</p>
        </div>
      </div>
    </section>
  );
};

export default WishList;
