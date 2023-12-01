// import redux tool-kit
import { configureStore } from "@reduxjs/toolkit";

// import slices
import wishListSlice from "./slice/wishListSlice";
import cardSlice from "./slice/cardSlice";

export const store = configureStore({
    reducer: {
        card: cardSlice,
        wishList: wishListSlice,
    },
});