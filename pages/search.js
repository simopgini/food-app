import { ClockIcon, FireIcon, AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline'
import { HomeIcon } from '@heroicons/react/20/solid'
import { MagnifyingGlassIcon, ChevronLeftIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'


export default function Search() {
    return (
        <>
        <div className="xs:h-screen mb-8">
            <div>
                <div className='px-4 mb-6 mt-16 flex justify-between items-center'>
                    <Link href="/" className=' bg-white rounded-lg p-1 shadow-md'><ChevronLeftIcon className='h-6 w-6'/></Link>
                    <div className='flex-1 bg-white'></div>
                    <div className='flex-auto p-1 font-bold text-xl'>Search</div>
                </div>
            </div>

        <div className='px-4 flex items-center mb-4'>
          <label className="flex-1 relative block">
            <span className="sr-only">Search</span>
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <MagnifyingGlassIcon className='h-4 w-4 mr-1 text-gray' />
            </span>
            <input style={{borderWidth: 0}}
              className="flex-1 placeholder:text-sm placeholder:text-gray block  bg-gray-lighter w-full  rounded-md py-2 pl-9 pr-3 shadow-md focus:outline-none 
              focus:border-green focus:ring-green focus:ring-1 sm:text-sm" 
              placeholder="Search by food name" type="text" name="search"/>
          </label>
          <button className="ml-2">
            <AdjustmentsHorizontalIcon className='h-8 w-8 mr-1 text-gray' />
          </button>
        </div>

        <div className='pl-4 mb-8 flex justify-between'>
              <button className='bg-green text-white px-4 py-2 rounded-full text-sm'>Smoothie | 🍹</button>
              <button className='bg-gray-light text-dark-green px-4 py-2 rounded-full text-sm'>Snack | 🍿</button>
              <button className='bg-gray-light text-dark-green px-4 py-2 rounded-full text-sm'>Salad | 🥗</button>
        </div>

        <div className='px-4 mb-6'>
          <div className='py-12 flex items-center bg-white h-20 rounded-xl drop-shadow'>
            <div className='ml-2 my-1 mr-2 '>
              <div className='h-20 w-20 bg-gray-light rounded-xl'></div>
            </div>
            <div>
              <div className='pt-8'>
                <h2 className='text-base pb-1 font-semibold text-dark-green'>Strawberry Delight</h2>
                  <div className='flex justify-between text-gray pb-2'>
                    <div className='flex items-center text-sm'>
                      <ClockIcon className='h-4 w-4 mr-1' />
                      <span className='font-light text-xs'>5 Min</span>
                    </div>
                    <div className='flex items-center text-xs'>
                    <FireIcon className='h-4 w-4 mr-1' />
                      <span className='font-light text-xs'>176 Kcal</span>
                    </div>
                  </div>
                  <div className='mb-8 flex'>
                    <div className='bg-green text-white px-2 rounded-full text-xs mr-1'>Easy</div>
                    <div className='bg-orange text-white px-2 rounded-full text-xs'>Quick</div>
                  </div>
              </div>
            </div>
          </div>
        </div>

        <div className='px-4 mb-6'>
          <div className='py-12 flex items-center bg-white h-20 rounded-xl drop-shadow'>
            <div className='ml-2 my-1 mr-2 '>
              <div className='h-20 w-20 bg-gray-light rounded-xl'></div>
            </div>
            <div>
              <div className='pt-8'>
                <h2 className='text-base pb-1 font-semibold text-dark-green'>Strawberry Cheescake</h2>
                  <div className='flex justify-between text-gray pb-2'>
                    <div className='flex items-center text-sm'>
                      <ClockIcon className='h-4 w-4 mr-1' />
                      <span className='font-light text-xs'>90 Min</span>
                    </div>
                    <div className='flex items-center text-xs'>
                    <FireIcon className='h-4 w-4 mr-1' />
                      <span className='font-light text-xs'>275 Kcal</span>
                    </div>
                  </div>
                  <div className='mb-8 flex'>
                    <div className='bg-orange text-white px-2 rounded-full text-xs'>Medium</div>
                  </div>
              </div>
            </div>
          </div>
        </div>

        <div className='px-4 mb-6'>
          <div className='py-12 flex items-center bg-white h-20 rounded-xl drop-shadow'>
            <div className='ml-2 my-1 mr-2 '>
              <div className='h-20 w-20 bg-gray-light rounded-xl'></div>
            </div>
            <div>
              <div className='pt-8'>
                <h2 className='text-base pb-1 font-semibold text-dark-green'>Smoothieliscious</h2>
                  <div className='flex justify-between text-gray pb-2'>
                    <div className='flex items-center text-sm'>
                      <ClockIcon className='h-4 w-4 mr-1' />
                      <span className='font-light text-xs'>5 Min</span>
                    </div>
                    <div className='flex items-center text-xs'>
                    <FireIcon className='h-4 w-4 mr-1' />
                      <span className='font-light text-xs'>105 Kcal</span>
                    </div>
                  </div>
                  <div className='mb-8 flex'>
                    <div className='bg-green text-white px-2 rounded-full text-xs mr-1'>Easy</div>
                  </div>
              </div>
            </div>
          </div>
        </div>

        <div className='px-4'>
          <div className='py-12 flex items-center bg-white h-20 rounded-xl drop-shadow'>
            <div className='ml-2 my-1 mr-2 '>
              <div className='h-20 w-20 bg-gray-light rounded-xl'></div>
            </div>
            <div>
              <div className='pt-8'>
                <h2 className='text-base pb-1 font-semibold text-dark-green'>Rainbow Salad</h2>
                  <div className='flex justify-between text-gray pb-2'>
                    <div className='flex items-center text-sm'>
                      <ClockIcon className='h-4 w-4 mr-1' />
                      <span className='font-light text-xs'>5 Min</span>
                    </div>
                    <div className='flex items-center text-xs'>
                    <FireIcon className='h-4 w-4 mr-1' />
                      <span className='font-light text-xs'>105 Kcal</span>
                    </div>
                  </div>
                  <div className='mb-8 flex'>
                    <div className='bg-green text-white px-2 rounded-full text-xs mr-1'>Easy</div>
                  </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        </>
    )
}