import c from "./HomeBanner.module.scss";
import { NavLink } from "react-router-dom";

import { GrFormNextLink } from "react-icons/gr";
import bannerLogo from "../../../assets/img/Home/Banner/plane.png";

const HomeBanner = () => {
  return (
    <div className={c.homeBanner}>
      <div className={c.bannerInfo}>
        <p className={c.bannerText1}>Welcome To Our AirLine!</p>
        <p className={c.bannerText2}>Luxury Experience With Our Private Jet</p>
        <span className={c.bannerText3}>
          There are many variations of passages available but the majority have
          suffered alteration in some form by injected humour or randomised
          words which don't look even slightly believable.
        </span>
        <div className={c.bannerButtons}>
          <NavLink className={c.contact} to={"/contact"}>
            Contact Us <GrFormNextLink />
          </NavLink>

          <NavLink className={c.about} to={"/about"}>
            About Us <GrFormNextLink />
          </NavLink>
        </div>
      </div>

      <div className={c.bannerLogo}>
        <img draggable="false" loading="lazy" src={bannerLogo} alt="" />
      </div>
    </div>
  );
};

export default HomeBanner;
