// import image
import rollerball from "../assets/images/promotion/rollerball.jpg";

const PromotionCard = () => {
    return (
        <div className="promotionCard">
            <div className="innerBox">
                <div className="promotionCardImage">
                    <img src={rollerball} alt="Promotion image" />
                </div>
                <div className="promotionCardDescription">
                    <h2 className="promotionCardTitle">the peak</h2>
                    <p className="promotionCardInfo">Rollerball - Lustrous Midnight Black</p>
                    <p className="promotionCardPrice">€ 1,990.00</p>
                </div>
            </div>
        </div>
    )
}

export default PromotionCard;