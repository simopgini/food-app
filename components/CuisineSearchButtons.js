import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router';


const CuisineSearchButtons = ({cuisine}) => {
    const router = useRouter();

    const [toggle, setToggle] = useState("active")
        const handleClick = () => {
        setToggle("deactive")
    }
    
return (
    <li key={cuisine.id}
        className="flex-none mb-4 mr-2 md:pb-4 rounded-lg">
        {/* <Link href={`/search/`}> */}
            <button onClick={handleClick}
                    className='relative btn-tag bg-gray-lighter  hover:bg-green hover:text-white px-5 rounded-full text-sm'>
                <span className='mr-2'>{cuisine.cuisine}</span> 
                <span className='inset-y-0 absolute py-4 border-l-2 border-white'></span>
                <span className='ml-2'>{cuisine.emoji}</span>
            </button>
        {/* </Link> */}
    </li>
    )
}

export default CuisineSearchButtons;