import {React, use, useRef} from 'react'
import {useScroll, motion} from 'framer-motion'
import LiIcon from './LiIcon';
const Details = ( {
    type, time, place, info
}) => {
    const ref = useRef(null)
    return (
        <li ref = {ref}className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col justify-between md:w-[80%]'>
            <LiIcon reference={ref}/>
            <motion.div initial={{y:50}} whileInView={{y:0}} transition={{duration: 0.5, type: "spring"}} >
                <h3 className='capitalize text-2xl font-bold sm:text-lg xs:text-lg'>
                    {type}
                </h3>
                <span className='capitalize font-meduim text-dark/75 xs:text-sm'>
                    {time} | {place}
                </span>
                <p className='font-medium w-full md:text-sm'>
                    {info}
                </p>
            </motion.div>
        </li>
    )
}
const experiences = [
    {
        type: 'Master of Science in Computer Science',
        time: '2023 - 2025',
        place: 'Los Angeles, CA',
        info: 'Natural Language Processing, Deep Learning, Machine Learning, Artificial Intelligence, Computer Vision, Web Technologies, Probability and Statistics, Analysis of Algorithms , Database Systems, ',
    },
    {
        type: 'Bachelor of Science in Computer Engineering, Minor in Computer Science',
        time: '2019 - 2023',
        place: 'San Diego, CA',
        info: 'Computer Engineering, Electrical Engineering, Software Engineering, Data Architecture, Object-Oriented Programming, Embedded System Programming, Relational Database, Informational Technology, Mathematics, Algorithms, Statistics',
    },

];

const Education = () => { 
    const ref = useRef(null)
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset:["start end", "start start"],
        }
    )

  return (
    <>
        <div className='my-64 lg:my-32 md:my-16 sm:my-8 sm:mb-0'>
            <h2 className='font-bold text-8xl mt-64 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>
                Education
            </h2>
        </div>
        <div className='w-[75%] mx-auto relative lg:w-[90%] md:w-full' ref={ref}>
            <motion.div className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]' style={{scaleY: scrollYProgress}}/>
            <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                {experiences.map((experience, index) => (
                    <Details key={index} {...experience}/>
                ))}
            </ul>
        </div>
    </>
  )
}

export default Education