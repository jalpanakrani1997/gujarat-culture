import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
    totalQuantity: 0,
    totalAmount: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += action.payload.quantity;
                existingItem.totalPrice = existingItem.quantity * existingItem.price;
            } else {
                state.items.push({
                    ...action.payload,
                    quantity: action.payload.quantity,
                    totalPrice: action.payload.quantity * action.payload.price
                });
            }
            state.totalQuantity += action.payload.quantity;
            state.totalAmount = state.items.reduce((total, item) => total + item.totalPrice, 0);
        },
        removeFromCart: (state, action) => {
            const itemToRemove = state.items.find(item => item.id === action.payload);
            if (itemToRemove) {
                state.totalQuantity -= itemToRemove.quantity;
                state.totalAmount -= itemToRemove.totalPrice;
                state.items = state.items.filter(item => item.id !== action.payload);
            }
        },
        updateQuantity: (state, action) => {
            const { id, quantity } = action.payload;
            const itemToUpdate = state.items.find(item => item.id === id);
            if (itemToUpdate) {
                const quantityDiff = quantity - itemToUpdate.quantity;
                state.totalQuantity += quantityDiff;
                itemToUpdate.quantity = quantity;
                itemToUpdate.totalPrice = quantity * itemToUpdate.price;
                state.totalAmount = state.items.reduce((total, item) => total + item.totalPrice, 0);
            }
        },
        clearCart: (state) => {
            state.items = [];
            state.totalQuantity = 0;
            state.totalAmount = 0;
        },
    },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer; 