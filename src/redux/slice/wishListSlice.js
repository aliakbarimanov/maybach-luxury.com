// import redux-toolkit
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    wishListData: [],
};

export const wishListSlice = createSlice({
    name: "wishList",
    initialState,
    reducers: {
        addToWishList: (state, action) => {
            const existingData = state.wishListData.find(item => item.id === action.payload.id);
            if (!existingData) {
                state.wishListData.push(action.payload);
            }
        },
        removeFromWishList: (state, action) => {
            state.wishListData = state.wishListData.filter(item => item.id !== action.payload.id)
        },
    },
});

export const { addToWishList, removeFromWishList } = wishListSlice.actions;
export default wishListSlice.reducer;