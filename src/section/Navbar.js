import React from 'react'

const Navbar = () => {
    return (
        <div>
            <header class="text-theme-white-1 pt-6 mx-10">
                <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a href='!#' class="flex">
                        <img alt='navLOGO' src='/Assets/logoNav.svg' />
                    </a>
                    <nav class="md:ml-auto flex flex-wrap items-center  justify-center font-semibold text-sm">
                        <a href='!#' class="mr-7 ">Our Work</a>
                        <a href='!#' class="mr-7">Why Us</a>
                        <a href='!#' class="mr-7">Blog</a>
                        <a href='!#' class="mr-7">Pricing</a>
                    </nav>
                    <button className='bg-theme-orange px-6 py-3 rounded-xl text-sm font-semibold mr-3'>
                        Book a Demo
                    </button>
                    <button className=' border-2 border-theme-white-1 px-6 py-3 rounded-xl text-sm font-semibold'>
                        Sign In
                    </button>
                </div>
            </header>
        </div>
    )
}

export default Navbar