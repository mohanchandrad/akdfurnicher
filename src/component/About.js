
import React from "react";
import img_1 from '../image/home-img-1.png'
import img_2 from '../image/home-img-2.png'

const About = () => {

    return (
        <>
            <div className="about mt-5 py-4" style={{ backgroundColor: 'rgba(218, 213, 229, 0.26)' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-8 col-sm-9">
                            <h2>Modern furnitur</h2>
                            <p className="text">Lorem ipsum dolor sit amet consectetur
                                adipisicing elit.Eligendi, magnam.Lorem
                                ipsum dolor sit amet consectetur
                                adipisicing Lorem ipsum dolor sit amet
                                consectetur adipisicing elit.Eligendi,
                                magnam. Lorem ipsum dolor sit amet
                                consectetur adipisicing </p>
                                <a href="" className="shop-btn">Shop Now</a>
                        </div>
                        <div className="col-lg-8  overflow-hidden justify-content-between d-flex">
                            <img src={img_1}  alt="" />
                            <img src={img_1} alt="" />
                            <img src={img_2} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About