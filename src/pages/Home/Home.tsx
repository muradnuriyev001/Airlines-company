import HomeBanner from "./HomeBanner/HomeBanner";
import HomeBook from "./HomeBook/HomeBook";
import HomeOffer from "./HomeOffer/HomeOffer";
import HomeSponsors from "./HomeSponsors/HomeSponsors";
import HomeTeam from "./HomeTeam/HomeTeam";

const Home = () => {
  return (
    <div>
      <HomeBanner />
      <HomeBook />
      <HomeSponsors />
      <HomeOffer />
      <HomeTeam />
    </div>
  );
};

export default Home;
