import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const cardSlice = createSlice({
    name: "card",
    initialState,
    reducers: {
        a: ()=>{},
        b: ()=>{},
    },
});

export const {a, b} = cardSlice.actions;
export default cardSlice.reducer;