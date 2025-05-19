import usePageTitle from "../../hooks/usePageTitle";
import HomeBanner from "./HomeBanner/HomeBanner";
import HomeBook from "./HomeBook/HomeBook";
import HomeComments from "./HomeComments/HomeComments";
import HomeOffer from "./HomeOffer/HomeOffer";
import HomeSponsors from "./HomeSponsors/HomeSponsors";
import HomeTeam from "./HomeTeam/HomeTeam";
import HomeVideo from "./HomeVideo/HomeVideo";

const Home = () => {
  usePageTitle("Azerline Jet | Home")
  return (
    <div>
      <HomeBanner />
      <HomeBook />
      <HomeSponsors />
      <HomeOffer />
      <HomeVideo />
      <HomeTeam />
      <HomeComments />
    </div>
  );
};

export default Home;
