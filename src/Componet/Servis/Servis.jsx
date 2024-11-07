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
                <p className='text-[30px]  text-white tex-hed'>Наши партнеры</p>
            </div>
            <div className="w-full p-20">
                {/* First Swiper instance */}
                <Swiper
                    slidesPerView={2} // Default number of slides on very small screens (e.g., sx)
                    spaceBetween={10}
                    pagination={{ clickable: false }}
                    navigation={false}
                    autoplay={{
                        delay: 1000, // Slide change delay
                        disableOnInteraction: false, // Continues autoplay after interaction
                    }}
                    breakpoints={{
                        640: { slidesPerView: 2, spaceBetween: 10 }, // sm screens
                        768: { slidesPerView: 3, spaceBetween: 15 }, // md screens
                        1024: { slidesPerView: 6, spaceBetween: 20 }, // lg screens
                        1280: { slidesPerView: 6, spaceBetween: 20 }, // xl screens
                    }}
                    modules={[Pagination, Navigation, Autoplay]}
                    className="mySwiper"
                >
                    <div className="pb-10">
                        {/* Rendering each item in `partfolioA` */}
                        {partfolioA.map((item) => (
                            <SwiperSlide key={item.id}>
                                <div className="flex justify-center p-2">
                                    <img className="w-full rounded-full" src={item.rasm} alt={item.namo} />
                                </div>
                            </SwiperSlide>
                        ))}
                    </div>
                </Swiper>

                {/* Second Swiper instance */}
                <div className="mt-10">
                    <Swiper
                        slidesPerView={2} // Default slides on very small screens (e.g., sx)
                        spaceBetween={10}
                        pagination={{ clickable: false }}
                        navigation={false}
                        autoplay={{
                            delay: 1000, // Slide change delay
                            disableOnInteraction: false, // Continues autoplay after interaction
                        }}
                        breakpoints={{
                            640: { slidesPerView: 2, spaceBetween: 10 }, // sm screens
                            768: { slidesPerView: 3, spaceBetween: 15 }, // md screens
                            1024: { slidesPerView: 6, spaceBetween: 20 }, // lg screens
                            1280: { slidesPerView: 6, spaceBetween: 20 }, // xl screens
                        }}
                        modules={[Pagination, Navigation, Autoplay]}
                        className="mySwiper"
                    >
                        <div>
                            {/* Rendering each item in `partfolioB` */}
                            {partfolioB.map((item) => (
                                <SwiperSlide key={item.id}>
                                    <div className="flex justify-center p-2">
                                        <img className="w-full rounded-full" src={item.rasm} alt={item.namo} />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </div>
                    </Swiper>
                </div>
            </div>


        </div >
    );
}
