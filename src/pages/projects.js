import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
const projects = () => {
  return (
    <>
        <Head>
            <title>Shingo Morita | Projects Page</title>
            <meta name="description" content="Shingo Morita Projects About Page" /> 
            {/* SEO */}
        </Head>
        <main className='w-full mb-16 flex flex-col items-center justify-center'>
            <Layout className='pt-16'>
                <AnimatedText text="My Work in Action"/>
                <div className='grid grid-cols-12 gap-24 '>
                    <div className='col-span-12'>
                        Featured Project
                    </div>
                    <div className='col-span-12'>
                        project-1
                    </div>
                </div>
            </Layout>
        </main>
    </>
  )
}

export default projects