// import images
import men from "../assets/images/shopping/men.jpg";

const ShoppingCardBig = () => {
    return(
        <div className="shoppingCardBig">
            <img src={men} alt="Shopping image" />
            <div className="bigCardDescription">
                <h2 className="bigCardTitle">men</h2>
                <button className="bigCardbtn">shop now</button>
            </div>
        </div>
    )
}

export default ShoppingCardBig;