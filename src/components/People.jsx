import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DropDown from "./partials/DropDown";
import TopNav from "./partials/TopNav";
import axios from "../utils/axios";
import Cards from "./partials/Cards";
import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";

function Person() {
  const navigate = useNavigate();
  const [category, setCategory] = useState("popular");
  const [person, setPerson] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  document.title = "Stream | Person" + category;

  const GetTv = async () => {
    try {
      const { data } = await axios.get(`/person/${category}?page=${page}`);

      if (data.results.length > 0) {
        setPerson((prevState) => [...prevState, ...data.results]);
        setPage(page + 1);
      } else {
        setHasMore(false);
      }
    } catch (err) {
      console.log("Errror: ", err.message);
    }
  };

  const refershHandler = async () => {
    if (person.length === 0) {
      GetTv();
    } else {
      setPage(1);
      setPerson([]);
      GetTv();
    }
  };

  useEffect(() => {
    refershHandler();
  }, [category]);

  return person.length > 0 ? (
    <div className="w-screen h-screen">
      <div className="px-[5%] w-full flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-zinc-400">
          <i
            className="hover:text-[#F0BB40] ri-arrow-left-line"
            onClick={() => navigate(-1)}
          ></i>
          Person
          <small className="ml-2 text-sm text-zinc-600">({category})</small>
        </h1>

        <div className="flex items-center w-[80%]">
          <TopNav />
        </div>
      </div>

      <InfiniteScroll
        dataLength={person.length}
        next={GetTv}
        hasMore={hasMore}
        loader={<Loading />}
      >
        <Cards data={person} title="person" />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
}

export default Person;
