import c from "./HomeTeam.module.scss";

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
    <div className={c.team}>
      <div className={c.text}>
        <h2>Meet Our Team</h2>
        <p>
          Meet our exceptional flight team, a blend of skill, experience, and
          passion for aviation.
        </p>
      </div>
      <div className={c.members}>
        {membersInfo.map((member, i) => (
          <HomeTeamCard
            key={i}
            memberImage={membersImages[i]}
            memberInfo={`${member.name} - ${member.role}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeTeam;
