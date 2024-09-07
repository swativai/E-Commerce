import React, { useContext } from "react";
import HeroSection from "./components/HeroSection";
import { AppContext } from "./context/productcontex";

const About = () => {
  const { MyData } = useContext(AppContext);
  // const data = {
  //   name: "Apna E-Commerce",
  // };
  return (
    <>
      {MyData}
      <HeroSection myData="Apna E-Commerce" />
    </>
  );
};

export default About;
