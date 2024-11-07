import React from 'react'
import Navbar from './navbar/Navbar'
import Header from './header/Header'
import Servis from './Servis/Servis'
import Usluga from './Partfolio/Usluga'

export default function Main() {
    return (
        <div>
            <Navbar />
            <Header />
            <Servis />
            <Usluga />
            <h1 class="text-center text-xl font-bold ">
                Hello world!
            </h1>
        </div>
    )
}
