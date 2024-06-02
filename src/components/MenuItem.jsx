import React from "react";
import Image from "next/image";

const MenuItem = ({ image, name }) => {
  return (
    <div className="flex flex-col gap-3 items-center">
      <div className="w-24 h-24 relative">
        <Image src={image} alt="menu image" layout="fill" objectFit="cover" />
      </div>
      <p>{name}</p>
    </div>
  );
};

export default MenuItem;
