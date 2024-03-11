import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home/Home";
import Layout from "../pages/Layout/Layout";
import About from "../pages/About/About";
import Planes from "../pages/Planes/Planes";
import Contact from "../pages/Contact/Contact";
import NotFound from "../pages/NotFound/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/planes" element={<Planes />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
