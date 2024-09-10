import React from "react";
import HeroSection from "./components/HeroSection";
import { useProductContext } from "./context/productcontex";

const About = () => {

  
  const { MyData } = useProductContext()
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
