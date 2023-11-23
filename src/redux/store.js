import { configureStore } from "@reduxjs/toolkit";
import SearchSlice from "./Slice/Slice";

export const store = configureStore({
    reducer: {
        search : SearchSlice.reducer
    }
})