import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const item = action.payload;
      const existingItem = state.items.find(i => i.id === item.id);
      if (existingItem) {
        existingItem.quantity += item.quantity;
      } else {
        state.items.push(item);
      }

 
      localStorage.setItem('items', JSON.stringify(state.items));
    },
    deleteCart(state, action) {
      const id = action.payload;
      state.items = state.items.filter(item => item.id !== id);

     
      localStorage.setItem('items', JSON.stringify(state.items));
    },
    increaseCartItem(state, action) {
      const id = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      if (existingItem) {
        existingItem.quantity += 1;

       
        localStorage.setItem('items', JSON.stringify(state.items));
      }
    },
    decreaseCartItem(state, action) {
      const id = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
        } else {
          state.items = state.items.filter(item => item.id !== id);
        }

       
        localStorage.setItem('items', JSON.stringify(state.items));
      }
    },
    
    totalCartItem(state) {
      return state.items.reduce((total, item) => total + item.quantity, 0);
    },

    clearCart(state) {
      state.items = [];
      localStorage.setItem('items', JSON.stringify(state.items));
    },
  },
});


export const selectTotalCartItems = (state) => state.cart.items.reduce((total, item) => total + item.quantity, 0);

export const { addToCart, deleteCart, increaseCartItem, decreaseCartItem, totalCartItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
