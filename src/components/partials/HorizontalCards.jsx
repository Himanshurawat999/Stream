import React from "react";
import { Link } from "react-router-dom";

function HorizontalCards({ data }) {
  console.log(data);
  return (
    <div className="w-[100%] flex overflow-y-hidden mb-5 p-5">
      {data.map((item, index) => (
        <Link
          to={`/${item.media_type}/details/${item.id}`}
          key={index}
          className="min-w-[18%] h-[40vh] mr-5 mb-5 bg-zinc-950 shadow-lg rounded-md overflow-hidden"
        >
          <img
            className="w-full h-[55%] object-cover rounded-b-md"
            src={`https://image.tmdb.org/t/p/original/${
              item.backdrop_path || item.poster_path
            }`}
            alt=""
          />
          <div className="text-zinc-200 p-3 h-[45%] overflow-y-auto">
            <h1 className="text-xl font-semibold ">
              {item.name ||
                item.title ||
                item.original_name ||
                item.original_title}
            </h1>
            <p className="">
              {item.overview.slice(0, 40)}...
              <span className="text-blue-500"> more</span>
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default HorizontalCards;
