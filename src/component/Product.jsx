
import React from "react"
import { Navigation, Autoplay, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

const Product = () => {

    return(
        <>
            <div id="product" className="py-5">
                <div className="section_title">
                    <h2 className="text-center text-capitalize fw-bold">our Project</h2>
                    <div className="dis">
                        <p className="text-center w-50 mx-auto mt-4 ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident debitis minima excepturi nostrum nisi autem delectus, atque velit enim molestiae.</p>
                    </div>

                    <Swiper
                        // install Swiper modules
                        modules={[Navigation, Autoplay, A11y]}
                        spaceBetween={50}
                        slidesPerView={4}
                        navigation
                        loop = {true}
                        autoplay = {false}
                        breakpoints={{
                            0: {
                                slidesPerView : 1,
                                // spaceBetween: 10
                            },

                            580: {
                                slidesPerView : 2,
                                // spaceBetween: 10
                            },

                            700: {
                                slidesPerView : 3,
                                // spaceBetween: 10
                            },

                            992: {
                                slidesPerView : 4,
                                // spaceBetween: 10
                            }
                        }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                        className="container product-slider mt-5">
                        <SwiperSlide>
                               <img src="https://themewagon.github.io/furni/images/product-1.png" alt="" />
                        </SwiperSlide>
  <img src="https://themewagon.github.io/furni/images/product-1.png" alt="" />
                        <SwiperSlide>
                        <img src="https://themewagon.github.io/furni/images/product-1.png" alt="" />
                        </SwiperSlide>

                        <SwiperSlide>
                        <img src="https://themewagon.github.io/furni/images/product-1.png" alt="" />
                        </SwiperSlide>

                        <SwiperSlide>
                              <img src="https://themewagon.github.io/furni/images/product-1.png" alt="" />
                        </SwiperSlide>

                        <SwiperSlide>
                              <img src="https://themewagon.github.io/furni/images/product-1.png" alt="" />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </>
    )
}

export default Product