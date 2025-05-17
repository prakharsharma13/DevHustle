import React from "react";

const HeroSection = () => {
  return (
    <section className="py-20 text-center px-4 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle,_#4338ca_1px,_transparent_1px)] bg-[length:20px_20px]"></div>
      </div>
      <div className="inline-flex items-center px-4 py-2 rounded-full border border-gray-700 mb-6">
        <span className="mr-2">💡</span>
        <span>Proudly Open Source</span>
      </div>
      <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-yellow-400 bg-clip-text text-transparent">
        Master DSA from anywhere,
        <br />
        practice happens right here.
      </h2>
      <p className="text-xl mb-8">
        Solve over 8,000+ company-wise coding questions like a professional
        programmer.
        <br />
        Because landing your dream job requires serious preparation!
      </p>
      <button className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-medium py-3 px-8 rounded-md text-lg shadow-lg">
        Get Started
      </button>
    </section>
  );
};

export default HeroSection;
