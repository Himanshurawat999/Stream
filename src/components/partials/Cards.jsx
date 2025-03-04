import React from "react";
import { Link } from "react-router-dom";

function Cards({ data, title }) {
  return (
    <div className="flex flex-wrap w-full h-full px-[5%] bg-[#1F1E24]">
      {data.map((card, index) => (
        <Link
          to={`/${card.media_type || title}/details/${card.id}`}
          className="relative w-[25vh] mr-[5%] mb-[5%] rounded-md"
          key={index}
        >
          <img
            className="h-[40vh] object-cover rounded-md shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)]"
            src={`https://image.tmdb.org/t/p/original/${
              card.backdrop_path || card.poster_path || card.profile_path
            }`}
            alt=""
          />
          <h1 className="text-2xl text-zinc-300 mt-3 font-semibold">
            {card.name ||
              card.title ||
              card.original_name ||
              card.original_title}
          </h1>

          {card.vote_average && (
            <div className="absolute right-[-10%] bottom-[25%] rounded-full text-xl font-semibold bg-yellow-600 text-white w-[5vh] h-[5vh] flex justify-center items-center">
              {(card.vote_average * 10).toFixed()} <sup>%</sup>
            </div>
          )}
        </Link>
      ))}
    </div>
  );
}

export default Cards;
