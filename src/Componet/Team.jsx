import React from 'react';
import CEo from '../Assisent/team/eldor aka.jpg';
import SMM from '../Assisent/team/elenora.jpg';
import Marketolig from '../Assisent/team/diyor.jpg';
import Montaj from '../Assisent/team/jasurbek.jpg';
import Operator from '../Assisent/team/jasur2.png'; // Fayl kengaytmasini qo'shish kerak edi
import Koperayer from '../Assisent/team/indi.jpg';
import Kontentmekr from '../Assisent/team/Abdurashid.jpg';
import PR from '../Assisent/team/diyorbek.jpg'; // Fayl kengaytmasini qo'shish kerak edi
import Storesmekr from '../Assisent/team/kamronbek.jpg';
import Dizayner from '../Assisent/team/oz.jpg';

const teamMembers = [
    { id: 1, name: 'Eldor Abdulvohid', position: 'ASOSCHI', imageUrl: CEo },
    { id: 2, name: 'Eleanora Rajabova', position: 'SMM MENEJER', imageUrl: SMM },
    { id: 3, name: 'Diyorbek Normatov', position: 'MARKETOLOG', imageUrl: Marketolig },
    { id: 4, name: 'Jasurbek Baydullayev', position: 'MONTAJ USTASI', imageUrl: Montaj },
    { id: 5, name: 'Jasurbek Palimbetov', position: 'OPERATOR', imageUrl: Operator },
    { id: 6, name: 'Indira Rustamova', position: 'KOPIRAYTER', imageUrl: Koperayer },
    { id: 7, name: 'Abdurashid Vohidov', position: 'KONTENTMEYKER', imageUrl: Kontentmekr },
    { id: 8, name: 'Diyorbek Abdiyev', position: 'PR MENEJER', imageUrl: PR },
    { id: 9, name: 'Komron Abdumannonov', position: 'STORISMEYKER', imageUrl: Storesmekr },
    { id: 10, name: 'Ozodbek Soipov', position: 'DIZAYNER', imageUrl: Dizayner },
];

function TeamPage() {
    return (
        <div className="py-16 px-4 md:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Meet Our Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
                {teamMembers.map((member) => (
                    <div>
                        <div key={member.id} className="bg-white w-44 h-64 rounded-lg shadow-md text-center">
                            <img
                                src={member.imageUrl}
                                alt={member.name}
                                className="w-full h-full mx-auto mb-4"
                            />

                        </div>
                        <h3 className="text-xl font-semibold">{member.name}</h3>
                        <p className="text-gray-600">{member.position}</p>
                    </div>

                ))}
            </div>
        </div>
    );
}

export default TeamPage;
