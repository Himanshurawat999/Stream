import React from "react";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import NotFound from "../NotFound";

function Trailer() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const category = pathname.includes("movie") ? "movie" : "tv";
  const ytvideo = useSelector((state) => state[category].info.video);

  console.log(ytvideo);
  return (
    <div className="bg-[rgba(0,0,0,.7)] absolute overscroll-none top-0 left-0 z-1000 w-screen h-screen flex items-center justify-center">
      <Link
        onClick={() => navigate(-1)}
        className="absolute hover:text-[#F0BB40] ri-close-fill text-3xl text-white right-[5%] top-[5%] "
      ></Link>

      {ytvideo ? (
        <ReactPlayer
          controls
          height={650}
          width={1600}
          url={`https://www.youtube.com/watch?v=${ytvideo.key}`}
        />
      ) : (
        <NotFound />
      )}
    </div>
  );
}

export default Trailer;
