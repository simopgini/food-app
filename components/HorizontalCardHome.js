
import { ClockIcon, FireIcon, AdjustmentsHorizontalIcon, TrashIcon, PencilSquareIcon, MinusCircleIcon, PlusCircleIcon } from '@heroicons/react/24/outline'
import { HomeIcon } from '@heroicons/react/20/solid'
import { ClipboardIcon, MagnifyingGlassIcon, UserIcon, ChevronLeftIcon, HeartIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import Link from 'next/link'

const HorizontalCardHome = ({recipe}) => {
    
return (
    // mb-2
    // className="my-4 flex-none w-2/3 md:w-1/3 mr-8 md:pb-4 bg-green rounded-lg shadow-md hover:shadow-lg">

    <div className="mt-4 flex-none gap-4  rounded-lg drop-shadow hover:scale-105 duration-500 cursor-pointer shadow-md hover:shadow-lg">
        <Link href="/recipe" className="">
            {/* se funziona Image aggiungi: relative, h e w perchè l'img riempirà il container */}
            {/* <div className="aspect-w-16 aspect-h-9">
                <img 
                    className="contrast-[1.1] saturate-[1.4] object-cover shadow-md hover:shadow-xl h-20 md:h-24 xl:h-40 rounded-br-xl rounded-tl-lg"
                    src={recipe.image} 
                    alt={recipe.title} 
                    />
            </div> */}
            <div className='relative h-40 w-56 sm:h-40 sm:w-56'>
                <Image 
                    className='contrast-[1.1] saturate-[1.4] rounded-lg'
                    priority
                    src={recipe.image} 
                    alt={recipe.title} 
                    fill
                    style={{objectFit:"cover"}}
                />
                <div className="w-full rounded-b-lg bg-gradient-to-t from-dark-green to-transparent  bottom-0 absolute px-2 py-2 text-white">
                    <h2 className="text-base pb-1 font-semibold truncate">{recipe.title}</h2>
                    <div className='flex items-center text-sm'>
                        <ClockIcon className='h-4 w-4 mr-1 text-white' />
                        <span className='font-light text-xs'>30 min</span>
                    </div>
                </div> 
            </div>
            {/* <div className='relative h-16 w-16 sm:h-16 sm:w-16'>
                <Image 
                    className='contrast-[1.1] saturate-[1.4]  rounded-tl-lg rounded-br-lg'
                    priority
                    src={recipe.image} 
                    alt={recipe.title} 
                    fill
                    style={{objectFit:"cover"}}
                />
            </div>
            <div className="px-2 py-2 text-white">
                <h2 className="text-base pb-1 font-semibold truncate">{recipe.title}</h2>
                <div className='flex items-center text-sm'>
                    <ClockIcon className='h-4 w-4 mr-1 text-white' />
                    <span className='font-light text-xs'>30 min</span>
                </div>
            </div> */}
        </Link>
    </div>
    )
}

export default HorizontalCardHome;