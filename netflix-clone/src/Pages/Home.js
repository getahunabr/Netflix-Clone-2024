import React from "react";
import Header from "../Component/Header/Header";
import Footer from "../Component/Footer/Footer";
import Banner from "../Component/Banner/Banner";
import RowsList from "../Component/Rows/RowsList/RowsList";

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
