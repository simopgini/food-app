
import { ClockIcon, FireIcon, AdjustmentsHorizontalIcon, TrashIcon, PencilSquareIcon } from '@heroicons/react/24/outline'
import { MinusCircleIcon, PlusCircleIcon } from '@heroicons/react/24/solid'
import { HomeIcon } from '@heroicons/react/20/solid'
import { ClipboardIcon, MagnifyingGlassIcon, UserIcon, ChevronLeftIcon, HeartIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const ItemList = ({items}) => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
      setCount(count + 1)
  }

  const reduceCount = () => {
      count > 0 ? setCount(count - 1) : count
  }

  return (
    <ul className='grocery-list grid grid-cols-1 divide-y divide-slate-200'>
      {items.map((item)=> {
        const {id, title} = item;
        return (
          <li key={id}
              className='flex items-center justify-between  hover:bg-gray-light rounded-sm'>
              <div className='flex items-center space-x-2 my-3 hover:bg-gray-light'>
                <input type="checkbox" className="appearance-none enabled:ring-green checked:ring-green text-green border-[#DEDCDC] checked:bg-gray-mid rounded-md h-6 w-6 mr-2" />
                <p className='text-dark-green text-sm'>{title}</p>
              </div>
              <div className='flex text-dark-green space-x-2 text-sm '>
                <MinusCircleIcon onClick={reduceCount} className='transition duration-300 hover:scale-110 h-5 w-5 text-green mr-2'></MinusCircleIcon>
                  {count}
                <PlusCircleIcon onClick={incrementCount} className='transition duration-300 hover:scale-110 h-5 w-5 text-green'></PlusCircleIcon>
                <button>
                  <PencilSquareIcon className='hover:scale-110 h-5 w-5 text-green' />                
                </button>
                <button>
                  <TrashIcon className='clear-btn transition duration-300 hover:scale-110 h-5 w-5 text-red-500' />
                </button>
            </div>
          </li>
        )
        
      })}
    </ul>
  )


}

export default ItemList;

