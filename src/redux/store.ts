import { configureStore } from "@reduxjs/toolkit";
import bookingSlice from "./slices/booking.slice";

const store = configureStore({ reducer: bookingSlice });

export default store;
