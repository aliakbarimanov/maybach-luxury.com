// import slider images
import sliderOne from "../assets/images/slider/sliderOne.jpeg";
import sliderTwo from "../assets/images/slider/sliderTwo.jpg";
import sliderThree from "../assets/images/slider/sliderThree.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Home = () => {
    return (
        <section className="hero">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide className="swiperBox">
                    <img src={sliderOne} alt="Slider image" />
                    <div className="heroOverlay">
                        <div className="sliderDetails">
                            <h2 className="sliderTitle">eyewear</h2>
                            <span></span>
                            <p className="sliderDescription">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia ea corporis ab aliquid voluptates eligendi.</p>
                            <button className="sliderButton">see more</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiperBox">
                    <img src={sliderTwo} alt="Slider image" />
                    <div className="heroOverlay">
                        <div className="sliderDetails">
                            <h2 className="sliderTitle">eyewear</h2>
                            <span></span>
                            <p className="sliderDescription">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia ea corporis ab aliquid voluptates eligendi.</p>
                            <button className="sliderButton">see more</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiperBox">
                    <img src={sliderThree} alt="Slider image" />
                    <div className="heroOverlay">
                        <div className="sliderDetails">
                            <h2 className="sliderTitle">eyewear</h2>
                            <span></span>
                            <p className="sliderDescription">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia ea corporis ab aliquid voluptates eligendi.</p>
                            <button className="sliderButton">see more</button>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    )
}

export default Home;