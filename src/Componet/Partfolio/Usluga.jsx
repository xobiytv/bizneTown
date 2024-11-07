import React from 'react';
import { partfolio, partfolioA, partfolioB } from '../../api/api';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';


export default function Background() {
    return (
        <div className="relative min-h-screen bg-[#000e1e] text-white">
            <div className='pt-12 pl-24'>
                <p className='text-[30px]  text-white tex-hed'>Что мы умеем?</p>
            </div>
            <div className="w-full p-20">
               

            </div>

        </div >
    );
}
