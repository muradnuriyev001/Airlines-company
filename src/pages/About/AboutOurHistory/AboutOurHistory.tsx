import c from "./AboutOurHistory.module.scss";
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
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
      className={c.history}
    >
      <div className={c.header}>
        <motion.h3 variants={Animation} custom={0.4}>
          Our History
        </motion.h3>
        <motion.p variants={Animation} custom={0.5}>
          What Make Us Special
        </motion.p>
      </div>
      {historyInfo.map((history, i) => (
        <motion.div
          variants={Animation}
          custom={i + 1}
          key={i}
          className={c.item}
        >
          <div className={c.image}>
            <img src={images[i]} alt="" draggable="false" />
          </div>
          <div className={c.itemText}>
            <motion.p variants={Animation} custom={i + 1.1}>
              {history.year}
            </motion.p>
            <motion.p variants={Animation} custom={i + 1.2}>
              {history.name}
            </motion.p>
            <motion.p variants={Animation} custom={i + 1.3}>
              {history.description}
            </motion.p>
          </div>
        </motion.div>
      ))}

      <div></div>
    </motion.div>
  );
};

export default AboutOurHistory;
