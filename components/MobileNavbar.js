import { ClockIcon, FireIcon, AdjustmentsHorizontalIcon, TrashIcon, PencilSquareIcon, MinusCircleIcon, PlusCircleIcon } from '@heroicons/react/24/outline'
import { HomeIcon } from '@heroicons/react/20/solid'
import { ClipboardIcon, MagnifyingGlassIcon, UserIcon, ChevronLeftIcon, HeartIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import Link from 'next/link'

const MobileNavbar = () => {

return (
    <nav className='sticky bottom-0 bg-white border-t border-gray-line'>
        <div className='py-6 pb-8 px-10 flex justify-between items-center text-sm'>
        <Link href="/">
            <HomeIcon default className='h-6 w-6 mr-1 text-green disabled:text-gray' />
        </Link>
        <Link href="/search">
            <MagnifyingGlassIcon disabled className='h-6 w-6 mr-1 text-gray hover:text-green active:text-green ' />
        </Link>
        <Link href="/list">
            <ClipboardIcon disabled className='h-6 w-6 mr-1 text-gray hover:text-green active:text-green ' />                
        </Link>
        <Link href="/profile">
            <UserIcon disabled className='h-6 w-6 mr-1 text-gray hover:text-green active:text-green ' />
        </Link>

        </div>
    </nav>
    )
}

export default MobileNavbar;