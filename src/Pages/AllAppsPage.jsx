import React from "react";
import useAppData from "../Hooks/useAppData";
import AppCard from "./AppCard";

const AllAppsPage = () => {
  const data = useAppData();
  const { appData, loading, error } = data;
  return (
    <div className="max-w-7xl mx-auto p-10">
      <div className="my-10">
        <h1 className="font-bold text-5xl text-center">Our All Applications</h1>
        <p className="text-center my-4">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className="grid grid-cols-1 gap-7 md:grid-cols-3 lg:grid-cols-4">
        {appData.map((singleData) => (
          <AppCard key={singleData.id} singleData={singleData}></AppCard>
        ))}
      </div>
    </div>
  );
};

export default AllAppsPage;
