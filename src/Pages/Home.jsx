import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const listings = [
  {
    id: 1,
    img: "https://assets.minorhotels.com/image/upload/q_auto,f_auto/media/minor/anantara/images/anantara-jewel-bagh-jaipur-hotel/mhg/01_hotel-teaser/anantara_jewel-bagh_jaipur_hotel_teaser_01_880x620.jpg",
    title: "Flat in Gurugram",
    price: "₹1,371 for 2 nights",
    rating: 4.99,
    tag: "Guest favourite",
  },
  {
    id: 2,
    img: "https://assets.cntraveller.in/photos/67dc285e7d852602e0adb770/16:9/w_1024,c_limit/AJBJ_Exterior4_0014.jpg",
    title: "Flat in Gurugram",
    price: "₹6,931 for 2 nights",
    rating: 4.86,
    tag: "Guest favourite",
  },
  {
    id: 3,
    img: "https://image-tc.galaxy.tf/wijpeg-28avg4se3pyr83ay0ydwweew6/grand-park-city-hall-singapore_standard.jpg?crop=106%2C0%2C1708%2C1281",
    title: "Flat in Gurugram",
    price: "₹7,644 for 2 nights",
    rating: 4.92,
    tag: "Guest favourite",
  },
  {
    id: 4,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAI84F-cYqI1u4xbgD_nssf3ZkbfXSMX9dKRDftDDbTQWBjnkhmrBb6s8DAiFMYQCu-R8&usqp=CAU",
    title: "Flat in Gurugram",
    price: "₹5,300 for 2 nights",
    rating: 4.84,
    tag: "Guest favourite",
  },
  {
    id: 5,
    img: "https://costar.brightspotcdn.com/dims4/default/f5408af/2147483647/strip/true/crop/2100x1400+0+0/resize/2100x1400!/quality/100/?url=http%3A%2F%2Fcostar-brightspot.s3.us-east-1.amazonaws.com%2F73%2Fd9%2F4c27902242238bd0d2ea7fa2fcbd%2F20230725-india-grandhyattmumbai.jpg",
    title: "Flat in Gurugram",
    price: "₹1,020 for 2 nights",
    rating: 4.91,
    tag: "Guest favourite",
  },
  {
    id: 6,
    img: "https://media-cdn.tripadvisor.com/media/photo-s/2d/cc/96/8d/facade-shot-finished.jpg",
    title: "Flat in Gurugram",
    price: "₹5,830 for 2 nights",
    rating: 4.91,
    tag: "Guest favourite",
  },
];

function Home() {
  // likedStates ek object jisme har id ke liye true/false rahega
  const [likedStates, setLikedStates] = useState({});

  const toggleLike = (id) => {
    setLikedStates((prev) => ({
      ...prev,
      [id]: !prev[id], // jis id pe click hua uska status toggle karo
    }));
  };

  return (
    <div className="bg-white p-6">
      <h2 className="text-2xl font-bold mb-4">
        Popular homes in Gurgaon District
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
              <h3 className="text-lg font-semibold">{listing.title}</h3>
              <div className="flex gap-3">
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

export default Home;
