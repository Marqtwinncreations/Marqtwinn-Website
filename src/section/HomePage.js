import React from 'react'

const HomePage = () => {
    return (
        <div className='min-h-screen  bg-heroBg bg-no-repeat bg-cover bg-top'>
            <div className=' text-theme-white-1 h-full mx-10 px-8 py-5'>
                <div className='font-bold text-5xl pt-24 '>
                    <h1 className=''>
                        Crafting Products for the Next
                    </h1>
                    <h1 className='pt-2'>
                        Generation of User Experience
                    </h1>
                </div>
                <div className='font-light	text-lg pt-4'>
                    <p>Our team of experts combines research, strategy, and design to deliver<br /> innovative solutions that meet the unique needs of your business.</p>
                </div>
                <div className='pt-4'>
                    <input type="text" id="workEmail" class="bg-gray-50 border font-semibold border-gray-300 text-gray-900 text-sm rounded-lg  inline-block  p-2.5" placeholder="Your Work Email" required />
                    <button className='ml-1 bg-theme-orange px-8 py-3 rounded-xl text-sm font-semibold mr-3 inline-block'>
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    )
}

export default HomePage