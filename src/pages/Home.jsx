import React from "react";
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
    </Layout>
  );
};

export default Home;
