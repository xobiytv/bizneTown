import * as React from 'react';

const texta = [
    {
        id: 1,
        name: 'ЛИДОГЕ- НЕРАЦИЯ',
        discriptiom: 'Запуск контекстной и таргетированной рекламы с целью увеличения потока клиентов',
    },
    {
        id: 2,
        name: 'ЧАТ-БОТЫ',
        discriptiom: 'Создаем чат-ботов в Инстаграм и Телеграм',
    },
    {
        id: 3,
        name: 'АНАЛИ- ЗИРУЕМ',
        discriptiom: 'ваших конкурентов',
    },
    {
        id: 4,
        name: 'СОЗДАЕМ LANDING PAGE',
    },
    {
        id: 5,
        name: 'SMM- ПРОДВИЖЕНИЕ',
        discriptiom: 'Вовлекаем в коммуникацию с брендом и формируем доверие целевой аудитории для достижения конкретных бизнес целей',
    },
    {
        id: 6,
        name: 'АВТОВО- РОНКИ',
        discriptiom: 'которые окупают рекламные бюджеты в разы',
    },
    {
        id: 7,
        name: 'INFLUENCE- МАРКЕТИНГ',
    },
    {
        id: 8,
        name: 'PPC PEКЛАМА',
        discriptiom: 'РРС реклама это инструмент performance маркетинга от поисковых систем (Google, Яндекс) и социальных сетей (Facebook, Instagram)',
    },
];

export default function Usluga() {
    return (
        <div className="relative min-h-screen bg-[#000e1e] text-white">
            <div className='pt-12 pl-24'>
                <p className='text-[30px] text-white tex-hed'>Что мы умеем?</p>
            </div>
            <div className="w-full p-20">
                <div className="grid gap-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                    {/* First item spans 2 rows on large screens, normal span on smaller screens */}
                    <div className="lg:row-span-2 col-span-1 bg-black p-4">
                        <b className='text-[28px]'>{texta[0].name}</b>
                        <p>{texta[0].discriptiom}</p>
                    </div>

                    {/* Remaining items - they will adjust based on screen size */}
                    <div className="col-span-1 bg-black p-4">
                        <b className='text-[28px]'>{texta[1].name}</b>
                        <p>{texta[1].discriptiom}</p>
                    </div>
                    <div className="col-span-1 bg-black p-4">
                        <b className='text-[28px]'>{texta[2].name}</b>
                        <p>{texta[2].discriptiom}</p>
                    </div>

                    {/* Below rows on smaller screens */}
                    <div className="col-span-1 bg-black p-4">
                        <b className='text-[28px]'>{texta[3].name}</b>
                        <p>{texta[3].discriptiom || 'No description available'}</p>
                    </div>
                    <div className="col-span-1 bg-black p-4">
                        <b className='text-[28px]'>{texta[4].name}</b>
                        <p>{texta[4].discriptiom}</p>
                    </div>
                    <div className="col-span-1 bg-black p-4">
                        <b className='text-[28px]'>{texta[5].name}</b>
                        <p>{texta[5].discriptiom}</p>
                    </div>

                    {/* Additional items */}
                    <div className="col-span-1 bg-black p-4">
                        <b className='text-[28px]'>{texta[6].name}</b>
                        <p>{texta[6].discriptiom}</p>
                    </div>
                    <div className="col-span-1 bg-black p-4">
                        <b className='text-[28px]'>{texta[7].name}</b>
                        <p>{texta[7].discriptiom}</p>
                    </div>
                </div>
            </div>

        </div>
    );
}
