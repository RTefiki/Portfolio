    import React, { useState } from 'react';
    import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from "react-icons/rx";


    const Slider = () => {

        const slides = [
            {
                url: "https://images.pexels.com/photos/585752/pexels-photo-585752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            },
            {
                url:"https://wallpapercave.com/wp/wp7453551.jpg"
            },
            {
                url:"https://wallpaperaccess.com/full/5651990.jpg"
            },
            {
                url:"https://cdn.gobankingrates.com/wp-content/uploads/2016/10/0-Main-stock-invesetor-g-stockstudio-shutterstock_534464659-848x477.jpg"
            },
            {
                url:"https://cdn2.vectorstock.com/i/1000x1000/91/31/portfolio-paper-poster-with-colorful-brush-strokes-vector-21849131.jpg"
            }

        ]

        const [currentIndex, setCurrentIndex] = useState(0);
        const prevSlide = () => {
            const isFirstSlide = currentIndex === 0;
            const newIndex = isFirstSlide ? slides.length -1 : currentIndex -1;
            setCurrentIndex(newIndex);
        };

        const nextSlide =() => {
            const isLastSlide = currentIndex === 0;
            const newIndex = isLastSlide ? slides.length -1 : currentIndex -1;
            setCurrentIndex(newIndex);
        }

    return (

        <div className='max-w-[1400px] w-full h-screen m-auto py-16 px-4 static group'>
            <div style={{backgroundImage:'url('+ slides[currentIndex].url +')'}} className="w-full h-full rounded-2xl bg-center bg-cover duration-500 static">  
            
            
            </div>
            
            <div className='flex top-4 justify-center py-2 cursor-pointer'>
            <div onClick={prevSlide} className="hidden group-hover:block   -translate-y-[100%]  text-2xl rounded-full p-4 m-3 bg-black hover:bg-gray-400 text-white cursor-pointer">
                    <BsChevronCompactLeft  size={30}/> 
               </div>
              {slides.map(() => (
                <div>
                    
                      < RxDotFilled onClick={prevSlide} />
                </div>
              ))}
               <div onClick={nextSlide} className="hidden group-hover:block  -translate-y-[100%] right-5 text-2xl rounded-full p-4 m-3 bg-black  hover:bg-gray-400 text-white cursor-pointer">
                    <BsChevronCompactRight  size={30}/>
               </div>
            </div>
        </div>        

        )
    }

    export default Slider;
