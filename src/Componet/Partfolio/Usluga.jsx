import * as React from 'react';

const texta = [
    // {
    //     id: 1,
    //     name: 'кошимча хизматларимиз',
    //     discriptiom: '1. Montaj, 2. Syomka + montaj 3. Kontent reja, 4. Ssenary yozish, 5. Storytelling, 6. Target reklama, 7. Full standart, 8. Aksiya va o`yinlar, 9. So`rovnoma',
    // },
    {
        id: 1,
        name: 'Тарғиб қилиш, таргет реклама, блогерлар билан ҳамкорлик',
    },
    {
        id: 2,
        name: 'Контент яратиш, копирайтинг, видео-контент',
    },
    {
        id: 3,
        name: 'Аудитория ва рақобатчиларни таҳлил қилиш',
    },
    {
        id: 4,
        name: 'Профилингизни юритиш',
    },
    {
        id: 5,
        name: 'Ҳар ой натижалар бўйича ҳисоботлар тақдим этиш',
    },






];

export default function Usluga() {
    return (
        <div className="relative min-h-screen bg-[#000e1e] text-white">
            <div className='pt-10 text-center'>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                    Бизани хизматларимиз
                </h1>
            </div>

            <div className="w-full p-20">
                <div className="grid gap-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                    {/* First item spans 2 rows on large screens, normal span on smaller screens */}
                    <div className="btn lg:row-span-2 col-span-1 bg-black p-4">
                        <b className='text-[25px]'>{texta[0].name}</b>
                        <p>{texta[0].discriptiom}</p>
                    </div>

                    {/* Remaining items - they will adjust based on screen size */}
                    <div className="btn col-span-1 bg-black p-4">
                        <b className='text-[28px]'>{texta[1].name}</b>
                        <p>{texta[1].discriptiom}</p>
                    </div>
                    <div className="btn col-span-1 bg-black p-4">
                        <b className='text-[28px]'>{texta[2].name}</b>
                        <p>{texta[2].discriptiom}</p>
                    </div>

                    {/* Below rows on smaller screens */}
                    <div className="btn col-span-1 bg-black p-4">
                        <b className='text-[28px]'>{texta[3].name}</b>
                        <p>{texta[3].discriptiom}</p>
                    </div>
                    <div className="btn col-span-1 bg-black p-4">
                        <b className='text-[28px]'>{texta[4].name}</b>
                        <p>{texta[4].discriptiom}</p>
                    </div>



                </div>
            </div>

        </div>
    );
}
