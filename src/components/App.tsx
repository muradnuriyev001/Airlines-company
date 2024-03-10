import c from "./App.module.scss";
import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home/Home";
import Layout from "../pages/Layout/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="" element />
        <Route path="" element />
      </Route>
      <Route path="*" element />
    </Routes>
  );
}

export default App;
