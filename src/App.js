import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import FreeTrial from "./components/Freetrail";
import Footer from "./components/Footer";
import Subscribe from "./components/Subscribe";
import About from "./components/About";
import Universities from "./components/Universities";
import GmatPrep from "./components/GmatPrep";
import Testimonials from "./components/Testimonials";
function App() {
  return (
    <div>
      <Header />
      <Home />
      <FreeTrial id="freetrail" />
      <GmatPrep id="gmatprep" />
      <About id="about" />
      <Universities id="universities" />
      <Testimonials id="testimonials" />
      <Subscribe id="subscribe" />
      <Footer id="footer" />
    </div>
  );
}

export default App;
