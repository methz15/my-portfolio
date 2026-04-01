import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = ({isDarkMode}) => {
  return (
    <div className='mt-20'>
      <div className='text-center'>
        <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt='' className='w-36 mx-auto mb-2'/>

        <div className='w-max flex items-center gap-3 mx-auto'>
            <Image src={assets.pin_icon} alt='' className='w-6'/>
            Matara, Sri Lanka.
        </div>
        <div className='w-max flex items-center gap-3 mx-auto'>
            <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt='' className='w-6'/>
            methmahewavitharana@gmail.com
        </div>
        <div className='w-max flex items-center gap-3 mx-auto'>
            <Image src={assets.tel_icon} alt='' className='w-6'/>
            +94 70 138 5618
        </div>
      </div>

    <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
        <p>© Methma Hewavitharana</p>
        <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
            <li><a target='_blank' href="https://github.com/IT21836190MPHEWAVITHARAN">GitHub</a></li>
            <li><a target='_blank' href="https://www.linkedin.com/in/senil-wijesundara-508baa288/">LinkedIn</a></li>
        </ul>
    </div>

    </div>
  )
}

export default Footer
