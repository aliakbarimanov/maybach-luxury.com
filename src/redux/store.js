// import redux tool-kit
import { configureStore } from "@reduxjs/toolkit";

// import slices
import cardSlice from "./slice/cardSlice";
import wishListSlice from "./slice/wishListSlice";

export const store = configureStore({
    reducer: {
        card: cardSlice,
        wishList: wishListSlice,
    },
});