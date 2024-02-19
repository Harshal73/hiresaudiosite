import React from "react";
import Cover from "../assets/cover.png";

function home() {
  return (
    <div name="home">
      <div className="w-full h-auto bg-black">
        <div className="flex flex-col">
          <h1
            className="text-4xl sm:text-7xl font-bold
                text-gray-200 pt-20 ml-20 "
          >
            Hi-Res Audio{" "}
          </h1>
          <div>
            <img src={Cover} alt="covers" className="mx-auto  w-auto h-1/4  " />
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default home;
