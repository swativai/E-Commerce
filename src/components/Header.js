import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        <img className="logo" src="./images/logo.jpg" alt="My Logo" />
      </NavLink>
      <Navbar />
    </MainHeader>
  );
};
const MainHeader = styled.header`
  padding: 0.4rem;
  margin-right: 3rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .logo {
    height: 6rem;
  }
`;

export default Header;
