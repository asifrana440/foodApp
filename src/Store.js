import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./Redux/CartSlice";
import CategorySlice from "./Redux/CategorySlice";
import SearchSlice from "./Redux/SearchSlice";

const Store = configureStore({
  reducer: {
    cart: CartReducer,
    category: CategorySlice,
    search: SearchSlice,
  },
});

export default Store;
