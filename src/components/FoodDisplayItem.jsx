import Image from "next/image";
import React from "react";

const FoodDisplayItem = ({ name, price, desc, image }) => {
  return (
    <div className="w-full mx-auto rounded-lg shadow-sm shadow-[#00000015] overflow-hidden relative">
      <div className="relative w-full h-52">
        <Image
          src={image}
          layout="fill"
          objectFit="cover"
          alt="food item image"
          className="rounded-t-lg"
        />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <p className="text-lg font-semibold">{name}</p>
          <Image src="/rating_starts.png" height={70} width={70} alt="rating" />
        </div>
        <div className="mb-2">{desc}</div>
        <div className="flex justify-between items-center">
          <p className="font-semibold text-orange-500">ksh {price}</p>
          <button
  
            className="px-4 py-2 bg-orange-500 text-white rounded-lg shadow hover:bg-orange-600 focus:outline-none"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodDisplayItem;
