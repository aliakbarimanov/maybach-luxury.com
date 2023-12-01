// import redux-toolkit
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cardListData: [],
};

export const cardSlice = createSlice({
    name: "card",
    initialState,
    reducers: {
        addToCard: (state, action) => {
            const existingProduct = state.cardListData.find(item => item.id === action.payload.id);

            if (existingProduct) {
                const updatedData = state.cardListData.filter(item => {
                    if (item.id === existingProduct.id) {
                        return { ...existingProduct, quantity: existingProduct.quantity++ };
                    } else {
                        return item;
                    }
                })
                state.cardListData = updatedData;
            } else {
                state.cardListData = [...state.cardListData, { ...action.payload, quantity: 1 }];
            }
        },
        removeFromCard: (state, action) => {
            if (action.payload.quantity > 1) {
                const availableData = state.cardListData.filter(item => {
                    if (item.id === action.payload.id) {
                        return { ...item, quantity: item.quantity-- };
                    } else {
                        return item;
                    }
                });
                state.cardListData = availableData;
            } else {
                const updatedData = state.cardListData.filter(item => item.id !== action.payload.id);
                state.cardListData = updatedData;
            }
        }
    },
});

export const { addToCard, removeFromCard } = cardSlice.actions;
export default cardSlice.reducer;