import { configureStore } from "@reduxjs/toolkit";
import orderSlice from "./orders/orderSlice";
import orderIdSlice from "./orders/orderIdSlice";

const store = configureStore({
  reducer: {
    orders: orderSlice,
    orderId: orderIdSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export default store;
