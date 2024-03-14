import { Outlet, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Marquee from "../../components/Marquee/Marquee";
import Loader from "../../components/Loader/Loader";
import SubscribeNews from "../../components/SubscribeNews/SubscribeNews";
import TopButton from "../../components/TopButton/TopButton";

const Layout = () => {
  //Loader Logic
  const { pathname } = useLocation();

  const [loaderState, setLoaderState] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0); //scrolling to top on changing pathname

    setLoaderState(true);
    document.body.style.overflow = "hidden"; //disabling scrolling on loader
    setTimeout(() => {
      setLoaderState(false);
      document.body.style.overflow = "auto";
    }, 750);
  }, [pathname]);

  return (
    <>
      <div>
        {loaderState && <Loader />}
        <Marquee />
        <Header />
        <Outlet />
        <SubscribeNews />
        <Footer />
      </div>
      <TopButton />
    </>
  );
};

export default Layout;
