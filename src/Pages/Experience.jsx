import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const listings = [
  {
    id: 1,
    img: "https://www.pelago.com/img/products/IN-India/amusing-old-delhi-sikh-religious-tour/20361b80-5a97-426f-87bd-14517950e0d2_amusing-old-delhi-sikh-religious-tour.jpg",
    title: "Old Delhi's Tour of Religion with Family",
    price: "From ₹1,371/guest",
    rating: 4.99,
    tag: "3 pm",
  },
  {
    id: 2,
    img: "https://wanderon-images.gumlet.io/blogs/new/2024/10/street-foods-in-india.jpg",
    title: "Taste Street Food of Delhi with friends",
    price: "From ₹6,931/guest",
    rating: 4.86,
    tag: "6:30 pm",
  },
  {
    id: 3,
    img: "https://images.hindustantimes.com/img/2021/10/29/1600x900/ade6523c-3415-11ec-9053-593088097d90_1635003229348_1635550717676.jpg",
    title: "Hookah Technique and smoking",
    price: "From ₹7,644/guest",
    rating: 4.92,
    tag: "7 pm",
  },
  {
    id: 4,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ--AIlxJcrEnllQ7HWCpZyiOQA840S4Ptfqw&s",
    title: "Hand on Indian Cooking with master chefs",
    price: "From ₹530/guest",
    rating: 4.84,
    tag: "9 pm",
  },
  {
    id: 5,
    img: "https://im.hunt.in/cg/Mandsaur/City-Guide/shopd.jpg",
    title: "Garment Shopping in Delhi street",
    price: "From ₹1,020/guest",
    rating: 4.91,
    tag: "11 am",
  },
  {
    id: 6,
    img: "https://cdn.getyourguide.com/image/format=auto,fit=crop,gravity=auto,quality=60,width=450,height=450,dpr=2/tour_img/4b6dff3c71e9b45b3270c3f68ae3a26be964b63d772f80ffe1e1f4d2bc798a30.jpeg",
    title: "Chai Workshop and Food in Indian Family",
    price: "From ₹5,830/guest",
    rating: 4.91,
    tag: "5 pm",
  },
];

function Experience() {
  // likedStates ek object jisme har id ke liye true/false rahega
  const [likedStates, setLikedStates] = useState({});

  const toggleLike = (id) => {
    setLikedStates((prev) => ({
      ...prev,
      [id]: !prev[id], // jis id pe click hua uska status toggle karo
    }));
  };

  return (
    <div className="bg-white">
      <h2 className="text-2xl font-bold mb-4">
        Happening Today in New Delhi
      </h2>
      <div className="flex gap-6 overflow-x-auto cursor-pointer">
        {listings.map((listing) => (
          <div
            key={listing.id}
            className="flex-shrink-0 w-46  overflow-hidden"
          >
            <div className="relative">
              <img
                src={listing.img}
                alt={listing.title}
                className="w-full h-48 object-cover rounded-lg"
              />
              <span className="absolute top-2 left-2 bg-white text-gray-800 text-xs px-2 py-1 rounded-full ">
                {listing.tag}
              </span>
              <button
                onClick={() => toggleLike(listing.id)}
                className="absolute top-0.75 right-2  p-1 rounded-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="30"
                  viewBox="0 0 24 24"
                  fill={likedStates[listing.id] ? "red" : "gray"}
                  stroke="white"
                  strokeWidth="1"
                >
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 
                           2 6 4 4 6.5 4c1.74 0 3.41 1.01 4.5 2.09
                           C12.09 5.01 13.76 4 15.5 4 
                           18 4 20 6 20 8.5
                           c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
              </button>
            </div>
            <div className="py-3">
              <h3 className="text-[13px] leading-none font-medium">{listing.title}</h3>
              <div className="flex gap-3 mt-1">
                <p className="text-gray-600 text-[11px]">{listing.price}</p>
                <p className="text-[11px] flex gap-1 text-gray-600">
                  <FaStar className="mt-0.5 text-gray-600" /> {listing.rating}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
