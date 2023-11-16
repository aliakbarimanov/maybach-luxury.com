// import components
import ShoppingCardBig from "../components/ShoppingCardBig";
import ShoppingCardSmall from "../components/ShoppingCardSmall";

// import slider images
import sliderOne from "../assets/images/slider/sliderOne.jpeg";
import sliderTwo from "../assets/images/slider/sliderTwo.jpg";
import sliderThree from "../assets/images/slider/sliderThree.jpg";
import sliderFour from "../assets/images/slider/sliderFour.jpeg";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

// import required modules
import { Autoplay, Pagination, Navigation, Keyboard, Scrollbar } from 'swiper/modules';

const Home = () => {
    return (
        <>
            <section className="hero">
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 100000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper sliderList"
                >
                    <SwiperSlide className="sliderItem">
                        <img src={sliderOne} alt="Slider image" />
                        <div className="sliderOverlay">
                            <div className="sliderDetails">
                                <h2 className="sliderTitle">eyewear</h2>
                                <span></span>
                                <p className="sliderDescription">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia ea corporis ab aliquid voluptates eligendi.</p>
                                <button className="sliderButton">see more</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="sliderItem">
                        <img src={sliderTwo} alt="Slider image" />
                        <div className="sliderOverlay">
                            <div className="sliderDetails">
                                <h2 className="sliderTitle">eyewear</h2>
                                <span></span>
                                <p className="sliderDescription">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia ea corporis ab aliquid voluptates eligendi.</p>
                                <button className="sliderButton">see more</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="sliderItem">
                        <img src={sliderThree} alt="Slider image" />
                        <div className="sliderOverlay">
                            <div className="sliderDetails">
                                <h2 className="sliderTitle">eyewear</h2>
                                <span></span>
                                <p className="sliderDescription">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia ea corporis ab aliquid voluptates eligendi.</p>
                                <button className="sliderButton">see more</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="sliderItem">
                        <img src={sliderFour} alt="Slider image" />
                        <div className="sliderOverlay">
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
            <section className="shopping">
                <h2 className="title">
                    <span className="top">DESIGNED TO DISTINGUISH</span>
                    <span className="bottom">MAYBACH SHOPPING</span>
                </h2>
                <p className="description">Highest-quality luxury goods are formed from carefully selected, exclusive materials. Handcrafting techniques that have grown with the experience of years and new, innovative techniques combine to create unique pieces.</p>
                <Swiper
                    slidesPerView={1}
                    centeredSlides={false}
                    slidesPerGroupSkip={1}
                    grabCursor={true}
                    keyboard={{
                        enabled: true,
                    }}
                    breakpoints={{
                        769: {
                            slidesPerView: 2,
                            slidesPerGroup: 2,
                        },
                    }}
                    scrollbar={true}
                    navigation={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Keyboard, Scrollbar, Navigation, Pagination]}
                    className="mySwiper shoppingSwiperList"
                >
                    <SwiperSlide className="shoppingSwiperItem">
                        <ShoppingCardBig className="bigCard"/>
                        <div className="smallCards">
                            <ShoppingCardSmall className="smallCard"/>
                            <ShoppingCardSmall className="smallCard"/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="shoppingSwiperItem">
                        <ShoppingCardBig/>
                        <div className="smallCards">
                            <ShoppingCardSmall/>
                            <ShoppingCardSmall/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="shoppingSwiperItem">
                        <ShoppingCardBig/>
                        <div className="smallCards">
                            <ShoppingCardSmall/>
                            <ShoppingCardSmall/>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </section>
        </>
    )
}

export default Home;