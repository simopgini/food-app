import '@/styles/globals.css'
import React from 'react'
import { ClockIcon, FireIcon, AdjustmentsHorizontalIcon, TrashIcon, PencilSquareIcon, MinusCircleIcon, PlusCircleIcon } from '@heroicons/react/24/outline'
import { HomeIcon } from '@heroicons/react/20/solid'
import { ClipboardIcon, MagnifyingGlassIcon, UserIcon, ChevronLeftIcon, HeartIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import MobileNavbar from '@/components/MobileNavbar'


export default function App({ Component, pageProps }) {
  return (
  <>
    {/* <div className='xs:h-screen'> */}
      <Component {...pageProps} />
    {/* </div> */}

    <MobileNavbar/>

  </>
  )
}
