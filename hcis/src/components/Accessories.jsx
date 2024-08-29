import React from 'react';

const Accessories = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-5xl font-bold text-center mb-6">Accessories</h1>
      <p className="text-xl text-center mb-8">
        Enhance your riding experience with our premium Harley-Davidson accessories.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="border rounded-lg overflow-hidden shadow-lg bg-white">
          <img src="https://example.com/helmet.jpg" alt="Helmet" className="w-full h-48 object-cover" />
          <div className="p-6">
            <h3 className="text-2xl font-bold">Harley Helmet</h3>
            <p className="text-gray-600 mt-2">Price: $299</p>
            <p className="mt-4">
              Stay safe and stylish with our range of Harley-Davidson helmets, designed for both comfort and protection.
            </p>
          </div>
        </div>
        <div className="border rounded-lg overflow-hidden shadow-lg bg-white">
          <img src="https://example.com/gloves.jpg" alt="Riding Gloves" className="w-full h-48 object-cover" />
          <div className="p-6">
            <h3 className="text-2xl font-bold">Riding Gloves</h3>
            <p className="text-gray-600 mt-2">Price: $89</p>
            <p className="mt-4">
              Designed for superior grip and durability, our riding gloves ensure comfort and control during your ride.
            </p>
          </div>
        </div>
        <div className="border rounded-lg overflow-hidden shadow-lg bg-white">
          <img src="https://example.com/jacket.jpg" alt="Leather Jacket" className="w-full h-48 object-cover" />
          <div className="p-6">
            <h3 className="text-2xl font-bold">Leather Jacket</h3>
            <p className="text-gray-600 mt-2">Price: $399</p>
            <p className="mt-4">
              Ride in style with our premium leather jackets, offering a perfect blend of fashion and function.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accessories;
