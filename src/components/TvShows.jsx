import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DropDown from "./partials/DropDown";
import TopNav from "./partials/TopNav";
import axios from "../utils/axios";
import Cards from "./partials/Cards";
import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";

function TvShows() {
  const navigate = useNavigate();
  const [category, setCategory] = useState("airing_today");
  const [tv, setTv] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  document.title = "Stream | TvShows" + category;

  const GetTv = async () => {
    try {
      const { data } = await axios.get(`/tv/${category}?page=${page}`);

      if (data.results.length > 0) {
        setTv((prevState) => [...prevState, ...data.results]);
        setPage(page + 1);
      } else {
        setHasMore(false);
      }
    } catch (err) {
      console.log("Errror: ", err.message);
    }
  };

  const refershHandler = async () => {
    if (tv.length === 0) {
      GetTv();
    } else {
      setPage(1);
      setTv([]);
      GetTv();
    }
  };

  useEffect(() => {
    refershHandler();
  }, [category]);

  return tv.length > 0 ? (
    <div className="w-screen h-screen">
      <div className="px-[5%] w-full flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-zinc-400">
          <i
            className="hover:text-[#F0BB40] ri-arrow-left-line"
            onClick={() => navigate(-1)}
          ></i>
          TvShows{" "}
          <small className="ml-2 text-sm text-zinc-600">({category})</small>
          <small className="ml-2 text-sm text-zinc-600">({category})</small>
        </h1>

        <div className="flex items-center w-[80%]">
          <TopNav />
          <DropDown
            title="Category"
            options={["on_the_air", "popular", "top_rated", "airing_today"]}
            func={(e) => setCategory(e.target.value)}
          />
          <div className="mr-[2%]"></div>
        </div>
      </div>

      <InfiniteScroll
        dataLength={tv.length}
        next={GetTv}
        hasMore={hasMore}
        loader={<Loading />}
      >
        <Cards data={tv} title="tv" />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
}

export default TvShows;
