import "./Content.css";

import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "../../views/About";
import Home from "../../views/Home";
import Param from "../../views/Param";
import NotFound from "../../views/NotFound";

const Content = (props) => (
  <main className="Content">
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/param/:id" element={<Param />} />
      <Route path="/about" element={<About />} />
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </main>
);

export default Content;
