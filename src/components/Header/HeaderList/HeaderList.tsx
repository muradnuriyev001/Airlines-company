import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import c from "./HeaderList.module.scss";

import { MdOutlineAirplaneTicket } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import { useSelector } from "react-redux";
import { selectBooking } from "../../../redux/slices/booking.slice";

const HeaderList = () => {
  const [isActive, setIsActive] = useState(false);

  const location = useLocation();

  const bookNow = useSelector(selectBooking);
  const bookNowLength = bookNow.length;

  const handleActive = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsActive(window.innerWidth > 1024);
    };

    handleResize(); // Check initial width
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [location]);

  return (
    <div className={c.navigations}>
      {isActive && (
        <div className={isActive ? c.navList : ""}>
          <ul>
            <NavLink to={"/"}>
              <li>Home</li>
            </NavLink>

            <NavLink to={"/planes"}>
              <li>Planes</li>
            </NavLink>
            <NavLink to={"/contact"}>
              <li>Contact</li>
            </NavLink>
            <NavLink className={c.navBook} to={"/book-now"}>
              <li>Book Now</li>
            </NavLink>
          </ul>
        </div>
      )}

      <div className={c.book}>
        <NavLink data-count={bookNowLength} to={"/book-now"}>
          <MdOutlineAirplaneTicket />
          <li>Book Now</li>
        </NavLink>
      </div>

      <button onClick={handleActive} className={c.burger}>
        <IoMenu />
      </button>
    </div>
  );
};

export default HeaderList;
