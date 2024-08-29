import React from 'react';

const Contact = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-5xl font-bold text-center mb-6">Contact Us</h1>
      <p className="text-xl text-center mb-8">
        Have questions or need support? Reach out to our team, and we'll get back to you as soon as possible.
      </p>
      <div className="text-center">
        <form className="mx-auto w-full md:w-2/3 bg-gray-50 p-6 shadow-lg rounded-lg">
          <div className="mb-4">
            <label className="block text-left text-lg mb-2">Name</label>
            <input type="text" className="w-full p-3 rounded border border-gray-300" />
          </div>
          <div className="mb-4">
            <label className="block text-left text-lg mb-2">Email</label>
            <input type="email" className="w-full p-3 rounded border border-gray-300" />
          </div>
          <div className="mb-4">
            <label className="block text-left text-lg mb-2">Message</label>
            <textarea className="w-full p-3 rounded border border-gray-300 h-32"></textarea>
          </div>
          <button className="bg-teal-600 text-white py-3 px-6 rounded-full hover:bg-teal-700">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
