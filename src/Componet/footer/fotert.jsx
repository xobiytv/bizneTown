import React from 'react'

export default function fotert() {
    return (
        <footer className="bg-gray-50 text-gray-800 p-8 md:p-16">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 "> 
                {/* Logo and Description */}
                <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">bmark</h2>
                    <p className="text-gray-600">
                        We help customers to find the best product near them, not time spent searching for the best one.
                    </p>
                    <div className="text-gray-600 space-y-2">
                        <div className="flex items-center space-x-2">
                            <span>📧</span>
                            <a href="mailto:support@example.com" className="hover:text-gray-900">support@example.com</a>
                        </div>
                        <div className="flex items-center space-x-2">
                            <span>📞</span>
                            <a href="tel:+0012345678910" className="hover:text-gray-900">+00 1234 456 789 10</a>
                        </div>
                    </div>
                </div>

                {/* Company Links */}

                {/* Help & Support Links */}
                <div>
                    <h3 className="text-lg   text-gray-800 mb-4">Help & Support</h3>
                    <ul className="space-y-2 text-gray-600">
                        <li><a href="#" className="hover:text-gray-900">Contact us</a></li>
                        <li><a href="#" className="hover:text-gray-900">FAQ</a></li>
                        <li><a href="#" className="hover:text-gray-900">Our team</a></li>
                        <li><a href="#" className="hover:text-gray-900">Terms of use</a></li>
                    </ul>
                </div>

                {/* Subscribe Section */}
                <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Subscribe</h3>


                </div>
            </div>

            {/* Footer Bottom */}
            <div className="mt-8 border-t border-gray-200 pt-4 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">
                <p>Abid Hasan Jilon 2021 All rights reserved</p>
                <div className="flex space-x-4 mt-4 md:mt-0">
                    <a href="#" className="hover:text-gray-900">🌐</a>
                    <a href="#" className="hover:text-gray-900">📷</a>
                    <a href="#" className="hover:text-gray-900">🐦</a>
                    <a href="#" className="hover:text-gray-900">🔗</a>
                </div>
            </div>
        </footer>
    )
}
