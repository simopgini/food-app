import Head from 'next/head'
// import Image from 'next/image'
import { Inter } from '@next/font/google'
// import styles from '@/styles/Home.module.css'
import { ClockIcon, FireIcon } from '@heroicons/react/24/outline'
// import { HomeIcon } from '@heroicons/react/24/outline'
// import { HomeIcon } from '@heroicons/react/24/outline'
import { HomeIcon } from '@heroicons/react/20/solid'
import { ClipboardIcon, MagnifyingGlassIcon, UserIcon } from '@heroicons/react/24/solid'

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
      <main >
        {/* <div className='bg-zinc-600 px-32 w-96'>
          <div>
            sdffgjkjhgfd
            sdfghjfd
          </div>
        </div> */}

        {/* HOME */}
        <div>
          <div className='mt-14 mb-6 pl-4 text-[#082224] text-xl font-bold'>
            Hello 👋
          </div>
          <section className='mb-6'>
            <div className='pl-4'>
              <h1 className='pb-3 text-[#082224] text-lg font-bold'>Getting Inspired</h1>
              <div className='text-white '>
                <div className='bg-[#60B99E] h-32 w-64 rounded-xl'>
                  <div className='px-2 py-2'>
                  <div className='p-4 h-16'>
                  <div className=' bg-slate-200 rounded-xl'></div>
                </div>
                    <h2 className='text-base pb-1 font-semibold'>Penne all'arrabbiata</h2>
                    <div className='flex items-center text-sm'>
                      <ClockIcon className='h-4 w-4 mr-1 text-white' />
                      <span className='font-light text-xs'>30 min</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className='mb-6'>
            <div className='px-4 pb-3 flex justify-between items-center font-bold'>
              <h1 className='text-[#082224] text-lg font-bold'>Category</h1>
              <div className='text-[#60B99E] text-sm'>See all</div>
            </div>
            <div className='pl-4 flex justify-between'>
              <button className='bg-[#60B99E] text-white px-5 py-2 rounded-full text-sm'>Breakfast</button>
              <button className='bg-[#F1F5F5] text-[#082224] px-5 py-2 rounded-full text-sm'>Lunch</button>
              <button className='bg-[#F1F5F5] text-[#082224] px-5 py-2 rounded-full text-sm'>Dinner</button>
              <button className='bg-[#F1F5F5] text-[#082224] px-5 py-2 rounded-full text-sm'>Veg</button>
            </div>
          </section>
          <section>
            <div className='px-4 pb-3 flex justify-between items-center font-bold'>
              <h1 className='text-[#082224] text-lg font-bold'>Popular Recipes</h1>
              <div className='text-[#60B99E] text-sm'>See all</div>
            </div>
            <div className='flex justify-between text-white pl-4'>
              <div className='bg-white h-64 w-44 rounded-xl drop-shadow'>
                <div className='p-4 h-44'>
                  <div className='h-36 bg-[#F1F5F5] rounded-xl'></div>
                </div>
                <div className='px-4 py-2'>
                  <h2 className='text-base pb-1 font-semibold text-[#082224]'>Tacos Muy Buenos</h2>
                  <div className='flex justify-between text-[#8B8E8D]'>
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
              </div>
              <div className='bg-white h-64 w-44 rounded-xl drop-shadow'>
                <div className='p-4 h-44'>
                  <div className='h-36 bg-[#F1F5F5] rounded-xl'></div>
                </div>
                <div className='px-4 py-2'>
                  <h2 className='text-base pb-1 font-semibold text-[#082224]'>Cheeky Curry Super Zozzone</h2>
                  <div className='flex justify-between text-[#8B8E8D]'>
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
              </div>
            </div>
          </section>
          <nav className='mt-10'>
            {/* <div className=''></div> */}
            <hr></hr>
            <div className='pt-6 px-10 flex justify-between items-center text-sm'>
              <HomeIcon className='h-6 w-6 mr-1 text-[#60B99E]' />
              <ClipboardIcon className='h-6 w-6 mr-1 text-[#8B8E8D]' />
              <MagnifyingGlassIcon className='h-6 w-6 mr-1 text-[#8B8E8D]' />
              <UserIcon className='h-6 w-6 mr-1 text-[#8B8E8D]' />
            </div>
          </nav>
        </div>
      </main>
    </>
  )
}
