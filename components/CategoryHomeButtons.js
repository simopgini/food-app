import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router';


const CategoryHomeButtons = ({type}) => {
    const router = useRouter();

    const [toggle, setToggle] = useState("active")
        const handleClick = () => {
        setToggle("deactive")
    }
    
{/* <li key={type.id}
    className="flex-none mb-4 mr-2 md:pb-4 rounded-lg">
        <button onClick={handleClick}
                className='relative btn-tag bg-gray-lighter  hover:bg-green hover:text-white px-5 rounded-full text-sm'>
            <span className='mr-2'>{type.type}</span> 
            <span className='inset-y-0 absolute py-4 border-l-2 border-white'></span>
            <span className='ml-2'>{cuisine.emoji}</span>
        </button>
</li> */}
        
return (
    <li key={type.id}>
        {/* <Link href={`...`}> */}
        <button 
                className="mb-4 px-5  py-2.5 flex-none text-white bg-green rounded-full text-sm hover:scale-105 duration-500 cursor-pointer">
            {type.type}
        </button>
        {/* </Link> */}
    </li>
                        
    )
}

export default CategoryHomeButtons;