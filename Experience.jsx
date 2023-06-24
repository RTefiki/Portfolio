import React from "react";
import html from "../assets/html.png"
import Css from "../assets/css.png"
import react from "../assets/react.png"
import github from "../assets/github.png"
import Js from "../assets/Js.png"
import Nodejs from "../assets/Nodejs.png"
import SQL from "../assets/SQL.png"
import tailwind from "../assets/tailwind.png"
import botstrap from "../assets/botstrap.jpg"

const Experience = () => {
    
  return (
    
      <div name="Experience" 
          className=" bg-gradient-to-b from-black to-gray-800
     text-white w-full h-screen ">
        <br />
        <div className="max-w-screen-xl mx-auto p-4 flex flex-col justify-center w-full h-full">
            <div className="pb-16">
                <p className="text-4xl font-bold justify-center
                 border-b-4 border-gray-500 p-4 flex text-white">Experience</p>
                <p className="flex justify-center py-6 font-roboto text-xl text-blue-300"> These are the teconologies that I have worket and I'm working</p> 

                <div className=" w-full grid grid-cols-3 sm:grid-cols-3
                gap-8 text-center py-8 px-12 sm:px-0 ">
                    

                        <div className='shadow-xl border-gray-200 hover:scale-105 duration-200 py-0 rounded-xl shadow-red-500' >
                            
                            <img src={html}  alt="" className=" flex flex-col w-20 h-20 rounded-lg mx-auto" />
                            <p>HTML</p>
                        </div>

                        <div className='shadow-xl border-gray-200 hover:scale-105 duration-200 py-0 rounded-xl shadow-blue-500' >
                            
                            <img src={Css}  alt="" className="s  flex flex-col w-20 h-20 rounded-lg mx-auto" />
                            <p>CSS</p>
                        </div>
                        <div className='shadow-xl border-gray-200 hover:scale-105 duration-200 py-0 rounded-xl shadow-yellow-500' >

                          <img src={Js} alt="" className="s  flex flex-col w-20 h-20 rounded-lg mx-auto" />
                          <p>JAVASCRIPT</p>
                        </div>
                      <div className='s shadow-xl border-gray-200 hover:scale-105 duration-200 py-0 rounded-xl shadow-blue-400' >

                          <img src={react} alt="" className="s  flex flex-col w-20 h-20 rounded-lg mx-auto" />
                          <p>React</p>
                      </div>
                      <div className='s shadow-xl border-gray-200 hover:scale-105 duration-200 py-0 rounded-xl shadow-white' >

                          <img src={github} alt="" className="s  flex flex-col w-20 h-20 rounded-lg mx-auto" />
                          <p>GITHUB</p>
                      </div>
                      <div className='s shadow-xl border-gray-200 hover:scale-105 duration-200 py-0 rounded-xl shadow-green-600' >

                          <img src={Nodejs} alt="" className="s  flex flex-col w-20 h-20 rounded-lg mx-auto" />
                          <p>NODEJS</p>
                      </div>
                      <div className='s shadow-xl border-gray-200 hover:scale-105 duration-200 py-0 rounded-xl shadow-blue-300' >

                          <img src={tailwind} alt="" className="s  flex flex-col w-20 h-20 rounded-lg mx-auto" />
                          <p>TAILWIND</p>
                      </div>
                      <div className='s shadow-xl border-gray-200 hover:scale-105 duration-200 py-0 rounded-xl shadow-orange-500' >

                          <img src={SQL} alt="" className="s  flex flex-col w-20 h-20 rounded-lg mx-auto" />
                          <p>SQL</p>
                      </div>
                      <div className='s shadow-xl border-gray-200 hover:scale-105 duration-200 py-0 rounded-xl shadow-purple-500' >

                          <img src={botstrap} alt="" className="s  flex flex-col w-20 h-20 rounded-lg mx-auto" />
                          <p>BOTSTRAP</p>
                      </div>

                    
                      
                </div> 
            </div>
        </div>
      
    </div>
  )
}

export default Experience;
