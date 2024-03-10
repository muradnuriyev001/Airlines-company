import c from "./Layout.module.scss";
import { Outlet } from "react-router-dom";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Marquee from "../../components/Marquee/Marquee";

const Layout = () => {
  return (
    <div>
      <Marquee />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
