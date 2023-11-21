
import React from "react";
import { FaRegHeart } from "react-icons/fa6";
import { FaShareAlt } from "react-icons/fa";

// ---------- img --------------
import img_1 from '../image/home-img-1.png'


const Cart = (props) => {

    const arr = [{ image: img_1, name: 'Chear', price: '30' }, { image: img_1, name: 'Chear', price: '30' }, { image: img_1, name: 'Chear', price: '30' }, { image: img_1, name: 'Chear', price: '30' }]

    const hednleCart = () => {
        console.log('hello');
        alert()
    }

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
                                        <div className="cart_box" onClick={()=> props.setDetailsModal(true)}></div>
                                    </div>
                                </>
                            )
                        })
                    }
{/* 
                    <div className="col-md-3">md</div>
                    <div className="col-md-3">md</div>
                    <div className="col-md-3">md</div> */}
                </div>
            </div>
        </>
    )
}

export default Cart