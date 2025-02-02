import { configureStore } from "@reduxjs/toolkit";
import homedataReducer from "./features/pages/home/state/homedata.slice";
import cartReducer from "./features/pages/product/state/cartdata.slice";

export const store = configureStore({
  reducer: {
    productlist: homedataReducer,
    cartList: cartReducer,
  },
});
