import { FC } from "react";
import c from "./BookCard.module.scss";
import Booking from "../../../types/types";

const BookCard: FC<Booking> = ({ name, price, seats }) => {
  return (
    <div className={c.bookCard}>
      <h2>{name}</h2>
      <div className={c.info}>
        {" "}
        <p>Price: {price}$ / Per Hour</p>
        <p>Seats: {seats}</p>
      </div>
    </div>
  );
};

export default BookCard;
