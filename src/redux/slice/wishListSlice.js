// import react hooks
import { useState } from "react";

// import redux-toolkit
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0,
};

const data = {};

// const [wishList, setWishList] = useState([]);

export const wishListSlice = createSlice({
    name: "wishList",
    initialState,
    reducers: {
        // addWishList: () => {
        //     setWishList(data);
        // },
        // wishdListData: wishList,
    },
});

export const { addWishList } = wishListSlice.actions;
export default wishListSlice.reducer;