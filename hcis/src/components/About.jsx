import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-5xl font-bold text-center mb-6">About Us</h1>
      <p className="text-xl text-center mb-8">
        HarleyZone is more than just a dealership. We are a community of enthusiasts who share a passion for the open road and the freedom it brings.
      </p>
      <img src="https://example.com/about-harley.jpg" alt="About Harley" className="w-full h-auto mb-8" />
      <p className="text-lg text-center">
        Since 1903, Harley-Davidson has stood as a symbol of innovation and quality. Our mission is to continue this legacy with advanced technology, unmatched performance, and enduring style.
      </p>
    </div>
  );
};

export default About;
