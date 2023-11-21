
import React, { useState } from "react";
import Benar from "../component/Benar";
import Cart from "../component/Cart";
import Product from "../component/Product";
import  Modal  from "../layout/Modal";


const Shop = () => {

    const [detailsModal, setDetailsModal] = useState(false)

    return (
        <>
            <div className="shop">
                <Modal setDetailsModal={setDetailsModal} detailsModal={detailsModal} />
                <Benar  />
                {/* <Product /> */}
                <Cart setDetailsModal={setDetailsModal} detailsModal={detailsModal}  />
            </div>
        </>
    )
}

export default Shop