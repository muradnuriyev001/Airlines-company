import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Booking from "../../types/types";

interface BookingState {
  booking: Booking[];
}

const initialState: BookingState = {
  booking: [],
};

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    addBooking: (state, action: PayloadAction<Booking>) => {
      state.booking.push(action.payload);
    },
  },
});

export const { addBooking } = bookingSlice.actions;
export const selectBooking = (state: { booking: BookingState }) =>
  state.booking;
export default bookingSlice.reducer;
