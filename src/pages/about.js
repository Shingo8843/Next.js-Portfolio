import React, { use, useEffect, useRef } from 'react'
import Head from 'next/head'
import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Image from 'next/image'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import profilePic from '../../public/images/profile/ShingoBlackBG.png'
import { useInView, useMotionValue, useSpring } from 'framer-motion'

const AnimatedNumber = ({value}) => {
    const ref = useRef(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {duration: 3000});
    const isInView = useInView(ref);
    useEffect(() => {
        if(isInView){
            motionValue.set(value);
        }
    }, [isInView, motionValue, value]);
    useEffect(() => {
        springValue.on("change", (latestValue) => {
            if (ref.current && latestValue.toFixed(0) <= value) {
                ref.current.textContent = latestValue.toFixed(0);
            }
        })}, [springValue, value]);
    
    return (
        <span ref={ref}>
            {value}
        </span>

    )
}
const about = () => {
  return (
    <>
        <Head>
            <title>Shingo Morita | About Page</title>
            <meta name="description" content="Shingo Morita Portfolio About Page" /> 
            {/* SEO */}
        </Head>
        <main className='flex w-full flex-col items-center justify-center'>
            <Layout className='pt-16'>
                <AnimatedText text="Crafting Intelligent Solutions with AI"/>
                   <div className='grid wfull grid-cols-8 gap-16'>
                        <div className='col-span-3 flex flex-col items-start justify-start'>
                            <h2 className='mb-4 text-lg font-bold uppercase text-dark/75'>Biography</h2>
                            <p className='font-medium'>
                                I am Shingo Morita, a passionate AI Engineer and Computer Science Master&apos; student at the University of Southern California, 
                                specializing in deep learning and machine learning applications. 
                                With hands-on experience in cutting-edge technologies like PyTorch, TensorFlow, and NLP frameworks, 
                                I have led impactful projects across industries, including AI-driven solutions in healthcare, language moderation, and educational tools.
                            </p>
                            <p className='my-4 font-medium'>
                                My professional journey spans roles at Reazon Holdings, teamLab Inc., and aiT Works, 
                                where I developed multimodal systems, optimized user engagement with AI chatbots, and enhanced automation for efficiency. 
                                Notably, I served as the Software Integration Lead for a NASA-funded project, creating robust navigation software for low-cost Mars exploration robots.
                            </p>
                            <p className='font-medium'>
                                I thrive at the intersection of technology and business, driven by the challenge of solving complex problems with innovative solutions. 
                                My portfolio reflects a diverse set of achievements, from streamlining medical document analysis to building user-friendly platforms 
                                that address real-world challenges. Explore my work and let&apos; connect to shape the future with AI.
                            </p>
                        </div>
                        <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8">
                            <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-2xl bg-dark"></div>
                            <Image 
                                src={profilePic} 
                                alt="Shingo Morita" 
                                className="w-full h-auto rounded-2xl" 
                            />
                        </div>
                        <div className='col-span-2 flex flex-col items-end justify-between'>
                            <div className='flex flex-col items-end justify-center'>
                                <span className='inline-block text-7xl font-bold'>
                                    <AnimatedNumber value = {10}/>+
                                </span>
                                <h2 className='text-xl font-medium capitalize text-dark/75'>
                                    Projects Completed
                                </h2>
                            </div>

                            <div className='flex flex-col items-end justify-center'>
                                <span className='inline-block text-7xl font-bold'>
                                    <AnimatedNumber value = {5}/>+
                                </span>
                                <h2 className='text-xl font-medium capitalize text-dark/75'>
                                    Years of Experience in Python
                                </h2>
                            </div>

                            <div className='flex flex-col items-end justify-center'>
                                <span className='inline-block text-7xl font-bold'>
                                    <AnimatedNumber value = {3}/>+
                                </span>
                                <h2 className='text-xl font-medium capitalize text-dark/75'>
                                    Years of Experience in JavaScript
                                </h2>
                            </div>
                        </div>
                    </div>
                    <Skills />
                    <Experience />
                    <Education />
                    <div className="mt-64"></div> {/* Add white space below Education */}
            </Layout>
        </main>
    </>
  )
}

export default about