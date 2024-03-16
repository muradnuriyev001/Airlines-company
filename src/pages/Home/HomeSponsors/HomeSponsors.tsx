import c from "./HomeSponsors.module.scss";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { Autoplay } from "swiper/modules";

//Image imports
import logo1 from "../../../assets/img/Home/Sponsors/hilton.jpg";
import logo2 from "../../../assets/img/Home/Sponsors/americanexpress.png";
import logo3 from "../../../assets/img/Home/Sponsors/apple.jpg";
import logo4 from "../../../assets/img/Home/Sponsors/mastercard.png";
import logo5 from "../../../assets/img/Home/Sponsors/shell.png";
import logo6 from "../../../assets/img/Home/Sponsors/amazon.jpg";
import logo7 from "../../../assets/img/Home/Sponsors/liverpool.png";
import logo8 from "../../../assets/img/Home/Sponsors/uber.jpg";

const sponsors = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8];

const HomeSponsors = () => {
  return (
    <div className={c.sponsors}>
      <div className={c.text}>
        <h1>Introducing Our Esteemed Sponsors</h1>
      </div>

      <Swiper
        spaceBetween={100}
        loop={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        breakpoints={{
          //Responsive of slidesPerView
          1280: {
            slidesPerView: 5,
          },
          1024: {
            slidesPerView: 4,
          },
          750: {
            slidesPerView: 3,
          },
          600: {
            slidesPerView: 2,
          },
          0: {
            slidesPerView: 1.6,
          },
        }}
        className={c.swiper}
      >
        {sponsors.map((sponsor, i) => (
          <SwiperSlide key={i}>
            <div className={c.sponsorContainer}>
              <img src={sponsor} alt="" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeSponsors;
