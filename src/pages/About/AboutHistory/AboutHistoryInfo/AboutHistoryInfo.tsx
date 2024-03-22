import c from "./AboutHistoryInfo.module.scss";
import { FC } from "react";

interface Info {
  oldPlaneImg: string;
  newPlaneImg: string;
  oldPlaneText: string;
  newPlaneText: string;
}
const AboutHistoryInfo: FC<Info> = ({
  oldPlaneImg,
  newPlaneImg,
  oldPlaneText,
  newPlaneText,
}) => {
  return (
    <div className={c.container}>
      <h1>History of AirLine Jet Company</h1>
      <div className={c.content}>
        <p>{oldPlaneText}</p>
        <div className={c.image}>
          <img src={oldPlaneImg} alt="" />
        </div>
      </div>

      <div className={c.content}>
        <p>{newPlaneText}</p>
        <div className={c.image}>
          <img src={newPlaneImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutHistoryInfo;
