
import { ClockIcon, FireIcon, AdjustmentsHorizontalIcon, TrashIcon, PencilSquareIcon, MinusCircleIcon, PlusCircleIcon } from '@heroicons/react/24/outline'
import { HomeIcon } from '@heroicons/react/20/solid'
import { ClipboardIcon, MagnifyingGlassIcon, UserIcon, ChevronLeftIcon, HeartIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

const Alert = ({type, msg, removeAlert}) => {

return (
    <div className='pt-2'>
        <p className={`alert alert-${type}`}>{msg}</p>
    </div>
    )
}

export default Alert;
