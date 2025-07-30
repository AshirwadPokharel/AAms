import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AAMS from "./pages/AAMS";
import Features from "./pages/Features";
import Demo from "./pages/Demo";
import Pricing from "./pages/Pricing";
import Download from "./pages/Download";
import FAQ from "./pages/FAQ";
import Support from "./pages/Support";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="pt-6 px-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aams" element={<AAMS />} />
          <Route path="/features" element={<Features />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/download" element={<Download />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/support" element={<Support />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
