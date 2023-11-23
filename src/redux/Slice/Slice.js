import { createSlice } from "@reduxjs/toolkit";


const SearchSlice = createSlice({
    name : 'search',
    initialState : {
        searchData : null,
        searchToggle : true
    },
    reducers: {
        searchValue(state, action){
            console.log(action.payload);
            state.searchData = action.payload
        },
        searchBoxToggle(state, action){
            state.searchToggle = action.payload
        }
        
    } 
})

export  const { searchValue, searchBoxToggle } = SearchSlice.actions
export default  SearchSlice 