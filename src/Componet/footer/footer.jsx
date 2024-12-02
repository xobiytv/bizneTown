// App.js
import React from "react";

function App() {
    return (
        <div className="bg-black  text-white py-16 px-4 md:px-8">
            {/* Heading Section */}


            <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
                {/* Icons Section */}
                <div className="text-center lg:text-left gap-8 lg:w-1/3">
                    {/* <h2 className="text-2xl font-bold text-white mb-4">bmark</h2> */}
                    <p className="text-gray-400 mb-4">
                        We help customers to find the best product near them, not time spent searching for the best one.
                    </p>
                    <div className="text-gray-400 space-y-2 mb-4">
                        <div className="flex items-center justify-left lg:justify-start space-x-2">
                            <span>📧</span>
                            <a href="mailto:support@example.com" className="hover:text-white">support@example.com</a>
                        </div>
                        <div className="flex items-center justify-center lg:justify-start space-x-2">
                            <span>📞</span>
                            <a href="tel:+0012345678910" className="hover:text-white">+00 1234 456 789 10</a>
                        </div>
                    </div>
                    <div className="flex justify-center lg:justify-start space-x-4 mt-4">
                        <a href="#" className="text-gray-400 hover:text-white">LinkedIn</a>
                        <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
                        <a href="#" className="text-gray-400 hover:text-white">Instagram</a>
                    </div>
                </div>

                {/* Form Section */}
                <div className="flex flex-col lg:flex-row gap-8 lg:w-1/3">
                    <div className="bg-white text-black p-6 rounded-lg shadow-md w-full max-w-md">
                      
                        <form className="space-y-4">
                            <input
                                type="text"
                                placeholder="Full Name"
                                className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:border-green-500"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:border-green-500"
                            />
                            <textarea
                                placeholder="How can we help you?"
                                className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:border-green-500"
                            ></textarea>
                            <button
                                type="submit"
                                className="w-full p-3 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition"
                            >
                                Send a Message
                            </button>
                        </form>
                    </div>

                    {/* Illustration Section */}
                    {/* <div className="hidden lg:block">
                        <img
                            src="your-image-path.jpg" // Replace with actual image path
                            alt="Contact Us Illustration"
                            className="rounded-lg w-full max-w-md"
                        />
                    </div> */}
                </div>
            </div>

            {/* Footer Section */}
            <footer className="mt-16 text-center text-gray-400">
                <p className="text-sm mt-2">© Tactix 2024, All Rights Reserved</p>
            </footer>
        </div>
    );
}

export default App;
