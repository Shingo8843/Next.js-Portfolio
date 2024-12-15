import Head from 'next/head'
import Layout from '@/components/Layout'
import Image from 'next/image'
import profilePic from '../../public/images/profile/developer-pic-1.png'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
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
                <div>
                  <Link href="/dummy.pdf" >
                    Resume
                  </Link>
                  <Link href="mailto:shingo.portfolio@gmail.com" >
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </Layout>
      </main>
    </>
  )
}
