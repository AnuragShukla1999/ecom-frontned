import { configureStore } from '@reduxjs/toolkit';
import userReducer from './Slices/userSlice';
import cartReducer from './Slices/cartSlice';
import productReducer from './Slices/productSlice'

export const store = configureStore({
    reducer: {
        user: userReducer,
        cart: cartReducer,
        product: productReducer
    },

    // devTools: process.env.NODE_ENV !== 'production',
});