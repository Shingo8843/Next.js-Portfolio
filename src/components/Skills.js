import React from 'react'
import { motion } from 'framer-motion'
const Skill = ({name, x, y}) => {
    return (
        <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute dark:bg-light dark:text-dark' 
        whileHover={{ scale: 1.1 }} initial = {{x: 0, y: 0}} whileInView={{x: x, y: y, transition:{duration: 1.5}}} >
            {name}
        </motion.div>
    )
}
const skills = [
    // Programming
    'Python', 'JavaScript', 
    // 'HTML', 'CSS', 'C++', 
    // FrameWork
    'Node.js', 'MongoDB', 'MySQL', 'React',
    // , 'Next.js', 'Express', 'Flask',
    // Machine Learning
    'Pytorch', 'NLP', 
    // 'Chatbot', 'Computer Vision', 'TensorFlow',
    // Cloud
    'GCP', 'AWS', 
    // Tools
    'Linux',
    // 'Git', 'Docker',  'Jupyter', 'VSCode', 
]
const coordinates = [
    
    ["-20vw", "2vw"], ["-5vw", "-10vw"], ["20vw", "6vw"], ["0vw", "12vw"], ["-20vw", "-15vw"], ["15vw", "-12vw"], ["32vw", "-5vw"], ["-32vw", "5vw"],["0vw", "-20vw"], ["-25vw", "18vw"], ["18vw", "18vw"]
]
const Skills = () => {
  return (
    <>
        <h2 className='font-bold text-8xl mt-64 w-full text-center'>
            Skills
        </h2>
        <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark'>
            <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer dark:bg-light dark:text-dark' whileHover={{ scale: 1.1 }}>
                AI / Web
            </motion.div>
            {/* Skills */}
            {skills.map((skill, index) => (
                <Skill key={index} name={skill} x={coordinates[index][0]} y={coordinates[index][1]}/>
            ))}
        </div>
    </>
  )
}

export default Skills