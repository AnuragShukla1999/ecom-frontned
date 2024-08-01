
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], 
};

// const cartSlice = createSlice({
//   name: 'cart',
//   initialState,
//   reducers: {
//     addToCart(state, action) {
//       const item = action.payload;
//       const existingItem = state.items.find(i => i.id === item.id);
//       if (existingItem) {
//         existingItem.quantity += item.quantity;
//       } else {
//         state.items.push(item);
//       }
//     },
//     deleteCart(state, action) {
//       const id = action.payload;
//       state.items = state.items.filter(item => item.id !== id);
//     },
//     increaseCartItem(state, action) {
//       const id = action.payload;
//       const existingItem = state.items.find(item => item.id === id);
//       if (existingItem) {
//         existingItem.quantity += 1;
//       }
//     },
//     decreaseCartItem(state, action) {
//       const id = action.payload;
//       const existingItem = state.items.find(item => item.id === id);
//       if (existingItem) {
//         if (existingItem.quantity > 1) {
//           existingItem.quantity -= 1;
//         } else {
//           state.items = state.items.filter(item => item.id !== id);
//         }
//       }
//     },
//     totalCartItem(state) {
//       return state.items.reduce((total, item) => total + item.quantity, 0);
//     },
//   },
// });


const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const item = action.payload;
            const existingItem = state.items.find(i => i.id === item.id);
            if (existingItem) {
                existingItem.quantity += item.quantity
            } else {
                state.items.push(item);
            }
        },

        deleteCart(state, action) {
            const id = action.payload;
            state.items
        }
    }
})

export const { addToCart, deleteCart, increaseCartItem, decreaseCartItem, totalCartItem } = cartSlice.actions;

export default cartSlice.reducer;
