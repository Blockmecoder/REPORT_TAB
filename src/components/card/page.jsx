"use client"
import React, { useState } from "react";
import HCard from "../hoverCard/page";

const Card = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [showArrow, setShowArrow] = useState(false);

  return (
    <div className="bg-gray-100 p-6 sm:flex-col flex">
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ maxHeight: "90px" }}
        className="max-w-xl bg-white rounded-lg overflow-hidden shadow-lg"
      >
        <div className="px-6 py-4">
          <div className="font-bold text-gray-700 text-xl mb-2">Card Title</div>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
      {isHovered && <HCard />}
    </div>
  );
};

export default Card;
