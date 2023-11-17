// import react-icons
import { CiHeart } from "react-icons/ci";

// import images
import shoes from "../assets/images/shopping/shoes.jpg";

const ShoppingCardSmall = () => {
    return (
        <div className="shoppingCardSmall">
            <CiHeart className="icon" />
            <div className="imageBox">
                <img src={shoes} alt="Shopping image" />
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