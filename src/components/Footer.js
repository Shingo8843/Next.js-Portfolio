import React from 'react'
import Link from 'next/link'
import Layout from '@/components/Layout'
const Footer = () => {
  return (
    <footer className='w-full border-t-2 boarder-solid border-dark font-medium text-lg dark:text-light dark:border-light sm:text-base'>
        <Layout className='py-8 flex items-center justify-between lg:flext-col lg:py-6'>
            <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
        </Layout>
    </footer>
  )
}

export default Footer