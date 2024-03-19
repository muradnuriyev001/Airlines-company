import { FC } from "react";
import c from "./HomeTeamCard.module.scss";

interface Member {
  memberImage: string;
  memberInfo: string;
}

const HomeTeamCard: FC<Member> = ({ memberImage, memberInfo }) => {
  return (
    <div className={c.card}>
      <div className={c.memberImage}>
        <img src={memberImage} alt="member" />
      </div>
      <div className={c.memberInfo}>
        <p>{memberInfo}</p>
      </div>
    </div>
  );
};

export default HomeTeamCard;
