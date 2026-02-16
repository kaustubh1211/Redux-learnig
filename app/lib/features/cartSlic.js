import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], // Start with an empty cart
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // action.payload = the product object you pass in
      // RTK lets us "push" directly (it handles the immutability for us!)
      state.items.push(action.payload);
    },
    removeFromCart: (state, action) => {
      // action.payload = the ID of the item to remove
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;