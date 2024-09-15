
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define types for better type safety
interface Product {
  id: string;
  price: number;
  stock: number;
  quantity: number;
}

interface CartState {
  products: Product[];
  selectedItems: number;
  totalPrice: number;
  tax: number;
  taxRate: number;
  grandTotal: number;
}

// Define the initial state
const initialState: CartState = {
  products: [],
  selectedItems: 0,
  totalPrice: 0,
  tax: 0,
  taxRate: 0.1,
  grandTotal: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // addToCart: (state, action: PayloadAction<Product>) => {

    //   const { id, price, stock } = action.payload;
    //   const existingProduct = state.products.find(product => product.id === id);

    //   if (existingProduct) {
    //     // Ensure that the quantity doesn't exceed the stock
    //     if (existingProduct.quantity < stock) {
    //       existingProduct.quantity += 1;
    //     }
    //   } else {
    //     // If the product doesn't exist, add it to the cart with a quantity of 1
    //     state.products.push({ ...action.payload, quantity: 1 });
    //   }

    //   updateCartTotals(state);
    // },

    addToCart: (state, action: PayloadAction<Product>) => {
      const { id } = action.payload;
      
      // Check if the product already exists in the cart
      const existingProduct = state.products.find(product => product.id === id);
      
      if (existingProduct) {
        // If the product exists and the quantity is less than the stock, increment the quantity
        if (existingProduct.quantity < existingProduct.stock) {
          existingProduct.quantity += 1;
        }
      } else {
        // If the product is new, add it to the cart with a quantity of 1
        state.products.push({ ...action.payload, quantity: 1 });
      }
      
      // Update the cart totals after adding the product
      updateCartTotals(state);
    },
    
    updateQuantity: (state, action: PayloadAction<{ id: string; type: "increment" | "decrement" }>) => {
      const { id, type } = action.payload;
      const product = state.products.find(product => product.id === _id);

      if (product) {
        if (type === "increment" && product.quantity < product.stock) {
          product.quantity += 1;
        } else if (type === "decrement" && product.quantity > 1) {
          product.quantity -= 1;
        }
      }

      updateCartTotals(state);
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      const idToRemove = action.payload;
      state.products = state.products.filter(product => product.id !== idToRemove);
      updateCartTotals(state);
    },
    clearCart: (state) => {
      state.products = [];
      updateCartTotals(state);
    },
  },
});

// Function to update cart totals
const updateCartTotals = (state: CartState) => {
  state.selectedItems = state.products.reduce((total, product) => total + product.quantity, 0);
  state.totalPrice = state.products.reduce((total, product) => total + product.quantity * product.price, 0);
  state.tax = state.totalPrice * state.taxRate;
  state.grandTotal = state.totalPrice + state.tax;
};

export const { addToCart, updateQuantity, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
