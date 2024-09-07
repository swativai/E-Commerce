import React from "react";
// import styled from "styled-components";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Trusted from "./components/Trusted";
import FeatureProduct from "./components/FeatureProduct";

const Home = () => {
  // const data = {
  //   name: "Apna Mart",
  // };
  return (
    <>
      <HeroSection myData="Apna Mart" />
      <FeatureProduct />
      <Services />
      <Trusted />
    </>
  );
};
// const Wrapper = styled.section`
//   height: 100vh;
//   background-color: ${({ theme }) => theme.colors.bg};
//  width: 20rem;
//   height: 20rem;
//   }
// `;

export default Home;
