import React from 'react'
import TypewriterText from './RamdomWord'
import { Button } from '@mui/material'
import SmsIcon from '@mui/icons-material/Sms';
import Chaqmoq from '../../Assisent/chaqmoq.png'

export default function Center() {

    return (
        <div className="flex justify-around items-center w-full h-full">
            {/* Left section with text and button */}
            <div className="left w-10/12 lg:w-10/12 md:w-10/12">
                <p className="text-[30px] text-white font-bold">Бизани хизматларимиз:</p>
                <p className="text-white py-6 pb-20 mb-6">
                    <TypewriterText />
                </p>
                <Button
                    size="large"
                    component="label"
                    variant="contained"
                    startIcon={<SmsIcon />}
                >
                    Upload files
                </Button>
            </div>

            {/* Right section with an optional image */}
            {/* <div className="right hidden lg:block w-[250px]">
                <img className="w-full h-full object-cover" src={Chaqmoq} alt="Decorative Image" />
            </div> */}
        </div>

    )
}
