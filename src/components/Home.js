import React from "react";
import vidwave from "../assets/wave.mp4";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div name="home" className="bg-black w-full h-auto">
      <div>
        <h1
          className="text-4xl sm:text-7xl font-bold
          text-gray-200  ml-16 pt-20 "
        >
          Powerful sound for any purpose
        </h1>
      </div>
      <div>
        <video
          src={vidwave}
          autoPlay
          loop
          muted
          className="w-full h-4/6 rounded-lg"
        />
      </div>
      <div className="flex flex-col ml-10 justify-evenly md:flex-row pb-16 ">
        <div>
          <h3 className="text-gray-200 font-sans font-bold text-2xl ">Max</h3>
          <p className="text-gray-300 font-sans  ">(Up to 24-bit, 192 kHz)</p>
          <p className="text-gray-300 font-sans  ">
            Experience best-in-class sound quality that
          </p>
          <p className="text-gray-300 font-sans  ">
            opens up every detail with HiRes Free Lossless Audio{" "}
          </p>{" "}
          <p>
            Codec (HiRes FLAC). Best enjoyed on 5G or WiFi with a hardware
            connection.
          </p>
        </div>
        <div>
          <h3 className="text-gray-200 font-sans font-bold text-2xl ">High</h3>
          <p className="text-gray-300 font-sans  ">(Up to 16-bit, 44.1 kHz)</p>
          <p className="text-gray-300 font-sans  ">
            Listen to over 100M songs in studio quality with
          </p>
          <p className="text-gray-300 font-sans hover:scale-110 duration-300">
            FLAC. As an open source format, every artist can
          </p>
        </div>
      </div>
      <div className="pt-10">
        <Link to="/albums">
          <button
            className="text-gray-950 font-sans bg-white rounded-full px-6 py-2
            mx-auto flex items-center  hover:scale-110 duration-200"
            component={Link}
            to="/albums"
          >
            Albums
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
