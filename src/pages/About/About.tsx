import HomeComments from "../Home/HomeComments/HomeComments";
import HomeSponsors from "../Home/HomeSponsors/HomeSponsors";
import HomeTeam from "../Home/HomeTeam/HomeTeam";
import AboutBanner from "./AboutBanner/AboutBanner";
import AboutHistory from "./AboutHistory/AboutHistory";

import usePageTitle from "../../hooks/usePageTitle";

const About = () => {
  usePageTitle("AirLine Jet | About");
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
