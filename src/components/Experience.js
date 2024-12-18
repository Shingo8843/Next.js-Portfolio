import {React, use, useRef} from 'react'
import {useScroll, motion} from 'framer-motion'
import LiIcon from './LiIcon';
const Details = ( {
    position, company, companyLink, time, address, work,
}) => {
    const ref = useRef(null)
    return (
        <li ref = {ref}className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
            <LiIcon reference={ref}/>
            <motion.div initial={{y:50}} whileInView={{y:0}} transition={{duration: 0.5, type: "spring"}} >
                <h3 className='capitalize text-2xl font-bold'>
                    {position}&nbsp;<a href={companyLink} target='_blank' rel='noreferrer noopener' className='text-blue-500 capitalize'>@{company}</a>
                </h3>
                <span className='capitalize font-meduim text-dark/75'>
                    {time} | {address}
                </span>
                <p className='font-medium w-full '>
                    {work}
                </p>
            </motion.div>
        </li>
    )
}
const experiences = [
    {
        position: 'AI Engineer',
        company: 'Reazon Holdings, Inc.',
        companyLink: 'https://www.reazonholdings.com/',
        time: '2024 March - Present',
        address: 'Remote',
        work: 'Developed AI solutions across advertising, gaming, and healthcare industries. Led projects such as a multimodal medical document RAG system and the Language Cushion Project using LLMs. Conducted experiments on Text-to-SQL systems to optimize data processes, integrating BigQuery on Vertex AI.',
    },
    {
        position: 'Project Manager',
        company: 'teamLab Inc.',
        companyLink: 'https://www.teamlab.art/',
        time: 'May 2024',
        address: 'Tokyo, Japan',
        work: 'Enhanced e-commerce engagement for a wine specialty store by designing an AI sommelier chatbot. Conducted user behavior analysis to optimize chatbot placement, increasing engagement and improving user experience.',
    },
    {
        position: 'Project Manager/Software Engineer',
        company: 'aiT Works Inc.',
        companyLink: 'https://aitworks.com/',
        time: '2022 Jan. - 2023 Aug.',
        address: 'Los Angeles, CA',
        work: "Streamlined staffing operations through automated candidate-position matching. Designed a web scraping system; integrated sales and recruiters' feedback to refine UI/UX, reducing manual input. Enhanced user interaction by 60% post UI and manual improvements.",
    },
    {
        position: 'Developer and Manager',
        company: 'SKGO Japanese Learning Website',
        companyLink: 'https://skgojapanese.com/',
        time: '2022 Jan. - Present',
        address: 'Gardena, CA',
        work: 'Developed and managed web-based resources to support Japanese language learning. Created child-friendly UI/UX to boost engagement and retention, achieving 80% reenrollment and 300+ users in the first month. Addressed learning challenges during the pandemic through innovative online tools.',
    }
];

const Experience = () => { 
    const ref = useRef(null)
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset:["start end", "start start"],
        }
    )

  return (
    <>
        <div className='my-64'>
            <h2 className='font-bold text-8xl mt-64 w-full text-center'>
                Experience
            </h2>
        </div>
        <div className='w-[75%] mx-auto relative' ref={ref}>
            <motion.div className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top' style={{scaleY: scrollYProgress}}/>
            <ul className='w-full flex flex-col items-start justify-between ml-4'>
                {experiences.map((experience, index) => (
                    <Details key={index} {...experience}/>
                ))}
            </ul>
        </div>
    </>
  )
}

export default Experience