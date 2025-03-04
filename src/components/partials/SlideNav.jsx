import React from "react";
import { Link } from "react-router-dom";

function SlideNav() {
  return (
    <>
      <div className="w-[20%] h-full border-r-2 border-zinc-400 p-10">
        <h1 className="text-2xl text-white font-bold">
          <i className="text-[#F0BB40] ri-tv-fill mr-2"></i>
          <span className="text-2xl">Stream</span>
        </h1>

        <nav className="flex flex-col text-zinc-400 text-xl">
          <h1 className="text-white font-semibold text-xl mt-10 mb-5">
            New Feeds
          </h1>
          <Link
            to="/trending"
            className="hover:bg-[#F0BB40] hover:text-white duration-300 rounded-md p-5"
          >
            <i className="mr-2 ri-fire-line"></i>
            Trending
          </Link>
          <Link
            to="/popular"
            className="hover:bg-[#F0BB40] hover:text-white duration-300 rounded-md p-5"
          >
            <i className="mr-2 ri-bard-line"></i>
            Popular
          </Link>
          <Link
            to="/movie"
            className="hover:bg-[#F0BB40] hover:text-white duration-300 rounded-md p-5"
          >
            <i className="mr-2 ri-movie-2-line"></i>
            Movies
          </Link>
          <Link
            to="/tv"
            className="hover:bg-[#F0BB40] hover:text-white duration-300 rounded-md p-5"
          >
            <i className="mr-2 ri-tv-2-line"></i>
            Tv Shows
          </Link>
          <Link
            to="/person"
            className="hover:bg-[#F0BB40] hover:text-white duration-300 rounded-md p-5"
          >
            <i className="mr-2 ri-team-line"></i>
            People
          </Link>
        </nav>

        <hr className="border-none h-[1px] mt-4 bg-zinc-400" />

        <nav className="flex flex-col text-zinc-400 text-xl">
          <h1 className="text-white font-semibold text-xl mt-10 mb-5">
            Website Information
          </h1>
          <Link
            to="/about"
            className="hover:bg-[#F0BB40] hover:text-white duration-300 rounded-md p-5"
          >
            <i className="mr-2 ri-information-2-line"></i>
            About
          </Link>
          <Link
            to="/contact"
            className="hover:bg-[#F0BB40] hover:text-white duration-300 rounded-md p-5"
          >
            <i className="mr-2 ri-phone-line"></i>
            Contact
          </Link>
        </nav>
      </div>
    </>
  );
}

export default SlideNav;
