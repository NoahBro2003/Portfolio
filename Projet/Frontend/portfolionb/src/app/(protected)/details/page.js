import React from 'react'
import '../../rules.css'

function Details() {
  return (
    <div className="content">
<section class="py-20 relative">
    <h1 class="font-manrope font-medium text-4xl mb-10 max-md:text-center">Portfolio - Projects</h1>
        <div class="w-full max-w-2xl lg:max-w-7xl px-6 lg:px-8 mx-auto">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div class="flex items-center flex-col gap-8 w-full group">
                    <div class="block">
                        <img class="rounded-3xl object-cover" src="https://pagedone.io/asset/uploads/1707480017.png" alt="Project Achievements of Sketch"/>
                    </div>
                    <div class="flex items-center justify-between max-w-[406px] lg:max-w-full w-full lg:px-0">
                        <div class="block">
                            <h4 class="text-2xl font-manrope font-semibold text-gray-900 mb-1">Sketch</h4>
                            <p class="font-medium text-lg text-gray-400">Content Design,
                                Marketing</p>
                        </div>
                        <button
                            class=" border border-black py-2 px-3.5 rounded-full transition-all duration-300 group-hover:bg-black">
                            <svg class="stroke-black transition-all duration-300 group-hover:stroke-white"
                                xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16"
                                fill="none">
                                <path
                                    d="M9.62553 4L13.6664 8.0409M13.6664 8.0409L9.62553 12.0818M13.6664 8.0409L1.6665 8.0409"
                                    stroke="" strokeWidth="1.6" strokeLinecap="round" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="group flex items-center flex-col gap-8 w-full">
                    <div class="block">
                        <img class="rounded-3xl object-cover" src="https://pagedone.io/asset/uploads/1707480034.png" alt="Project Achievements of Figma"/>
                    </div>
                    <div class="flex items-center justify-between max-w-[406px] lg:max-w-full w-full lg:px-0">
                        <div class="block">
                            <h4 class="text-2xl font-manrope font-semibold text-gray-900 mb-1">Figma</h4>
                            <p class="font-medium text-lg text-gray-400">User Interface Design
                            </p>
                        </div>
                        <button
                            class=" border border-black py-2 px-3.5 rounded-full transition-all duration-300 group-hover:bg-black">
                            <svg class="stroke-black transition-all duration-300 group-hover:stroke-white"
                                xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16"
                                fill="none">
                                <path
                                    d="M9.62553 4L13.6664 8.0409M13.6664 8.0409L9.62553 12.0818M13.6664 8.0409L1.6665 8.0409"
                                    stroke="" strokeWidth="1.6" strokeLinecap="round" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div
                    class="group flex items-center flex-col gap-8 w-full md:w-1/2 mx-auto md:col-span-2 lg:col-span-1 lg:w-full">
                    <div class="block">
                        <img class="rounded-3xl object-cover" src="https://pagedone.io/asset/uploads/1707480044.png" alt="Project Achievements of Frame.io"/>
                    </div>
                    <div class="flex items-center justify-between max-w-[406px] lg:max-w-full w-full lg:px-0">
                        <div class="block">
                            <h4 class="text-2xl font-manrope font-semibold text-gray-900 mb-1">Frame.io</h4>
                            <p class="font-medium text-lg text-gray-400">User Interface Design
                            </p>
                        </div>
                        <button
                            class=" border border-black py-2 px-3.5 rounded-full transition-all duration-300 group-hover:bg-black">
                            <svg class="stroke-black transition-all duration-300 group-hover:stroke-white"
                                xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16"
                                fill="none">
                                <path
                                    d="M9.62553 4L13.6664 8.0409M13.6664 8.0409L9.62553 12.0818M13.6664 8.0409L1.6665 8.0409"
                                    stroke="" strokeWidth="1.6" strokeLinecap="round" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>

    </section>
    </div>
  )
}

export default Details