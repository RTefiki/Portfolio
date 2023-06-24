import React from 'react';



function Skills() {

  const slides = [

    {
      id: 1,
      src: "https://wallpaperaccess.com/full/1688605.jpg",
      titel: "Natuer",
      text: "Nature is a breathtaking force that surrounds us every day. From the chirping of birds to the rustling of leaves"
    },
    {
      id: 2,
      src: "https://p4.wallpaperbetter.com/wallpaper/676/293/313/programmer-wallpaper-preview.jpg",
      titel: "Programing",
      text: "I will work hard, to achieve my dream of one day, being a Web App programmer "
    },
    
  ];
  
  return (

  

    <div name="Skills" className="w-full h-screen bg-gradient-to-b from-gray-800 to-gray-700 text-white pb-0">
      <div className='main'>
        <p className='text-4xl font-bold justify-center
                 border-b-4 border-gray-500 p-4 flex text-white'> Skills</p>
      </div> 

        <div className='flex min-h-screen items-center justify-center border-neutral-900'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:gride-cols-3 gap-5'>

          {slides.map(({ id, src, titel, text }) => (
            <div className='group snap-x relative items-center justify-center overflow-hidden cursor-pointer'>

              <div className='h-[50vh]  '>

                <img key={id} className='h-full w-full object-cover group-hover:rotate-3 group-hover:scale-125 transition-transform duration-500' src={src} alt="logo" />

              </div>
              <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70'>

                <div className='absolute inset-0 flex flex-col justify-center items-center px-9 text-center transparet-y-[60%] group-hover:translate-y-0 transition-all'>

                  <h1 className='text-3xl font-bold text-white'>{titel}</h1>
                  
                  <p className='text-lg italic text-white mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                    {text}</p>
                </div>
              </div>
            </div>
               

              ))}
          </div>
        </div>   
      </div> 
  )

}


export default Skills;