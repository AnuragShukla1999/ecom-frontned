import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  products: localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : [],
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null
};

// Create an async thunk for fetching products
export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const response = await fetch('http://localhost:7070/api/getallproduct');
  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }
  const data = await response.json();
  return data;
});


const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProductsFromLocalStorage(state) {
      const storedProducts = localStorage.getItem('products');
      if (storedProducts) {
        state.products = JSON.parse(storedProducts);
      }
    },
    
    clearProducts(state) {
      state.products = [];
      localStorage.removeItem('products');
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.products = action.payload;
        localStorage.setItem('products', JSON.stringify(action.payload));
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

// Selector to get all products
export const selectAllProducts = (state) => state.product.products;

// Selector to get loading status
export const selectProductStatus = (state) => state.product.status;

// Selector to get any fetch error
export const selectProductError = (state) => state.product.error;

// Export actions from the slice
export const { setProductsFromLocalStorage, clearProducts } = productSlice.actions;

// Export the reducer to be used in the store
export default productSlice.reducer;
