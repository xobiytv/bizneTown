import React from 'react';
import { Star, Speed, Support } from '@mui/icons-material';

const Advantages = () => {
  const advantages = [
    {
      icon: <Star fontSize="large" sx={{ color: "#FFD700" }} />, // Oltin yulduz
      title: "более 6 лет работы ",
      description: "За 6 лет в SMM мы прошли путь от небольших проектов до масштабных кампаний, помогая брендам становиться ближе к своей аудитории. Этот опыт позволяет нам видеть суть, находить уникальные решения и добиваться реальных результатов для наших клиентов."
    },
    {
      icon: <Speed fontSize="large" sx={{ color: "#4CAF50" }} />, // Tezlik ikonkasi
      title: "Мы понимаем ваши цели",
      description: "Каждый бизнес уникален, и мы это знаем. Вместе с вами мы создаём стратегию, которая работает именно для вашего бренда"
    },
    {
      icon: <Support fontSize="large" sx={{ color: "#2196F3" }} />, // Qo'llab-quvvatlash
      title: "Мы знаем, как удивлять",
      description: "В мире, где ежедневно создаются миллионы постов, мы делаем так, чтобы ваш бренд выделялся и оставался в памяти"
    },
  ];

  return (
    <section className="bg-black py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Ustunligimiz</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {advantages.map((adv, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-4 flex justify-center">{adv.icon}</div>
              <h3 className="text-2xl text-white font-bold mb-2">{adv.title}</h3>
              <p className="text-gray-200">{adv.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
