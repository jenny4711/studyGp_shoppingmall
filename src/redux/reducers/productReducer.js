import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  error: "",
  productDetail: null
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: { 
    getAllRequest(state, action) {
      state.error = "";
    },
    getProductAll(state, action) {
      state.products = action.payload;
    },
    getProductDetail(state, action) {
      state.productDetail = action.payload;
    },
    getError(state, action) {
      state.error = action.payload;
    }
  }
});

export const productActions = productSlice.actions;
export default productSlice.reducer;