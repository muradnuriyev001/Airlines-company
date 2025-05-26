import c from "./HomeBanner.module.scss";
import { NavLink } from "react-router-dom";

import { GrFormNextLink } from "react-icons/gr";
import bannerLogo from "../../../assets/img/Home/Banner/plane.png";

const HomeBanner = () => {
  return (
    <div className={c.homeBanner}>
      <div className={c.bannerInfo}>
        <p className={c.bannerText1}>AzerLine – Where Luxury Takes Flight</p>
        <p className={c.bannerText2}>
          Enjoy an Exclusive Private Jet Experience
        </p>
        <span className={c.bannerText3}>
          Discover a new standard in air travel with our premium private jet
          services. Designed for discerning travelers, our fleet offers the
          perfect blend of sophistication, privacy, and world-class comfort.
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
