import c from "./Home.module.scss"
import HomeBanner from "./HomeBanner/HomeBanner"
import HomeOffer from "./HomeOffer/HomeOffer"

const Home = () => {
  return (
    <div className={c.home}>
      <HomeBanner/>
      <HomeOffer/>
    </div>
  )
}

export default Home