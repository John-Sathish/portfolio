import React from 'react'
import Strings from '../shared/Strings'
import { FaQuoteLeft,FaQuoteRight } from "react-icons/fa";

function About() {
  return (
    <div className='mt-12 px-44 text-center flex flex-col items-center'>
        <h2 className='text-[40px] font-bold'>{Strings.ABOUT_HEADING}</h2>
        <FaQuoteLeft className='text-white bg-blue-700 rounded-full p-3 text-[44px]'/>
        <h2 className='my-5 text-gray-300 text-[14px]'>{Strings.ABOUT_DESC}</h2>
        <FaQuoteRight className='text-white bg-blue-700 rounded-full p-3 text-[44px]'/>


    </div>
  )
}
 
export default About