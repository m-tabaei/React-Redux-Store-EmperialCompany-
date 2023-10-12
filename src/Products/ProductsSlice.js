import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  items: [],
  state: null,
  error: null,
};
export const productsFeatch = createAsyncThunk(
  'products/productsFeatch',
  async () => {
    try {
      const response = await axios.get('https://api-storeg-emperial.vercel.app/products');
      return response?.data;
    } catch (error) {
      return (error.response.data);
    }
  },
);

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: {
    [productsFeatch.pending]: (state, action) => {
      state.status = 'pending';
    },
    [productsFeatch.fulfilled]: (state, action) => {
      state.status = 'success';
      state.items = action.payload;
    },
    [productsFeatch.rejected]: (state, action) => {
      state.status = 'rejected';
    },

  },
});

export default productsSlice.reducer;
