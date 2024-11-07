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
                <Swiper
                    slidesPerView={2} // Default number of slides to show on smaller screens
                    spaceBetween={10}
                    pagination={{ clickable: false }}
                    navigation={false}
                    autoplay={{
                        delay: 1000, // Delay between slides in milliseconds
                        disableOnInteraction: false, // Keeps autoplay running even after user interaction
                    }}
                    breakpoints={{
                        640: { slidesPerView: 2, spaceBetween: 10 },
                        768: { slidesPerView: 3, spaceBetween: 15 },
                        1024: { slidesPerView: 6, spaceBetween: 20 },
                        1280: { slidesPerView: 6, spaceBetween: 20 }, // Display 5 slides on extra-large screens
                    }}
                    modules={[Pagination, Navigation, Autoplay]}
                    className="mySwiper"
                >
                    <div className='pb-10'>
                        {partfolioA.map((item) => (
                            <SwiperSlide key={item.id}>
                                <div className="flex justify-center p-2">
                                    <img className="w-full rounded-full" src={item.rasm} alt={item.namo} />
                                </div>
                            </SwiperSlide>
                        ))}

                    </div>

                </Swiper>
                <div className='mt-10'>
                    <Swiper
                        slidesPerView={2} // Default number of slides to show on smaller screens
                        spaceBetween={10}
                        pagination={{ clickable: false }}
                        navigation={false}
                        autoplay={{
                            delay: 1000, // Delay between slides in milliseconds
                            disableOnInteraction: false, // Keeps autoplay running even after user interaction
                        }}
                        breakpoints={{
                            640: { slidesPerView: 2, spaceBetween: 10 },
                            768: { slidesPerView: 3, spaceBetween: 15 },
                            1024: { slidesPerView: 6, spaceBetween: 20 },
                            1280: { slidesPerView: 6, spaceBetween: 20 }, // Display 5 slides on extra-large screens
                        }}
                        modules={[Pagination, Navigation, Autoplay]}
                        className="mySwiper"
                    >
                        <div className=''>

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
