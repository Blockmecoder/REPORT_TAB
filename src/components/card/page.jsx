import React from 'react'


const Card = () => {
  return (
    <div className="bg-gray-100 p-6">
      <div className="max-w-xl mx-auto bg-white rounded-lg overflow-hidden shadow-lg">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Card Title</div>
          <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="px-6 py-4 flex flex-row space-x-4">
          <img src="https://source.unsplash.com/random/100x100" alt="Image 1" className="rounded-full" />
          <img src="https://source.unsplash.com/random/101x101" alt="Image 2" className="rounded-full" />
          <img src="https://source.unsplash.com/random/102x102" alt="Image 3" className="rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default Card;