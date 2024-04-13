import { FC } from "react";
import c from "./HomeOffer.module.scss";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";

import { motion } from "framer-motion";

const Animation = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: (custom: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 1 },
  }),
};
//Image imports
import inside1 from "../../../assets/img/Home/Offer/inside1.webp";
import inside2 from "../../../assets/img/Home/Offer/inside2.webp";
import inside3 from "../../../assets/img/Home/Offer/inside3.webp";
import inside4 from "../../../assets/img/Home/Offer/inside4.jpg";
import inside5 from "../../../assets/img/Home/Offer/inside5.jpg";
import inside6 from "../../../assets/img/Home/Offer/inside6.jpg";
import inside7 from "../../../assets/img/Home/Offer/inside7.jpg";

const images = [inside1, inside6, inside5, inside3, inside4, inside2, inside7];

import HomeOfferCard from "./HomeOfferCard/HomeOfferCard";

const HomeOffer: FC = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
      className={c.offer}
    >
      <div className={c.offerText}>
        <motion.p variants={Animation} custom={0.4}>
          Let's take a tour.{" "}
        </motion.p>
        <motion.p variants={Animation} custom={0.5}>
          Step inside our world of luxury private jets.
        </motion.p>
      </div>
      <motion.div variants={Animation} custom={0.8}>
        <Swiper
          spaceBetween={20}
          loop={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination]}
          breakpoints={{
            //Responsive of slidesPerView
            1280: {
              slidesPerView: 3,
            },
            800: {
              slidesPerView: 2,
            },
          }}
          className={c.swiper}
        >
          {images.map((image, i) => (
            <SwiperSlide className={c.swiperSlide} key={i}>
              <HomeOfferCard image={image} />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </motion.div>
  );
};

export default HomeOffer;
