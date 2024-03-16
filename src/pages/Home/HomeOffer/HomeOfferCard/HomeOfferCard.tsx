import { FC } from "react";
import c from "./HomeOfferCard.module.scss";

interface Card{
    image:string
}

const HomeOfferCard: FC<Card> = ({ image }) => {
  return (
    <div className={c.card}>
      <div className={c.logo}>
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default HomeOfferCard;
