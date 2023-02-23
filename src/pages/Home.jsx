import React from "react";
import Layout from "../components/Layout";
import ServiceCard from "../components/ServiceCard";
import Who from "../components/Who";
import Wrapper from "../components/Wrapper";

const Home = () => {
  return (
    <Layout>
      <Wrapper />
      <Who />
      <ServiceCard />
    </Layout>
  );
};

export default Home;
