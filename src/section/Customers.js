import React from 'react'

const Customers = () => {
    return (
        <div>
            <div className='text-center font-medium	 text-white text-base py-6 '>
                <p className='uppercase tracking-widest	'>60+ pixel-perfect projects delivered to hundreds of happy customers</p>
            </div>
            <div className='flex justify-center  mt-6'>
                <div>
                    <img alt='logo' className='px-8 w-11/12' src='Assets/CustomersSection/Stratzy.svg' />
                </div>
                <div>
                    <img alt='logo' className='px-8 w-11/12 relative top-3' src='Assets/CustomersSection/Coupl.svg' />
                </div>
                <div>
                    <img alt='logo' className='px-8 w-11/12 relative top-2' src='Assets/CustomersSection/Mulya.svg' />
                </div>
                <div>
                    <img alt='logo' className='px-8 w-11/12 relative top-4' src='Assets/CustomersSection/Tedx.svg' />
                </div>
            </div>

            <div className='flex justify-center mt-6'>
                <div>
                    <img alt='logo' className='px-8 w-11/12 relative top-3' src='Assets/CustomersSection/Yacht.svg' />
                </div>
                <div>
                    <img alt='logo' className='px-8 w-11/12 ' src='Assets/CustomersSection/Nauvelis.svg' />
                </div>
                <div>
                    <img alt='logo' className='px-8 w-11/12 relative top-2' src='Assets/CustomersSection/BookMiner.svg' />
                </div>
                <div>
                    <img alt='logo' className='px-8 w-11/12 relative bottom-3' src='Assets/CustomersSection/Maui.svg' />
                </div>
            </div>
        </div>
    )
}

export default Customers