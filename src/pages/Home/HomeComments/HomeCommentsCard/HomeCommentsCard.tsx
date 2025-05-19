import { FC } from "react";
import c from "./HomeCommentsCard.module.scss";
import { RiStarSFill } from "react-icons/ri";
import { PiChatCircleText } from "react-icons/pi";

interface User {
  userImage: string;
  userInfo: string;
}
const HomeCommentsCard: FC<User> = ({ userImage, userInfo }) => {
  return (
    <div className={c.card}>
      <div className={c.stars}>
        <RiStarSFill />
        <RiStarSFill />
        <RiStarSFill />
        <RiStarSFill />
        <RiStarSFill />
      </div>
      <div className={c.commentIcon}>
        <PiChatCircleText />
      </div>
      <div className={c.userMessage}>
        <span>
          Indulgent luxury, impeccable service. From lavish cabins to attentive
          staff, every detail with Azerline epitomizes excellence. Flying with
          them isn't just a trip; it's an unparalleled journey of comfort and
          opulence above the clouds.
        </span>
      </div>

      <div className={c.userInfo}>
        <div>
          <img src={userImage} alt="" />
        </div>
        <div>
          <p>{userInfo}</p>
        </div>
      </div>
    </div>
  );
};

export default HomeCommentsCard;
