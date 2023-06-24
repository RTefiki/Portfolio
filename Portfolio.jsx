import React from 'react';
import es7 from "../assets/portfolio/es7.jpg";
import huks from "../assets/portfolio/huks.png";
import navbar from "../assets/portfolio/navbar.jpg";
import paralax from "../assets/portfolio/paralax.jpg";
import smoth from "../assets/portfolio/smoth.gif";
import weather from "../assets/portfolio/weather.png";

const Portfolio = () => {

    const portfolios =[
        {
            id:1,
            src: es7
        },
        {
            id: 2,
            src: huks
        },
        {
            id: 3,
            src: navbar
        },
        {
            id: 4,
            src: paralax
        },
        {
            id: 5,
            src: smoth
        },
        {
            id: 6,
            src: weather
        },
        
    ]
  return (
    
      <div name="Portfolio" className=" w-full h-auto md:flex bg-gradient-to-b
    from-gray-700 to-black text-white xl:h-screen  ">
        <div className="max-w-screen-xl  mx-auto flex flex-col 
         w-full h-full"
         style={{ backgroundImage: 'url("https://www.pngmart.com/files/7/Red-Abstract-Lines-PNG-Background-Image.png") ' }}
         >
            <div className="pb-10">
                <p className="flex text-4xl font-bold justify-center
                 border-b-4 bordea mt-24 hover:text-sky-700">
                    Portfolio
                </p>
                  <p className="flex justify-center py-6 font-roboto cursor-pointer hover:text-white text-xl text-blue-300">Check out some of my work right here</p>
            </div>

              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 items-center justify-center
                    sm:px-6 ">
                 {portfolios.map(({id, src}) => (

                    <div key={id} className="shadow-xl w-[350px] h-60 shadow-gray-600 rounded-lg">
                        <img src={src} alt="weather"
                            className=" w-[400px] h-40 rounded-md duration-200 hover:scale-105"
                        />
                        <div className="flex items-center justify-center">
                            <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Demo</button>
                            <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Code</button>
                        </div>
                    </div>
                ))}
               
            </div>
            
        </div>
    </div>
  )
}

export default Portfolio;
