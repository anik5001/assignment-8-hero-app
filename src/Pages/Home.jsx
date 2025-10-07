import React from "react";
import useAppData from "../Hooks/useAppData";
import Container from "../components/Container";
import AppCard from "./AppCard";
import { Link } from "react-router";
import Banner from "../components/Banner";

const Home = () => {
  const data = useAppData();
  const { appData, loading, error } = data;
  const sliceData = appData.slice(0, 8);
  return (
    <div className="max-w-7xl mx-auto p-10">
      <Banner></Banner>
      <div className="my-10">
        <h1 className="font-bold text-5xl text-center">Trending Apps</h1>
        <p className="text-center my-4">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="grid grid-cols-1 gap-7 md:grid-cols-3 lg:grid-cols-4">
        {sliceData.map((singleData) => (
          <AppCard key={singleData.id} singleData={singleData}></AppCard>
        ))}
      </div>
      <Link to="/apps" className="flex justify-center">
        <p className="bg-gradient-to-r from-[#632ee3] to-[#9f62f2] py-2 px-8 mt-8 rounded-xl text-white w-fit ">
          Show All
        </p>
      </Link>
    </div>
  );
};

export default Home;
