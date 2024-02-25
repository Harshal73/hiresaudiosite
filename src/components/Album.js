import React from "react";
import mbdf from "../assets/mbdf.jpg";
import Yeezus from "../assets/ycover.jpg";
import Graduation from "../assets/grad.jpeg";

function Album() {
  return (
    <div name="albums" className="bg-black w-full h-screen  ">
      <div
        className="max-w-screen-lg mx-auto flex flex-col
       items-center  justify-center h-full md:flex-row  "
      >
        <div className=" pt-12 ml-5 ">
          <img src={mbdf} alt="mbdfcover" className="w-1/2  " />
          <p className="text-white text-sm  pt-5 pr-5">Dark Twisted Fantasy</p>
        </div>
        <div className="pt-12 ml-5  ">
          <img src={Yeezus} alt="mbdfcover" className="w-1/2" />
          <p className="text-white text-sm  pt-5 pr-5">Yeezus</p>
        </div>
        <div className="  pt-12  ml-5  ">
          <img src={Graduation} alt="mbdfcover" className="w-1/5" />
          <p className="text-white text-sm  pt-5 pr-5"> Graduation</p>
        </div>
      </div>
    </div>
  );
}

export default Album;
