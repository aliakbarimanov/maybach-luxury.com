// import react-icons
import { CiHeart } from "react-icons/ci";

// import images
import shoes from "../assets/images/shopping/shoes.jpg";

const ShoppingCardSmall = () => {
    return(
        <div className="shoppingCardSmall">
            <CiHeart className="icon"/>
            <img src={shoes} alt="Shopping image" />
            <div className="description">
                <h2 className="title">the treasure</h2>
                <p className="info">Shoes from brand</p>
                <p className="price">C 279.00</p>
            </div>
        </div>
    )
}

export default ShoppingCardSmall;