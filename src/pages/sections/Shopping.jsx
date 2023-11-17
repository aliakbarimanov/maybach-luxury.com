// import components
import ShoppingCardBig from "../../components/ShoppingCardBig";
import ShoppingCardSmall from "../../components/ShoppingCardSmall";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';

const Shopping = () => {
    return (
        <section className="shopping">
            <div className="container">
                <div className="row">
                    <h2 className="shoppingTitle">
                        <span className="top">DESIGNED TO DISTINGUISH</span>
                        <span className="bottom">MAYBACH SHOPPING</span>
                    </h2>
                    <p className="shoppingDescription">Highest-quality luxury goods are formed from carefully selected, exclusive materials. Handcrafting techniques that have grown with the experience of years and new, innovative techniques combine to create unique pieces.</p>
                    <Swiper
                        slidesPerView={2}
                        centeredSlides={false}
                        slidesPerGroupSkip={1}
                        breakpoints={{
                            769: {
                                slidesPerView: 2,
                                slidesPerGroup: 2,
                            },
                        }}
                        navigation={true}
                        modules={[Navigation]}
                        className="mySwiper shoppingSwiperList"
                    >
                        <SwiperSlide className="shoppingSwiperItem">
                            <ShoppingCardBig className="bigCard" />
                            <div className="smallCards">
                                <ShoppingCardSmall className="smallCard" />
                                <ShoppingCardSmall className="smallCard" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="shoppingSwiperItem">
                            <ShoppingCardBig />
                            <div className="smallCards">
                                <ShoppingCardSmall />
                                <ShoppingCardSmall />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="shoppingSwiperItem">
                            <ShoppingCardBig />
                            <div className="smallCards">
                                <ShoppingCardSmall />
                                <ShoppingCardSmall />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default Shopping;