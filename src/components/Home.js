import React from "react";
import Cover from "../assets/cover.png";

function home() {
  return (
    <div name="home">
      <div className="w-full h-screen bg-black">
        <div className="flex flex-col">
          <h1
            className="text-4xl sm:text-7xl font-bold
                text-white pt-20 ml-20 "
          >
            Hi-Res Audio{" "}
          </h1>
          <div>
            <img src={Cover} alt="covers" />
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default home;
