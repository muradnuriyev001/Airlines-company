import c from "./HomeBook.module.scss";
import { NavLink } from "react-router-dom";
import { FaPlaneDeparture } from "react-icons/fa6";
import HomeBookDate from "./HomeBookDate/HomeBookDate";

const HomeBook = () => {
  return (
    <div className={c.book}>
      <div className={c.plane}>
        <label>Select plane:</label>
        <select>
          <option value="">Select</option>
          <option value="Boeing 737">Boeing 737</option>
          <option value="Airbus A320">Airbus A320</option>
          <option value="Boeing 777">Boeing 777</option>
          <option value="Airbus A280">Airbus A280</option>
        </select>
      </div>

      <div className={c.date}>
        <label>Arrival - Departure Date</label>
        <HomeBookDate />
      </div>
      <div className={c.passangers}>
        <label>Passangers:</label>
        <select>
          <option value="">Select</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">...</option>
        </select>
      </div>
      <div className={c.bookBtn}>
        <NavLink to={"/planes"}>
          <button>
            <FaPlaneDeparture />
            Book Now
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default HomeBook;
