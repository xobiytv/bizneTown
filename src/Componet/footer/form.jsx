// App.js
import React from 'react';

function App() {
  return (
    <div className="relative h-[50vh] bg-[#000e1e] pt-20 text-white flex items-center justify-center">
      <div className="bg-black bg-opacity-50 w-full px-4 py-8 md:px-20 md:py-16 lg:py-20 lg:px-32 text-center">

        <div className="w-full">
          {/* Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Qayerdan boshlashni bilmayapsizmi?
          </h1>
          
          {/* Subtitle */}
          <p className="text-sm sm:text-base md:text-lg text-white mb-8">
            So'rov qoldiring, biz sizning kompaniyangizning bepul auditini o'tkazamiz va nimaga e'tibor berish kerakligini aytamiz
          </p>

          {/* Form */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            
            {/* Name Input */}
            <input
              type="text"
              placeholder="Ismingiz"
              className="w-full sm:w-1/3 p-3 text-black rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
            />

            {/* Phone Input */}
            <div className="flex w-full sm:w-1/3">
              <span className="flex text-black items-center justify-center bg-gray-100 rounded-l-md px-3 border border-r-0 border-gray-300">
                +998
              </span>
              <input
                type="tel"
                placeholder="99-999-9999"
                className="w-full p-3 text-black rounded-r-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            {/* Submit Button */}
            <button className="w-full sm:w-1/3 bg-[#174056] hover:bg-[#79abc6] text-white font-bold p-3 rounded-md">
              Konsultatsiya olish
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
