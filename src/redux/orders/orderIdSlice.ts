import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  order: [],
  status: "",
  errors: null,
};

type orderIdProp = {
  orderId: number;
};

export const fetchOrdersById = createAsyncThunk(
  "orderId/fetchOrders",
  async ({ orderId }: orderIdProp, ThunkApi) => {
    try {
      const res = await fetch(`http://localhost:3000/orders/${orderId}`);
      const data = await res.json();
      return data;
    } catch (err: any) {
      return ThunkApi.rejectWithValue(err.res.data);
    }
  }
);

const orderIdSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrdersById.pending, (state) => {
        const isPending = state;
        isPending.status = "pending";
      })
      .addCase(fetchOrdersById.fulfilled, (state, action) => {
        const isFulfilled = state;
        isFulfilled.status = "fulfilled";
        isFulfilled.order = action.payload;
      })
      .addCase(
        fetchOrdersById.rejected,
        (state, action: PayloadAction<any>) => {
          const isRejected = state;
          isRejected.status = "rejected";
          isRejected.errors = action.payload;
        }
      );
  },
});

export default orderIdSlice.reducer;
