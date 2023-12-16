// import dataBase
import data from "../../db/data";

// import components
import ShoppingCardBig from "../../components/ShoppingCardBig";
import ShoppingCardSmall from "../../components/ShoppingCardSmall";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation, Autoplay } from "swiper/modules";

const Shopping = () => {
  return (
    <section className="shopping">
      <div className="container">
        <div className="row">
          <h2 className="shoppingTitle">
            <span className="top">DESIGNED TO DISTINGUISH</span>
            <span className="bottom">MAYBACH SHOPPING</span>
          </h2>
          <p className="shoppingDescription">
            Highest-quality luxury goods are formed from carefully selected,
            exclusive materials. Handcrafting techniques that have grown with
            the experience of years and new, innovative techniques combine to
            create unique pieces.
          </p>
          <Swiper
            slidesPerView={1}
            centeredSlides={false}
            slidesPerGroupSkip={1}
            breakpoints={{
              1200: {
                slidesPerView: 2,
                slidesPerGroup: 1,
              },
            }}
            navigation={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Navigation, Autoplay]}
            loop={true}
            className="mySwiper shoppingSwiperList"
          >
            {data[0].shopping.map((item, id) => (
              <SwiperSlide className="shoppingSwiperItem" key={id}>
                <ShoppingCardBig className="bigCard" data={item[0]} />
                <div className="smallCards">
                  <ShoppingCardSmall className="smallCard" data={item[1]} />
                  <ShoppingCardSmall className="smallCard" data={item[2]} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Shopping;
