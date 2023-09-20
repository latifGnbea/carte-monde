import React from "react";
import Navigation from "../components/Navigation";
import { NavLink } from "react-router-dom";
import Logo from "../components/Logo";
import Countries from "../components/Countries";

const Home = () => {
  return (
    <div>
      <Logo></Logo>
      <Navigation></Navigation>
      <Countries></Countries>
    </div>
  );
};

export default Home;
