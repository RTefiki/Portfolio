import React from "react";
import mainImg from "../assets/Rinor.jpg";
import { MdKeyboardArrowRight } from "react-icons/md";

const Home = () => {
  return (
    <div
      name="Home"
      className="home h-sreen w-full bg-gradient-to-b from-black via-black to-gray-800 py-20 "
    >
      <div
        className="max-w-screen-lg mx-auto flex flex-col items-center justify-center
      h-full px-4 md:flex-row mt-10"
      >
        <div className="flex flex-col justify-center h-full ">
          <h2 className="text-4xl sm:text-7xl justify-center items-center flex font-bold border-md rounded-md bg-gradient-to-l  from-slate-200 to-slate-400 ">
            Hai
            <span className="text-3xl font-mono text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-red-500 to-blue-600">
              I'm Rinor Tefiki
            </span>
          </h2>

          <h2 className="text-4xl sm:text-7xl font-bold text-white mt-4 ">
            I'm Frontend Developer{" "}
          </h2>
          <p
            styles="ImpallariType"
            className="text-1xl text-white hover:text-sky-400 py-4 max-w-md font-mono"
          >
            I have 1 years of experience building and designing software.
            Currently, I love to work on web application using technologies like
            React, CSS, Tailwind, Js.
          </p>
          <div className=" lg:flex  lg:justify-end">
            <button
              className="group text-white w-fit px-6 py-3 my2
                flex items-end justify-end rounded-md bg-gradient-to-l
                from-cyan-400 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90">
                <MdKeyboardArrowRight size={25} />
              </span>
            </button>
          </div>
        </div>
        <div>
          <img
            src={mainImg}
            alt="Profile"
            className="rounded-full rounded-l-xl w-45 h-45 pl-6"
          />
        </div>
      </div>
      <br />
    </div>
  );
};

export default Home;
