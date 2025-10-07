import React, { useState } from "react";
import useAppData from "../Hooks/useAppData";
import AppCard from "./AppCard";

const AllAppsPage = () => {
  const data = useAppData();
  const { appData, loading, error } = data;
  const [search, setSearch] = useState("");
  const term = search.trim().toLocaleLowerCase();
  const searchData = term
    ? appData.filter((d) => d.title.toLocaleLowerCase().includes(term))
    : appData;

  return (
    <div className="max-w-7xl mx-auto p-10">
      <div className="my-10">
        <h1 className="font-bold text-5xl text-center">Our All Applications</h1>
        <p className="text-center my-4">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className="flex justify-between mb-5">
        <h1 className="font-semibold text-2xl">
          ({searchData.length}) Apps Found
        </h1>
        <label className="input">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            placeholder="Search Apps"
          />
        </label>
      </div>
      <div className="grid grid-cols-1 gap-7 md:grid-cols-3 lg:grid-cols-4">
        {searchData.length === 0 ? (
          <div className="col-span-12 text-center text-5xl font-medium py-10">
            No App Found!
          </div>
        ) : (
          searchData.map((singleData) => (
            <AppCard key={singleData.id} singleData={singleData}></AppCard>
          ))
        )}
      </div>
    </div>
  );
};

export default AllAppsPage;
