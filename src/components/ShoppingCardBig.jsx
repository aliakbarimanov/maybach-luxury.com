// import images
import men from "../assets/images/shopping/men.jpg";

const ShoppingCardBig = () => {
    return(
        <div className="shoppingCardBig">
            <img src={men} alt="Shopping image" />
            <div className="description">
                <h2 className="title">men</h2>
                <button className="btn">shop now</button>
            </div>
        </div>
    )
}

export default ShoppingCardBig;