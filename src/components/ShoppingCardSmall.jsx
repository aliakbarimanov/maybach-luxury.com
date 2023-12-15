// import react-icons
import { CiHeart } from "react-icons/ci";

const ShoppingCardSmall = (data) => {
    return (
        <div className="shoppingCardSmall">
            <CiHeart className="icon" />
            <div className="imageBox">
                <img src={data.data.image} alt="Shopping image" />
            </div>
            <div className="smallCardDescription">
                <h2 className="smallCardTitle">the treasure</h2>
                <p className="info">Shoes from brand</p>
                <p className="price">€ 279.00</p>
            </div>
        </div>
    )
}

export default ShoppingCardSmall;