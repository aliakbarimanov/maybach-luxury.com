// import dataBase
import data from "../db/data";

// import react-icons
import { RxHamburgerMenu } from "react-icons/rx";
import { CiHeart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoIosArrowDown } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { ImNotification } from "react-icons/im";
import { HiMiniXMark } from "react-icons/hi2";

// import redux toolkit
import { useSelector } from "react-redux";
import { removeFromCard } from "../redux/slice/cardSlice";
import { useDispatch } from "react-redux";

// import react hooks
import { useEffect, useState } from "react";

// import logo
import Logo from "../assets/images/logo/maybach-logo.svg";

// import Link
import { Link } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState({
    mobileMenu: false,
    shoppingCart: false,
    languageList: false,
    headerAccountBox: false,
    hiddenNavList: false,
    hiddenLogo: false,
  });

  const cardListData = useSelector((state) => state.card.cardListData);

  const [cardTotalQuantity, setCartTotalQuantity] = useState(0);
  const [cardSubTotalPrice, setCardSubTotalPrice] = useState(0);

  useEffect(() => {
    const cardQuantities = cardListData.map((item) => item.quantity);
    const cardTotalQuantity = cardQuantities.reduce(
      (acc, curr) => acc + curr,
      0
    );
    setCartTotalQuantity(cardTotalQuantity);

    const cardTotalPrice = cardListData.map(
      (item) => item.price.replace(",", "") * item.quantity
    );
    const cardSubTotalPrice = cardTotalPrice.reduce(
      (acc, curr) => acc + curr,
      0
    );
    setCardSubTotalPrice(cardSubTotalPrice);
  }, [cardListData]);

  const wishListData = useSelector((state) => state.wishList.wishListData);

  const dispatch = useDispatch();

  return (
    <header className="header">
      <div className={open.mobileMenu ? "mobileMenu active" : "mobileMenu"}>
        <button
          className="closeBtn"
          onClick={() => setOpen({ ...open, mobileMenu: false })}
        >
          <span>close menu</span>
          <IoMdClose className="closeIcon" />
        </button>
        <ul className="countryButtonsList">
          <li className="countryBtn">
            <button>
              <span>EN</span>
              <IoIosArrowDown className="downIcon" />
            </button>
          </li>
          <li className="countryBtn">
            <button>
              <span>C</span>
              <IoIosArrowDown className="downIcon" />
            </button>
          </li>
        </ul>
        <div className="categorySection">
          <h2 className="categoryTitle">categories</h2>
          <ul className="categoryList">
            {data[0].categories.map((item) => (
              <li className="categoryItem" key={item.id}>
                <Link to={`/category/${item.name}`}>
                  <span>{item.name}</span>
                  <MdKeyboardArrowRight className="rightIcon" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="accountBox">
          <h2 className="accountTitle">my account</h2>
          <Link className="loginLink">login</Link>
          <div className="signUpBox">
            <span>or</span>
            <Link className="signUpLink">sign up</Link>
          </div>
        </div>
      </div>
      <div className="headerOverlay">
        <div className="container">
          <div className="row">
            <div className="burgerIcon">
              <RxHamburgerMenu
                className="icon"
                onClick={() => setOpen({ ...open, mobileMenu: true })}
              />
            </div>
            <div className={open.hiddenLogo ? "logo deactive" : "logo"}>
              <Link to="/">
                <img src={Logo} alt="Logo" />
              </Link>
            </div>
            <nav className="navBar">
              <ul
                className={open.hiddenNavList ? "navList deactive" : "navList"}
              >
                {data[0].categories?.map((item) => (
                  <li className="navItem" key={item.id}>
                    <Link to={`/category/${item.name}`}>{item.name}</Link>
                    <div className="dropDown">
                      {item.categories?.map((categories) => (
                        <ul className="dropDownCard" key={categories.id}>
                          <Link
                            to="/category/men/bags"
                            className="dropDownLink"
                          >
                            {categories.name}
                          </Link>
                          <ul className="dropDownList">
                            {categories.categories?.map((subCategory) => (
                              <li className="dropItem" key={subCategory.id}>
                                <Link to="/category/men/bags">
                                  {subCategory.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </ul>
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="preferences">
              <ul className="preferencesList">
                <li
                  className="preferencesItem language userItem"
                  onClick={() =>
                    setOpen({ ...open, languageList: !open.languageList })
                  }
                >
                  <span>EN</span>
                  <IoIosArrowDown className="arrowDown" />
                  <ul
                    className={
                      open.languageList ? "languageList active" : "languageList"
                    }
                  >
                    <li className="languageItem">
                      <button>DEUTSCH</button>
                    </li>
                    <li className="languageItem">
                      <button>ENGLISH</button>
                    </li>
                  </ul>
                </li>
                <li className="preferencesItem">
                  <Link to="/wishlist">
                    <CiHeart />
                  </Link>
                  {wishListData.length > 0 && (
                    <span className="wishListCount">{wishListData.length}</span>
                  )}
                </li>
                <li className="preferencesItem userItem">
                  <button
                    onClick={() =>
                      setOpen({
                        ...open,
                        headerAccountBox: !open.headerAccountBox,
                      })
                    }
                  >
                    <CiUser />
                  </button>
                  <div
                    className={
                      open.headerAccountBox
                        ? "headerAccountBox active"
                        : "headerAccountBox"
                    }
                  >
                    <h2 className="title">my account</h2>
                    <Link to="#" className="login">
                      Login
                    </Link>
                    <div className="signUpBox">
                      <span>or</span>
                      <Link to="#">sign up</Link>
                    </div>
                  </div>
                </li>
                <li
                  className="preferencesItem"
                  onClick={() => setOpen({ ...open, shoppingCart: true })}
                >
                  <div className="shoppingIcon">
                    <HiOutlineShoppingBag />
                  </div>
                  {cardTotalQuantity > 0 && (
                    <span className="shoppingCount">{cardTotalQuantity}</span>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div
        className={open.shoppingCart ? "shoppingCart active" : "shoppingCart"}
      >
        <button
          className="cartExitBtn"
          onClick={() => setOpen({ ...open, shoppingCart: false })}
        >
          <IoIosArrowBack className="arrowBack" />
          <span>continue shopping</span>
        </button>
        <h2 className="shoppingCartTitle">Shopping cart</h2>
        {cardListData.length === 0 ? (
          <>
            <div className="emptyNotification">
              <div className="notificationTop">
                <ImNotification className="notificationIcon" />
                <span>Your shopping cart is empty</span>
              </div>
              <p className="notificationBottom">browse products</p>
            </div>
            <Link
              to="/category/men/bags"
              className="shoppingLink"
              onClick={() => setOpen({ ...open, shoppingCart: false })}
            >
              Go to shopping
            </Link>
          </>
        ) : (
          <>
            <ul className="cardProductList">
              {cardListData.map((item, id) => (
                <li className="cardProductItem" key={id}>
                  <HiMiniXMark
                    className="cardProductIcon"
                    onClick={() => dispatch(removeFromCard(item))}
                  />
                  <div className="cardItemTop">
                    <div className="cardItemImage">
                      <img
                        src={`http://localhost:5000/${item.productImage}`}
                        alt={item.name}
                      />
                    </div>
                    <h4 className="cardItemTitle">{item.name}</h4>
                  </div>
                  <p className="cardItemPrice">€ {item.price} *</p>
                  <p className="productQuantity">
                    Quantity: <span>{item.quantity}</span>
                  </p>
                </li>
              ))}
            </ul>
            <div className="subTotal">
              <span>subtotal</span>
              <span>€ {cardSubTotalPrice}</span>
            </div>
            <div className="shippingCosts">
              <span>shipping costs +1%</span>
              <span>€ {cardSubTotalPrice * 0.01}</span>
            </div>
            <p className="shippingInfo">
              * Prices excl. VAT plus shipping costs
            </p>
            <Link to="/shopping-cart" className="cartLink">
              Go to shopping cart
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
