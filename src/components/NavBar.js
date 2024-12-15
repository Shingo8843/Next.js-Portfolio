import React from 'react'
import Link from 'next/link'
import Logo from '@/components/Logo'
import { useRouter } from 'next/router'
import { GithubIcon, LinkedInIcon } from './Icons'
import { motion } from 'framer-motion'

const CustomLink = ({href, title, className=""}) => {
    const router = useRouter()
    // console.log(router.pathname)
    return (
        <Link href={href} className={`${className} relative`}>
            {title}
            <span className={`h-[1px] inline-block w-full bg-dark absolute left-0 bottom-0.5 group-hover:w-full transition-[width] duration-300 ease ${router.pathname === href ? 'w-full' : 'w-0'}`}>
                &nbsp;
            </span>
        </Link>
    )
}
const NavBar = () => {
  return (
    <header className='w-hull px-32 py-8 font-medium flex justify-between items-center'>
        <nav>
            <CustomLink href='/' title='Home' className='mr-4' />
            <CustomLink href='/about' title='About' className='mx-4' />
            <CustomLink href='/projects' title='Projects' className='mx-4' />
            <CustomLink href='/contact' title='Contact' className='ml-4' />
        </nav>
        
        <nav className='flex items-center justify-center flex-wrap'>
            <motion.a href='https://github.com/Shingo8843' target='_blank' whileHover={{y:-2}} whileTap={{scale:0.9}} className="w-10 mr-3">
                <GithubIcon />
            </motion.a>
            <motion.a href='https://www.linkedin.com/in/smorita/' target='_blank' whileHover={{y:-2}} whileTap={{scale:0.9}} className="w-10 mr-3">
                <LinkedInIcon />
            </motion.a>
        </nav>
        <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
            <Logo />
        </div>
    </header>
  )
}

export default NavBar