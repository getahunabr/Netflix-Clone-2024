import React from "react";
import Header from "../Component/Header/Header.js";
import Footer from "../Component/Footer/Footer.js";
import Banner from "../Component/Banner/Banner.js";
import RowsList from "../Component/Rows/RowsList/RowsList.js";

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <RowsList />
      <Footer />
    </>
  );
};

export default Home;
