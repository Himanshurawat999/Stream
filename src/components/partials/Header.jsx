import React from "react";
import { Link } from "react-router-dom";

function Header({ data }) {
  console.log(data);
  return (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.2), rgba(0,0,0,.5), rgba(0,0,0,.8)), url(https://image.tmdb.org/t/p/original/${
          data.backdrop_path || data.profile_path
        })`,
        backgroundPosition: "top 5%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="w-full h-[50vh] flex flex-col justify-end items-start p-[5%]"
    >
      <h1 className="w-[70%] text-5xl font-black text-zinc-200">
        {data.name || data.title || data.original_name || data.original_title}
      </h1>
      <p className="w-[70%] mt-3 mb-3 text-white">
        {data.overview.slice(0, 200)}...
        <Link
          to={`/${data.media_type}/details/${data.id}`}
          className="text-blue-400"
        >
          {" "}
          more
        </Link>
      </p>
      <p className="text-zinc-200">
        <i className="text-yellow-600 mr-2 ri-megaphone-fill">
          {data.release_date || "No Information"}
        </i>
        <i className="text-yellow-600 ri-album-fill">
          {data.media_type.toUpperCase()}
        </i>
      </p>
      <Link className="bg-[#F0BB40] p-4 mt-5 rounded-md font-bold text-zinc-50">
        Watch Trailer
      </Link>
    </div>
  );
}

export default Header;
