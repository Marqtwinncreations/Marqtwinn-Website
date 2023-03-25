import React from 'react'
import * as te from 'tw-elements';

const Accordian = () => {
    return (
        <div>

            <div id="accordionFlushExample">
                <div
                    class="rounded-none border border-t-0 border-l-0 border-r-0 border-theme-blue-border bg-theme-gray">
                    <h2 class="mb-0" id="flush-headingOne">
                        <button
                            class="group relative flex w-full items-center rounded-none border-0 bg-white font-bold py-4 px-5 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-theme-black dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
                            type="button"
                            data-te-collapse-init
                            data-te-target="#flush-collapseOne"
                            aria-expanded="false"
                            aria-controls="flush-collapseOne">
                            Dedicated team model
                            <span
                                class=" ml-auto -mr-1 h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="h-5 w-5">
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </span>
                        </button>
                    </h2>
                    <div
                        id="flush-collapseOne"
                        class="!visible border-0"
                        data-te-collapse-item
                        data-te-collapse-show
                        aria-labelledby="flush-headingOne"
                        data-te-parent="#accordionFlushExample">
                        <div class="py-4 px-5 text-white text-sm">
                            By choosing to MarqTwinn, you get access to a <br /> dedicated creative team, including a project manager, <br />design director, and a modular team of creatives to meet<br /> the unique needs of your projects. No more chasing<br /> deadlines or designers with our fully-managed service.
                        </div>
                    </div>
                </div>


{/* --------------------------------- */}

                <div
                    class="rounded-none border border-l-0 border-r-0 border-t-0 border-theme-blue-border bg-theme-gray">
                    <h2 class="mb-0" id="flush-headingTwo">
                        <button
                            class="group relative flex w-full items-center rounded-none border-0 font-bold bg-white py-4 px-5 text-left text-base  transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-theme-black dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
                            type="button"
                            data-te-collapse-init
                            data-te-collapse-collapsed
                            data-te-target="#flush-collapseTwo"
                            aria-expanded="false"
                            aria-controls="flush-collapseTwo">
                            Top quality creative, consistently
                            <span
                                class="ml-auto -mr-1 h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="h-5 w-5">
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </span>
                        </button>
                    </h2>
                    <div
                        id="flush-collapseTwo"
                        class="!visible hidden border-0"
                        data-te-collapse-item
                        aria-labelledby="flush-headingTwo"
                        data-te-parent="#accordionFlushExample">
                        <div class="py-4 px-5 text-white text-sm">
                            Placeholder content for this accordion, which is intended to
                            demonstrate the
                            <code>.accordion-flush</code> class. This is the second item's
                            accordion body. Let's imagine this being filled with some actual
                            content.
                        </div>
                    </div>
                </div>

{/* ------------------------ */}

                <div
                    class="rounded-none border border-l-0 border-r-0 border-b-0 border-t-0 border-theme-blue-border bg-theme-gray">
                    <h2 class="mb-0" id="flush-headingThree">
                        <button
                            class="group relative flex w-full items-center rounded-none border-0 font-bold  py-4 px-5 text-left text-base  transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
                            type="button"
                            data-te-collapse-init
                            data-te-collapse-collapsed
                            data-te-target="#flush-collapseThree"
                            aria-expanded="false"
                            aria-controls="flush-collapseThree">
                            Built for speed and efficiency
                            <span
                                class="ml-auto -mr-1 h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="h-5 w-5">
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </span>
                        </button>
                    </h2>
                    <div
                        id="flush-collapseThree"
                        class="!visible hidden"
                        data-te-collapse-item
                        aria-labelledby="flush-headingThree"
                        data-te-parent="#accordionFlushExample">
                        <div class="py-4 px-5 text-white text-sm">
                            Placeholder content for this accordion, which is intended to
                            demonstrate the
                            <code>.accordion-flush</code> class. This is the third item's
                           
                        </div>
                    </div>
                </div>

{/* --------------------- */}

                <div
                    class="rounded-lg border border-l-0 border-r-0 border-b-0 border-t-0 border-theme-blue-border bg-theme-gray">
                    <h2 class="mb-0" id="flush-headingFour">
                        <button
                            class="group relative flex w-full items-center rounded-none border-0 font-bold bg-white py-4 px-5 text-left text-base  transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
                            type="button"
                            data-te-collapse-init
                            data-te-collapse-collapsed
                            data-te-target="#flush-collapseFour"
                            aria-expanded="false"
                            aria-controls="flush-collapseFour">
                            Transparent and predictable pricing
                            <span
                                class="ml-auto -mr-1 h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="h-5 w-5">
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </span>
                        </button>
                    </h2>
                    <div
                        id="flush-collapseFour"
                        class="!visible hidden"
                        data-te-collapse-item
                        aria-labelledby="flush-headingFour"
                        data-te-parent="#accordionFlushExample">
                        <div class="py-4 px-5 text-white text-sm">
                            Placeholder content for this accordion, which is intended to
                            demonstrate the
                            <code>.accordion-flush</code> class. This is the third item's
                            accordion body. Nothing more exciting happening here in terms of
                        </div>
                    </div>
                </div>

{/* ---------------------------- */}

                <div
                    class="rounded-none border border-l-0 border-r-0 border-b-0 border-t-0 border-theme-blue-border bg-theme-gray">
                    <h2 class="mb-0" id="flush-headingFive">
                        <button
                            class="group relative flex w-full items-center rounded-none border-0 bg-theme-gray py-4 px-5 text-left font-bold text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
                            type="button"
                            data-te-collapse-init
                            data-te-collapse-collapsed
                            data-te-target="#flush-collapseFive"
                            aria-expanded="false"
                            aria-controls="flush-collapseFive">
                            Frictionless, delightful tech
                            <span
                                class="ml-auto -mr-1 h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="h-5 w-5">
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </span>
                        </button>
                    </h2>
                    <div
                        id="flush-collapseFive"
                        class="!visible hidden"
                        data-te-collapse-item
                        aria-labelledby="flush-headingFive"
                        data-te-parent="#accordionFlushExample">
                        <div class="py-4 px-5 text-white text-sm">
                            Placeholder content for this accordion, which is intended to
                            demonstrate the
                            <code>.accordion-flush</code> class. This is the third item's
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Accordian