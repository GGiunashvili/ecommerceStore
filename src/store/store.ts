// store/store.ts
import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./productsSlice";

// Create the store
export const store = configureStore({
  reducer: {
    products: productsSlice,
  },
});

// Type the store's dispatch method
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
