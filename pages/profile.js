import Link from 'next/link'
import {  ChevronLeftIcon } from '@heroicons/react/24/solid'


export default function Profile() {
    return (
        <>
            <div className="xs:h-screen mb-8">
                <div>
                    <div className='px-4 mb-6 mt-16 flex justify-between items-center'>
                        <Link href="/" className='hover:scale-105 bg-white rounded-lg p-1 shadow-md'><ChevronLeftIcon className='hover:animate-pulse h-6 w-6'/></Link>
                        <div className='flex-1 bg-white'></div>
                        <div className='flex-auto p-1 font-bold text-xl'>Profile</div>
                    </div>
                    <p className='px-4 py-72 text-center text-xl'>⚠️ Work in progress ⚠️ </p>
                </div>
            </div>
        </>
    )
}