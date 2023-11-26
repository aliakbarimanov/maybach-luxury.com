// import dataBase
import data from "../db/data";

// import react-icons
import { RxHamburgerMenu } from "react-icons/rx";
import { LiaSearchSolid } from "react-icons/lia";
import { CiHeart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoIosArrowDown } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { ImNotification } from "react-icons/im";

// import react hooks
import { useState } from "react";

// import logo
import Logo from "../assets/images/logo/maybach-logo.svg";

// import Link
import { Link } from "react-router-dom";

console.log(data[0].categories);

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [shoppingCart, setShoppingCart] = useState(false);
  const [languageList, setLanguageList] = useState(false);
  const [headerAccountBox, setHeaderAccountBox] = useState(false);
  const [searchBox, setSearchBox] = useState(false);
  const [hiddenNavList, setHiddenNavList] = useState(false);
  const [hiddenLogo, setHiddenLogo] = useState(false);

  const [open, setOpen] = useState({
    mobileMenu: false,
    shoppingCart: false,
    languageList: false,
    headerAccountBox: false,
    searchBox: false,
    hiddenNavList: false,
    hiddenLogo: false,
  });

  const clickSearch = () => {
    setSearchBox(!searchBox);
    setHiddenNavList(!hiddenNavList);
    setHiddenLogo(!hiddenLogo);
  };

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
              <li className="categoryItem">
                <Link to="#">
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
            <div
              className="burgerIcon"
              onClick={() => setOpen({ ...open, mobileMenu: true })}
            >
              <RxHamburgerMenu />
            </div>
            <div className={hiddenLogo ? "logo deactive" : "logo"}>
              <Link to="/">
                <img src={Logo} alt="Logo" />
              </Link>
            </div>
            <nav className="navBar">
              <ul className={hiddenNavList ? "navList deactive" : "navList"}>
                {data[0].categories.map((item) => (
                  <li className="navItem">
                    <Link to={`/category/${item.id}`}>{item.name}</Link>
                    <div className="dropDown">
                      <ul className="dropDownCard">
                        <li className="dropItem firstDropItem">
                          <Link to="#">Bags</Link>
                        </li>
                        <li className="dropItem">
                          <Link to="#">Bussines bags</Link>
                        </li>
                        <li className="dropItem">
                          <Link to="#">Travel bags</Link>
                        </li>
                        <li className="dropItem">
                          <Link to="#">Daypacks</Link>
                        </li>
                      </ul>
                      <ul className="dropDownCard">
                        <li className="dropItem firstDropItem">
                          <Link to="#">Bags</Link>
                        </li>
                        <li className="dropItem">
                          <Link to="#">Bussines bags</Link>
                        </li>
                        <li className="dropItem">
                          <Link to="#">Travel bags</Link>
                        </li>
                        <li className="dropItem">
                          <Link to="#">Daypacks</Link>
                        </li>
                      </ul>
                      <ul className="dropDownCard">
                        <li className="dropItem firstDropItem">
                          <Link to="#">Bags</Link>
                        </li>
                        <li className="dropItem">
                          <Link to="#">Bussines bags</Link>
                        </li>
                        <li className="dropItem">
                          <Link to="#">Travel bags</Link>
                        </li>
                        <li className="dropItem">
                          <Link to="#">Daypacks</Link>
                        </li>
                      </ul>
                      <ul className="dropDownCard">
                        <li className="dropItem firstDropItem">
                          <Link to="#">Bags</Link>
                        </li>
                        <li className="dropItem">
                          <Link to="#">Bussines bags</Link>
                        </li>
                        <li className="dropItem">
                          <Link to="#">Travel bags</Link>
                        </li>
                        <li className="dropItem">
                          <Link to="#">Daypacks</Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="preferences">
              <ul className="preferencesList">
                <li
                  className="preferencesItem language userItem"
                  onClick={() => {
                    setLanguageList(!languageList);
                  }}
                >
                  <span>EN</span>
                  <IoIosArrowDown className="arrowDown" />
                  <ul
                    className={
                      languageList ? "languageList active" : "languageList"
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
                  <button onClick={clickSearch}>
                    <LiaSearchSolid />
                  </button>
                </li>
                <li className="preferencesItem">
                  <a href="#">
                    <CiHeart />
                  </a>
                </li>
                <li className="preferencesItem userItem">
                  <button
                    onClick={() => {
                      setHeaderAccountBox(!headerAccountBox);
                    }}
                  >
                    <CiUser />
                  </button>
                  <div
                    className={
                      headerAccountBox
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
                  onClick={() => {
                    setShoppingCart(true);
                  }}
                >
                  <a href="#">
                    <HiOutlineShoppingBag />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={shoppingCart ? "shoppingCart active" : "shoppingCart"}>
        <button
          className="cartExitBtn"
          onClick={() => {
            setShoppingCart(false);
          }}
        >
          <IoIosArrowBack className="arrowBack" />
          <span>continue shopping</span>
        </button>
        <h2 className="shoppingCartTitle">Shopping cart</h2>
        <div className="emptyNotification">
          <div className="notificationTop">
            <ImNotification className="notificationIcon" />
            <span>Your shopping cart is empty</span>
          </div>
          <p className="notificationBottom">proceed to checkout</p>
        </div>
        <Link to="#" className="shoppingLink">
          Go to shopping cart
        </Link>
      </div>
      <div className={searchBox ? "searchBox active" : "searchBox"}>
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="Logo" />
          </Link>
        </div>
        <MdKeyboardArrowRight className="searchBoxIcon" />
        <input
          type="text"
          name="search"
          placeholder="Search all categories.."
        />
      </div>
    </header>
  );
};

export default Header;
