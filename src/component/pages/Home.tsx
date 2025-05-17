import React from "react";
import Welcome from "./welcome/Welcome";
import Map from "./map/Map";
import AboutCompany from "./about/AboutCompany";
import Services from "./services/Services";

const Home = () => {
  return (
    <div>
      <Welcome />
      <AboutCompany/>
      <Services/>
      <Map/>
    </div>
  );
};

export default Home;
