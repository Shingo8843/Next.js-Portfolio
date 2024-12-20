import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import Image from 'next/image'
import { GithubIcon } from '@/components/Icons'
import SKGO_Learning_Website from '../../public/images/articles/WhatishigherordercomponentinReact.jpg'
import Multimodal_Medical_RAG from '../../public/images/articles/WhatishigherordercomponentinReact.jpg'
import Automated_Scenario_Creation from '../../public/images/articles/WhatishigherordercomponentinReact.jpg'
import Employee_Skill_Enhancement from '../../public/images/articles/WhatishigherordercomponentinReact.jpg'
import Text_to_SQL_System from '../../public/images/articles/WhatishigherordercomponentinReact.jpg'
import Language_Cushion from '../../public/images/articles/WhatishigherordercomponentinReact.jpg'
import Wine_Ecommerce_Engagement from '../../public/images/articles/WhatishigherordercomponentinReact.jpg'
import Stock_Trading_Website from '../../public/images/articles/WhatishigherordercomponentinReact.jpg'
import Multi_Robots_Exploration from '../../public/images/articles/WhatishigherordercomponentinReact.jpg'
import Automated_Email_System from '../../public/images/articles/WhatishigherordercomponentinReact.jpg'
import Denwacho from '../../public/images/articles/WhatishigherordercomponentinReact.jpg'
import Applicant_Job_Matching from '../../public/images/articles/WhatishigherordercomponentinReact.jpg'
const featuredProjects = [
    {
      type: "Featured Project",
      title: "SKGO Japanese Learning Website Development and Management",
      summary: "Developed web-based learning resources to support Japanese language students, focusing on motivation. Completed the project in two months with a child-friendly UI/UX design and achieved 80% reenrollment, with 300 users in the first month.",
      img: SKGO_Learning_Website,
      link: "/",
      github: "/"
    },
    {
      type: "Project",
      title: "Multimodal Medical Document RAG Project",
      summary: "Developed a system to analyze and extract reliable information from text, images, and tables in medical documents. Utilized LLMs, OCR, LangChain, and NLP to enhance decision-making accuracy with applications in various industries.",
      img: Multimodal_Medical_RAG,
      link: "/",
      github: "/"
    },
    {
      type: "Project",
      title: "Automated Scenario Creation Project",
      summary: "Developed an AI-based system to generate stories in conversational format using character/background settings. Enhanced story diversity and quality through machine learning algorithms and effective prompt engineering.",
      img: Automated_Scenario_Creation,
      link: "/",
      github: "/"
    },
    {
      type: "Featured Project",
      title: "Employee Skill Enhancement Through Data Science",
      summary: "Collected and analyzed data to evaluate employees' numerical skills and their impact on job performance. Focused on developing accurate and role-specific problem sets for comprehensive employee training.",
      img: Employee_Skill_Enhancement,
      link: "/",
      github: "/"
    },
    {
      type: "Project",
      title: "Text-to-SQL System",
      summary: "Developed a system to convert natural language into SQL queries to automate and optimize data retrieval processes. Addressed BigQuery limitations by adding schema information to prompts and utilized LangChain.",
      img: Text_to_SQL_System,
      link: "/",
      github: "/"
    },
    {
      type: "Project",
      title: "Language Cushion Project",
      summary: "Developed a system to convert aggressive language in customer complaints to neutral terms using LLMs like GPT-4. Proposed features include message filtering for abusive language and auto-reply for standard responses.",
      img: Language_Cushion,
      link: "/",
      github: "/"
    },
    {
      type: "Featured Project",
      title: "Wine Specialty E-commerce Site User Engagement Enhancement Project",
      summary: "Conducted interviews at physical stores and analyzed user behavior to identify key entry points. Designed a sommelier chatbot using language models to guide wine beginners and proposed optimized chatbot placement.",
      img: Wine_Ecommerce_Engagement,
      link: "/",
      github: "/"
    },
    {
      type: "Project",
      title: "Web Technology Project: Development of a Stock Trading Website",
      summary: "Developed a stock trading website using four web technologies, featuring stock search and trading history. Created a simple homepage, a feature-rich site, and a mobile app with diverse technologies.",
      img: Stock_Trading_Website,
      link: "/",
      github: "/"
    },
    {
      type: "Project",
      title: "Coordinated Multi-Robots for Planetary Exploration: Software Integration Lead",
      summary: "Led a cross-disciplinary team to develop a low-cost Mars exploration robot. Developed robust navigation software in an agile environment and raised $14,000 for AI-based object recognition and sensor integration.",
      img: Multi_Robots_Exploration,
      link: "/",
      github: "/"
    },
    {
      type: "Featured Project",
      title: "Automated Email System for Recruiters",
      summary: "Automated email tasks to allow recruiters to focus on interviews and candidate research. Utilized Python with Azure/Outlook API to integrate daily dispatch and save 4 hours per week.",
      img: Automated_Email_System,
      link: "/",
      github: "/"
    },
    {
      type: "Project",
      title: "Denwacho: Project Manager",
      summary: "Led the development of a platform for cataloging and searching Japanese businesses in U.S. cities. Collaborated with stakeholders and set milestones using Upwork and Trello.",
      img: Denwacho,
      link: "/",
      github: "/"
    },
    {
      type: "Project",
      title: "Applicant and Job Matching: Team Lead",
      summary: "Developed an application to enhance staffing efficiency and streamline candidate-job matching. Implemented web scraping and optimized UI, achieving 60% user adoption growth.",
      img: Applicant_Job_Matching,
      link: "/",
      github: "/"
    }
  ];
  
