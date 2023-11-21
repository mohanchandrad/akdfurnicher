
import React from "react";
import img_1 from '../image/home-img-1.png'

const Modal = (props) => {
    // setDetailsModal={setDetailsModal} detailsModal={detailsModal}
    return (
        <>
            <div className={`modal d-${!props.detailsModal ? 'none' : 'flex'} vh-100 align-items-center`} tabindex="-1" style={{backdropFilter: 'blur(5px)', zIndex:99999}}>
                <div className="modal-dialog w-100 mx-auto" style={{ maxWidth: '80%' }}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={()=>props.setDetailsModal(false)}></button>
                        </div>
                        <div className="row pb-4 ms-0 me-0">
                            <div className="col-lg-4 col-md-5 col-8 text-center mx-auto">
                                <img src={img_1} alt="" className="w-100" />
                            </div>
                            <div className="col-lg-8">
                                <h3 className="mt-3">Chear</h3>
                                <div className="price gap-3 d-flex">
                                  <del> <p>$300</p> </del>
                                    <p>$300</p>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis dolorum, labore quas est officiis alias assumenda nisi at praesentium nihil ratione eligendi dignissimos minus, provident velit exercitationem commodi repudiandae esse?</p>
                                <button className="btn btn-sm add btn-primary">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal