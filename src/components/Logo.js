import React from 'react'
import Link from 'next/link'
import {motion} from 'framer-motion'
const MotionLink = motion(Link)
export const Logo = () => {
  return (
    <div className='flex items-center justify-center mt-2'>    
        <MotionLink href='/' className='w-16 h-16 bg-dark text-light dark:border-light dark:bg-light dark:text-dark border border-solid border-transparent flex items-center justify-center rounded-full text-2xl font-bold' whileHover={{scale:1.5}} whileTap={{scale:0.9}}>
        SM 
        </MotionLink>
    </div>
  )
}
export default Logo