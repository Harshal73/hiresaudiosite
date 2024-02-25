import React from "react";
import mbdf from "../assets/mbdf.jpg";
import Yeezus from "../assets/ycover.jpg";
import Graduation from "../assets/grad.jpeg";
import { SpeedInsights } from "@vercel/speed-insights/react";

function Album() {
  return (
    <div name="albums" className="bg-black w-full h-screen  ">
      <div
        className="max-w-screen-lg mx-auto flex flex-col
       items-center  justify-center h-full md:flex-row  "
      >
        <div className="cursor-pointer pt-12 ml-5 bg-fixed opacity-85 transition duration-200 ease-in-out hover:opacity-100">
          <img src={mbdf} alt="mbdfcover" className="w-1/2  " />
          <p className="text-gray-200 text-sm font-sans   pt-5 pr-5">
            Dark Twisted Fantasy
          </p>
        </div>
        <div className="cursor-pointer pt-12 ml-5 bg-fixed opacity-85 transition duration-200 ease-in-out hover:opacity-100 ">
          <img src={Yeezus} alt="mbdfcover" className="w-1/2" />
          <p className="text-gray-200 text-sm font-sans   pt-5 pr-5">Yeezus</p>
        </div>
        <div className="cursor-pointer  pt-12  ml-5 bg-fixed opacity-85 transition duration-200 ease-in-out hover:opacity-100 ">
          <img src={Graduation} alt="mbdfcover" className="w-1/2" />
          <p className="text-gray-200 text-sm font-sans  pt-5 pr-5">
            {" "}
            Graduation
          </p>
        </div>
      </div>
      <SpeedInsights />
    </div>
  );
}

export default Album;
