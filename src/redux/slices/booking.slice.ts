import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Booking } from "../../types/types";

interface BookingState {
  [x: string]: any; //For HeaderList.tsx, length error in const bookNowLength = bookNow.length;
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
    deleteBooking: (state, action: PayloadAction<Booking>) => {
      state.booking = state.booking.filter(
        (book) => book.id !== action.payload.id
      );
    },
  },
});

export const { addBooking, deleteBooking } = bookingSlice.actions;
export const selectBooking = (state: { booking: BookingState }) =>
  state.booking;
export default bookingSlice.reducer;
