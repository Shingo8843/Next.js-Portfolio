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
      <main className="flex items-center min-h-screen w-full text-dark">
          <Layout className='pt-0'>
            <div className="flex justify-between items-center w-full">
              <div className='w-1/2'>
                <Image src={profilePic} alt="Shingo Morita" className="w-full h-auto" />
              </div>
              <div className='w-1/2'>
                <AnimatedText text ="Turning Vision Into Reality With Code And Design. " className="!text-6xl" />                
                <p className='text-base font-medium my-4'>I am a software engineer with a passion for AI and machine learning. I have experience in developing web applications and machine learning models. I am always looking for new challenges and opportunities to learn and grow.</p>
                <div className='flex items-center self-start mt-2'>
                  <Link href="/dummy.pdf" target={'_blank'} download={true} className='flex items-center bg-dark text-light px-6 py-2 rounded-md text-lg font-semibold hover:bg-light hover:text-dark border-solid border-transparent hover:border-dark border-2'>
                    Resume
                    <LinkArrow className='w-6 ml-1'/>
                  </Link>
                  <Link href="mailto:shingo.portfolio@gmail.com" target={'_blank'} className='ml-4 text-lg font-medium capitalize text-dark underline'>                    Contact
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
