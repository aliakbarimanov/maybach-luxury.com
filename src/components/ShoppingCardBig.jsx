// import images
import men from "../assets/images/shopping/men.jpg";

// import Link
import { Link } from "react-router-dom";

const ShoppingCardBig = () => {
    return (
        <div className="shoppingCardBig">
            <img src={men} alt="Shopping image" />
            <div className="bigCardDescription">
                <h2 className="bigCardTitle">men</h2>
                <Link className="bigCardbtn">shop now</Link>
            </div>
        </div>
    )
}

export default ShoppingCardBig;