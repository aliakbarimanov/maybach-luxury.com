// import react-icons
import { RxHamburgerMenu } from "react-icons/rx";
import { LiaSearchSolid } from "react-icons/lia";
import { CiHeart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoIosArrowDown } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

// import react hooks
import { useState } from "react";

// import logo
import Logo from "../assets/images/logo/maybach-logo.svg";

// import Link
import { Link } from "react-router-dom";

const Header = () => {

    const [mobileMenu, setMobileMenu] = useState(false);

    return (
        <section className="header">
            <div className={mobileMenu ? "mobileMenu active" : "mobileMenu"}>
                <button className="closeBtn" onClick={() => { setMobileMenu(false) }}>
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
                        <li className="categoryItem">
                            <Link to="#">
                                <span>men</span>
                                <MdKeyboardArrowRight className="rightIcon" />
                            </Link>
                        </li>
                        <li className="categoryItem">
                            <Link to="#">
                                <span>women</span>
                                <MdKeyboardArrowRight className="rightIcon" />
                            </Link>
                        </li>
                        <li className="categoryItem">
                            <Link to="#">
                                <span>accessories</span>
                                <MdKeyboardArrowRight className="rightIcon" />
                            </Link>
                        </li>
                        <li className="categoryItem">
                            <Link to="#">
                                <span>new</span>
                                <MdKeyboardArrowRight className="rightIcon" />
                            </Link>
                        </li>
                        <li className="categoryItem">
                            <Link to="#">
                                <span>fine writing</span>
                                <MdKeyboardArrowRight className="rightIcon" />
                            </Link>
                        </li>
                        <li className="categoryItem">
                            <Link to="#">
                                <span>eye wear</span>
                                <MdKeyboardArrowRight className="rightIcon" />
                            </Link>
                        </li>
                        <li className="categoryItem">
                            <Link to="#">
                                <span>saddlery</span>
                                <MdKeyboardArrowRight className="rightIcon" />
                            </Link>
                        </li>
                        <li className="categoryItem">
                            <Link to="#">
                                <span>boutiques</span>
                                <MdKeyboardArrowRight className="rightIcon" />
                            </Link>
                        </li>
                        <li className="categoryItem">
                            <Link to="#">
                                <span>about</span>
                                <MdKeyboardArrowRight className="rightIcon" />
                            </Link>
                        </li>
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
                        <div className="burgerIcon" onClick={() => { setMobileMenu(true) }}><RxHamburgerMenu /></div>
                        <div className="logo">
                            <Link to="/">
                                <img src={Logo} alt="Logo" />
                            </Link>
                        </div>
                        <nav className="navBar">
                            <ul className="navList">
                                <li className="navItem">
                                    <Link to="#">men</Link>
                                </li>
                                <li className="navItem">
                                    <Link to="#">women</Link>
                                </li>
                                <li className="navItem">
                                    <Link to="#">accessories</Link>
                                </li>
                                <li className="navItem">
                                    <Link to="#">new</Link>
                                </li>
                                <li className="navItem">
                                    <Link to="#">fine writing</Link>
                                </li>
                                <li className="navItem">
                                    <Link to="#">eye wear</Link>
                                </li>
                                <li className="navItem">
                                    <Link to="#">saddlery</Link>
                                </li>
                                <li className="navItem">
                                    <Link to="#">boutiques</Link>
                                </li>
                                <li className="navItem">
                                    <Link to="#">about</Link>
                                </li>
                            </ul>
                        </nav>
                        <div className="preferences">
                            <ul className="preferencesList">
                                <li className="preferencesItem language userItem">
                                    <span>EN</span>
                                    <IoIosArrowDown className="arrowDown" />
                                </li>
                                <li className="preferencesItem">
                                    <button><LiaSearchSolid /></button>
                                </li>
                                <li className="preferencesItem">
                                    <a href="#"><CiHeart /></a>
                                </li>
                                <li className="preferencesItem userItem">
                                    <button><CiUser /></button>
                                </li>
                                <li className="preferencesItem">
                                    <a href="#"><HiOutlineShoppingBag /></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Header;