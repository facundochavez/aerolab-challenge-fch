import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Fetch products from API or localStorage
export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (_, thunkAPI) => {
    const storedProducts = localStorage.getItem('products');

    if (storedProducts) {
      // If products are in localStorage, return them as JSON
      return JSON.parse(storedProducts);
    } else {
      // Otherwise, make a fetch request to the API
      const response = await fetch(
        'https://coding-challenge-api.aerolab.co/products',
        {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${process.env.AEROLAB_CHALLENGE_API_KEY}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }

      const data = await response.json();

      // Save products in localStorage for future requests
      localStorage.setItem('products', JSON.stringify(data));

      return data;
    }
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default productsSlice.reducer;
