import React from "react";

const HCard = () => {
  return (
    <div
      className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
      style={{ zIndex: 10 }}
    >
      <div className="px-6 py-4">
        <div className="text-gray-700 font-bold text-xl mb-2">Card Title</div>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="text-md font-semibold text-gray-600 mb-2">
          Progress Bars
        </div>
        <div className="w-full h-8 bg-gray-200 rounded-full mb-4">
          <div className="h-full bg-green-500 rounded-full"></div>
        </div>
        <div className="w-full h-8 bg-gray-200 rounded-full mb-4">
          <div className="h-full bg-yellow-500 rounded-full"></div>
        </div>
        <div className="w-full h-8 bg-gray-200 rounded-full">
          <div className="h-full bg-red-500 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default HCard;
