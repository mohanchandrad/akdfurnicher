

import React from "react";
import logo from '../image/logo.png'

const Footer = () => {

    return (
        <>
            <footer className="py-5">
                <div className="container">
                    <div className="row gap-0 gap-3">
                        <div className="col-md-5">
                            <div className="f-logo">
                                <img src={logo} alt="" />
                            </div>
                            <div className="f-title">
                                <h3 className="fw-bold mt-4 mb-3">About US</h3>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id atque laboriosam non numquam laborum voluptate corrupti ratione eaque placeat eligendi!</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="f-title">
                                <h3 className="fw-bold mb-3">Quick Links</h3>
                            </div>
                            <div className="f-link">
                                <ul className="mt-4 ps-0">
                                    <li><a href="">Home</a></li>
                                    <li><a href="">Shop</a></li>
                                    <li><a href="">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3">
                        <div className="f-title">
                                <h3 className="fw-bold mb-3">Address</h3>
                            </div>
                            <div className="f-add">
                                <ul className="ps-0">
                                    <li><strong>Contact : </strong> <a href="tel:0987654321"> 0987654321</a></li>
                                    <li><strong>Email Id : </strong> <a href="tel:0987654321"> demo@gmail.com</a></li>
                                    <li><strong>Address : </strong> <a href="tel:0987654321"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, corrupti.</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer