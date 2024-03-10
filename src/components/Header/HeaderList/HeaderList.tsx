import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import c from "./HeaderList.module.scss";

import { MdOutlineAirplaneTicket } from "react-icons/md";
import { IoMenu } from "react-icons/io5";

const HeaderList = () => {
  const [isActive, setIsActive] = useState(true);

  const location = useLocation();

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
            <NavLink to={"/about"}>
              <li>About</li>
            </NavLink>
            <NavLink to={"/planes"}>
              <li>Planes</li>
            </NavLink>
            <NavLink to={"/contact"}>
              <li>Contact</li>
            </NavLink>
          </ul>
        </div>
      )}

      <div className={c.book}>
        <NavLink to={"/book"}>
          <MdOutlineAirplaneTicket />
          <li>Book Now</li>
        </NavLink>
      </div>

      <IoMenu onClick={handleActive} className={c.burger} />
    </div>
  );
};

export default HeaderList;
