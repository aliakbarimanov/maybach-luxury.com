// import data
import data from "../db/data";

// import provider
import { getSingleProduct } from "../api/ApiProvider";

// import redux toolkit
import { useDispatch, useSelector } from "react-redux";
import {
  addToWishList,
  removeFromWishList,
} from "../redux/slice/wishListSlice";
import { addToCard } from "../redux/slice/cardSlice";

// import react icons
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { CiDeliveryTruck } from "react-icons/ci";
import { CiGift } from "react-icons/ci";
import { CiCreditCard1 } from "react-icons/ci";

// import components
import ProductCard from "../components/ProductCard";

// import react hooks
import { useEffect, useState } from "react";

// import Link
import { Link, useParams } from "react-router-dom";

const ProductDetails = () => {
  const { productId } = useParams();
  const [productData, setProductData] = useState({});

  useEffect(() => {
    const getData = async () => {
      await getSingleProduct(productId)
        .then((res) => setProductData(res.data))
        .catch((err) => console.warn(err));
    };
    getData();
  }, []);

  // const productData = data[0].products.find(
  //   (item) => item.name === productName
  // );
  // const similarData = data[0].products.filter(
  //   (item) => item.subcategory === productData.subcategory
  // );

  const dispatch = useDispatch();

  const wishListData = useSelector((state) => state.wishList.wishListData);
  const existingWishProduct = wishListData.find(
    (item) => item.id === productData.id
  );

  const [activeDesc, setActiveDesc] = useState(true);
  const [activeDet, setActiveDet] = useState(false);

  const clickDesc = () => {
    setActiveDesc(true);
    setActiveDet(false);
  };

  const clickDet = () => {
    setActiveDesc(false);
    setActiveDet(true);
  };

  return (
    <section className="productDetails">
      <div className="container">
        <div className="row">
          <ul className="breadCrumbs">
            <li>
              <Link to="#">{productData.name}</Link>
            </li>
          </ul>
          <div className="productBody">
            <div className="productImages">
              <div className="smallImages">
                <img src={`http://localhost:5000/${productData.productImage}`} alt={productData.name} />
                <img src={`http://localhost:5000/${productData.productImage}`} alt={productData.name} />
                <img src={`http://localhost:5000/${productData.productImage}`} alt={productData.name} />
              </div>
              <div className="mainImage">
                <img src={`http://localhost:5000/${productData.productImage}`} alt={productData.name} />
                <IoIosArrowBack className="mainImageNavigation leftArrow" />
                <IoIosArrowForward className="mainImageNavigation rightArrow" />
              </div>
            </div>
            <div className="productAbout">
              {existingWishProduct ? (
                <FaHeart
                  className="heartIcon"
                  onClick={() => dispatch(removeFromWishList(productData))}
                />
              ) : (
                <CiHeart
                  className="heartIcon"
                  onClick={() => dispatch(addToWishList(productData))}
                />
              )}
              <h2 className="title">{productData.name}</h2>
              <p className="about">{productData.about}</p>
              <p className="price">{productData.price}</p>
              <div className="form">
                <button
                  className="addToCartBtn"
                  onClick={() => dispatch(addToCard(productData))}
                >
                  Add to shopping cart
                </button>
              </div>
              <ul className="socialList">
                <li className="socialIcon">
                  <Link to="#">
                    <FaFacebookF />
                  </Link>
                </li>
                <li className="socialIcon">
                  <Link to="#">
                    <CiTwitter />
                  </Link>
                </li>
                <li className="socialIcon">
                  <Link to="#">
                    <FaWhatsapp />
                  </Link>
                </li>
              </ul>
              <div className="productDescription">
                <div className="heads">
                  <h3
                    className={activeDesc ? "active" : ""}
                    onClick={clickDesc}
                  >
                    Description
                  </h3>
                  <h3 className={activeDet ? "active" : ""} onClick={clickDet}>
                    Details
                  </h3>
                </div>
                <div className="bodys">
                  <p
                    className={
                      activeDesc ? "descriptionBody active" : "descriptionBody"
                    }
                  >
                    {productData.description}
                  </p>
                  <div
                    className={activeDet ? "detailsBody active" : "detailsBody"}
                  >
                    <p>
                      <span>Color: </span>
                      <span>Blue</span>
                    </p>
                    <p>
                      <span>Material:</span>
                      <span>PEARL CALF LEATHER</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ul className="aboutOrderList">
            <li className="aboutItem">
              <CiDeliveryTruck className="itemIcon" />
              <h3 className="itemTitle">Title</h3>
              <p className="itemAbout">
                for orders of 300 Euros / 300 USD or more. Order today and we
                will send you the tracking number of our delivery partner(s)
                asap.
              </p>
            </li>
            <li className="aboutItem">
              <CiGift className="itemIcon" />
              <h3 className="itemTitle">Title</h3>
              <p className="itemAbout">
                for orders of 300 Euros / 300 USD or more. Order today and we
                will send you the tracking number of our delivery partner(s)
                asap.
              </p>
            </li>
            <li className="aboutItem">
              <CiCreditCard1 className="itemIcon" />
              <h3 className="itemTitle">Title</h3>
              <p className="itemAbout">
                for orders of 300 Euros / 300 USD or more. Order today and we
                will send you the tracking number of our delivery partner(s)
                asap.
              </p>
            </li>
          </ul>
          {/* <div className="similarProducts">
            <h2 className="similarTitle">Similar Products</h2>
            <ul className="productsList">
              {similarData.map((item, id) => (
                <ProductCard data={item} key={id} />
              ))}
            </ul>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
