import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [], 
  totalAmount: 0,
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      const newProduct = action.payload;
      const existingProduct = state.products.find(product => product.id === newProduct.id);

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.products.push({ ...newProduct, quantity: 1 });
      }
      state.totalAmount += newProduct.price;
    },
    removeFromBasket: (state, action) => {
      const productId = action.payload;
      const removedProduct = state.products.find(product => product.id === productId);

      if (removedProduct) {
        state.totalAmount -= removedProduct.price * removedProduct.quantity; 
        state.products = state.products.filter(product => product.id !== productId);
      }
    },
    updateQuantity: (state, action) => {
      const { itemId, quantity } = action.payload;
      const existingProduct = state.products.find(product => product.id === itemId);
      
      if (existingProduct) {
        state.totalAmount += existingProduct.price * (quantity - existingProduct.quantity); 
        existingProduct.quantity = quantity;
      }
    },
  },
});



export const { addToBasket, removeFromBasket, updateQuantity  } = basketSlice.actions;

export default basketSlice.reducer;
