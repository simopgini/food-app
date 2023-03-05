import { ClockIcon, FireIcon, AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline'
import { HomeIcon } from '@heroicons/react/20/solid'
import { MagnifyingGlassIcon, ChevronLeftIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import SearchCard from '@/components/SearchCard'


export default function Search() {
    return (
        <>
        <div className="xs:h-screen mb-8">
            <div>
                <div className='px-4 mb-6 mt-16 flex justify-between items-center'>
                    <Link href="/" className=' bg-white rounded-lg p-1 shadow-md'><ChevronLeftIcon className='h-6 w-6'/></Link>
                    <div className='flex-1 bg-white'></div>
                    <div className='flex-auto uppercase p-1 font-bold text-xl'>Search</div>
                </div>
            </div>

        <div className='px-4 flex items-center mb-6'>
          <label className="flex-1 relative block uppercase">
            <div className="sr-only">SEARCH</div>
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


        <section className='mb-6'>
              <div className="container flex-grow w-full mx-auto">
                  <div className="pl-4">
                    <div className=" my-4">
                      
                      <div id="scrollContainer"
                        className="flex flex-no-wrap overflow-x-scroll scrolling-touch items-start" >
                        <div className="flex-none mb-2 mr-2 md:pb-4 rounded-lg">
                            <button className='relative btn-tag bg-green hover:bg-green text-white px-5 rounded-full text-sm'>
                              <span className='mr-2'>Italian</span> 
                              <span className='inset-y-0 absolute py-4 border-l-2 border-white'></span>
                              <span className='ml-2'>🍕</span>
                            </button>
                        </div>

                        <div className="flex-none mb-2 mr-2 md:pb-4 rounded-lg">
                            <button className='relative btn-tag bg-gray-light disabled:bg-gray-light hover:text-white active:text-white text-dark-green active:bg-green hover:bg-green px-5 rounded-full text-sm'>
                              <span className='mr-2'>Spanish</span> 
                              <span className='inset-y-0 absolute py-4 border-l-2 border-white'></span>
                              <span className='ml-2'>🥘</span>
                            </button>
                        </div>

                        <div className="flex-none mb-2 mr-2 md:pb-4 rounded-lg">
                            <button className='relative btn-tag bg-gray-light disabled:bg-gray-light hover:text-white active:text-white text-dark-green active:bg-green hover:bg-green px-5 rounded-full text-sm'>
                              <span className='mr-2'>Japanese</span> 
                              <span className='inset-y-0 absolute py-4 border-l-2 border-white'></span>
                              <span className='ml-2'>🍱</span>
                            </button>
                        </div>

                        <div className="flex-none mb-2 mr-2 md:pb-4 rounded-lg">
                            <button className='relative btn-tag bg-gray-light disabled:bg-gray-light hover:text-white active:text-white text-dark-green active:bg-green hover:bg-green px-5 rounded-full text-sm'>
                              <span className='mr-2'>India</span> 
                              <span className='inset-y-0 absolute py-4 border-l-2 border-white'></span>
                              <span className='ml-2'>🍛</span>
                            </button>
                        </div>

                        <div className="flex-none mb-2 mr-2 md:pb-4 rounded-lg">
                            <button className='relative btn-tag bg-gray-light disabled:bg-gray-light hover:text-white active:text-white text-dark-green active:bg-green hover:bg-green px-5 rounded-full text-sm'>
                              <span className='mr-2'>Mexican</span> 
                              <span className='inset-y-0 absolute py-4 border-l-2 border-white'></span>
                              <span className='ml-2'>🌮</span>
                            </button>
                        </div>

                        <div className="flex-none mb-2 mr-2 md:pb-4 rounded-lg">
                            <button className='relative btn-tag bg-gray-light disabled:bg-gray-light hover:text-white active:text-white text-dark-green active:bg-green hover:bg-green px-5 rounded-full text-sm'>
                              <span className='mr-2'>Middle Eastern</span> 
                              <span className='inset-y-0 absolute py-4 border-l-2 border-white'></span>
                              <span className='ml-2'>🧆</span>
                            </button>
                        </div>

                        <div className="flex-none mb-2 mr-2 md:pb-4 rounded-lg">
                            <button className='relative btn-tag bg-gray-light disabled:bg-gray-light hover:text-white active:text-white text-dark-green active:bg-green hover:bg-green px-5 rounded-full text-sm'>
                              <span className='mr-2'>Chinese</span> 
                              <span className='inset-y-0 absolute py-4 border-l-2 border-white'></span>
                              <span className='ml-2'>🥟</span>
                            </button>
                        </div>

                        <div className="flex-none mb-2 mr-2 md:pb-4 rounded-lg">
                            <button className='relative btn-tag bg-gray-light disabled:bg-gray-light hover:text-white active:text-white text-dark-green active:bg-green hover:bg-green px-5 rounded-full text-sm'>
                              <span className='mr-2'>Greek</span> 
                              <span className='inset-y-0 absolute py-4 border-l-2 border-white'></span>
                              <span className='ml-2'>🥙</span>
                            </button>
                        </div>

                        <div className="flex-none mb-2 mr-2 md:pb-4 rounded-lg">
                            <button className='relative btn-tag bg-gray-light disabled:bg-gray-light hover:text-white active:text-white text-dark-green active:bg-green hover:bg-green px-5 rounded-full text-sm'>
                              <span className='mr-2'>French</span> 
                              <span className='inset-y-0 absolute py-4 border-l-2 border-white'></span>
                              <span className='ml-2'>🥐</span>
                            </button>
                        </div>

                        <div className="flex-none mb-2 mr-2 md:pb-4 rounded-lg">
                            <button className='relative btn-tag bg-gray-light disabled:bg-gray-light hover:text-white active:text-white text-dark-green active:bg-green hover:bg-green px-5 rounded-full text-sm'>
                              <span className='mr-2'>American</span> 
                              <span className='inset-y-0 absolute py-4 border-l-2 border-white'></span>
                              <span className='ml-2'>🍔</span>
                            </button>
                        </div>

                        <div className="flex-none mb-2 mr-2 md:pb-4 rounded-lg">
                            <button className='relative btn-tag bg-gray-light disabled:bg-gray-light hover:text-white active:text-white text-dark-green active:bg-green hover:bg-green px-5 rounded-full text-sm'>
                              <span className='mr-2'>German</span> 
                              <span className='inset-y-0 absolute py-4 border-l-2 border-white'></span>
                              <span className='ml-2'>🥨</span>
                            </button>
                        </div>

                        <div className="flex-none mb-2 mr-2 md:pb-4 rounded-lg">
                            <button className='relative btn-tag bg-gray-light disabled:bg-gray-light hover:text-white active:text-white text-dark-green active:bg-green hover:bg-green px-5 rounded-full text-sm'>
                              <span className='mr-2'>British</span> 
                              <span className='inset-y-0 absolute py-4 border-l-2 border-white'></span>
                              <span className='ml-2'>🫖</span>
                            </button>
                        </div>

                        {/* <button class="flex-none mr-2 md:pb-4 px-5 py-2 rounded-full text-sm hover:duration-300 hover:bg-green active:bg-green bg-gray-light disabled:bg-gray-light flex divide-x-2 divide-white hover:text-white active:text-white text-dark-green ...">
                          <div className='pr-2'>Greek</div>
                          <div className='pl-2'>🥙</div>
                        </button> */}
                        
                      </div>
                    </div>
                    
                  </div>
                </div>
            </section>


        {/* <div className='pl-4 mb-8 flex justify-between'>
              <button className='bg-green text-white px-4 py-2 rounded-full text-sm'>Smoothie | 🍹</button>
              <button className='bg-gray-light text-dark-green px-4 py-2 rounded-full text-sm'>Snack | 🍿</button>
              <button className='bg-gray-light text-dark-green px-4 py-2 rounded-full text-sm'>Salad | 🥗</button>
        </div> */}

              {/* {recipes.results.map((recipe) => {
                return (
                  <VerticalCard key={recipe.id} recipe={recipe} className=" "/>
                    )
                  })
              } */}


        <SearchCard />

        <div className='px-4 mb-6'>
          <div className='py-12 flex items-center bg-white h-20 rounded-xl drop-shadow hover:scale-105 duration-500 cursor-pointer'>
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
          <div className='py-12 flex items-center bg-white h-20 rounded-xl drop-shadow hover:scale-105 duration-500 cursor-pointer'>
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
          <div className='py-12 flex items-center bg-white h-20 rounded-xl drop-shadow hover:scale-105 duration-500 cursor-pointer'>
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