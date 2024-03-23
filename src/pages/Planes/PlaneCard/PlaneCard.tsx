import c from "./PlaneCard.module.scss";
import { FC } from "react";
// import { useNavigate } from "react-router-dom";

//Redux

import { useDispatch, useSelector } from "react-redux";
import { addBooking, selectBooking } from "../../../redux/slices/booking.slice";

import { MdOutlineAirlineSeatReclineExtra } from "react-icons/md";
import { FaPlaneDeparture } from "react-icons/fa";

interface Plane {
  image: string;
  name: string;
  description: string;
  price: string;
  seats: string;
}
const PlaneCard: FC<Plane> = ({ image, name, description, price, seats }) => {
  //Redux
  const dispatch = useDispatch();

  const handleAddBooking = () => {
    const bookingData = { name, price, seats };
    dispatch(addBooking(bookingData));
  };

  return (
    <div className={c.card}>
      <div className={c.image}>
        <img src={image} alt="" />
      </div>

      <div className={c.info}>
        <div className={c.name}>
          <p>{name}</p>
          <p>{description}</p>
        </div>
        <div className={c.ps}>
          <p>{price}$</p>
          <p>
            <MdOutlineAirlineSeatReclineExtra />
            {seats} Seats
          </p>
        </div>
        <div className={c.button}>
          <button onClick={handleAddBooking}>
            <FaPlaneDeparture />
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlaneCard;
