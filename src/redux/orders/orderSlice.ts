import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  orders: [],
  status: "",
  errors: null,
};

export const fetchOrders = createAsyncThunk(
  "orders/fetchOrders",
  async (_, ThunkApi) => {
    try {
      const res = await fetch("http://localhost:3000/orders");
      const data = await res.json();
      return data;
    } catch (err: any) {
      return ThunkApi.rejectWithValue(err.res.data);
    }
  }
);

const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrders.pending, (state) => {
        const isPending = state;
        isPending.status = "pending";
      })
      .addCase(fetchOrders.fulfilled, (state, action) => {
        const isFulfilled = state;
        isFulfilled.status = "fulfilled";
        isFulfilled.orders = action.payload;
      })
      .addCase(fetchOrders.rejected, (state, action: PayloadAction<any>) => {
        const isRejected = state;
        isRejected.status = "rejected";
        isRejected.errors = action.payload;
      });
  },
});

export default orderSlice.reducer;
