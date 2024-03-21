import c from "./HomeComments.module.scss";
import HomeCommentsCard from "./HomeCommentsCard/HomeCommentsCard";

//Swiper Library Components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
//Swiper Styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

//User Infos

const userInfo = {
  user1: "Alexander Hughes",
  user2: "Benjamin Patel",
  user3: "Sophia Chen",
  user4: "Olivia Thompson",
};

//Image imports
import user1 from "../../../assets/img/Home/Comments/Users/01.jpg";
import user2 from "../../../assets/img/Home/Comments/Users/02.jpg";
import user3 from "../../../assets/img/Home/Comments/Users/03.jpg";
import user4 from "../../../assets/img/Home/Comments/Users/04.jpg";

const users = [user1, user2, user3, user4];

const HomeComments = () => {
  return (
    <div className={c.comments}>
      <h1>Clients' Reviews</h1>
      <Swiper
        spaceBetween={20}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        breakpoints={{
          //Responsive of slidesPerView
          1280: {
            slidesPerView: 2,
          },
          800: {
            slidesPerView: 2,
          },
        }}
        className={c.swiper}
      >
        {users.map((user, i) => (
          <SwiperSlide className={c.swiperSlide} key={i}>
            <HomeCommentsCard
              userInfo={Object.values(userInfo)[i]}
              userImage={user}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeComments;
