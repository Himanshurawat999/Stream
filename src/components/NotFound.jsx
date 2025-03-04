import React from "react";
import { Link } from "react-router-dom";
import NotFoundGif from "../assets/404error.gif";

const NotFound = () => {
  return (
    <div className="w-screen h-screen overscroll-none flex justify-center items-center bg-black">
      <Link to={"/"}>
        <img className="h-[50%] object-cover" src={NotFoundGif} alt="" />
      </Link>
    </div>
  );
};

export default NotFound;
