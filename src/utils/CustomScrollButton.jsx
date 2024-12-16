import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CustomScrollButton = ({ className, style, onClick, type }) => {
  return (
    <button
      className={`
        ${className} 
        absolute 
        z-10 
        top-1/2 
        transform 
        -translate-y-1/2 
        bg-orange-500 
        text-white 
        hover:bg-orange-600 
        focus:outline-none 
        focus:ring-2 
        focus:ring-orange-300 
        rounded-full 
        shadow-lg 
        transition-all 
        duration-300 
        ease-in-out 
        w-12 
        h-12 
        flex 
        items-center 
        justify-center
        ${type === "prev" ? "-left-6" : "-right-6"}
      `}
      style={{
        ...style,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={onClick}
    >
      {type === "prev" ? (
        <ChevronLeft className="w-8 h-8" />
      ) : (
        <ChevronRight className="w-8 h-8" />
      )}
    </button>
  );
};

export default CustomScrollButton;
