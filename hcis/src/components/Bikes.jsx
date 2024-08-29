import React from 'react';

const Bikes = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-5xl font-bold text-center mb-6">Our Bikes</h1>
      <p className="text-xl text-center mb-8">
        Discover our range of Harley-Davidson bikes. Each model is engineered for performance and style.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="border rounded-lg overflow-hidden shadow-lg bg-white">
          <img src="https://example.com/road-king.jpg" alt="Road King" className="w-full h-48 object-cover" />
          <div className="p-6">
            <h3 className="text-2xl font-bold">Road King</h3>
            <p className="text-gray-600 mt-2">Price: $18,999</p>
            <p className="mt-4">
              The Road King offers classic styling with modern performance. Perfect for long rides with advanced features and comfort.
            </p>
          </div>
        </div>
        <div className="border rounded-lg overflow-hidden shadow-lg bg-white">
          <img src="https://example.com/fat-bob.jpg" alt="Fat Bob" className="w-full h-48 object-cover" />
          <div className="p-6">
            <h3 className="text-2xl font-bold">Fat Bob</h3>
            <p className="text-gray-600 mt-2">Price: $16,499</p>
            <p className="mt-4">
              Bold and aggressive, the Fat Bob is designed for those who like to make a statement on the road with its powerful performance.
            </p>
          </div>
        </div>
        <div className="border rounded-lg overflow-hidden shadow-lg bg-white">
          <img src="https://example.com/low-rider.jpg" alt="Low Rider" className="w-full h-48 object-cover" />
          <div className="p-6">
            <h3 className="text-2xl font-bold">Low Rider</h3>
            <p className="text-gray-600 mt-2">Price: $14,999</p>
            <p className="mt-4">
              The Low Rider combines retro aesthetics with modern engineering for a thrilling riding experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bikes;
