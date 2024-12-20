import React from 'react'
import Link from 'next/link'
import Logo from '@/components/Logo'
import { useRouter } from 'next/router'
import { GithubIcon, LinkedInIcon, MoonIcon, SunIcon } from './Icons'
import { motion } from 'framer-motion'
import useThemeSwicher from './hooks/useThemeSwicher'
const CustomLink = ({href, title, className=""}) => {
    const router = useRouter()
    // console.log(router.pathname)
    return (
        <Link href={href} className={`${className} relative group`}>
            {title}
            <span className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] duration-300 ease ${router.pathname === href ? 'w-full' : 'w-0'} dark:bg-light`}>
                &nbsp;
            </span>
        </Link>
    )
}
const CustomMobileLink = ({href, title, className="", toggle}) => {
    const router = useRouter()
    const handleClick = () => {
        toggle()
        router.push(href)

    }
    // console.log(router.pathname)
    return (
        <button href={href} className={`${className} relative group text-light dark:text-dark my-2`} onClick={handleClick}>
            {title}
            <span className={`h-[1px] inline-block bg-light dark:bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] duration-300 ease ${router.pathname === href ? 'w-full' : 'w-0'} dark:bg-light`}>
                &nbsp;
            </span>
        </button>
    )
}
const NavBar = () => {
    const [mode, setMode] = useThemeSwicher();
    const  [isOpen, setIsOpen] = React.useState(false);
    const handleClick = () => {
        setIsOpen(!isOpen)
    }
  return (
    <header className='w-hull px-32 py-8 font-medium flex justify-between items-center dark:text-light relative'>
        <button className='hidden lg:flex flex-col justify-center items-center' onClick={handleClick}>
            <span
                className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 rounded-sm 
                ${isOpen ? 'rotate-45 translate-y-1 w-6' : '-translate-y-1 w-6'}`}
            ></span>
            <span
                className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 
                ${isOpen ? 'opacity-0' : 'opacity-100'}`}
            ></span>
            <span
                className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 rounded-sm 
                ${isOpen ? '-rotate-45 -translate-y-1 w-6' : 'translate-y-1 w-6'}`}
            ></span>
        </button>
        {/* Desktop Menu */}
        <div className={`w-full flex justify-between items-center lg:hidden`}>
            <nav>
                <CustomLink href='/' title='Home' className='mr-4' />
                <CustomLink href='/about' title='About' className='mx-4' />
                <CustomLink href='/projects' title='Projects' className='ml-4' />
            </nav>
            
            <nav className='flex items-center justify-center flex-wrap'>
                <motion.a href='https://github.com/Shingo8843' target='_blank' whileHover={{y:-2}} whileTap={{scale:0.9}} className="w-10 mr-3">
                    <GithubIcon />
                </motion.a>
                <motion.a href='https://www.linkedin.com/in/smorita/' target='_blank' whileHover={{y:-2}} whileTap={{scale:0.9}} className="w-10 mr-3">
                    <LinkedInIcon />
                </motion.a>
                <button onClick={() => setMode(mode === 'light' ? 'dark' : 'light')} className={`ml-3 flex items-center justify-center rounded-full p-1 w-10 h-10 ${mode === "light" ? 'bg-dark text-light': 'bg-light text-dark'}`}>
                {
                    mode === 'dark' ?
                    <SunIcon className={"fill-dark"} />
                    : <MoonIcon className={"fill-light"} />
                }
                </button>
            </nav>
        </div>
        {/* // Mobile Menu */}
        {
            isOpen ? 
            <motion.div 
                initial={{scale:0, opacity:0, x:"-50%", y:"-50%"}}
                animate={{scale:1, opacity:1}}
            className={`min-w-[70vw] flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32`}>
                <nav className='flex items-center flex-col justify-center'>
                    <CustomMobileLink href='/' title='Home' className='' toggle={handleClick}/>
                    <CustomMobileLink href='/about' title='About' className='' toggle={handleClick}/>
                    <CustomMobileLink href='/projects' title='Projects' className='' toggle={handleClick}/>
                    {/* <CustomLink href='/contact' title='Contact' className='ml-4' /> */}
                </nav>
                
                <nav className='flex items-center justify-center flex-wrap mt-2'>
                    <motion.a href='https://github.com/Shingo8843' target='_blank' whileHover={{y:-2}} whileTap={{scale:0.9}} className="w-10 mr-3 bg-light rounded-full dark:bg-dark sm:mx-1">
                        <GithubIcon />
                    </motion.a>
                    <motion.a href='https://www.linkedin.com/in/smorita/' target='_blank' whileHover={{y:-2}} whileTap={{scale:0.9}} className="w-10 mx-3 sm:mx-1">
                        <LinkedInIcon />
                    </motion.a>
                    <button onClick={() => setMode(mode === 'light' ? 'dark' : 'light')} className={`ml-3 flex items-center justify-center rounded-full p-1 w-10 h-10 ${mode === "light" ? 'bg-dark text-light': 'bg-light text-dark'} sm:mx-1`}>
                    {
                        mode === 'dark' ?
                        <SunIcon className={"fill-dark"} />
                        : <MoonIcon className={"fill-light"} />
                    }
                    </button>
                </nav>
            </motion.div>
            : null
        }
        <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
            <Logo />
        </div>
    </header>
  )
}

export default NavBar