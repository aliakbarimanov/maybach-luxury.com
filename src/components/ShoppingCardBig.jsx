// import Link
import { Link } from "react-router-dom";

const ShoppingCardBig = (data) => {
    return (
        <div className="shoppingCardBig">
            <img src={data.data.image} alt="Shopping image" />
            <div className="bigCardDescription">
                <h2 className="bigCardTitle">{data.data.name}</h2>
                <Link className="bigCardbtn">shop now</Link>
            </div>
        </div>
    )
}

export default ShoppingCardBig;