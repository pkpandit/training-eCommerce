import React from "react";
import Hero from "../components/homePage/Hero";
import PromoCard from "../components/homePage/PromoCard";
import BestSellers from "../components/homePage/BestSellers";
import CardsItems from "../components/homePage/CardsItems";
import CallToAction from "../components/homePage/CallToAction";

const Home = () => {
  return (
    <main className="main">
      <Hero />
      <PromoCard />
      <BestSellers />
      <CardsItems />
      <CallToAction />
    </main>
  );
};

export default Home;
