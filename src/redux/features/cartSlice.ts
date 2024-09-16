

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the initial state using that type
const initialState = {
  products: [] as any[],
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
    addToCart: (state, action) => {
      const isExist = state.products.find(
        (product) => product._id === action.payload.id
      );
      if (!isExist) {
        state.products.push({ ...action.payload, quantity: 1 });
      }
      updateCartTotals(state);
    },
    updateQuantity: (state, action: PayloadAction<{ id: string; type: "increment" | "decrement" }>) => {
            const { id, type } = action.payload;
            const product = state.products.find(product => product._id === id);
      
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
            state.products = state.products.filter(product => product._id !== idToRemove);
            updateCartTotals(state);
          },
          clearCart: (state) => {
            state.products = [];
            updateCartTotals(state);
          },
        },
});

// Helper function to update cart totals
const updateCartTotals = (state: any) => {
  state.selectedItems = selectSelectedItems(state);
  state.totalPrice = selectTotalPrice(state);
  state.tax = selectTax(state);
  state.grandTotal = selectGrandTotal(state);
};

export const selectSelectedItems = (state: any) =>
  state.products.reduce((total: number, product: any) => {
    return total + product.quantity;
  }, 0);

export const selectTotalPrice = (state: any) =>
  state.products.reduce((total: number, product: any) => {
    return total + product.quantity * product.price;
  }, 0);

export const selectTax = (state: any) => selectTotalPrice(state) * state.taxRate;

export const selectGrandTotal = (state: any) => {
  return selectTotalPrice(state) + selectTax(state);
};

export const { addToCart, updateQuantity, removeFromCart, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
