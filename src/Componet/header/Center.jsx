import React from 'react'
import TypewriterText from './RamdomWord'
import { Button } from '@mui/material'
import SmsIcon from '@mui/icons-material/Sms';
import Chaqmoq from '../../Assisent/chaqmoq.png'

export default function Center() {

    return (
        <div className='flex justify-around  items-center w-full h-full'>
          
            <div className='left w-10/12'>
                <p className='text-[30px]  text-white tex-hed'>Мы можем:</p>
                <p className='text-white py-6 pb-20 mb-6'><TypewriterText /></p>
                <Button
                   size="large"
                    component="label"
                    role={undefined}
                    variant="contained"
                    tabIndex={-1}
                    startIcon={<SmsIcon />}
                >
                    Upload files
                </Button>
            </div> 
             {/* <div className='right  w-[250px]'>
                <img className='w-full h-full' src={Chaqmoq} alt="" />
            </div> */}
        </div>

    )
}