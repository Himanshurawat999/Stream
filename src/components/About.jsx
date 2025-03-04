import React from "react";
import Minions from "../assets/Moon.gif";

function About() {
  document.title = "Stream | About";
  return (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.8), rgba(0,0,0,.9), rgba(0,0,0,.3)), url(${Minions})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="relative w-screen h-screen px-[10%] bg-black flex flex-col items-center justify-center text-zinc-50"
    >
      <h2 className="text-6xl font-bold mt-[-5%] mb-[5%]">
        Let's talk about STREAM
      </h2>
      <p className="w-[70%] text-xl">
        Stream is a community built movie and TV database. Every piece of data
        has been added by our amazing community dating back to 2025. Stream's
        strong international focus and breadth of data is largely unmatched and
        something we're incredibly proud of. Put simply, we live and breathe
        community and that's precisely what makes us differet.
      </p>
    </div>
  );
}

export default About;
