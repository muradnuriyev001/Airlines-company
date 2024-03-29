import HomeComments from "../Home/HomeComments/HomeComments";
import HomeSponsors from "../Home/HomeSponsors/HomeSponsors";
import HomeTeam from "../Home/HomeTeam/HomeTeam";
import AboutBanner from "./AboutBanner/AboutBanner";

import usePageTitle from "../../hooks/usePageTitle";
import AboutOurHistory from "./AboutOurHistory/AboutOurHistory";
import AboutInfo from "./AboutInfo/AboutInfo";

const About = () => {
  usePageTitle("AirLine Jet | About");
  return (
    <div>
      <AboutBanner />
      <AboutOurHistory />
      <AboutInfo />
      <HomeTeam />
      <HomeComments />
      <HomeSponsors />
    </div>
  );
};

export default About;
