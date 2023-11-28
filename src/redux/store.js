// import redux tool-kit
import { configureStore } from "@reduxjs/toolkit";

// import slices
import cardSlice from "./slice/cardSlice";

export const store = configureStore({
    reducer: {
        card: cardSlice,
    },
});