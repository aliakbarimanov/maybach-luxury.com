import bussineBag from "../assets/images/categories/bags/bussineBag.webp";

// import react icons
import { FaArrowLeftLong } from "react-icons/fa6";
import { HiMiniXMark } from "react-icons/hi2";
import { IoMdCheckmark } from "react-icons/io";

// import Link
import { Link } from "react-router-dom";

const ShoppingCart = () => {
  return (
    <section className="shoppingCart">
      <div className="container">
        <div className="row">
          <div className="shoppingCartAbout">
            <h2 className="shoppingCartTitle">shopping cart</h2>
            <div className="shoppingCartDetails">
              <span className="detailsHeader">
                If you should have any questions, or need support, please do not
                hesitate to get in touch:
              </span>
              <p>
                Tel.:<Link to="#">+49 (30) 891 222 6</Link>
              </p>
              <p>
                Email:<Link to="#">shop@maybach-luxury.com</Link>
              </p>
              <span className="detailsHeader">
                MAYBACH – Icons of Luxury accepts:
              </span>
              <p>Visa, Mastercard, Amex, Paypal, Maestro</p>
              <span className="detailsHeader">Secure shopping:</span>
              <p>
                Your data privacy is important to us – please see our data
                protection guidelines to find out how we protect your personal
                data.
              </p>
            </div>
            <Link to="#" className="backShoppingBtn">
              <FaArrowLeftLong className="backShoppingIcon" />
              <span>contiune shopping</span>
            </Link>
          </div>
          <div className="cartDetails">
            <table className="cartTable">
              <thead>
                <th>Product</th>
                <th>Quantity</th>
                <th>unit price</th>
                <th>Subtotal</th>
              </thead>
              <tbody>
                <tr>
                  <td className="tableMainBox">
                    <div className="imgBox">
                      <img src={bussineBag} alt="#" />
                    </div>
                    <div className="tableAbout">
                      <p className="tableAboutTitle">the cocon bag</p>
                      <p>categ</p>
                      <p>color</p>
                    </div>
                  </td>
                  <td>
                    <select>
                      <option>1</option>
                    </select>
                  </td>
                  <td className="tableUnitPriceBox">USD 1.200*</td>
                  <td className="tableTotalPriceBox">USD 1.222*</td>
                  <HiMiniXMark className="xIcon" />
                </tr>
              </tbody>
            </table>
            <div className="priceDetails">
              <p>
                <span>total</span>
                <span>2.222</span>
              </p>
              <p>
                <span>shipping costs</span>
                <span>2.222</span>
              </p>
              <p>
                <span>net total</span>
                <span>2.222</span>
              </p>
              <p>
                <span>grand total</span>
                <span>2.222</span>
              </p>
              <div className="btns">
                <div className="giftForm">
                  <input
                    type="text"
                    name="giftcard"
                    placeholder="Enter gift card number or discount code..."
                  />
                  <button>
                    <IoMdCheckmark />
                  </button>
                </div>
                <button className="checkout">proceed to checkout</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShoppingCart;
