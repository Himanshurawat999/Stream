import React from "react";
import Loader from "../assets/Loader.webp";

function Loading() {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-black">
      <img className="h-[50%] object-cover" src={Loader} alt="" />
    </div>
  );
}

export default Loading;
