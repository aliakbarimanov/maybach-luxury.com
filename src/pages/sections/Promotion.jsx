// import images
import maybachPensGrey from "../../assets/images/promotion/maybachPensGrey.jpg";

// import components
import PromotionCard from "../../components/PromotionCard";

// import Link
import { Link } from "react-router-dom";

const Promotion = () => {
  return (
    <section className="promotion">
      <h2 className="promotionTitle">maybach inspiration</h2>
      <p className="promotionDescription">
        If you’re looking for a unique gift or want to treat yourself, just
        click on the products on the image to discover a world of outstanding
        ideas from MAYBACH.
      </p>
      <div className="promotionImageBox">
        <img src={maybachPensGrey} alt="Promotion image" />
        <Link to="#" className="direction directionFirst">
          <span></span>
          <PromotionCard className="promotionCard promotionCardFirst" />
        </Link>
        <Link to="#" className="direction directionSecond">
          <span></span>
          <PromotionCard className="promotionCard promotionCardSecond" />
        </Link>
        <Link to="#" className="direction directionThird">
          <span></span>
          <PromotionCard className="promotionCard promotionCardThird" />
        </Link>
      </div>
    </section>
  );
};

export default Promotion;
