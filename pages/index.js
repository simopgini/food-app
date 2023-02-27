import Head from 'next/head'
// import Image from 'next/image'
import { Inter } from '@next/font/google'
// import styles from '@/styles/Home.module.css'
import { ClockIcon, FireIcon, AdjustmentsHorizontalIcon, TrashIcon, PencilSquareIcon, MinusCircleIcon, PlusCircleIcon } from '@heroicons/react/24/outline'
// import { HomeIcon } from '@heroicons/react/24/outline'
// import { HomeIcon } from '@heroicons/react/24/outline'
import { HomeIcon } from '@heroicons/react/20/solid'
import { ClipboardIcon, MagnifyingGlassIcon, UserIcon, ChevronLeftIcon, HeartIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Avocado Tribe App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* HOME SECTION */}
      <div>
          <div className="xs:h-screen mb-8">
            <div className='mt-14 mb-6 pl-4 text-dark-green text-xl font-bold'>
              Hello 👋
            </div>
            <section className='mb-6'>
              <div className='pl-4'>
                <h1 className='pb-3 text-dark-green text-lg font-bold'>Getting Inspired</h1>
                
                <div className='flex space-x-2'>
                  <a className='hover:scale-105 duration-500 cursor-pointer text-white'>
                    <div className='bg-green h-32 w-64 rounded-xl'>
                      <div className='px-2 py-2'>
                        <div className='p-4 h-16'>
                          <div className=' bg-slate-200 rounded-xl'></div>
                        </div>
                        <h2 className="text-base pb-1 font-semibold">Penne all arrabbiata</h2>
                        <div className='flex items-center text-sm'>
                          <ClockIcon className='h-4 w-4 mr-1 text-white' />
                          <span className='font-light text-xs'>30 min</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </section>
            <section className='mb-6'>
              <div className='px-4 pb-3 flex justify-between items-center font-bold'>
                <h1 className='text-dark-green text-lg font-bold'>Category</h1>
                <div className='text-green text-xs'>See all</div>
              </div>
              <div className='pl-4 flex justify-between'>
                <button className='btn-tag bg-green hover:bg-green text-white px-5 py-2 rounded-full text-sm'>Breakfast</button>
                <button disabled className='btn-tag bg-gray-light hover:bg-green active:bg-green  hover:text-white text-dark-green px-5 py-2 rounded-full text-sm'>Lunch</button>
                <button disabled className='btn-tag bg-gray-light hover:bg-green active:bg-green hover:text-white text-dark-green px-5 py-2 rounded-full text-sm'>Dinner</button>
                <button disabled className='btn-tag bg-gray-light hover:bg-green active:bg-green hover:text-white text-dark-green px-5 py-2 rounded-full text-sm'>Veg</button>
              </div>
            </section>
            <section>
              <div className='px-4 pb-3 flex justify-between items-center font-bold'>
                <h1 className='text-dark-green text-lg font-bold'>Popular Recipes</h1>
                <div className='text-green text-xs'>See all</div>
              </div>
              <div className='flex justify-between text-white pl-4'>
                <a className='bg-white h-64 w-44 rounded-xl drop-shadow hover:scale-105 duration-500 cursor-pointer'>
                  <div className='p-4 h-44'>
                    <div className='h-36 bg-gray-light rounded-xl'></div>
                  </div>
                  <div className='px-4 py-2'>
                    <h2 className='text-sm pb-1 font-semibold text-dark-green'>Tacos Muy Buenos</h2>
                    <div className='flex justify-between text-gray'>
                      <div className='flex items-center text-sm'>
                        <FireIcon className='h-4 w-4 mr-1' />
                        <span className='font-light text-xs'>200 Kcal</span>
                      </div>
                      <div className='flex items-center text-sm'>
                        <ClockIcon className='h-4 w-4 mr-1' />
                        <span className='font-light text-xs'>30 min</span>
                      </div>
                    </div>
                  </div>
                </a>
                <a className='bg-white h-64 w-44 rounded-xl drop-shadow hover:scale-105 duration-500 cursor-pointer'>
                  <div className='p-4 h-44'>
                    <div className='h-36 bg-gray-light rounded-xl'></div>
                  </div>
                  <div className='px-4 py-2'>
                    <h2 className='text-sm pb-1 font-semibold text-dark-green truncate'>Cheeky Curry Super Zozzone</h2>
                    <div className='flex justify-between text-gray'>
                      <div className='flex items-center text-sm'>
                        <FireIcon className='h-4 w-4 mr-1' />
                        <span className='font-light text-xs'>800 Kcal</span>
                      </div>
                      <div className='flex items-center text-sm'>
                        <ClockIcon className='h-4 w-4 mr-1' />
                        <span className='font-light text-xs'>120 min</span>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </section>
          </div>


          <nav className='sticky bottom-0 bg-white'>
            <hr className='text-gray-line'></hr>
            <div className='py-6 pb-8 px-10 flex justify-between items-center text-sm'>
              <HomeIcon className='h-6 w-6 mr-1 text-green' />
              <ClipboardIcon className='h-6 w-6 mr-1 text-gray' />
              <MagnifyingGlassIcon className='h-6 w-6 mr-1 text-gray' />
              <UserIcon className='h-6 w-6 mr-1 text-gray' />
            </div>
          </nav>
        
        </div>




        {/* PAGINA RICETTA: dopo aver cliccato ricette sulla home o su cerca */}
        {/* <div>
          <div className=''> */}
            {/* <div className='px-4 mt-16 flex justify-between items-center'>
              <div className='bg-gray-mid rounded-lg p-1'><ChevronLeftIcon className='h-6 w-6'/></div>
              <div className='bg-gray-mid rounded-lg p-1'><HeartIcon className='h-6 w-6 text-green'/></div>
            </div> */}
            {/* <Image src="/avocado.jpg" width="130" height="130"/> */}
            {/* <div class="bg-cover bg-center" style={{backgroundImage: url('/avocado.jpg')}}></div> */}
            {/* <div class="bg-[url('/avocado.jpg')]"></div>

            <div className='pt-28'></div>
            <div className=' rounded-t-3xl'> */}
              {/* <section className='px-4 pb-4 '>
                <div className='flex justify-between items-baseline'>
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
              </section> */}

              {/* INGREDIENTS SECTION */}
              {/* <section className='px-4'>
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
              </section> */}


              {/* INSTRUCTIONS SECTION */}
              {/* <section>
                <div className='px-4 flex justify-between items-baseline'>
                  <h1 className=' mb-6 text-dark-green text-xl font-bold'>
                    Instructions
                  </h1>
                  <p className='flex text-gray'>
                    <span className='font-light text-xs'>4 steps</span>
                  </p>
                </div>

                <div className='mb-4 mx-4 flex items-center text-sm font-medium'>
                      <div className='bg-green text-white rounded-lg h-6 w-6 mr-2 flex items-center justify-center'><span>1</span></div>
                      <p>Mash your avocado separately.</p>
                </div>
                <div className='mb-4 mx-4 flex items-center text-sm font-medium'>
                      <div className='bg-green text-white rounded-lg h-6 w-6 mr-2 flex items-center justify-center'><span>2</span></div>
                      <p>Slice cherry tomatoes and add salt and pepper.</p>
                </div>
                <div className='mb-4 mx-4 flex items-center text-sm font-medium'>
                      <div className='bg-green text-white rounded-lg h-6 w-6 mr-2 flex items-center justify-center'><span>3</span></div>
                      <p>Buy good bread and toast it well. It offers a sturdy base and a crisp contrast against the creamy avocado.</p>
                </div>
                <div className='mb-4 mx-4 flex items-center text-sm font-medium'>
                      <div className='bg-green text-white rounded-lg h-6 w-6 mr-2 flex items-center justify-center'><span>4</span></div>
                      <p>Don’t forget lime and paprika. </p>
                </div>
              </section> */}
            {/* </div>
          </div> */}
          {/* <div className='pt-8'>
            <hr className='text-gray-line'></hr>
            <div className='pt-6 px-10 flex justify-between items-center text-sm'>
              <HomeIcon className='h-6 w-6 mr-1 text-green' />
              <ClipboardIcon className='h-6 w-6 mr-1 text-gray' />
              <MagnifyingGlassIcon className='h-6 w-6 mr-1 text-gray' />
              <UserIcon className='h-6 w-6 mr-1 text-gray' />
            </div>
          </div>
        </div> */}

        {/* 2: SEARCH NAV BAR SECTION */}
        {/* <div>
          <div className='px-4 mb-6 mt-16 flex justify-between items-center'>
              <button className=' bg-white rounded-lg p-1 shadow-md'><ChevronLeftIcon className='h-6 w-6'/></button>
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
        </div> */}

          {/* <div className='pt-8'>
            <hr className='text-gray-line'></hr>
            <div className='pt-6 px-10 flex justify-between items-center text-sm'>
              <HomeIcon className='h-6 w-6 mr-1 text-green' />
              <ClipboardIcon className='h-6 w-6 mr-1 text-gray' />
              <MagnifyingGlassIcon className='h-6 w-6 mr-1 text-gray' />
              <UserIcon className='h-6 w-6 mr-1 text-gray' />
            </div>
          </div> */}


          {/* LIST PAGE */}
          {/* <div className=''>
            <div>
              <div className='px-4 mb-6 mt-16 flex justify-between items-center'>
                  <button className='hover:scale-105 bg-white rounded-lg p-1 shadow-md'><ChevronLeftIcon className='hover:animate-pulse h-6 w-6'/></button>
                  <div className='flex-1 bg-white'></div>
                  <div className='flex-auto p-1 font-bold text-xl'>LIST</div>
              </div>
            </div>
          
            <div className='px-4 mb-8'>
              <h2 className='font-bold text-xl text-[#0A2533]'>My ingredients list:</h2>
            </div>

            <section className='px-4'>
              <div className='flex items-center space-x-2 my-3'>
                <input type="checkbox" class="appearance-none enabled:ring-green checked:ring-green text-green border-[#DEDCDC] checked:bg-gray-mid indeterminate:bg-gray-300 rounded-md h-6 w-6 mr-2" />
                <p className='text-dark-green text-sm'>Lime</p>
              </div>
              <hr></hr>
              <div className='flex items-center space-x-2 my-3'>
                <input type="checkbox" class="appearance-none enabled:ring-green checked:ring-green text-green border-[#DEDCDC] checked:bg-gray-mid rounded-md h-6 w-6 mr-2" />
                <p className='text-dark-green text-sm'>Bread</p>
              </div>
              <hr></hr>
              <div className='flex items-center justify-between'>
                <div className='flex items-center space-x-2 my-3'>
                  <input type="checkbox" class="appearance-none enabled:ring-green checked:ring-green text-green border-[#DEDCDC] checked:bg-gray-mid rounded-md h-6 w-6 mr-2" />
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
              <hr></hr>
              <div className='flex items-center justify-between'>
                <div className='flex items-center space-x-2 my-3'>
                  <input type="checkbox" class="appearance-none enabled:ring-green checked:ring-green text-green border-[#DEDCDC] checked:bg-gray-mid rounded-md h-6 w-6 mr-2" />
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
              <hr></hr>
              <div className='flex items-center justify-between'>
                <div className='flex items-center space-x-2 my-3'>
                  <input type="checkbox" class="appearance-none enabled:ring-green checked:ring-green text-green border-[#DEDCDC] checked:bg-gray-mid rounded-md h-6 w-6 mr-2" />
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
              <hr></hr>
              <div className='flex items-center justify-between'>
                <div className='flex items-center space-x-2 my-3'>
                  <input type="checkbox" class="appearance-none enabled:ring-green checked:ring-green text-green border-[#DEDCDC] checked:bg-gray-mid rounded-md h-6 w-6 mr-2" />
                  <p className='text-gray text-sm line-through'>Avocado</p>
                </div>
                <div className='flex text-dark-green space-x-2 text-sm '>
                  <p className=' text-gray'>4</p>
                  <p className=' text-dark-green'>🥑</p>
                </div>
              </div>
              <hr></hr>
              <div className='flex items-center justify-between'>
                <div className='flex items-center space-x-2 my-3'>
                  <input type="checkbox" class="appearance-none enabled:ring-green checked:ring-green text-green border-[#DEDCDC] checked:bg-gray-mid rounded-md h-6 w-6 mr-2" />
                  <p className='text-gray text-sm line-through'>Tomatoes</p>
                </div>
                <div className='flex text-dark-green space-x-2 text-sm '>
                  <p className=' text-gray'>1</p>
                  <p className=' text-dark-green'>🍅</p>
                </div>
              </div>
            </section>

            <div className='mt-36 px-4 flex items-center'>
              <label class="flex-1  block">
                <span class="sr-only">Search</span>
                <input style={{borderWidth: 0}}
                  class="flex-1 placeholder:text-sm placeholder:text-gray block  bg-gray-lighter w-full  rounded-lg py-2 pr-3 shadow-md focus:outline-none 
                  focus:border-green focus:ring-green focus:ring-1 sm:text-sm" 
                  placeholder="Type the first ingredient" type="text" name="search"/>
              </label>
              <button class="drop-shadow-lg drop-shadow-white hover:shadow-[#A4D3C5] hover:bg-[#55a78e] duration-500 hover:scale-105 ml-3 px-4 py-2 bg-green text-sm text-white rounded-lg">
                Add
              </button>
            </div>



            <div className='pt-8'>
              <hr className='text-gray-line'></hr>
              <div className='pt-6 px-10 flex justify-between items-center text-sm'>
                <HomeIcon className='h-6 w-6 mr-1 text-gray' />
                <ClipboardIcon className='h-6 w-6 mr-1  text-green' />
                <MagnifyingGlassIcon className='h-6 w-6 mr-1 text-gray' />
                <UserIcon className='h-6 w-6 mr-1 text-gray' />
              </div>
            </div>
          </div> */}
          
      {/* </main> */}
    </>
  )
}
