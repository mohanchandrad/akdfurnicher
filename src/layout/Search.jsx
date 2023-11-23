
import React, { useState } from "react"
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { searchBoxToggle, searchValue } from "../redux/Slice/Slice";

const Search = () => {

    const dispeatch = useDispatch()
    const state = useSelector((state) => {
        return state.search
    })

    const [search, setSearch] = useState(null)

    const hendlSearch = () => {
        dispeatch(searchValue(search))
        console.log();
    }

    return (
        <>
            <div className={`search-box d-${state.searchToggle === true ? 'none' : 'flex'} align-items-center position-fixed w-100 vh-100  justify-content-center`} style={{ zIndex: '99999', backgroundColor: '#44424294', backdropFilter: 'blur(5px)' }}>
                <button type="button" className=" btn  position-absolute" style={{ top: '2%', right: '20px' }} > <IoClose style={{ width: '45px', height: '45px', fill: '#fff' }} onClick={()=>dispeatch(searchBoxToggle(true))} /> </button>
                <div className="search d-flex col-lg-4 col-md-6 col-sm-8 col-11 gap-4">
                    <input type="text" className="form-control w-100" onInput={(e) => setSearch(e.target.value)} />
                    <button className="btn btn-primary" onClick={hendlSearch}>Search</button>
                </div>
            </div>
        </>
    )
}

export default Search