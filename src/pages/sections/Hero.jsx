// import data
import data from "../../db/data";

// import react-router-dom
import { Link } from "react-router-dom";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Hero = () => {
  return (
    <section className="hero">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        loop={true}
        className="mySwiper sliderList"
      >
        {data[0].slider.map((item, id) => (
          <SwiperSlide className="sliderItem" key={id}>
            <img src={item.image} alt={item.name} />
            <div className="sliderOverlay">
              <div className="sliderDetails">
                <h2 className="sliderTitle">{item.name}</h2>
                <span></span>
                <p className="sliderDescription">{item.description}</p>
                <Link to="/category/men/bags" className="sliderButton">
                  see more
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
