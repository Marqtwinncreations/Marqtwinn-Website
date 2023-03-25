import React from 'react'
import Accordian from '../components/Accordian'

const OurApproach = () => {
    return (
        <div className='pt-16'>
            <div>
                <p className='font-semibold text-base text-center text-white'>
                    Our Approach
                </p>
                <h1 className='pt-6 font-bold text-5xl text-center text-white'>
                    There is a <span className='text-theme-blue '> better, more efficient way</span><br />  to get good design done
                </h1>
            </div>

            <div className='flex justify-center pt-6'>
                <div className='relative top-7'>
                    <img alt='w-8/12 ' src='Assets/ApproachSection/ApproachImg.svg' />
                </div>
                <div className='w-4/12 self-center'>
                    <Accordian />
                </div>
            </div>
        </div>
    )
}

export default OurApproach