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

// import provider
import { getProducts } from "../api/ApiProvider";

const ProductDetails = () => {
  const { productId } = useParams();
  const [productData, setProductData] = useState({});
  const [similarData, setSimilarData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      await getSingleProduct(productId)
        .then((res) => setProductData(res.data))
        .catch((err) => console.warn(err));
    };
    getData();
  }, []);

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

  useEffect(() => {
    const getProductsList = async () => {
      await getProducts()
        .then((res) => {
          setSimilarData(res.data.slice(0, 3));
        })
        .catch((err) => {
          console.warn(err);
        });
    };
    getProductsList();
  }, []);

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
            <div className="mainImage">
              <img
                src={`http://localhost:5000/${productData.productImage}`}
                alt={productData.name}
              />
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
              <p className="price">€ {productData.price} *</p>
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
                  <Link
                    target="_blank"
                    to="https://www.facebook.com/login.php?skip_api_login=1&api_key=966242223397117&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fsharer%2Fsharer.php%3Fu%3Dhttps%253A%252F%252Fwww.maybach-luxury.com%252Fen%252Ffull-grain-document-bag-the-adviser-i-yacht-blue%252F&cancel_url=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Fclose_window%2F%3Fapp_id%3D966242223397117%26connect%3D0%23_%3D_&display=popup&locale=ru_RU"
                  >
                    <FaFacebookF />
                  </Link>
                </li>
                <li className="socialIcon">
                  <Link
                    target="_blank"
                    to="https://twitter.com/intent/tweet?text=Handcrafted%20full%20grain%20leather%20business%20bag%20%7C%20Exclusive%20design%20by%20MAYBACH%20-%20Icons%20of%20Luxury&url=https%3A%2F%2Fwww.maybach-luxury.com%2Fen%2Ffull-grain-document-bag-the-adviser-i-yacht-blue%2F"
                  >
                    <CiTwitter />
                  </Link>
                </li>
                <li className="socialIcon">
                  <Link
                    target="_blank"
                    to="whatsapp://send?text=Handcrafted%20full%20grain%20leather%20business%20bag%20%7C%20Exclusive%20design%20by%20MAYBACH%20-%20Icons%20of%20Luxury%20https%3A%2F%2Fwww.maybach-luxury.com%2Fen%2Ffull-grain-document-bag-the-adviser-i-yacht-blue%2F"
                  >
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
                    {productData.details}
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
          <div className="similarProducts">
            <h2 className="similarTitle">Similar Products</h2>
            <ul className="productsList">
              {similarData.map((item, id) => (
                <ProductCard data={item} key={id} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
