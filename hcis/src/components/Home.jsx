import React from 'react';

const Home = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-teal-400 to-blue-400 text-white">
      {/* Hero Section */}
      <div className="container mx-auto p-12 text-center">
        <h1 className="text-6xl font-bold mb-4">Welcome to HarleyZone</h1>
        <p className="text-xl mb-8">
          Experience the thrill of the open road with Harley-Davidson's latest models and premium accessories.
        </p>
        <a href="/bikes" className="bg-white text-teal-700 py-3 px-6 rounded-full font-bold text-lg hover:bg-gray-100">Explore Bikes</a>
      </div>

      {/* Featured Bikes */}
      <section className="bg-white text-gray-800 py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Featured Bikes</h2>
          <p className="text-lg mb-12">
            Discover our most popular models, carefully selected to deliver the best riding experience.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="w-full md:w-1/3 bg-gray-100 p-6 rounded-lg shadow-lg">
              <img src="https://imgd.aeplcdn.com/664x374/n/cw/ec/1/versions/harleydavidson-road-king-standard1677237700063.jpg?q=80" alt="Road King" className="w-full h-48 object-cover mb-4" />
              <h3 className="text-2xl font-bold mb-2">Road King</h3>
              <p className="text-gray-600 mb-4">Starting at $18,999</p>
              <p>The Road King offers classic styling with modern performance. Perfect for long rides with advanced features and comfort.</p>
            </div>
            <div className="w-full md:w-1/3 bg-gray-100 p-6 rounded-lg shadow-lg">
              <img src="https://imgd.aeplcdn.com/664x374/n/cw/ec/1/versions/harleydavidson-fat-bob-standard1677237458985.jpg?q=80" alt="Fat Bob" className="w-full h-48 object-cover mb-4" />
              <h3 className="text-2xl font-bold mb-2">Fat Bob</h3>
              <p className="text-gray-600 mb-4">Starting at $16,499</p>
              <p>Bold and aggressive, the Fat Bob is designed for those who like to make a statement on the road with its powerful performance.</p>
            </div>
            <div className="w-full md:w-1/3 bg-gray-100 p-6 rounded-lg shadow-lg">
              <img src="https://imgd.aeplcdn.com/664x374/n/bw/models/colors/triumph-select-model-pacific-blue--silver-ice-1717566013710.jpg?q=80" alt="Low Rider" className="w-full h-48 object-cover mb-4" />
              <h3 className="text-2xl font-bold mb-2">Low Rider</h3>
              <p className="text-gray-600 mb-4">Starting at $14,999</p>
              <p>The Low Rider combines retro aesthetics with modern engineering for a thrilling riding experience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="bg-teal-600 text-white py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">What Our Customers Say</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="w-full md:w-1/3 bg-teal-700 p-6 rounded-lg shadow-lg">
              <p className="text-lg mb-4">"HarleyZone provided an exceptional experience from start to finish. The bike I purchased exceeded my expectations!"</p>
              <p className="font-bold">Jane Doe</p>
              <p className="text-gray-200">Rider & Enthusiast</p>
            </div>
            <div className="w-full md:w-1/3 bg-teal-700 p-6 rounded-lg shadow-lg">
              <p className="text-lg mb-4">"From browsing to buying, HarleyZone made everything smooth and easy. Highly recommend for anyone looking for a great bike."</p>
              <p className="font-bold">John Smith</p>
              <p className="text-gray-200">Long-Time Customer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-teal-500 to-blue-500 text-white py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Ride?</h2>
          <p className="text-lg mb-8">
            Join the Harley-Davidson community today and experience the thrill of the ride. Contact us for more information or visit our showroom.
          </p>
          <a href="/contact" className="bg-white text-teal-700 py-3 px-6 rounded-full font-bold text-lg hover:bg-gray-100">Get in Touch</a>
        </div>
      </section>
    </div>
  );
};

export default Home;
