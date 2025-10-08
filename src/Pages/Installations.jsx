import React, { useState } from "react";
import {
  addToStoreDb,
  getStoreApp,
  removeFromInstalled,
} from "../Utility/addToLocalSt";
import Container from "../components/Container";
import downloadIcon from "../assets/icon-downloads.png";
import rattingIcon from "../assets/icon-ratings.png";
import { toast } from "react-toastify";
import useAppData from "../Hooks/useAppData";
import Loading from "../components/Loading";

const Installations = () => {
  const { loading } = useAppData();
  const data = getStoreApp();

  const [installed, setInstalled] = useState(data);
  const [sortOrder, setOrder] = useState("none");
  if (installed.length === 0) {
    return (
      <div className="col-span-12 text-center text-5xl font-medium py-10">
        No App Installed!
      </div>
    );
  }
  const sortedInstalledApp = (() => {
    if (sortOrder === "sort-asc") {
      return [...installed].sort((a, b) => a.size - b.size);
    } else if (sortOrder === "sort-desc") {
      return [...installed].sort((a, b) => b.size - a.size);
    } else {
      return installed;
    }
  })();
  const handleUninstalledBtn = (id) => {
    toast("✅UnInstall App");
    removeFromInstalled(id);
    setInstalled((pre) => pre.filter((p) => p.id !== id));
  };
  return (
    <div>
      {loading ? (
        <Loading></Loading>
      ) : (
        <div>
          <Container>
            <div>
              <div className="text-center my-7 space-y-2">
                <h1 className="text-5xl font-semibold">Your Installed Apps</h1>
                <p>Explore All Trending Apps on the Market developed by us</p>
              </div>
              <div className="flex justify-between my-5">
                <h1 className="text-xl font-bold">
                  ({sortedInstalledApp.length})Apps Found
                </h1>
                <label className="form-control w-full max-w-xs">
                  <select
                    className="select select-bordered"
                    value={sortOrder}
                    onChange={(e) => setOrder(e.target.value)}
                  >
                    <option value="none">Sort By Size</option>
                    <option value="sort-asc">Low&lt;-High</option>
                    <option value="sort-desc">High-&gt;Low</option>
                  </select>
                </label>
              </div>

              <div>
                {sortedInstalledApp.map((ap) => (
                  <div
                    key={ap.id}
                    className="md:flex justify-between items-center mt-4 shadow rounded-2xl p-10"
                  >
                    <div className="flex items-center gap-5">
                      <img
                        className="w-[80px] h-[80px] rounded-xl"
                        src={ap.image}
                        alt=""
                      />
                      <div className="space-y-2">
                        <h1 className="text-xl font-bold">{ap.title}</h1>
                        <div className="flex gap-5">
                          <div className="flex gap-1 items-center">
                            <img
                              className="w-4 h-4"
                              src={downloadIcon}
                              alt=""
                            />
                            <p className="text-green-500">{ap.downloads}</p>
                          </div>

                          <div className="flex gap-1 items-center">
                            <img className="w-4 h-4" src={rattingIcon} alt="" />
                            <p className="text-amber-500">{ap.ratingAvg}</p>
                          </div>
                          <div>
                            <p>{ap.size}MB</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <button
                        onClick={() => handleUninstalledBtn(ap.id)}
                        className="bg-green-500 py-2 px-4 rounded-md text-white cursor-pointer w-full mt-2"
                      >
                        Uninstall
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </div>
      )}
    </div>
  );
};

export default Installations;
