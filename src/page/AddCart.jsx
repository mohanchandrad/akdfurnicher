
import React from "react";

const AddCart = () => {

    return (
        <>
            <div className="container">

                <table className="table table-hover text-light"  style={{ marginTop: '120px' }}>
                    <thead>
                        <tr className="text-center" style={{borderBottom: '2px solid #060505c7'}}>
                            <th className="pb-4">Image</th>
                            <th className="pb-4">Priduct</th>
                            <th className="pb-4">Price</th>
                            <th className="pb-4">Total</th>
                            <th className="pb-4">Action</th>
                        </tr>
                    </thead>
                </table>
            </div>
        </>
    )
}

export default AddCart