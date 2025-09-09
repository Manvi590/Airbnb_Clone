import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { MdOutlineLocationOn, MdOutlineCalendarToday } from "react-icons/md";
import { FaCamera, FaUtensils, FaConciergeBell, FaSpa, FaBed, FaCut, FaHandSparkles } from "react-icons/fa";
import { GiCook } from "react-icons/gi";

export default function SearchBar() {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (type) => {
    setOpenDropdown(openDropdown === type ? null : type);
  };

  return (

    <div className="w-full flex flex-col items-center mt-4 relative bg-gray-50 ">
      <div className="flex bg-gray-100 rounded-full shadow-md overflow-hidden mr-10 ">
        {/* Where */}
        <div
          onClick={() => toggleDropdown("where")}
          className="px-6 py-3 flex flex-col cursor-pointer hover:bg-gray-200"
        >
          <span className="text-xs text-gray-500">Where</span>
          <span className="text-sm">Search destinations</span>
        </div>

        {/* Date */}
        <div
          onClick={() => toggleDropdown("date")}
          className="px-6 py-3 flex flex-col border-l border-gray-300 cursor-pointer hover:bg-gray-200"
        >
          <span className="text-xs text-gray-500">Date</span>
          <span className="text-sm">12 Aug</span>
        </div>

        {/* Type of service */}
        <div
          onClick={() => toggleDropdown("service")}
          className="px-6 py-3 flex flex-col border-l border-gray-300 cursor-pointer hover:bg-gray-200"
        >
          <span className="text-xs text-gray-500">Type of service</span>
          <span className="text-sm">Add service</span>
        </div>

        {/* Search button */}
        <button className="bg-gradient-to-r from-pink-500 to-red-500 flex items-center justify-center rounded-full h-10 w-10 mt-3 mr-3">
          <FiSearch size={22} className="text-white" />
        </button>
      </div>
    <hr className="w-full border-t border-gray-300 mt-16" />

      {/* WHERE DROPDOWN */}
      {openDropdown === "where" && (
        <div className="absolute top-16 left-0 bg-white shadow-lg rounded-xl p-4 w-64 z-50 ml-80">
          <div className="flex items-center space-x-3 cursor-pointer hover:bg-gray-100 p-2 rounded-lg">
            <MdOutlineLocationOn className="text-blue-500" size={24} />
            <div>
              <p className="text-sm font-semibold">Nearby</p>
              <p className="text-xs text-gray-500">Find what’s around you</p>
            </div>
          </div>
        </div>
      )}

      {/* DATE DROPDOWN */}
      {openDropdown === "date" && (
  <div className="absolute top-16 left-[150px] bg-white shadow-lg rounded-xl p-4 flex space-x-6 z-50 w-[400px] ml-80">
          {/* Quick options */}
          <div className="flex flex-col space-y-3 ">
            <div className="border p-3 rounded-lg cursor-pointer">Today <br /> <span className="text-xs text-gray-500">12 Aug</span></div>
            <div className="border p-3 rounded-lg cursor-pointer">Tomorrow <br /> <span className="text-xs text-gray-500">13 Aug</span></div>
            <div className="border p-3 rounded-lg cursor-pointer">This weekend <br /> <span className="text-xs text-gray-500">15-17 Aug</span></div>
          </div>
          {/* Calendar (Static for now) */}
          <div>
            <p className="text-center font-semibold mb-2 ">August 2025</p>
            <div className="grid grid-cols-7 gap-2 text-sm text-center">
              {["S","M","T","W","T","F","S"].map((d) => (
                <span key={d} className="font-medium">{d}</span>
              ))}
              {Array(31).fill(null).map((_, i) => (
                <span
                  key={i}
                  className={`p-2 rounded-full cursor-pointer ${
                    i + 1 === 12 ? "bg-black text-white" : "hover:bg-gray-200"
                  }`}
                >
                  {i + 1}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* SERVICE DROPDOWN */}
      {openDropdown === "service" && (
    <div className="absolute top-16 left-[300px] bg-white shadow-lg rounded-xl p-4 grid grid-cols-3 gap-1  w-[420px] z-50 ml-80">
          <ServiceIcon icon={<FaCamera />} label="Photography" />
          <ServiceIcon icon={<GiCook />} label="Chefs" />
          <ServiceIcon icon={<FaConciergeBell />} label="Prepared meals" />
          <ServiceIcon icon={<FaSpa />} label="Massage" />
          <ServiceIcon icon={<FaBed />} label="Training" />
          <ServiceIcon icon={<FaCut />} label="Make-up" />
          <ServiceIcon icon={<FaCut />} label="Hair" />
          <ServiceIcon icon={<FaHandSparkles />} label="Spa treatments" />
          <ServiceIcon icon={<FaUtensils />} label="Catering" />
        </div>
      )}
   
    </div>
  
  );
}

// Service icon component
const ServiceIcon = ({ icon, label }) => (
  <div className="flex  items-center gap-2 justify-center h-14 w-28 ml-1 p-2 border rounded-2xl cursor-pointer hover:bg-gray-100">
    <div className="text-xl">{icon}</div>
    <p className="text-xs mt-1 text-center">{label}</p>
  </div>
);
