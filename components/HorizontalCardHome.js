
import { ClockIcon, FireIcon, AdjustmentsHorizontalIcon, TrashIcon, PencilSquareIcon, MinusCircleIcon, PlusCircleIcon } from '@heroicons/react/24/outline'
import { HomeIcon } from '@heroicons/react/20/solid'
import { ClipboardIcon, MagnifyingGlassIcon, UserIcon, ChevronLeftIcon, HeartIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import Link from 'next/link'

const HorizontalCardHome = ({recipe}) => {
    
return (
    // mb-2
    <div className="my-4 flex-none w-2/3 md:w-1/3 mr-8 md:pb-4 bg-green rounded-lg">
        <Link href="/recipe" className="space-y-2">
            {/* se funziona Image aggiungi: relative, h e w perchè l'img riempirà il container */}
            {/* <div className="aspect-w-16 aspect-h-9">
                <img 
                    className="contrast-[1.1] saturate-[1.4] object-cover shadow-md hover:shadow-xl h-20 md:h-24 xl:h-40 rounded-br-xl rounded-tl-lg"
                    src={recipe.image} 
                    alt={recipe.title} 
                    />
            </div> */}
            <div className='relative w-full h-60'>
                <Image 
                    priority
                    src={recipe.image} 
                    alt={recipe.title} 
                    fill
                    style={{objectFit:"contain"}}
                />
            </div>
            <div className="px-2 py-2 text-white">
                <h2 className="text-base pb-1 font-semibold truncate">{recipe.title}</h2>
                <div className='flex items-center text-sm'>
                    <ClockIcon className='h-4 w-4 mr-1 text-white' />
                    <span className='font-light text-xs'>30 min</span>
                </div>
            </div>
        </Link>
    </div>
    )
}

export default HorizontalCardHome;