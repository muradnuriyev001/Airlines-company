import "./HomeOffer.css";
import { FC } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";

//Image imports
import flight1 from "../../../assets/img/Home/Offer/flight1.png";
import flight2 from "../../../assets/img/Home/Offer/flight2.jpg";
import meal from "../../../assets/img/Home/Offer/meal.jpg";
import transport from "../../../assets/img/Home/Offer/transport.jpg";
import airport from "../../../assets/img/Home/Offer/airport.webp";

import HomeOfferCard from "./HomeOfferCard/HomeOfferCard";

const HomeOffer: FC = () => {
  return (
    <div className="offer">
      <div className="offer-text">
        <p>SERVICES</p>
        <h1>What We Offer</h1>
        <span>
          Discover our range of services to make your journey seamless and
          enjoyable.
        </span>
      </div>
      <Swiper
        spaceBetween={20}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        breakpoints={{
          //Responsive of slidesPerView
          1280: {
            slidesPerView: 3,
          },
          600: {
            slidesPerView: 2,
          },
          0: {
            slidesPerView: 1,
          },
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <HomeOfferCard image={flight1} heading="" text="" />
        </SwiperSlide>
        <SwiperSlide>
          <HomeOfferCard image={flight2} heading="" text="" />
        </SwiperSlide>
        <SwiperSlide>
          <HomeOfferCard image={meal} heading="" text="" />
        </SwiperSlide>
        <SwiperSlide>
          <HomeOfferCard image={transport} heading="" text="" />
        </SwiperSlide>
        <SwiperSlide>
          <HomeOfferCard image={airport} heading="" text="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeOffer;
