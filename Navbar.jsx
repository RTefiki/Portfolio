import React, { useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-scroll';
import Login from "./../components/Login";

  


const Navbar = () => {

  const [nav, setNav] = useState(false);
  

  const [login, setLogin] = useState(false);
  
 


  return (
    <nav className="bg-gradient-to-r bg-sky-200  md-hidden shadow-lg  duration-100 hover:scale-100 shadow-white fixed top-0 left-0 right-0 w-full opacity-95">
      {login && <Login setLogin={setLogin} />}
      <div className="mx-auto w-full  px-8 ">
        <div className="flex items-center justify-between h-20 ">
            <div className="flex w-15 h-14 ">
              <img
                className="image h-15 w-15 rounded-full"
                src="https://us.123rf.com/450wm/wikagraphic/wikagraphic2103/wikagraphic210309210/167440799-initial-logo-letter-rt-with-golden-and-silver-color-with-laurel-and-wreath-vector-logo-for-business.jpg?ver=6"
                alt="logo" 
              /> 
            </div>
          
          <div className="hidden md:block">
              <div className=" px-20 flex items-baseline justify-center space-x-7 ">
                
                <a
                  href="/"
                  className="text-black md:text-2xl hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xl font-bold"
                >
                  <Link to="Home" smooth={true} duration={500} elay={1000}>Home</Link>
                </a>

                <a
                  href="#About"
                  className="text-black md:text-2xl hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xl font-bold"
                >
                  <Link to="About" smooth={true} duration={500} elay={1000}>About</Link>
                </a>

                <a
                  href="#Portfolio"
                  className="text-black md:text-2xl hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-bold"
                >
                  <Link activeClace="active" to="Portfolio" smooth={true} duration={500} elay={1000}>Portfolio</Link>
                </a>

                <a
                
                  href="#Experience"
                  className="text-black md:text-2xl hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-bold"
                >
                  <Link activeClace="active" to="Experience" smooth={true} duration={500} elay={1000}>Experience</Link>
                  
                </a>
                <a

                  href="#Skills"
                  className="text-black md:text-2xl hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-bold"
                >
                  <Link to="Skills" smooth={true} duration={500} >Skills</Link>

                </a>

                <a
                  href="#contact"
                  className="text-black md:text-2xl hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-bold"
                >
                  <Link to="Contact" smooth={true} duration={500} >Contact</Link>
                </a>
               
              </div>
            </div>
          <div className='hidden sm:flex cursor-pointer' >
            <button 
              className="group text-black w-fit px-6 py-3 my2 font-bold hover:text-white
              flex items-center justify-center rounded-md bg-gradient-to-l shadow-md border
              from-cyan-400 to-sky-600 cursor-pointer hover:bg-gradient-to-l hover:from-sky-600 hover:to-sky-400"
              href="#"
              target="_blank"
              onClick={() => setLogin(true)}
            >
             Login
            </button>
          </div>

          <div onClick={() => setNav(!nav)} className='cursor-pointer z-10 md:hidden'>
            {nav ? <FaTimes size={30} className= "text-white md:text-lg" /> : <FaBars size={30} className="text-white md:text-lg"/>}
         
          
          {/* FaTime and FaBar */}

          {nav && (
            <ul className="flex flex-col justify-center items-center absolute top-0
           left-0 w-full h-screen bg-gradient-to-b from-black
          to-gray-800 text-gray-200 text-4xl" >
              <li className='p-3'>Home</li>
              <li className='p-3'>About</li>
              <li className='p-3'>Portfolio</li>
              <li className='p-3'>Experience</li>
              <li className='p-3'>Contact</li>
              <li className='p-3 mt-8'><button 
              className="group text-white w-fit px-6 py-3 my2
              flex items-center justify-center rounded-md bg-gradient-to-l
              from-cyan-400 to-blue-500 cursor-pointer"
              href="#"
              target="_blank"
              onClick={() => setLogin(true)}
            >
             Login
            </button></li>
            </ul>  
          )}
           </div>
        </div>
      </div>
    </nav>   
  )
}

export default Navbar;