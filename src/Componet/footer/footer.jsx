import React from 'react';
import { Instagram, Telegram } from '@mui/icons-material';

const Footer = () => {
    return (
        <footer className="bg-[#000e1e]  text-white py-8">
            <div className="container pt-12 px-24 mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
                {/* Chap tomonda */}
                <div className="text-left space-y-2">
                    <p className="text-[19px]">Telefon: +998 90 123 45 67</p>
                    <p className="text-[19px]">Telefon: +998 91 234 56 78</p>
                    <p className="text-[19px]">Manzil: Toshkent, Amir Temur ko'chasi, 10</p>
                    <p className="text-[19px]">Manzil: Jizzax, Mustaqillik ko'chasi, 5</p>
                </div>

                {/* O'rtada */}
                <div className="flex flex-col items-start space-y-2">
                    <a href="#services" className="text-[19px] hover:text-gray-400">Xizmatlar</a>
                    <a href="#about" className="text-[19px] hover:text-gray-400">Biz haqimizda</a>
                    <a href="#portfolio" className="text-[19px] hover:text-gray-400">Portfolio</a>
                    <a href="#contact" className="text-[19px] hover:text-gray-400">Bog'lanish</a>
                </div>

                {/* O'ng tomonda */}
                <div className="flex space-x-6">
                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-gray-400"
                    >
                        <Instagram sx={{fontSize: 38}} />
                    </a>
                    <a
                        href="https://t.me"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-gray-400"
                    >
                        <Telegram  sx={{fontSize: 38}}/>
                    </a>
                </div>
            </div>
            <footer className="mt-16 text-center text-gray-400">
                <p className="text-sm mt-2">© Biznestown 2024, All Rights Reserved</p>
            </footer>
        </footer>
    );
};

export default Footer;

