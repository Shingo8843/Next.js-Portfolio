import Head from 'next/head'
import Layout from '@/components/Layout'
import Image from 'next/image'
import profilePic from '../../public/images/profile/77cLjat5D8uWhZR3LlMGi-transformed.png'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import { LinkArrow } from '@/components/Icons'
import HireMe from '@/components/HireMe'
import lightBulb from '../../public/images/svgs/miscellaneous_icons_1.svg'
export default function Home() {
  return (
    <>
      <Head>
        <title>Shingo Morita Portfolio</title>
        <meta name="description" content="Shingo Morita Portfolio" />
      </Head>
      <main className="flex items-center min-h-screen w-full text-dark dark:text-light">
          <Layout className='pt-0 md:pt-16 sm:pt-8'>
            <div className="flex justify-between items-center w-full lg:flex-col">
              <div className='w-1/2 md:w-full'>
                <Image src={profilePic} alt="Shingo Morita" className="w-full h-auto lg:hidden md:inline-block md:w-full " priority sizes="
                (max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                50vw
                 "/>
              </div>
              <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'>
                <AnimatedText text ="Turning Vision Into Reality With Code And Design. " className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl" />                
                <p className='text-base font-medium my-4 md:text-sm sm:text-xs'>I am a software engineer with a passion for AI and machine learning. I have experience in developing web applications and machine learning models. I am always looking for new challenges and opportunities to learn and grow.</p>
                <div className='flex items-center self-start mt-2 lg:self-center'>
                  <Link href="/dummy.pdf" target={'_blank'} download={true} className='flex items-center bg-dark text-light px-6 py-2 rounded-md text-lg font-semibold hover:bg-light hover:text-dark border-solid border-transparent hover:border-dark border-2
                  dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light dark:border-dark md:p-2 md:px-4 md:text-base'>            
                    Resume
                    <LinkArrow className='w-6 ml-1'/>
                  </Link>
                  <Link href="mailto:shingo.portfolio@gmail.com" target={'_blank'} className='ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base'>                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </Layout>
          <HireMe />
      </main>
    </>
  )
}
