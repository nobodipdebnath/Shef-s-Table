import React from 'react'

export const Hero = () => {
  return (
    <div className="bg-[url('./assets/hero.png')] h-[80vh] bg-cover bg-center bg-no-repeat mx-[10%] rounded-2xl">
        <h1 className='text-center text-white md:text-4xl text-2xl lg:text-[52px] font-bold pt-36'>Discover an exceptional cooking <br /> class tailored for you!</h1>
        <p className='text-center text-lg mt-6 mx-5 lg:mx-0 text-white'>Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding <br /> problems to become an exceptionally well world-class Programmer.</p>
        <div className='flex flex-col md:flex-row justify-center items-center gap-6 mt-10'>
            <button className='py-4 px-10 bg-[#0BE58A] text-[#150B2B] rounded-[38px] font-semibold cursor-pointer'>Explore Now</button>
            <button className='py-4 px-10 bg-[#0BE58A] text-[#150B2B] rounded-[38px] font-semibold cursor-pointer'>Our Feedback</button>
        </div>
    </div>
  )
}
