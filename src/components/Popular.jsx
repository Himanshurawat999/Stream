import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DropDown from "./partials/DropDown";
import TopNav from "./partials/TopNav";
import axios from "../utils/axios";
import Cards from "./partials/Cards";
import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";

function Popular() {
  const navigate = useNavigate();
  const [category, setCategory] = useState("movie");
  const [popular, setPopular] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  document.title = "Stream | Popular" + category;

  const GetPopular = async () => {
    try {
      const { data } = await axios.get(`${category}/popular?page=${page}`);

      if (data.results.length > 0) {
        setPopular((prevState) => [...prevState, ...data.results]);
        setPage(page + 1);
      } else {
        setHasMore(false);
      }
    } catch (err) {
      console.log("Errror: ", err.message);
    }
  };

  const refershHandler = async () => {
    if (popular.length === 0) {
      GetPopular();
    } else {
      setPage(1);
      setPopular([]);
      GetPopular();
    }
  };

  useEffect(() => {
    refershHandler();
  }, [category]);

  return popular.length > 0 ? (
    <div className="w-screen h-screen">
      <div className="px-[5%] w-full flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-zinc-400">
          <i
            className="hover:text-[#F0BB40] ri-arrow-left-line"
            onClick={() => navigate(-1)}
          ></i>
          Popular
        </h1>

        <div className="flex items-center w-[80%]">
          <TopNav />
          <DropDown
            title="Category"
            options={["movie", "tv"]}
            func={(e) => setCategory(e.target.value)}
          />
          <div className="mr-[2%]"></div>
        </div>
      </div>

      <InfiniteScroll
        dataLength={popular.length}
        next={GetPopular}
        hasMore={hasMore}
        loader={<Loading />}
      >
        <Cards data={popular} title={category} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
}

export default Popular;
