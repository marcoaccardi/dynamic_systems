import React from "react";
// import routes route & useLocation hook
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
// import pages
import Home from "../pages/Home";
import ScientificResearch from "../pages/ScientificResearch";
import Credits from "../pages/Credits";
import Installation from "../pages/Installation";
import ScientificResearchPart2 from "../pages/ScientificResearchPart2";
import Reference from "../pages/Reference";
import About from "../pages/About";

const AnimRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence initial={true} mode="wait">
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/scientificresearch" element={<ScientificResearch />} />
        <Route
          path="/scientificresearch2"
          element={<ScientificResearchPart2 />}
        />
        <Route path="/reference" element={<Reference />} />
        <Route path="/credits" element={<Credits />} />
        <Route path="/installation" element={<Installation />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimRoutes;
