
import React from "react"
import benar from '../image/benar_1.png'

import { Navigation, Autoplay, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

const Benar = () => {

    return (
        <>
            <div className="benar">
                <div className="benar-section">
                    <Swiper
                        // install Swiper modules
                        modules={[Navigation, Autoplay, A11y]}
                        spaceBetween={50}
                        slidesPerView={1}
                        navigation
                        loop={true}
                        autoplay={true}
                        onSwiper={(swiper) => swiper}
                        onSlideChange={() => console.log('slide change')}
                        className="benar-slider"
                    >
                        <SwiperSlide className="benar-slide">
                            <div className="benar-con">
                                <h1>Modern Interior Design furnitur</h1>
                                <p className="mb-0">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet tempora velit quod consequuntur mollitia. Impedit aut provident at quibusdam explicabo? Laborum commodi aliquam optio sed laudantium praesentium laboriosam ad necessitatibus!</p>
                                <a href="#">Shop Now</a>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className="benar-slide">
                            <div className="container">
                                <div className="benar-con">
                                    <h1>Modern Interior Design furnitur</h1>
                                    <p className="mb-0">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet tempora velit quod consequuntur mollitia. Impedit aut provident at quibusdam explicabo? Laborum commodi aliquam optio sed laudantium praesentium laboriosam ad necessitatibus!</p>
                                    <a href="#">Shop Now</a>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className="benar-slide">
                            <div className="benar-con">
                                <h1>Modern Interior Design furnitur</h1>
                                <p className="mb-0">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet tempora velit quod consequuntur mollitia. Impedit aut provident at quibusdam explicabo? Laborum commodi aliquam optio sed laudantium praesentium laboriosam ad necessitatibus!</p>
                                <a href="#">Shop Now</a>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className="benar-slide">
                            <div className="benar-con">
                                <h1>Modern Interior Design furnitur</h1>
                                <p className="mb-0">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet tempora velit quod consequuntur mollitia. Impedit aut provident at quibusdam explicabo? Laborum commodi aliquam optio sed laudantium praesentium laboriosam ad necessitatibus!</p>
                                <a href="#">Shop Now</a>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </>
    )
}

export default Benar