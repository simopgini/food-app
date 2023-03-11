
import { ClockIcon, FireIcon, AdjustmentsHorizontalIcon, TrashIcon, PencilSquareIcon, MinusCircleIcon, PlusCircleIcon } from '@heroicons/react/24/outline'
import { HomeIcon } from '@heroicons/react/20/solid'
import { ClipboardIcon, MagnifyingGlassIcon, UserIcon, ChevronLeftIcon, HeartIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import Link from 'next/link'


const VerticalCard = ({recipe}) => {

return (
    <>
        <Link href="/recipe"  
            className='bg-white rounded-xl drop-shadow hover:scale-105 duration-500 cursor-pointer'>
            <div className='pt-4 py-2 md:pt-0 md:py-2 flex justify-center '>
                <div className='mx-2 relative h-28 w-36 md:w-44'>
                    <Image 
                        className=' hover:transition hover:duration-300 rounded-xl	 contrast-[1.1] saturate-[1.4]'
                        priority
                        src={recipe.image} 
                        alt={recipe.title} 
                        fill
                        // style={{objectFit:"contain"}}
                    />
                </div>
            </div>
            <div className='px-4 py-2'>
                <h2 className='text-sm pb-1 font-semibold text-dark-green truncate mb-1'>{recipe.title}</h2>
                <div className='flex justify-between text-gray pb-6'>
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
        </Link>

        

        

        
</>
    )
}

export default VerticalCard;