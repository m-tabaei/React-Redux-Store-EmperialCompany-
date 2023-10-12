import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cartItems: JSON.parse(localStorage.getItem("cartItems")) || [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
  filters: {
    category: "",
  },
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, title } = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);

      if (existingItem) {
        existingItem.cartQuantity += 1;
        // toast.success(`Increased ${title} quantity`, {
        //   position: "bottom-left",
        // });
      } else {
        const newItem = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(newItem);
        toast.info(`${title} added to Cart `, {
          position: "bottom-left",
        });
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== action.payload.id
      );
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      // toast.error(`${action.payload.title} Removed From Cart `, {
      //   position: "bottom-left",
      // });
    },
    decreaseCart: (state, action) => {
      const item = state.cartItems.find(
        (cartItem) => cartItem.id === action.payload.id
      );

      if (item) {
        if (item.cartQuantity > 1) {
          item.cartQuantity -= 1;
          // toast.error(`Decreased ${action.payload.title} Cart Quantity `, {
          //   position: "bottom-right",
          // });
        } else {
          state.cartItems = state.cartItems.filter(
            (cartItem) => cartItem.id !== action.payload.id
          );
          // toast.error(`${action.payload.title} Removed From Cart `, {
          //   position: "bottom-right",
          // });
        }
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      }
    },
    clearCart: (state) => {
      state.cartItems = [];
      localStorage.removeItem("cartItems");
      toast.error("Cart Cleared", {
        position: "bottom-center",
      });
    },
    getTotals: (state) => {
      const { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const itemTotal = price * cartQuantity;
          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;
          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
    },
    setCategoryFilter: (state, action) => {
      state.filters.category = action.payload;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  decreaseCart,
  clearCart,
  getTotals,
  setCategoryFilter,
} = cartSlice.actions;

export default cartSlice.reducer;
