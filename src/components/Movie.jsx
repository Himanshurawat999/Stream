import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DropDown from "./partials/DropDown";
import TopNav from "./partials/TopNav";
import axios from "../utils/axios";
import Cards from "./partials/Cards";
import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";

function Movie() {
  const navigate = useNavigate();
  const [category, setCategory] = useState("now_playing");
  const [movie, setMovie] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  document.title = "Stream | Movie" + category;

  const GetMovie = async () => {
    try {
      const { data } = await axios.get(`/movie/${category}?page=${page}`);

      if (data.results.length > 0) {
        setMovie((prevState) => [...prevState, ...data.results]);
        setPage(page + 1);
      } else {
        setHasMore(false);
      }
    } catch (err) {
      console.log("Errror: ", err.message);
    }
  };

  const refershHandler = async () => {
    if (movie.length === 0) {
      GetMovie();
    } else {
      setPage(1);
      setMovie([]);
      GetMovie();
    }
  };

  useEffect(() => {
    refershHandler();
  }, [category]);

  return movie.length > 0 ? (
    <div className="w-screen h-screen">
      <div className="px-[5%] w-full flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-zinc-400">
          <i
            className="hover:text-[#F0BB40] ri-arrow-left-line"
            onClick={() => navigate(-1)}
          ></i>
          Movie
          <small className="ml-2 text-sm text-zinc-600">({category})</small>
        </h1>

        <div className="flex items-center w-[80%]">
          <TopNav />
          <DropDown
            title="Category"
            options={["popular", "top_rated", "upcoming", "now_playing"]}
            func={(e) => setCategory(e.target.value)}
          />
          <div className="mr-[2%]"></div>
        </div>
      </div>

      <InfiniteScroll
        dataLength={movie.length}
        next={GetMovie}
        hasMore={hasMore}
        loader={<Loading />}
      >
        <Cards data={movie} title="movie" />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
}

export default Movie;
