
import React from "react";
import logo from '../image/logo.png'
import { FaCartShopping } from "react-icons/fa6";
// import { FaUser } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { LuHeart } from "react-icons/lu";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { searchBoxToggle } from "../redux/Slice/Slice";

const Header = () => {

    const state = useSelector((state) => {
        return state.search
    })
    console.log(state);
    const dispatech = useDispatch()

    return(
        <>
            <header className="bg_color d-flex" style={{height: '70px'}}>
                <nav className="container d-flex justify-content-between align-items-center">
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                    <div className="nav-lionk">
                        <ul className="list-style-none mb-0 d-flex gap-5" style={{listStyle: 'none'}}>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/product">Shop</Link></li>
                        </ul>
                    </div>
                    <div className="nav-icon">
                        <ul className="d-flex gap-4 mb-0" style={{listStyle: 'none'}}>
                            <li> <LuHeart style={{width: '25px', height: '22px'}} /> </li>
                            <li><Link to='/addcart'><FaCartShopping className="icons" /></Link> </li>
                            <li><IoSearchSharp className="icons" onClick={()=>dispatech(searchBoxToggle(false))} /> </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header