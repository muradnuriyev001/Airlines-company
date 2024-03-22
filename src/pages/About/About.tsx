import HomeComments from "../Home/HomeComments/HomeComments";
import HomeSponsors from "../Home/HomeSponsors/HomeSponsors";
import HomeTeam from "../Home/HomeTeam/HomeTeam";
import AboutBanner from "./AboutBanner/AboutBanner";
import AboutHistory from "./AboutHistory/AboutHistory";

const About = () => {
  return (
    <div>
      <AboutBanner />
      <AboutHistory />
      <HomeTeam />
      <HomeComments />
      <HomeSponsors />
    </div>
  );
};

export default About;
