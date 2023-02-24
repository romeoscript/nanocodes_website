import React from "react";
import Journey from "../components/Journey";
import LadyForm from "../components/LadyForm";
import Layout from "../components/Layout";
import ServiceCard from "../components/ServiceCard";
import SwiperCard from "../components/SwiperCard";
import Who from "../components/Who";
import Wrapper from "../components/Wrapper";

const Home = () => {
  return (
    <Layout>
      <Wrapper />
      <Who />
      <ServiceCard />
      <SwiperCard />
      <Journey />
      <LadyForm />
    </Layout>
  );
};

export default Home;
