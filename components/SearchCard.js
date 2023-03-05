
import { ClockIcon, FireIcon, AdjustmentsHorizontalIcon, TrashIcon, PencilSquareIcon, MinusCircleIcon, PlusCircleIcon } from '@heroicons/react/24/outline'
import { HomeIcon } from '@heroicons/react/20/solid'
import { ClipboardIcon, MagnifyingGlassIcon, UserIcon, ChevronLeftIcon, HeartIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import Link from 'next/link'

const SearchCard = ({searchRecipe}) => {

return (
    <div className='px-4 mb-6'>
        <div className='py-12 flex items-center bg-white h-20 md:h-28 xl:h-44 rounded-xl drop-shadow hover:scale-105 duration-500 cursor-pointer'>
            <div className='ml-2 my-1 mr-2 '>
              <div className='h-20 w-20 md:h-24 xl:h-40 md:w-24 xl:w-40 rounded-xl'>
                <img 
                        className="contrast-[1.1] saturate-[1.4] object-cover shadow-md hover:shadow-xl h-20 md:h-24 xl:h-40 rounded-lg"
                        src={searchRecipe.image} 
                        alt={searchRecipe.title} 
                        // fill=true
                        />
              </div>
            </div>
            <div>
              <div className='pt-8'>
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
                  <div className='mb-8 flex'>
                    <div className='bg-green text-white px-2 rounded-full text-xs mr-1'>Easy</div>
                    <div className='bg-orange text-white px-2 rounded-full text-xs'>Quick</div>
                  </div>
              </div>
            </div>
        </div>
    </div>
    )
}

export default SearchCard;

