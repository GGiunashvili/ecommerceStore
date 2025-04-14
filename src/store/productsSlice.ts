import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

type Product = {
  id: string; // Ensure there's a unique ID for the product
  name: string;
  price: number;
  discount_price: number;
  percent: number;
  images: { image_url: string }[];
};

interface ProductsState {
  products: Product[];
  loading: boolean;
  error: string | null;
}

// Initial state
const initialState: ProductsState = {
  products: [],
  loading: false,
  error: null,
};

// Async thunk for fetching products by category
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (category: string) => {
    const decodedCategory = decodeURIComponent(category); // optional

    const response = await fetch(
      `https://dati.pythonanywhere.com/filter/?category=${encodeURIComponent(
        decodedCategory
      )}&filter=date`
    );
    const data = await response.json();
    return data;
  }
);

// Create slice
const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch products";
      });
  },
});

export default productsSlice.reducer;
