import React from 'react'
import { IoHome } from "react-icons/io5";
import { FaParachuteBox } from "react-icons/fa6";
import { IoFastFoodSharp } from "react-icons/io5";
import { CiGlobe } from "react-icons/ci";
import { VscThreeBars } from "react-icons/vsc";
import { Link } from 'react-router-dom';

const navs = [
    { name: "Home", link: <IoHome />, path: "/" },
    { name: "Experience", link: <FaParachuteBox />, path: "/experience" },
    { name: "Services", link: <IoFastFoodSharp />, path: "/services" }
]
function Navbar() {
  return (
    <div className='flex justify-between items-center mt-0 bg-gray-50 px-4 '>
      <img className='h-16 mix-blend-multiply' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7RtiAMKTwBe7WLLasZ1w7M7W9LD3PQF_p4g&s" alt="airbnb" />
      <nav>
        <ul className='flex space-x-6 list-none'>
          {navs.map((item) => (
            <li className='hover:text-black cursor-pointer group'>
              <Link to={item.path} className='flex items-center space-x-2'>
                <span className="text-[30px]">{item.link}</span>
                <span className='text-gray-500 group-hover:text-black border-b-2 border-transparent group-hover:border-black transition-all duration-200'>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className='flex items-center space-x-4'>
        <p className= "hover:bg-gray-200 p-2 rounded-2xl cursor-pointer">Become a host</p>
        <CiGlobe className="text-xl bg-gray-100 p-1 rounded-full h-8 w-8 hover:bg-gray-200 cursor-pointer" />
        <VscThreeBars className="text-xl bg-gray-100 p-1 rounded-full h-8 w-8 hover:bg-gray-200 cursor-pointer" />
      </div>


    </div>
  )
}

export default Navbar
