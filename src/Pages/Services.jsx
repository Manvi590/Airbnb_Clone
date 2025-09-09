import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const listings = [
  {
    id: 1,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg0d9J9M_ok2LpVUy8R-JX9rJ9SKFQv5defQ&sg",
    title: "Massage",
    tag: "2 Availables"

  },
  {
      id: 2,
    img: "https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?cs=srgb&dl=pexels-andre-furtado-43594-1264210.jpg&fm=jpg",
    title: "Photography",
    tag: "Coming Soon",
  },
  {
      id: 3,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSobvimtzpqrIee7fVumEiluGa-cpilZegOaQ&sg",
    title: "Chef",
    tag: "Coming Soon",
  },
  {
      id: 4,
    img: "https://www.activatefoods.com.au/cdn/shop/articles/ready-made-meals.jpg?v=1688616426",
    title: "Prepared Meal",
    tag: "Coming Soon",
  },
  {
      id: 5,
    img: "https://goldsgym.in/wp-content/uploads/2023/12/compress-strong-man-training-gym-min-scaled.jpg",
    title: "Training",
    tag: "Coming Soon",
  },
  {
    id: 6,
    img: "https://assets.vogue.in/photos/65532ef82a580b425bfe123a/3:4/w_2560%2Cc_limit/Snapinsta.app_377754326_806208134576903_8280153567441586228_n_1080.jpg",
    title: "Makeup",
    tag: "Coming Soon",
  },
   {
    id: 7,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCSy9Luj2KVJ9kagy6DcwRqOgUfEQnqusrmg&s",
    title: "Hair",
    tag: "Coming Soon",
  },
   {
    id: 8,
    img: "https://www.cateringcorner.in/wp-content/uploads/2019/11/Pooja-Catering.jpg",
    title: "Catering",
    tag: "Coming Soon",
  },
];

function Services() {
  // likedStates ek object jisme har id ke liye true/false rahega
  const [likedStates, setLikedStates] = useState({});

  const toggleLike = (id) => {
    setLikedStates((prev) => ({
      ...prev,
      [id]: !prev[id], // jis id pe click hua uska status toggle karo
    }));
  };

  return (
    <div>
    <div >
      <h2 className="text-2xl font-bold mb-4">
      Services in New Delhi
      </h2>
      <div className="flex gap-2 overflow-x-auto cursor-pointer">
        {listings.map((listing) => (
          <div
            key={listing.id}
            className="flex-shrink-0 w-36  overflow-hidden"
          >
            <div className="relative">
              <img
                src={listing.img}
                alt={listing.title}
                className="w-36 h-36 object-cover rounded-lg"
              />
             
            </div>
            <div className="py-3">
              <h3 className="text-lg font-semibold">{listing.title}</h3>
              <div className="flex gap-3">
                <p className="text-gray-600  text-[13px]">{listing.tag}</p>
              
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default Services;
