import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../../utils/axios";
import noImage from "../../assets/noImage.jpg";

function TopNav() {
  const [query, setQuery] = useState("");
  const [searches, setSearches] = useState([]);

  const GetSerches = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);
      console.log(data);
      setSearches(data.results);
    } catch (err) {
      console.log("Error : ", err.message);
    }
  };

  useEffect(() => {
    GetSerches();
    console.log(searches);
  }, [query]);

  return (
    <div className="w-[80%] h-[10vh] mx-auto relative flex items-center">
      <i className="text-zinc-400 text-3xl ri-search-line"></i>
      <input
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        className="w-[50%] text-zinc-200 mx-10 p-5 text-xl outline-none border-none bg-transparent"
        type="text"
        placeholder="search anything"
      />
      {query.length > 0 && (
        <i
          onClick={() => setQuery("")}
          className="text-zinc-400 text-3xl ri-close-fill right-0"
        ></i>
      )}

      <div className="z-10 absolute w-[50%] max-h-[50vh] bg-zinc-200 top-[100%] left-[5%] overflow-auto">
        {searches.map((item, index) => (
          <Link
            to={`/${item.media_type}/details/${item.id}`}
            key={index}
            className="hover:text-black hover:bg-zinc-300 font-semibold text-zinc-600 duration-300 w-[100%] p-10 flex justify-start items-center border-b-2 border-zinc-100"
          >
            <img
              className="w-[10vh] h-[10vh] object-cover rounded-md mr-5 shadow-lg"
              src={
                item.poster_path || item.backdrop_path
                  ? `https://image.tmdb.org/t/p/original/${
                      item.poster_path || item.backdrop_path
                    }`
                  : noImage
              }
              alt=""
            />
            <span>
              {item.name ||
                item.title ||
                item.original_name ||
                item.original_title}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default TopNav;
