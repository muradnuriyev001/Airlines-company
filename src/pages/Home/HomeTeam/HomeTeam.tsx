import c from "./HomeTeam.module.scss";

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
//image imports
import member1 from "../../../assets/img/Home/Team/member1.jpg";
import member2 from "../../../assets/img/Home/Team/member3.png";
import member3 from "../../../assets/img/Home/Team/member3.jpg";
import member4 from "../../../assets/img/Home/Team/member4.jpg";
import HomeTeamCard from "./HomeTeamCard/HomeTeamCard";

const membersImages = [member1, member3, member2, member4];

//MembersInfo

const membersInfo = [
  { name: "Adam Smith", role: "Pilot" },
  { name: "Jasmin White", role: "Pilot" },
  { name: "Emily Brown", role: "Crew" },
  { name: "Sophia Martinez", role: "Crew" },
];

const HomeTeam = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
      className={c.team}
    >
      <div className={c.text}>
        <motion.h2 variants={Animation} custom={0.4}>
          Meet Our Team
        </motion.h2>
        <motion.p variants={Animation} custom={0.5}>
          Meet our exceptional flight team, a blend of skill, experience, and
          passion for aviation.
        </motion.p>
      </div>
      <motion.div variants={Animation} custom={0.8} className={c.members}>
        {membersInfo.map((member, i) => (
          <HomeTeamCard
            key={i}
            memberImage={membersImages[i]}
            memberInfo={`${member.name} - ${member.role}`}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default HomeTeam;
