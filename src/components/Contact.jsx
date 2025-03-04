import React from "react";
import Minions from "../assets/Moon.gif";

function Contact() {
  document.title = "Stream | Contact";
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
      <a
        href="https://www.linkedin.com/in/himanshurawat9"
        target={"_black"}
        className="text-8xl font-bold mt-[-5%] hover:text-[#F0BB40]"
      >
        Himanshu Rawat
      </a>
    </div>
  );
}

export default Contact;
