
import React from "react";
import { FaRegHeart } from "react-icons/fa6";
import { FaShareAlt } from "react-icons/fa";


import { Navigation, Autoplay, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
// ---------- img --------------
import img_1 from '../image/home-img-1.png'


const Cart = (props) => {

    const arr = [{ image: img_1, name: 'Chear', price: '30' }, { image: img_1, name: 'Chear', price: '30' }, { image: img_1, name: 'Chear', price: '30' }, { image: img_1, name: 'Chear', price: '30' }]


    return (
        <>
            <div className="container">
                {/* <h2>Shop</h2> */}
                <div className="row carts justify-content-center gap-4 py-5 text-center">
                    {
                        arr.map((item, index) => {
                            return (
                                <>
                                    <div className="col-lg-4 col-sm-5 col-11 cart" >
                                        <img src={item.image} alt="" />
                                        <div className="icon">
                                            <p> <FaRegHeart /></p>
                                            <p> <FaShareAlt /></p>
                                        </div>
                                        <div className="det">
                                            <h3>Chear</h3>
                                            <h4>$20</h4>
                                        </div>
                                        <div className="cart_box" onClick={() => props.setDetailsModal(true)}></div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>

                <div className="container my-5">
                    <Swiper
                        // install Swiper modules
                        modules={[Navigation, Autoplay, A11y]}
                        spaceBetween={50}
                        slidesPerView={4}
                        navigation
                        loop={true}
                        autoplay={false}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                                // spaceBetween: 10
                            },

                            580: {
                                slidesPerView: 2,
                                // spaceBetween: 10
                            },

                            700: {
                                slidesPerView: 3,
                                // spaceBetween: 10
                            },

                            992: {
                                slidesPerView: 4,
                                // spaceBetween: 10
                            }
                        }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                        className="container product-slider mt-5">
                        <SwiperSlide>
                            <div className="col-lg-10 pro rounded-3 mx-auto">
                                <img src="https://themewagon.github.io/furni/images/product-1.png" className="w-100" alt="" />
                                <div className="det text-center">
                                    <h3>Chear</h3>
                                    <h4>$20</h4>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="col-lg-10 pro rounded-3 mx-auto">
                                <img src="https://themewagon.github.io/furni/images/product-1.png" className="w-100" alt="" />
                                <div className="det text-center">
                                    <h3>Chear</h3>
                                    <h4>$20</h4>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="col-lg-10 pro rounded-3 mx-auto">
                                <img src="https://themewagon.github.io/furni/images/product-1.png" className="w-100" alt="" />
                                <div className="det text-center">
                                    <h3>Chear</h3>
                                    <h4>$20</h4>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="col-lg-10 pro rounded-3 mx-auto">
                                <img src="https://themewagon.github.io/furni/images/product-1.png" className="w-100" alt="" />
                                <div className="det text-center">
                                    <h3>Chear</h3>
                                    <h4>$20</h4>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="col-lg-10 pro rounded-3 mx-auto">
                                <img src="https://themewagon.github.io/furni/images/product-1.png" className="w-100" alt="" />
                                <div className="det text-center">
                                    <h3>Chear</h3>
                                    <h4>$20</h4>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>

            </div>
        </>
    )
}

export default Cart