import { ClockIcon, FireIcon, AdjustmentsHorizontalIcon, TrashIcon, PencilSquareIcon, MinusCircleIcon, PlusCircleIcon } from '@heroicons/react/24/outline'
import { HomeIcon } from '@heroicons/react/20/solid'
import {  ChevronLeftIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import Link from 'next/link'


export default function List() {
    return (
        <>
            <div className="xs:h-screen mb-8">
                <div>
                    <div className='px-4 mb-6 mt-16 flex justify-between items-center'>
                        <Link href="/" className='hover:scale-105 bg-white rounded-lg p-1 shadow-md'><ChevronLeftIcon className='hover:animate-pulse h-6 w-6'/></Link>
                        <div className='flex-1 bg-white'></div>
                        <div className='flex-auto p-1 font-bold text-xl'>LIST</div>
                    </div>
                </div>
            
                <div className='px-4 mb-8'>
                <h2 className='font-bold text-xl text-[#0A2533]'>My ingredients list:</h2>
                </div>


                <section className='px-4'>
                    <div class="grid grid-cols-1 divide-y divide-slate-200">
                        <div className='flex items-center space-x-2 py-3'>
                            <input type="checkbox" className="appearance-none enabled:ring-green checked:ring-green text-green border-[#DEDCDC] checked:bg-gray-mid indeterminate:bg-gray-300 rounded-md h-6 w-6 mr-2" />
                            <p className='text-dark-green text-sm'>Lime</p>
                        </div>
                        <div className='flex items-center space-x-2 py-3'>
                            <input type="checkbox" className="appearance-none enabled:ring-green checked:ring-green text-green border-[#DEDCDC] checked:bg-gray-mid rounded-md h-6 w-6 mr-2" />
                            <p className='text-dark-green text-sm'>Bread</p>
                        </div>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center space-x-2 my-3'>
                                <input type="checkbox" className="appearance-none enabled:ring-green checked:ring-green text-green border-[#DEDCDC] checked:bg-gray-mid rounded-md h-6 w-6 mr-2" />
                                <p className='text-dark-green text-sm'>Coffee</p>
                            </div>
                            <div className='flex text-dark-green space-x-2 text-sm '>
                                <button>
                                <PencilSquareIcon className='hover:scale-110 h-5 w-5 text-green' />
                                </button>
                                <button>
                                <TrashIcon className='hover:scale-110 h-5 w-5 text-red-500' />
                                </button>
                            </div>
                        </div>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center space-x-2 my-3'>
                                <input type="checkbox" className="appearance-none enabled:ring-green checked:ring-green text-green border-[#DEDCDC] checked:bg-gray-mid rounded-md h-6 w-6 mr-2" />
                                <p className='text-dark-green text-sm'>Orange juice</p>
                            </div>
                            <div className='flex text-dark-green space-x-2 text-sm '>
                                <button>
                                    <MinusCircleIcon className='transition duration-300 hover:scale-110 h-5 w-5 text-green'/>
                                </button>
                                <p className=' text-dark-green'>0</p>
                                <button>
                                    <PlusCircleIcon className='transition duration-300 hover:scale-110 h-5 w-5 text-green' />
                                </button>
                                <button>
                                    <TrashIcon className='transition duration-300 hover:scale-110 h-5 w-5 text-red-500' />
                                </button>
                            </div>
                        </div>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center space-x-2 my-3'>
                                <input type="checkbox" className="appearance-none enabled:ring-green checked:ring-green text-green border-[#DEDCDC] checked:bg-gray-mid rounded-md h-6 w-6 mr-2" />
                                <p className='text-dark-green text-sm'>Paprika</p>
                            </div>
                            <div className='flex text-dark-green space-x-2 text-sm '>
                                <button>
                                    <MinusCircleIcon className=' transition duration-300 hover:scale-110 h-5 w-5 text-green'/>
                                </button>
                                <p className=' text-dark-green'>1</p>
                                <button>
                                    <PlusCircleIcon className='transition duration-300 hover:scale-110 solid h-5 w-5 text-white fill-green' />
                                </button>
                                <button>
                                    <TrashIcon className='transition duration-300 hover:scale-110 h-5 w-5 text-red-500' />
                                </button>
                            
                            </div>
                        </div>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center space-x-2 my-3'>
                                <input type="checkbox" className="appearance-none enabled:ring-green checked:ring-green text-green border-[#DEDCDC] checked:bg-gray-mid rounded-md h-6 w-6 mr-2" />
                                <p className='text-gray text-sm line-through'>Avocado</p>
                            </div>
                            <div className='flex text-dark-green space-x-2 text-sm '>
                            <p className=' text-gray'>4</p>
                            <p className=' text-dark-green'>🥑</p>
                            </div>
                        </div>

                        <div className='flex items-center justify-between'>
                            <div className='flex items-center space-x-2 my-3'>
                            <input type="checkbox" className="appearance-none enabled:ring-green checked:ring-green text-green border-[#DEDCDC] checked:bg-gray-mid rounded-md h-6 w-6 mr-2" />
                            <p className='text-gray text-sm line-through'>Tomatoes</p>
                            </div>
                            <div className='flex text-dark-green space-x-2 text-sm '>
                            <p className=' text-gray'>1</p>
                            <p className=' text-dark-green'>🍅</p>
                            </div>
                        </div>

                    </div>
                </section>


                <div className='mt-36 px-4 flex items-center'>
                <label className="flex-1  block">
                    <span className="sr-only">Search</span>
                    <input style={{borderWidth: 0}}
                    className="flex-1 placeholder:text-sm placeholder:text-gray block  bg-gray-light w-full  rounded-lg py-2 pr-3 shadow-md focus:outline-none 
                    focus:border-green focus:ring-green focus:ring-1 sm:text-sm" 
                    placeholder="Type the first ingredient" type="text" name="search"/>
                </label>
                <button className="drop-shadow-lg drop-shadow-white hover:shadow-[#A4D3C5] hover:bg-[#55a78e] duration-500 hover:scale-105 ml-3 px-4 py-2 bg-green text-sm text-white rounded-lg">
                    Add
                </button>
                </div>
            </div>
        </>
    )
}