import { FC } from "react";
import c from "./HomeOfferCard.module.scss";

import Card from "../../../../types/types";

const HomeOfferCard: FC<Card> = ({ image, heading, text }) => {
  return (
    <div className={c.card}>
      <div className={c.logo}>
        <img src={image} alt="" />
      </div>
      <div className={c.text}>
        <h3>{heading}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default HomeOfferCard;
