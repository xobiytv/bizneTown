import React from 'react';

const PerformanceMetrics = () => {
  return (
    <div className="h-full bg-[#000e1e] text-white py-16 px-4 md:px-8">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-8">
        Dive into Our <span className="text-gray-300">Performance Metrics</span>
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="bg-black p-4 sm:p-6 rounded-lg text-center">
          <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">17.6%</h3>
          <p className="text-md sm:text-lg mt-4 font-semibold">Conversion Rate</p>
          <p className="text-xs sm:text-sm text-gray-400 mt-2">Experience the power of effective digital marketing with a remarkable 17.6% conversion rate.</p>
        </div>

        <div className="bg-black p-4 sm:p-6 rounded-lg text-center">
          <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">100K</h3>
          <p className="text-md sm:text-lg mt-4 font-semibold">Potential Customers</p>
          <p className="text-xs sm:text-sm text-gray-400 mt-2">Witness the impact of our digital campaigns as we extend your reach to over 100,000 potential customers.</p>
        </div>

        <div className="bg-black p-4 sm:p-6 rounded-lg text-center">
          <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">$5.2M</h3>
          <p className="text-md sm:text-lg mt-4 font-semibold">Latest Project Revenue</p>
          <p className="text-xs sm:text-sm text-gray-400 mt-2">Unprecedented growth with our proven digital strategies, driving revenue to surpass the $5 million milestone.</p>
        </div>

        <div className="bg-black p-4 sm:p-6 rounded-lg text-center">
          <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">300%</h3>
          <p className="text-md sm:text-lg mt-4 font-semibold">Impressive ROI</p>
          <p className="text-xs sm:text-sm text-gray-400 mt-2">Unlock the full potential of your digital investments with an impressive 300% return on investment.</p>
        </div>
      </div>

      <div className="bg-black p-4 sm:p-6 mt-8 rounded-lg text-center flex flex-col items-center">
        <div className="text-4xl sm:text-5xl lg:text-6xl mb-4 text-white">💡</div>
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">Enhancing Brand Recognition</h3>
        <p className="text-xs sm:text-sm lg:text-base text-gray-400">Unlock the impact of our campaigns in elevating your brand's visibility. With strategic messaging, we've reached millions, boosting brand awareness and market presence.</p>
      </div>
    </div>
  );
};

export default PerformanceMetrics;
