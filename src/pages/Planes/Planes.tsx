import c from "./Planes.module.scss";
import planesData from "../../data/planesData.json";

import PlaneCard from "./PlaneCard/PlaneCard";
import PlanesBanner from "./PlanesBanner/PlanesBanner";
import HomeComments from "../Home/HomeComments/HomeComments";
import HomeOffer from "../Home/HomeOffer/HomeOffer";
import usePageTitle from "../../hooks/usePageTitle";

//Bad method but there are errors in deployment from planeData.json like "image":url
import plane1 from "../../assets/img/Plane/Models/plane-1.jpg";
import plane2 from "../../assets/img/Plane/Models/plane-2.jpg";
import plane3 from "../../assets/img/Plane/Models/plane-3.jpg";
import plane4 from "../../assets/img/Plane/Models/plane-4.jpg";
import plane5 from "../../assets/img/Plane/Models/plane-5.jpg";
import plane6 from "../../assets/img/Plane/Models/plane-6.jpg";
import plane7 from "../../assets/img/Plane/Models/plane-7.jpg";
import plane8 from "../../assets/img/Plane/Models/plane-8.jpg";
import plane9 from "../../assets/img/Plane/Models/plane-9.jpg";
import plane10 from "../../assets/img/Plane/Models/plane-10.jpg";
import plane11 from "../../assets/img/Plane/Models/plane-11.jpg";
import plane12 from "../../assets/img/Plane/Models/plane-12.jpg";

const planeImages = [
  plane1,
  plane2,
  plane3,
  plane4,
  plane5,
  plane6,
  plane7,
  plane8,
  plane9,
  plane10,
  plane11,
  plane12,
];

const Planes = () => {
  usePageTitle("AirLine Jet | Planes");
  return (
    <>
      <PlanesBanner />
      <h1>Explore our planes</h1>
      <div className={c.planes}>
        {planesData.map((plane, i) => (
          <PlaneCard key={i} {...plane} image={planeImages[i]} />
        ))}
      </div>
      <HomeOffer />
      <HomeComments />
    </>
  );
};

export default Planes;
