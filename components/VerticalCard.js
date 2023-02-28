
import { ClockIcon, FireIcon, AdjustmentsHorizontalIcon, TrashIcon, PencilSquareIcon, MinusCircleIcon, PlusCircleIcon } from '@heroicons/react/24/outline'
import { HomeIcon } from '@heroicons/react/20/solid'
import { ClipboardIcon, MagnifyingGlassIcon, UserIcon, ChevronLeftIcon, HeartIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'

const VerticalCard = ({recipe}) => {

return (
    <div className='flex text-white pl-4'>
        <a className='bg-white h-64 w-44 rounded-xl drop-shadow hover:scale-105 duration-500 cursor-pointer'>
            <div className='p-4 h-44'>
                    {/* <div src={recipe.image} className='h-36 bg-gray-light rounded-xl'>{recipe.image}</div> */}
                    {/* <Image 
                        src={recipe.image} 
                        alt={recipe.title}
                        width={80}
                        height={60} 
                        className='rounded-xl contrast-125 saturate-150'
                    /> */}
            </div>
            <div className='px-4 py-2'>
                <h2 className='text-sm pb-1 font-semibold text-dark-green truncate'>{recipe.title}</h2>
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
    </div>
    )
}

export default VerticalCard;