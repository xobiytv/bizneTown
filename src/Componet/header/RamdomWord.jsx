import React, { useState, useEffect } from 'react';

function TypewriterText() {
  const words = ["Аудитория ва рақобатчиларни таҳлил қилиш", 
    "Контент яратиш, копирайтинг, видео-контент", 
    "Тарғиб қилиш, таргет реклама, блогерлар билан ҳамкорлик",
    "Профилингизни юритиш",
    "Ҳар ой натижалар бўйича ҳисоботлар тақдим этиш"
  ]; // Har bir so'z ketma-ket chiqadi
  const [currentWordIndex, setCurrentWordIndex] = useState(0); // Hozirgi so'zning indeksini saqlaydi
  const [displayedText, setDisplayedText] = useState(''); // Hozirgi ko'rinayotgan matn
  const [charIndex, setCharIndex] = useState(0); // Hozirgi harfning indeksini saqlaydi

  useEffect(() => {
    // Hozirgi so‘zni olamiz
    const currentWord = words[currentWordIndex];
    
    if (charIndex < currentWord.length) {
      // Har bir harfni qo'shib borish uchun interval o'rnatamiz
      const typingTimeout = setTimeout(() => {
        setDisplayedText((prev) => prev + currentWord[charIndex]);
        setCharIndex((prevIndex) => prevIndex + 1);
      }, 50); // Harflar chiqish tezligi

      return () => clearTimeout(typingTimeout); // Har bir renderda intervalni tozalaymiz
    } else {
      // Hamma harflar chiqib bo'lgandan so'ng, keyingi so'zga o'tish uchun vaqt beradi
      const resetTimeout = setTimeout(() => {
        setDisplayedText('');
        setCharIndex(0);
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      },1000); // Keyingi so'zga o'tish vaqti

      return () => clearTimeout(resetTimeout); // Keyingi so'z uchun intervalni tozalaymiz
    }
  }, [charIndex, currentWordIndex, words]);

  return (
    <div className='h-[100px] roboto-slab' style={{ fontSize: '54px', fontWeight: 'bold' }}>
      {displayedText}
    </div>
  );
}

export default TypewriterText;
