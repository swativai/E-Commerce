import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Products from "./Products";
import SingleProduct from "./SingleProduct";
import Cart from "./Cart";
import ErrorPage from "./ErrorPage";
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  const theme = {
    colors: {
      bg: "#F6F8BFA",
      footer_bg: "#0a1435",
      btn: "rgb(98, 84, 234,0.5)",
      border: "rgba(98, 84, 234,0.5)",
      hr: "#ffffff",
      gradient:
        "Linear-gradient(0deg,rgb(132 144 255) 0%, rbg(98 109  252)100%)",
      shadow:
        "rgba(0,0,0,0.2)0px 1px 3px  0px,rgba(27,31,35,0.15)0px 0px 0px 1px",
      shoadowSupport: "rgbaa(0,0,0,16) 0px 1px 4px",
    },
    media: {
      mobile: "768px",
      tab: "998px",
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/singleproduct/:id" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
