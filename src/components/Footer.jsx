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
  const [firstList, setFirstList] = useState(false);
  const [secondList, setSecondList] = useState(false);
  const [thirdList, setThirdList] = useState(false);
  const [fourthList, setFourthList] = useState(false);

  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="footerTop">
            <div className="footerCardList">
              <div className={firstList ? "footerCard active" : "footerCard"}>
                <h2 className="footerCardTitle">
                  <span className="title">LEGAL NOTICES</span>
                  <span
                    className={firstList ? "plus deactive" : "plus"}
                    onClick={() => {
                      setFirstList(true);
                    }}
                  >
                    <FaPlus />
                  </span>
                  <span
                    className={firstList ? "minus active" : "minus"}
                    onClick={() => {
                      setFirstList(false);
                    }}
                  >
                    <FaMinus />
                  </span>
                </h2>
                <div className="linkList">
                  <Link to="/category/men/bags" className="footerCardLink">
                    IMPRINT
                  </Link>
                  <Link to="/category/men/bags" className="footerCardLink">
                    GENERAL TERMS AND CONDITIONS
                  </Link>
                  <Link to="/category/men/bags" className="footerCardLink">
                    COOKIE GUIDELINE
                  </Link>
                  <Link to="/category/men/bags" className="footerCardLink">
                    DATA PROTECTION
                  </Link>
                  <Link to="/category/men/bags" className="footerCardLink">
                    INSTRUCTIONS FOR CANCELLATION
                  </Link>
                </div>
              </div>
              <div className={secondList ? "footerCard active" : "footerCard"}>
                <h2 className="footerCardTitle">
                  <span className="title">MAYBACH ONLINE STORE</span>
                  <span
                    className={secondList ? "plus deactive" : "plus"}
                    onClick={() => {
                      setSecondList(true);
                    }}
                  >
                    <FaPlus />
                  </span>
                  <span
                    className={secondList ? "minus active" : "minus"}
                    onClick={() => {
                      setSecondList(false);
                    }}
                  >
                    <FaMinus />
                  </span>
                </h2>
                <div className="linkList">
                  <Link to="/category/men/bags" className="footerCardLink">
                    MEN
                  </Link>
                  <Link to="/category/men/bags" className="footerCardLink">
                    WOMEN
                  </Link>
                  <Link to="/category/men/bags" className="footerCardLink">
                    ACCESSORIES
                  </Link>
                  <Link to="/category/men/bags" className="footerCardLink">
                    SADDLERY
                  </Link>
                  <Link to="/category/men/bags" className="footerCardLink">
                    NEW
                  </Link>
                  <Link to="/category/men/bags" className="footerCardLink">
                    EYEWEAR
                  </Link>
                  <Link to="/category/men/bags" className="footerCardLink">
                    FINE WRITING
                  </Link>
                </div>
              </div>
              <div className={thirdList ? "footerCard active" : "footerCard"}>
                <h2 className="footerCardTitle">
                  <span className="title">CUSTOMER SERVICE</span>
                  <span
                    className={thirdList ? "plus deactive" : "plus"}
                    onClick={() => {
                      setThirdList(true);
                    }}
                  >
                    <FaPlus />
                  </span>
                  <span
                    className={thirdList ? "minus active" : "minus"}
                    onClick={() => {
                      setThirdList(false);
                    }}
                  >
                    <FaMinus />
                  </span>
                </h2>
                <div className="linkList">
                  <Link to="/category/men/bags" className="footerCardLink">
                    PAYMENT & PRICES
                  </Link>
                  <Link to="/category/men/bags" className="footerCardLink">
                    SHIPPING INFORMATION
                  </Link>
                  <Link to="/category/men/bags" className="footerCardLink">
                    STORE FINDER
                  </Link>
                  <Link to="/category/men/bags" className="footerCardLink">
                    ABOUT
                  </Link>
                  <Link to="/category/men/bags" className="footerCardLink">
                    CONTACT
                  </Link>
                  <Link to="/category/men/bags" className="footerCardLink">
                    NEWSLETTER
                  </Link>
                </div>
              </div>
              <div className={fourthList ? "footerCard active" : "footerCard"}>
                <h2 className="footerCardTitle">
                  <span className="title">STAY INFORMED</span>
                  <span
                    className={fourthList ? "plus deactive" : "plus"}
                    onClick={() => {
                      setFourthList(true);
                    }}
                  >
                    <FaPlus />
                  </span>
                  <span
                    className={fourthList ? "minus active" : "minus"}
                    onClick={() => {
                      setFourthList(false);
                    }}
                  >
                    <FaMinus />
                  </span>
                </h2>
                <div className="footerContact">
                  <p>Support and counselling via:</p>
                  <Link to="tel:+4903088676444">{`+49 (0) 30 88 67 64 44`}</Link>
                  <p>Mon-Fr 10:00-19:00 / Sat 10:00-18:00 CET</p>
                  <Link to="mailto:berlin@maybach-luxury.com">
                    berlin@maybach-luxury.com
                  </Link>
                </div>
                <div className="footerAbout">
                  <Link to="/category/men/bags" className="footerCardButton">
                    newsletter
                  </Link>
                  <p className="footerCardInfo">
                    Follow us and use the following social media platforms to
                    get in contact with us and to share your passion for the
                    brand, products and services of MAYBACH - Icons of Luxury
                  </p>
                </div>
              </div>
            </div>
            <ul className="socialLinksList">
              <li className="socialLink">
                <Link
                  target="_blank"
                  to="https://www.facebook.com/login.php?skip_api_login=1&api_key=966242223397117&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fsharer%2Fsharer.php%3Fu%3Dhttps%253A%252F%252Fwww.maybach-luxury.com%252Fen%252Ffull-grain-document-bag-the-adviser-i-yacht-blue%252F&cancel_url=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Fclose_window%2F%3Fapp_id%3D966242223397117%26connect%3D0%23_%3D_&display=popup&locale=ru_RU"
                >
                  <FaFacebookF className="socialIcon" />
                </Link>
              </li>
              <li className="socialLink">
                <Link
                  target="_blank"
                  to="https://www.youtube.com/user/maybachluxury"
                >
                  <FaYoutube className="socialIcon" />
                </Link>
              </li>
              <li className="socialLink">
                <Link
                  target="_blank"
                  to="https://www.instagram.com/maybachluxury"
                >
                  <FaInstagram className="socialIcon" />
                </Link>
              </li>
            </ul>
          </div>
          <div className="footerBottom">
            <div className="footerLogo">
              <img src={Logo} alt="Logo" />
            </div>
            <p className="footerBottomDesc">
              © {new Date().getFullYear()} MAYBACH Icons of Luxury GmbH | * All
              prices within the EU incl. VAT. Additional shipping costs and
              customs fees may apply.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
