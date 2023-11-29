// import components
import WishCard from "../components/WishCard";

// import react hooks
import { useContext } from "react";

// import Context
import { Context } from "../utils/WishListContext";

const WishList = () => {
  const { wishList } = useContext(Context);

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
            {wishList.map((item, id) => (
              <WishCard data={item} key={id} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WishList;
