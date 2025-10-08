import React, { useState } from "react";
import { useParams } from "react-router";
import Container from "../components/Container";
import downloadIcon from "../assets/icon-downloads.png";
import rattingIcon from "../assets/icon-ratings.png";

import reviewIcon from "../assets/icon-review.png";
import useAppData from "../Hooks/useAppData";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { addToStoreDb, getStoreApp } from "../Utility/addToLocalSt";

const DetailsAppCard = () => {
  const [toggle, setToggle] = useState(false);
  const handleInstallBtn = (appDetail) => {
    setToggle(true);

    addToStoreDb(appDetail);
  };
  const { appData, loading, error } = useAppData();
  const { id } = useParams();

  const appId = Number(id);
  const allReadyInstalled = getStoreApp();
  const isAllReadyInstalled = allReadyInstalled.filter((p) => p.id === appId);
  console.log(isAllReadyInstalled);
  if (loading) return <span>Loading...</span>;
  const appDetail = appData.find((app) => app.id === appId);

  return (
    <div>
      <Container>
        <div className="flex gap-5 p-6 border-b-1 border-gray-400 mb-2 items-center">
          <div>
            <img className="rounded-md" src={appDetail.image} alt="" />
          </div>
          <div className="space-y-3">
            <div>
              <h1 className="text-3xl font-bold">{appDetail.title}</h1>
              <p>Developed by : {appDetail.companyName}</p>
            </div>
            <div className="flex gap-20">
              <div>
                <img src={downloadIcon} alt="" />
                <p>Downloads</p>
                <p className="font-bold text-4xl">{appDetail.downloads}</p>
              </div>
              <div>
                <img src={rattingIcon} alt="" />
                <p>Average Ratings</p>
                <p className="font-bold text-4xl">{appDetail.ratingAvg}</p>
              </div>
              <div>
                <img src={reviewIcon} alt="" />
                <p>Total Reviews</p>
                <p className="font-bold text-4xl">{appDetail.reviews}</p>
              </div>
            </div>
            <button
              onClick={() => handleInstallBtn(appDetail)}
              className={`bg-[#00d390] text-white py-2 px-4 rounded-md cursor-pointer hover:bg-green-600
                    
                 `}
            >
              {isAllReadyInstalled.length === 1
                ? "Installed"
                : !toggle
                ? `Install Now(${appDetail.size}MB)`
                : "Installed"}
            </button>
          </div>
        </div>
        {/* chart */}
        <h1 className="font-bold text-xl my-4">Ratings</h1>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={appDetail.ratings} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis dataKey="name" type="category" reversed />
              <Tooltip />
              <Legend />

              <Bar
                dataKey="count"
                fill="#ff8811"
                activeBar={<Rectangle fill="gold" stroke="purple" />}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
        {/* description */}
        <div className="my-10">
          <h1 className="font-bold text-xl my-5">Description</h1>
          <p> {appDetail.description}</p>
        </div>
      </Container>
    </div>
  );
};

export default DetailsAppCard;
