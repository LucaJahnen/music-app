import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

const Error: React.FC = () => {
  return (
    <>
        <Navbar />
        <div className='px-4 pt-10 flex flex-col items-center pb-10 lg:w-[60%] lg:flex lg:m-auto'>
          <h1 className='text-8xl font-semibold lg:text-9xl'>404</h1>
            <h2 className='text-5xl font-semibold mt-4'>Oops!</h2>
            <p className='text-center text-xl pt-4 pb-6 lg:max-w-[30ch]'>The page you are looking for doesn't exist or has been moved</p>
            <Link to="/">
              <Button>Go Home</Button>
            </Link>
        </div>
        <Footer />
    </>
  )
}

export default Error