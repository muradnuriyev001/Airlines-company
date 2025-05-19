import c from "./Planes.module.scss";
import planesData from "../../data/planesData.json";

import PlaneCard from "./PlaneCard/PlaneCard";
import PlanesBanner from "./PlanesBanner/PlanesBanner";
import HomeComments from "../Home/HomeComments/HomeComments";
import HomeOffer from "../Home/HomeOffer/HomeOffer";
import usePageTitle from "../../hooks/usePageTitle";

const Planes = () => {
  usePageTitle("Azerline Jet | Planes");
  return (
    <>
      <PlanesBanner />
      <h1>Explore our planes</h1>
      <div className={c.planes}>
        {planesData.map((plane, i) => (
          <PlaneCard key={i} {...plane} />
        ))}
      </div>
      <HomeOffer />
      <HomeComments />
    </>
  );
};

export default Planes;
