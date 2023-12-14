// import data
import data from "../db/data";

// import redux toolkit
import { removeFromCard } from "../redux/slice/cardSlice";
import { useDispatch } from "react-redux";

// import react icons
import { FaArrowLeftLong } from "react-icons/fa6";
import { HiMiniXMark } from "react-icons/hi2";
import { IoMdCheckmark } from "react-icons/io";

// import Link
import { Link } from "react-router-dom";

// import redux
import { useSelector } from "react-redux/es/hooks/useSelector";

// import react hooks
import { useState, useEffect } from "react";

const ShoppingCart = () => {
  const dispatch = useDispatch();

  const [inputErr, setInputErr] = useState(false);
  const [saleCode, setSaleCode] = useState("");
  const [shippingCost, setShippingCost] = useState("");
  const cardListData = useSelector((state) => state.card.cardListData);
  const [cardSubTotalPrice, setCardSubTotalPrice] = useState(0);
  const [cardNet, setCardNet] = useState(0);
  const [sale, setSale] = useState(false);

  useEffect(() => {
    const cardTotalPrice = cardListData.map(
      (item) => item.price.replace(",", "") * item.quantity
    );
    const cardSubTotalPrice = cardTotalPrice.reduce(
      (acc, curr) => acc + curr,
      0
    );
    setCardSubTotalPrice(cardSubTotalPrice);
    setShippingCost(cardSubTotalPrice * 0.01);
  }, [cardListData]);

  // calcSale function
  const calcSale = () => {
    if (saleCode === data[0].promocode) {
      setCardNet((cardSubTotalPrice+shippingCost) * 0.95);
      setSale(true);
      setInputErr(false);
    } else {
      setInputErr(true);
    }
  };

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
            <Link to="/category/men/bags" className="backShoppingBtn">
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
                {cardListData.map((item) => (
                  <tr>
                    <td className="tableMainBox">
                      <div className="imgBox">
                        <img
                          src={`http://localhost:5000/${item.productImage}`}
                          alt={item.name}
                        />
                      </div>
                      <div className="tableAbout">
                        <p className="tableAboutTitle">{item.name}</p>
                        <p>Luxury brand product.</p>
                      </div>
                    </td>
                    <td>
                      <span className="productQuantity">{item.quantity}</span>
                    </td>
                    <td className="tableUnitPriceBox">€ {item.price}*</td>
                    <td className="tableTotalPriceBox">
                      € {item.quantity * item.price} *
                    </td>
                    <HiMiniXMark
                      className="xIcon"
                      onClick={() => dispatch(removeFromCard(item))}
                    />
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="priceDetails">
              <p>
                <span>total</span>
                <span>€ {cardSubTotalPrice} *</span>
              </p>
              <p>
                <span>
                  shipping costs <span>+1%</span>
                </span>
                <span>€ {shippingCost} *</span>
              </p>
              <p>
                <span>net total</span>
                <span>€ {cardSubTotalPrice + shippingCost} *</span>
              </p>
              <p className="lastPrice">
                {sale ? (
                  <>
                    <span>
                      grand total
                      <span className="saleNotification">
                        +5% Gift card sale
                      </span>
                    </span>
                    <span>€ {cardNet} *</span>
                  </>
                ) : (
                  <>
                    <span>grand total</span>
                    <span>€ {cardSubTotalPrice + shippingCost} *</span>
                  </>
                )}
              </p>
              <div className="btns">
                <div className="giftForm">
                  {inputErr && <span className="errMsg">Code is false!!</span>}
                  <input
                    type="text"
                    name="giftcard"
                    placeholder="Enter gift card number"
                    onChange={(e) => setSaleCode(e.target.value)}
                  />
                  <button onClick={calcSale}>
                    <IoMdCheckmark className="okeyIcon" />
                  </button>
                </div>
                <button className="checkoutBtn">proceed to checkout</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShoppingCart;
