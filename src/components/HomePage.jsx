import React from "react";
import Hero from "./Hero";
import Menu from "./Menu";
import FoodDisplay from "./FoodDisplay";
import Layout from "@/app/home/layout";

const HomePage = () => {
  return (
    <Layout>
      <Hero />
      <Menu />
      <FoodDisplay />
    </Layout>
  );
};

export default HomePage;
