import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "../utils/axios";
import Header from "./partials/Header";
import HorizontalCards from "./partials/HorizontalCards";
import SlideNav from "./partials/SlideNav";
import TopNav from "./partials/TopNav";
import DropDown from "./partials/DropDown";
import Loading from "./Loading";

function Home() {
  document.title = "Stream | Homepage";
  const [wallpaper, setWallpaper] = useState(null);
  const [trending, setTrending] = useState(null);
  const [category, setCategory] = useState("all");

  const GetHeaderWallpaper = async () => {
    try {
      const { data } = await axios.get("/trending/all/day");
      let randomData =
        data.results[(Math.random() * data.results.length).toFixed()];
      setWallpaper(randomData);
    } catch (err) {
      console.log("Errror: ", err.message);
    }
  };

  const GetTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/day`);
      setTrending(data.results);
    } catch (err) {
      console.log("Errror: ", err.message);
    }
  };

  useEffect(() => {
    GetTrending();
    !wallpaper && GetHeaderWallpaper();
  }, [category]);

  return wallpaper && trending ? (
    <>
      <SlideNav />

      <div className="w-[80%] h-full overflow-auto overflow-x-hidden">
        <TopNav />
        <Header data={wallpaper} />
        <div className="p-5 flex justify-between">
          <h1 className="text-3xl font-semibold text-zinc-400">Trending</h1>

          <DropDown
            title="Filter"
            options={["tv", "movie", "all"]}
            func={(e) => setCategory(e.target.value)}
          />
        </div>
        <HorizontalCards data={trending} />
      </div>
    </>
  ) : (
    <Loading />
  );
}

export default Home;
