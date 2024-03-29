import c from "./AboutOurHistory.module.scss";
import image1 from "../../../assets/img/About/Planes/history-1.png";
import image2 from "../../../assets/img/About/Planes/history-2.png";
import image3 from "../../../assets/img/About/Planes/history-3.png";
import image4 from "../../../assets/img/About/Planes/history-4.png";

const historyInfo = [
  {
    year: 2012,
    name: "The First Private Jet",
    description:
      "The Morane-Saulnier MS.760 Paris had a gross weight of 7,650 pounds (3.47 t), initially powered by two Turboméca Marboré turbojets of 880 pounds-force (3.9 kN) thrust.",
  },
  {
    year: 2016,
    name: "The Gulfstream Era",
    description:
      "The Lockheed JetStar, designed to meet USAF UCX requirements and seating ten passengers and two crew, first flew on 4 September 1957. A total of 204 aircraft (20.2 t)",
  },
  {
    year: 2018,
    name: "The Wolfstream Era",
    description:
      "The smaller, 17,760 pounds (8.06 t) MTOW North American Sabreliner, tailored to the USAF UTX requirement, first flew on 16 September 1958. Powered by two Pratt & Whitney.",
  },
  {
    year: 2024,
    name: "Beyond Earth",
    description:
      "The Morane-Saulnier MS.760 Paris had a gross weight of 7,650 pounds (3.47 t), initially powered by two Turboméca Marboré turbojets of 880 pounds-force (3.9 kN) thrust.",
  },
];

const images = [image1, image2, image3, image4];

const AboutOurHistory = () => {
  return (
    <div className={c.history}>
      <div className={c.header}>
        <h3>Our History</h3>
        <p>What Make Us Special</p>
      </div>
      {historyInfo.map((history, i) => (
        <div key={i} className={c.item}>
          <div className={c.image}>
            <img src={images[i]} alt="" draggable="false" />
          </div>
          <div className={c.itemText}>
            <p>{history.year}</p>
            <p>{history.name}</p>
            <p>{history.description}</p>
          </div>
        </div>
      ))}

      <div></div>
    </div>
  );
};

export default AboutOurHistory;
