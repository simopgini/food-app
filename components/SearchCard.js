
import { ClockIcon, FireIcon, AdjustmentsHorizontalIcon, TrashIcon, PencilSquareIcon, MinusCircleIcon, PlusCircleIcon } from '@heroicons/react/24/outline'
import { HomeIcon } from '@heroicons/react/20/solid'
import { ClipboardIcon, MagnifyingGlassIcon, UserIcon, ChevronLeftIcon, HeartIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import Link from 'next/link'

const SearchCard = ({searchRecipe}) => {

return (
    <div className='px-4 mb-6'>
        <Link href="/recipe" className='flex items-center bg-white  rounded-xl drop-shadow hover:scale-105 md:hover:scale-100 md:hover:shadow-md duration-500 cursor-pointer'>
            <div className='py-2 flex justify-center '>
              <div className='mx-2 relative  h-20 w-20 md:h-24 md:w-24'>
                  <Image 
                        className="hover:transition hover:duration-300 rounded-xl	 contrast-[1.1] saturate-[1.4] object-cover shadow-md hover:shadow-xl "
                        src={searchRecipe.image} 
                        alt={searchRecipe.title}  
                        priority
                        fill
                        // style={{objectFit:"contain"}}
                  />
              </div>
            </div>
            <div>
              <div className='pt-2'>
                <h2 className='text-base pb-1 font-semibold text-dark-green'>{searchRecipe.title}</h2>
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
                  <div className='mb-2 flex'>
                    <div className='bg-green text-white px-2 rounded-full text-xs mr-1'>Easy</div>
                    <div className='bg-orange text-white px-2 rounded-full text-xs'>Quick</div>
                  </div>
              </div>
            </div>
        </Link>
    </div>
    )
}

export default SearchCard;