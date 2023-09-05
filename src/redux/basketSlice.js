import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  totalAmount: 0,
  totalItems: 0, 
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      const newProduct = action.payload;
      const existingProduct = state.products.find(
        (product) => product.id === newProduct.id
      );

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.products.push({ ...newProduct, quantity: 1 });
      }
      state.totalAmount += newProduct.price;
      state.totalItems += 1;
    },
    removeFromBasket: (state, action) => {
      const productId = action.payload;
      const removedProduct = state.products.find(
        (product) => product.id === productId
      );

      if (removedProduct) {
        state.totalAmount -= removedProduct.price * removedProduct.quantity;
        state.products = state.products.filter(
          (product) => product.id !== productId
        );
        state.totalItems -= removedProduct.quantity; 
      }
    },
    updateQuantity: (state, action) => {
      const { itemId, quantity } = action.payload;
      const existingProduct = state.products.find(
        (product) => product.id === itemId
      );

      if (existingProduct) {
        state.totalAmount +=
          existingProduct.price * (quantity - existingProduct.quantity);
        state.totalItems += quantity - existingProduct.quantity; 
        existingProduct.quantity = quantity;
      }
    },
    clearBasket: (state) => {
      state.products = [];
      state.totalAmount = 0;
      state.totalItems = 0;
    },
  },
});

export const { addToBasket, removeFromBasket, updateQuantity,clearBasket} =
  basketSlice.actions;

export default basketSlice.reducer;