const FeaturedProject = ({type, title, summary, img, link, github}) => {
    return (
        <article className='w-full flex items-center justify-between rounded-3xl border-solid border-dark bg-light shadow-2xl p-12 border relative rounded-br-2xl dark:bg-dark dark:border-light '>
            <div className="absolute top-0 -right-4 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light" />

            <Link href={link} target='_blank' className='w-1/2 cursor-pointer overflow-hidden rounded-lg'>
                <Image src={img} alt={title} className='w-full h-auto ' priority sizes="
                  (max-width: 768px) 100vw,
                  (max-width: 1200px) 50vw,
                  50vw
                 "/>
            </Link>
            <div className='w-1/2 flex flex-col items-start justify-between pl-6'>
                <span className='text-primary font-medium text-xl dark:text-primaryDark'>{type}</span>
                <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-4xl font-bold text-dark dark:text-light'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark dark:text-light/75'>{summary}</p>
                <div className='mt-2 flex items-center'>
                    <Link href={github} target='_blank' className='w-10'>
                        <GithubIcon />
                    </Link>
                    <Link href={link} target='_blank' className='ml-4 rounded-lg bg-dark text-light p-2 text-lg font-semibold dark:bg-light dark:text-dark'>
                        Visit Project
                    </Link>
                </div>
            </div>
        </article>
    )
}
const Project = ({type, title, summary, img, link, github}) => {
    return (
        <article  className='w-full flex flex-col items-center justify-center rounded-2xl border-solid border-dark border bg-light p-6 relative dark:bg-dark dark:border-light'>
            <div className="absolute top-0 -right-4 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light" />
            <Link href={link} target='_blank' className='w-full cursor-pointer overflow-hidden rounded-lg'>
                <Image src={img} alt={title} className='w-full h-auto '/>
            </Link>
            <div className='w-full flex flex-col items-start justify-between mt-4'>
                <span className='text-primary font-medium text-xl dark:text-primaryDark'>{type}</span>
                <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-3xl font-bold'>{title}</h2>
                </Link>
                {/* <p className='my-2 font-medium text-dark'>{summary}</p> */}
                <div className='mt-2 flex items-center justify-between w-full'>
                    <Link href={link} target='_blank' className='rounded-lg text-lg font-semibold underline'>
                        Visit
                    </Link>
                    <Link href={github} target='_blank' className='w-8'>
                        <GithubIcon />{" "}
                    </Link>
                </div>
            </div>
        </article>
    )
}
const projects = () => {
  return (
    <>
        <Head>
            <title>Shingo Morita | Projects Page</title>
            <meta name="description" content="Shingo Morita Projects About Page" /> 
            {/* SEO */}
        </Head>
        <main className='w-full mb-16 flex flex-col items-center justify-center text-dark dark:text-light'>
            <Layout className='pt-16'>
                <AnimatedText text="My Work in Action" className='mb-16'/>
                <div className='grid grid-cols-12 gap-24 gap-y-32'>
                    {featuredProjects.map((project, index) => {
                        if (project.type === "Featured Project") {
                            return (
                                <span key={index} className='col-span-12'>
                                    <FeaturedProject key={index} {...project} />
                                </span>
                            )
                                
                        } else {
                            return <span key={index} className='col-span-6'>
                                <Project key={index} {...project} />
                            </span>
                        }
                    }
                    )}
                </div>
            </Layout>
        </main>
    </>
  )
}

export default projects