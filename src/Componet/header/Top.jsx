import React from 'react'
import { logoPNG } from '../../api/api'

export default function Top() {
  return (
    <div>
        <div className='Logo flex justify-start items-center'>
            <img className='w-[50px]' src={logoPNG} alt="" />  <b className='text-white text-[24px]'>| Internet marketing bo'yicha mutaxassislar :)</b>
        </div>
    </div>
  )
}
