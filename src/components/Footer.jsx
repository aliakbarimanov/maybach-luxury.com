// import react-icons
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

// import logo
import Logo from "../assets/images/logo/maybach-logo.svg";

// import useState
import { useState } from "react";

// import Link
import { Link } from "react-router-dom";

const Footer = () => {

    const [footerList, setFooterList] = useState(false);

    const setTrue = () => setFooterList(true);
    const setFalse = () => setFooterList(false);

    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="footerTop">
                        <div className="footerCardList">
                            <div className={footerList ? "footerCard active" : "footerCard"}>
                                <h2 className="footerCardTitle">
                                    <span className="title">LEGAL NOTICES</span>
                                    <span className={footerList ? "plus deactive" : "plus"} onClick={setTrue}><FaPlus /></span>
                                    <span className={footerList ? "minus active" : "minus"} onClick={setFalse}><FaMinus /></span>
                                </h2>
                                <div className="linkList">
                                    <Link to="#" className="footerCardLink">IMPRINT</Link>
                                    <Link to="#" className="footerCardLink">GENERAL TERMS AND CONDITIONS</Link>
                                    <Link to="#" className="footerCardLink">COOKIE GUIDELINE</Link>
                                    <Link to="#" className="footerCardLink">DATA PROTECTION</Link>
                                    <Link to="#" className="footerCardLink">INSTRUCTIONS FOR CANCELLATION</Link>
                                </div>
                            </div>
                            <div className={footerList ? "footerCard active" : "footerCard"}>
                                <h2 className="footerCardTitle">
                                    <span className="title">MAYBACH ONLINE STORE</span>
                                    <span className={footerList ? "plus deactive" : "plus"} onClick={setTrue}><FaPlus /></span>
                                    <span className={footerList ? "minus active" : "minus"} onClick={setFalse}><FaMinus /></span>
                                </h2>
                                <div className="linkList">
                                    <Link to="#" className="footerCardLink">MEN</Link>
                                    <Link to="#" className="footerCardLink">WOMEN</Link>
                                    <Link to="#" className="footerCardLink">ACCESSORIES</Link>
                                    <Link to="#" className="footerCardLink">SADDLERY</Link>
                                    <Link to="#" className="footerCardLink">NEW</Link>
                                    <Link to="#" className="footerCardLink">EYEWEAR</Link>
                                    <Link to="#" className="footerCardLink">FINE WRITING</Link>
                                </div>
                            </div>
                            <div className={footerList ? "footerCard active" : "footerCard"}>
                                <h2 className="footerCardTitle">
                                    <span className="title">CUSTOMER SERVICE</span>
                                    <span className={footerList ? "plus deactive" : "plus"} onClick={setTrue}><FaPlus /></span>
                                    <span className={footerList ? "minus active" : "minus"} onClick={setFalse}><FaMinus /></span>
                                </h2>
                                <div className="linkList">
                                    <Link to="#" className="footerCardLink">PAYMENT & PRICES</Link>
                                    <Link to="#" className="footerCardLink">SHIPPING INFORMATION</Link>
                                    <Link to="#" className="footerCardLink">STORE FINDER</Link>
                                    <Link to="#" className="footerCardLink">ABOUT</Link>
                                    <Link to="#" className="footerCardLink">CONTACT</Link>
                                    <Link to="#" className="footerCardLink">NEWSLETTER</Link>
                                </div>
                            </div>
                            <div className={footerList ? "footerCard active" : "footerCard"}>
                                <h2 className="footerCardTitle">
                                    <span className="title">STAY INFORMED</span>
                                    <span className={footerList ? "plus deactive" : "plus"} onClick={setTrue}><FaPlus /></span>
                                    <span className={footerList ? "minus active" : "minus"} onClick={setFalse}><FaMinus /></span>
                                </h2>
                                <div className="footerContact">
                                    <p>Support and counselling via:</p>
                                    <Link to="tel:+4903088676444">{`+49 (0) 30 88 67 64 44`}</Link>
                                    <p>Mon-Fr 10:00-19:00 / Sat 10:00-18:00 CET</p>
                                    <Link to="mailto:berlin@maybach-luxury.com">berlin@maybach-luxury.com</Link>
                                </div>
                                <div className="footerAbout">
                                    <Link to="#" className="footerCardButton">newsletter</Link>
                                    <p className="footerCardInfo">Follow us and use the following social media platforms to get in contact with us and to share your passion for the brand, products and services of MAYBACH - Icons of Luxury</p>
                                </div>
                            </div>
                        </div>
                        <ul className="socialLinksList">
                            <li className="socialLink">
                                <Link to="#"><FaFacebookF className="socialIcon" /></Link>
                            </li>
                            <li className="socialLink">
                                <Link to="#"><FaYoutube className="socialIcon" /></Link>
                            </li>
                            <li className="socialLink">
                                <Link to="#"><FaInstagram className="socialIcon" /></Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footerBottom">
                        <div className="footerLogo">
                            <img src={Logo} alt="Logo" />
                        </div>
                        <p className="footerBottomDesc">
                            © 2020 MAYBACH Icons of Luxury GmbH | * All prices within the EU incl. VAT. Additional shipping costs and customs fees may apply.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;