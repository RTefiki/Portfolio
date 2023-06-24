import React from "react";
import tefiki from "../assets/Tefiki.jpg";

import cv from "../assets/cv.jpg"




function About() {

  
    const downloadCV = () => {
      const link = document.createElement('a');
      link.download = 'cv.jpg';
      link.href = cv;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };

  return (
    <div
      name="About"
      className=" About max-w-[2000px] w-screen h-full bg-gradient-to-b
    from-gray-800 to-gray-700 text-white pb-0"
     style={{ backgroundImage: 'url("https://images.pexels.com/photos/2680270/pexels-photo-2680270.jpeg")' }}
    >
      <br />
      <div className="max-w-screen-xl p-3 mx-auto  w-full h-full">
        <div className="pb-8">
          <p
            className="gride text-4xl font-bold text-center justify-center
                 border-b-4 border-gray-500"
          >
            About 
          </p>
        </div>

        <div className="sm:flex flex-1 mt-16 items-center justify-center">
          <div className="px-8 ">
            <img
              className="w-[700px] h-[500px] rounded-2xl"
              src={tefiki}
              alt="tef"
            />
          </div>
          <div className=" flex-1 w-full h-auto ">
            <p className="text-4xl px-4">Me</p>
            <p
              className="text-xl font-mono text-start
              text-transparent bg-clip-text bg-gradient-to-r text-white active:text-black cursor-pointer "
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              
              Obcaecati, veritatis repellat porro,
              ea numquam repudiandae magnam sit,
              
              rem ad praesentium velit aliquam voluptatum
               saepe quidem nisi totam fuga.
              
              Deleniti, adipisci porro sapiente,
               optio nesciunt architecto odio quis repudiandae expedita,
               aspernatur ad earum ut cum accusamus repellat quidem!
              
              Voluptates,placeat id?
              
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              <br/> 
              Saepe,quae! Dolorem aspernatur ipsum recusandae unde consequuntur
            </p>
          </div>
        </div>
        
      </div>

      <div className="flex w-full h-20 bg-white items-center justify-center mt-[130px]">
         
              <button  
              onClick={downloadCV}
              className="text-black text-xl w-40 h-14 rounded-md cursor-pointer bg-gradient-to-r from-yellow-300 via-yellow-800 to-yellow-500 hover:bg-gradient-to-r hover:from-yellow-500 hover:to-yellow-800 ">Download CV</button>
         
      </div>
    </div>
  );
};

export default About;
