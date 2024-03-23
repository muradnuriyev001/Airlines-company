import c from "./PlaneCard.module.scss";
import { FC } from "react";
import { Plane } from "../../../types/types";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
//Redux
import { useDispatch } from "react-redux";
import { addBooking } from "../../../redux/slices/booking.slice";

//Icons
import { MdOutlineAirlineSeatReclineExtra } from "react-icons/md";
import { FaPlaneDeparture } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";

const PlaneCard: FC<Plane> = ({ image, name, description, price, seats }) => {
  //Navigate
  const navigate = useNavigate();
  const goContact = () => navigate("/contact", { replace: true });

  //Redux
  const dispatch = useDispatch();

  const handleAddBooking = () => {
    const bookingData = { name, price, seats, id: uuidv4() };
    navigate("/book-now", { replace: true });
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
          <button onClick={goContact}>
            <FaPhone />
            Check Av.
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlaneCard;
