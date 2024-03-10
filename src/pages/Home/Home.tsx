import c from "./Home.module.scss"
import HomeBanner from "./HomeBanner/HomeBanner"

const Home = () => {
  return (
    <div className={c.home}>
      <HomeBanner/>
    </div>
  )
}

export default Home