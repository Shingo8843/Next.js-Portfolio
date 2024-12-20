import React from 'react'
import AIEngineer from './Icons'
import Link from 'next/link'

const HireMe = () => {
  return (
    <div className='fixed left-4 bottom-4 flex items-center justify-center overflow-hidden'>
        <div className='w-48 h-auto flex items-center justify-center relative'>
        {/* on dark theme, make AI Engineer transparent */}
            <AIEngineer className="fill-dark animate-spin-slow dark:fill-light" />
            <Link href="mailto:shingo.sdsu@gmail.com" target={'_blank'} className='absolute items-center justify-center flex left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border border-dark w-20 h-20 rounded-full font-semi-bold hover:bg-light hover:text-dark dark:fill-light dark:font-bold
            dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light dark:border-light
            '>HireMe</Link>
        </div>
    </div>
  )
}

export default HireMe