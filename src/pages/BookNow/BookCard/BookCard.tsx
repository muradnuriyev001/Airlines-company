import { FC } from "react";
import c from "./BookCard.module.scss";

import { Booking } from "../../../types/types";
import { useDispatch } from "react-redux";
import { deleteBooking } from "../../../redux/slices/booking.slice";

import { FaDeleteLeft } from "react-icons/fa6";

const BookCard: FC<Booking> = ({ name, price, seats, id }) => {
  const dispatch = useDispatch();

  const handleDeleteBooking = (bookingId: string) => {
    const bookingToDelete: Booking = {
      id: bookingId,
      name: "",
      price: 0,
      seats: "",
    }; // Creating a dummy Booking object with just id
    dispatch(deleteBooking(bookingToDelete));
  };
  return (
    <div className={c.bookCard}>
      <div className={c.name}>
        <h2>{name}</h2>
        <FaDeleteLeft onClick={() => handleDeleteBooking(id)} />
      </div>

      <div className={c.info}>
        <p>Price: {price}$ / Per Hour</p>
        <p>Seats: {seats}</p>
      </div>
    </div>
  );
};

export default BookCard;
