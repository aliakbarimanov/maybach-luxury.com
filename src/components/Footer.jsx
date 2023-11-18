// import Link
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="footerTop">
                        <div className="footerCard">
                            <h2 className="footerCardTitle">LEGAL NOTICES</h2>
                            <Link to="#" className="footerCardLink">IMPRINT</Link>
                            <Link to="#" className="footerCardLink">GENERAL TERMS AND CONDITIONS</Link>
                            <Link to="#" className="footerCardLink">COOKIE GUIDELINE</Link>
                            <Link to="#" className="footerCardLink">DATA PROTECTION</Link>
                            <Link to="#" className="footerCardLink">INSTRUCTIONS FOR CANCELLATION</Link>
                        </div>
                        <div className="footerCard">
                            <h2 className="footerCardTitle">MAYBACH ONLINE STORE</h2>
                            <Link to="#" className="footerCardLink">MEN</Link>
                            <Link to="#" className="footerCardLink">WOMEN</Link>
                            <Link to="#" className="footerCardLink">ACCESSORIES</Link>
                            <Link to="#" className="footerCardLink">SADDLERY</Link>
                            <Link to="#" className="footerCardLink">NEW</Link>
                            <Link to="#" className="footerCardLink">EYEWEAR</Link>
                            <Link to="#" className="footerCardLink">FINE WRITING</Link>
                        </div>
                        <div className="footerCard">
                            <h2 className="footerCardTitle">CUSTOMER SERVICE</h2>
                            <Link to="#" className="footerCardLink">PAYMENT & PRICES</Link>
                            <Link to="#" className="footerCardLink">SHIPPING INFORMATION</Link>
                            <Link to="#" className="footerCardLink">STORE FINDER</Link>
                            <Link to="#" className="footerCardLink">ABOUT</Link>
                            <Link to="#" className="footerCardLink">CONTACT</Link>
                            <Link to="#" className="footerCardLink">NEWSLETTER</Link>
                        </div>
                        <div className="footerCard">
                            <h2 className="footerCardTitle">STAY INFORMED</h2>
                            <Link to="#" className="footerCardLink">l1</Link>
                            <Link to="#" className="footerCardLink">l2</Link>
                            <Link to="#" className="footerCardLink">l3</Link>
                            <Link to="#" className="footerCardLink">l4</Link>
                            <Link to="#" className="footerCardLink">l5</Link>
                        </div>
                    </div>
                    <div className="footerBottom">
                        <div className="footerLogo">
                            <img src="#" alt="Logo" />
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