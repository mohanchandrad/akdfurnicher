
import React from "react";
import logo from '../image/logo.png'
import { FaCartShopping } from "react-icons/fa6";
// import { FaUser } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { LuHeart } from "react-icons/lu";

const Header = () => {

    return(
        <>
            <header className="bg_color d-flex" style={{height: '70px'}}>
                <nav className="container d-flex justify-content-between align-items-center">
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                    <div className="nav-lionk">
                        <ul className="list-style-none mb-0 d-flex gap-5" style={{listStyle: 'none'}}>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Shop</a></li>
                        </ul>
                    </div>
                    <div className="nav-icon">
                        <ul className="d-flex gap-4 mb-0" style={{listStyle: 'none'}}>
                            <li><LuHeart style={{width: '25px', height: '22px'}} /> </li>
                            <li><FaCartShopping className="icons" /> </li>
                            <li><IoSearchSharp className="icons" /> </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header