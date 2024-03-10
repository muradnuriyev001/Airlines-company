import c from "./Header.module.scss";
import { NavLink } from "react-router-dom";

import { GiAirplaneDeparture } from "react-icons/gi";
import HeaderList from "./HeaderList/HeaderList";

const Header = () => {
  return (
    <div className={c.header}>
      <div className={c.logo}>
        <NavLink to={"/"}>
          <GiAirplaneDeparture />
          <p>
            AIR
            <span>LINE</span>
          </p>
        </NavLink>
      </div>

      <HeaderList />
    </div>
  );
};

export default Header;
