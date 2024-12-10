import React from 'react'
import Navbar from './navbar/Navbar'
import Header from './header/Header'
import Servis from './Servis/Servis'
import Usluga from './Partfolio/Usluga'
import Footer from './footer/footer'
import Form from './footer/form'
import Fotert from './footer/fotert'
import Top from './Servis/Top'
import Team from './Team'
import UTP from './UTP'

export default function Main() {
    return (
        <div>
            <Navbar />
            <Header />

            <Top />
            <UTP />
            <Form />
            <Usluga />

            <Servis />
            <Form />
            {/* <Team /> */}
            {/* <Fotert /> */}
            <Footer />


        </div>
    )
}
