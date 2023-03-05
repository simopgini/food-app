import Link from 'next/link'
import React from 'react'
import Head from 'next/head'
import { useState } from 'react'
import VerticalCard from '@/components/VerticalCard'
import { ClockIcon, FireIcon, AdjustmentsHorizontalIcon, TrashIcon, PencilSquareIcon, MinusCircleIcon, PlusCircleIcon } from '@heroicons/react/24/outline'
import { HomeIcon } from '@heroicons/react/20/solid'
import { ClipboardIcon, MagnifyingGlassIcon, UserIcon, ChevronLeftIcon, HeartIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import HorizontalCardHome from '@/components/HorizontalCardHome'
import Modal from '@/components/Modal'

const recipe = ()  => {
    return (
        <>
            {/* PAGINA RICETTA: dopo aver cliccato ricette sulla home o su cerca */}
        {/* <div>
          <div className=''> */}
          {/* bg-cover bg-center  */}
          <div className='immagine bg-no-repeat hover:transition hover:duration-300 hover:object-none hover:object-center contrast-[1.1] saturate-[1.4]'>

                {/* h-96  */}
            <div className='px-4 pt-16 flex justify-between items-center mb-24'>
              <Link href="/" className='bg-gray-mid rounded-lg p-1'><ChevronLeftIcon className='h-6 w-6'/></Link>
              <div className='bg-gray-mid rounded-lg p-1'><HeartIcon className='h-6 w-6 text-green'/></div>
            </div>


            {/* <Image className="bg-" alt="zfv" src="/avocado.jpg" width="130" height="130"/> */}
            {/* <div className="bg-cover bg-center h-96 immagine"></div> */}
            {/* <div className="bg-[url('/avocado.jpg')]"></div>
                
            <div className='pt-28'></div>
            <div className=' rounded-t-3xl'> */}
            
            <div className=' rounded-t-3xl bg-white shadow-sm'>
              <section className='px-4 pb-4 '>
                <div className='pt-8 flex justify-between items-baseline'>
                  <h1 className=' mb-6 text-dark-green text-xl font-bold'>
                    Avocado Toast
                  </h1>
                  <p className='flex text-gray'>
                    <ClockIcon className='h-4 w-4 mr-1' />
                    <span className='font-light text-xs'>10 min</span>
                  </p>
                </div>
                <div className='flex justify-between text-dark-green'>
                  <div className='text-sm font-semibold'>
                    <div className='mb-4 flex items-center'>
                      <div className='bg-gray-mid rounded-lg p-1 mr-2'><Image src="/spaghetti.svg" alt="spaghetti icon" width={20} height={20}/></div>
                      <p>80g carbs</p>
                    </div>
                    <div className='mb-4 flex items-center'>
                      <div className='bg-gray-mid rounded-lg p-1 mr-2'><FireIcon className='h-5 w-5'/></div>
                      <p>275 Kcal</p>
                    </div>
                  </div>
                  <div className='mb-8 text-sm font-semibold'>
                    <div className='mb-4 flex items-center'>
                      <div className='bg-gray-mid rounded-lg p-1 mr-2'><Image src="/taco.svg" alt="spaghetti icon" width={20} height={20}/></div>
                      <p>29g proteins</p>
                    </div>
                    <div className='mb-4 flex items-center'>
                      <div className='bg-gray-mid rounded-lg p-1 mr-2'><Image src="/avocado.svg" alt="spaghetti icon" width={18} height={20}/></div>
                      <p>96g fats</p>
                    </div>
                  </div>
                </div>
                <div className='bg-gray-mid py-1.5 px-1 flex rounded-xl font-medium'>
                  <button className='text-gray-mid bg-dark-green px-10 py-2 rounded-xl'>Ingredients</button>
                  <button className='text-dark-green pl-10'>Instructions</button>
                </div>
              </section>

              {/* INGREDIENTS SECTION */}
              <section className='px-4'>
                <div className='flex justify-between items-baseline'>
                  <h1 className=' mb-6 text-dark-green text-xl font-bold'>
                    Ingredients
                  </h1>
                  <p className='flex text-gray'>
                    <span className='font-light text-xs'>4 items</span>
                  </p>
                </div>
                <div>
                  <div className='bg-gray-lighter text-sm font-medium mb-2 py-2 px-2 flex justify-between items-center rounded-xl text-dark-green'>
                    
                  <div className='rounded-xl flex items-center'>
                      <div className='bg-white rounded-lg p-1 mr-2'>🥑</div>
                      <p>Avocado</p>
                    </div>
                    <p className='pr-2'>2</p>
                  </div>
                  <div className='bg-gray-lighter text-sm font-medium mb-2 py-2 px-2 flex justify-between items-center rounded-xl text-dark-green'>
                    <div className='rounded-xl flex items-center'>
                      <div className='bg-white rounded-lg p-1 mr-2'>🍋</div>
                      <p>Lime</p>
                    </div>
                    <p className='pr-2'>1/2</p>
                  </div>
                  <div className='bg-gray-lighter text-sm font-medium mb-2 py-2 px-2 flex justify-between items-center rounded-xl text-dark-green'>
                    <div className='rounded-xl flex items-center'>
                      <div className='bg-white rounded-lg p-1 mr-2'>🍅</div>
                      <p>Cherry Tomatoes</p>
                    </div>
                    <p className='pr-2'>8</p>
                  </div>
                  <div className='bg-gray-lighter text-sm font-medium mb-2 py-2 px-2 flex justify-between items-center rounded-xl text-dark-green'>
                  <div className='rounded-xl flex items-center'>
                      <div className='bg-white rounded-lg p-1 mr-2'>🌶️</div>
                      <p>Paprika</p>
                    </div>
                    <p className='pr-2'>q.b.</p>
                  </div>
                </div>
              </section>


              {/* INSTRUCTIONS SECTION */}
              <section>
                <div className='px-4 flex justify-between items-baseline'>
                  <h1 className=' mb-6 text-dark-green text-xl font-bold'>
                    Instructions
                  </h1>
                  <p className='flex text-gray'>
                    <span className='font-light text-xs'>4 steps</span>
                  </p>
                </div>

                <div className='mb-4 mx-4 flex items-center text-sm font-medium'>
                      <div className='bg-green text-white rounded-lg h-6 w-6 mr-2 flex items-center justify-center'><span className='px-2'>1</span></div>
                      <p>Mash your avocado separately.</p>
                </div>
                <div className='mb-4 mx-4 flex items-center text-sm font-medium'>
                      <div className='bg-green text-white rounded-lg h-6 w-6 mr-2 flex items-center justify-center'><span className='px-2'>2</span></div>
                      <p>Slice cherry tomatoes and add salt and pepper.</p>
                </div>
                <div className='mb-4 mx-4 flex items-center text-sm font-medium'>
                      <div className='bg-green text-white rounded-lg h-6 w-6 mr-2 flex items-center justify-center'><span className='px-2'>3</span></div>
                      <p>Buy good bread and toast it well. It offers a sturdy base and a crisp contrast against the creamy avocado.</p>
                </div>
                <div className='mb-4 mx-4 flex items-center text-sm font-medium'>
                      <div className='bg-green text-white rounded-lg h-6 w-6 mr-2 flex items-center justify-center'><span className='px-2'>4</span></div>
                      <p>Don’t forget lime and paprika. </p>
                </div>
              </section>
            {/* </div>
            </div> */}
            </div>
          {/* 
        </div> */}
        </div>
        </>
    )
}
export default recipe;