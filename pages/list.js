import { ClockIcon, FireIcon, AdjustmentsHorizontalIcon, TrashIcon, PencilSquareIcon, MinusCircleIcon, PlusCircleIcon } from '@heroicons/react/24/outline'
import { HomeIcon } from '@heroicons/react/20/solid'
import {  ChevronLeftIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import ItemList from '@/components/ItemList'
import Alert from '@/components/Alert'

const ingredientsList = [
    {
        id: '1',
        name: 'Orange juice',
      },
      {
        id: '2',
        name: 'Bread',
    },
    {
        id: '3',
        name: 'Cazzi mia',
    }
]


const List = () => {

        // const [list, setList] = useState(ingredientsList);
    // const [name, setName] = useState('');


    // function handleChange(event) {
    //     setName(event.target.value);
    // }
    
    // function handleAdd() {
    //     const newList = list.concat({ name });
    
    //     setList(newList);
    // }
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(count + 1)
    }

    const reduceCount = () => {
        count > 0 ? setCount(count - 1) : count
    }

    const [name, setName] = useState('');
    const [list, setList] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [editId, setEditId] = useState(null);
    const [alert, setAlert] = useState({   
        show: false, 
        msg: "", 
        type: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!name){
            // display alert
            showAlert(true, "danger", "Please enter value")
        } else if(name && isEditing){
            // deal with edit
        } else {
            // show alert
            const newItem = {id: new Date().getTime().toString(), title: name}
            setList([...list, newItem])
            setName("")
        }
    }
   
    const showAlert = (show = false, type="", msg="") => {
        setAlert({show, type, msg})
    }

    function handleChange(event) {
         setName(event.target.value);
     }
    
     function handleAdd() {
        const newList = list.concat({ name });
    
         setList(newList);
     }




    return (
        <>
            <div className="xs:h-screen mb-8">
                <div>
                    <div className='px-4 mb-6 mt-16 flex justify-between items-center'>
                        <Link href="/" className='hover:scale-105 bg-white rounded-lg p-1 shadow-md'><ChevronLeftIcon className='hover:animate-pulse h-6 w-6'/></Link>
                        <div className='flex-1 bg-white'></div>
                        <div className='flex-auto p-1 font-bold text-xl'>LIST</div>
                    </div>
                </div>
            
                <div className='px-4 mb-8'>
                <h2 className='font-bold text-xl text-[#0A2533]'>My ingredients list:</h2>
                </div>

                {/* Type grocery item section mt-36*/}
                <div className='section-center'>
                    <div className=' mb-4 px-4 items-center'>
                        <form className='grocery-form' onSubmit={handleSubmit}>
                            <div className='flex form-control'>
                                <input className='flex-1 placeholder:text-sm placeholder:text-gray block  bg-gray-light w-full  rounded-lg py-2 pr-3 shadow-md focus:outline-none 
                                    focus:border-green focus:ring-green focus:ring-1 sm:text-sm'
                                    style={{borderWidth: 0}}
                                        placeholder="e.g. avocado"
                                        type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                />
                                <button type="submit"
                                        className="submit-btn drop-shadow-lg drop-shadow-white hover:shadow-[#A4D3C5] hover:bg-[#55a78e] duration-500 hover:scale-105 ml-3 px-4 py-2 bg-green text-sm text-white rounded-lg">
                                    {isEditing ? "edit" : "Add"}
                                </button>   
                            </div>
                            {alert.show && <Alert {...alert} removeAlert={showAlert}/> }    
                        </form>
                    </div>
                    {list.length > 0 && (
                        <section className='px-4 grocery-container'>
                            <ItemList items={list}/>
                            <div className='flex my-4 justify-center'>
                                <button className='text-red-500'>Clear Items</button>
                            </div>
                        </section>
                    )}

                    
                </div>


                {/* Type grocery item section mt-36*/}
                {/* <div className='section-center'> */}
                {/* <div className='mb-4 px-4 flex items-center'>
                    <label className="flex-1  block">
                        <span className="sr-only">Search</span>
                        <input style={{borderWidth: 0}}
                               className="flex-1 placeholder:text-sm placeholder:text-gray block  bg-gray-light w-full  rounded-lg py-2 pr-3 shadow-md focus:outline-none 
                               focus:border-green focus:ring-green focus:ring-1 sm:text-sm" 
                                placeholder="Type the first ingredient" 
                                name="search"
                                type="text" 
                                value={name}
                                onChange={handleChange}
                              />
                    </label>
                    <button type="button" onClick={handleAdd}
                            className="clear-btn drop-shadow-lg drop-shadow-white hover:shadow-[#A4D3C5] hover:bg-[#55a78e] duration-500 hover:scale-105 ml-3 px-4 py-2 bg-green text-sm text-white rounded-lg">
                        Add
                    </button>
                </div>

                <section className='px-4 grocery-container'>
                <ul className="grid grid-cols-1 divide-y divide-slate-200">
                    
                    {ingredientsList.map((ingredientList) => (
                        <li key={ingredientsList.id} className='flex items-center justify-between  hover:bg-gray-light rounded-sm'>
                            <div className='flex items-center space-x-2 my-3 hover:bg-gray-light'>
                                <input type="checkbox" className="appearance-none enabled:ring-green checked:ring-green text-green border-[#DEDCDC] checked:bg-gray-mid rounded-md h-6 w-6 mr-2" />
                                <p className='text-dark-green text-sm'>{ingredientList.name}</p>
                            </div>
                            <div className='flex text-dark-green space-x-2 text-sm '>
                                <MinusCircleIcon onClick={reduceCount} className='transition duration-300 hover:scale-110 h-5 w-5 text-green mr-2'></MinusCircleIcon>
                                {count}
                                <PlusCircleIcon onClick={incrementCount} className='transition duration-300 hover:scale-110 h-5 w-5 text-green'></PlusCircleIcon>
                                <button>
                                    <TrashIcon className='clear-btn transition duration-300 hover:scale-110 h-5 w-5 text-red-500' />
                                </button>
                            </div>
                        </li>
                    ))}

                </ul>
                </section> */}
                {/* </div> */}

                {/* Type grocery item section mt-36*/}
                {/* <div className=' mb-4 px-4 flex items-center'>
                    <label className="flex-1  block">
                        <span className="sr-only">Search</span>
                        <input style={{borderWidth: 0}}
                               className="flex-1 placeholder:text-sm placeholder:text-gray block  bg-gray-light w-full  rounded-lg py-2 pr-3 shadow-md focus:outline-none 
                               focus:border-green focus:ring-green focus:ring-1 sm:text-sm" 
                                placeholder="Type the first ingredient" 
                                name="search"
                                type="text" 
                                value={name}
                                onChange={handleChange}
                              />
                    </label>
                    <button type="button" onClick={handleAdd}
                            className="drop-shadow-lg drop-shadow-white hover:shadow-[#A4D3C5] hover:bg-[#55a78e] duration-500 hover:scale-105 ml-3 px-4 py-2 bg-green text-sm text-white rounded-lg">
                        Add
                    </button>
                </div> */}

                <section className='px-4'>
                    {/* <ul className="grid grid-cols-1 divide-y divide-slate-200">
                        
                        {ingredientsList.map((ingredientList) => (
                            <li key={ingredientsList.id} className='flex items-center justify-between  hover:bg-gray-light rounded-sm'>
                                <div className='flex items-center space-x-2 my-3 hover:bg-gray-light'>
                                    <input type="checkbox" className="appearance-none enabled:ring-green checked:ring-green text-green border-[#DEDCDC] checked:bg-gray-mid rounded-md h-6 w-6 mr-2" />
                                    <p className='text-dark-green text-sm'>{ingredientList.name}</p>
                                </div>
                                <div className='flex text-dark-green space-x-2 text-sm '>
                                    <MinusCircleIcon onClick={reduceCount} className='transition duration-300 hover:scale-110 h-5 w-5 text-green mr-2'></MinusCircleIcon>
                                    {count}
                                    <PlusCircleIcon onClick={incrementCount} className='transition duration-300 hover:scale-110 h-5 w-5 text-green'></PlusCircleIcon>
                                    <button>
                                        <TrashIcon className='transition duration-300 hover:scale-110 h-5 w-5 text-red-500' />
                                    </button>
                                </div>
                            </li>
                        ))}

                    </ul> */}

                
                    {/* <div className='flex items-center justify-between  hover:bg-gray-light rounded-sm'>
                            <div className='flex items-center space-x-2 my-3 hover:bg-gray-light'>
                                <input type="checkbox" className="appearance-none enabled:ring-green checked:ring-green text-green border-[#DEDCDC] checked:bg-gray-mid rounded-md h-6 w-6 mr-2" />
                                <p className='text-dark-green text-sm'>Orange juice</p>
                            </div>
                            <div className='flex text-dark-green space-x-2 text-sm '>
                                <MinusCircleIcon onClick={reduceCount} className='transition duration-300 hover:scale-110 h-5 w-5 text-green mr-2'></MinusCircleIcon>
                                {count}
                                <PlusCircleIcon onClick={incrementCount} className='transition duration-300 hover:scale-110 h-5 w-5 text-green'></PlusCircleIcon>
                                <button>
                                    <TrashIcon className='transition duration-300 hover:scale-110 h-5 w-5 text-red-500' />
                                </button>
                            </div>
                    </div> */}

                    <div className="pt-20 grid grid-cols-1 divide-y divide-slate-200">
                        {/* <div className='flex items-center space-x-2 py-3 hover:bg-gray-light'>
                            <input type="checkbox" className="appearance-none enabled:ring-green checked:ring-green text-green border-[#DEDCDC] checked:bg-gray-mid indeterminate:bg-gray-300 rounded-md h-6 w-6 mr-2" />
                            <p className='text-dark-green text-sm'>Lime</p>
                        </div>
                        <div className='flex items-center space-x-2 py-3 hover:bg-gray-light'>
                            <input type="checkbox" className="appearance-none enabled:ring-green checked:ring-green text-green border-[#DEDCDC] checked:bg-gray-mid rounded-md h-6 w-6 mr-2" />
                            <p className='text-dark-green text-sm'>Bread</p>
                        </div>
                        <div className='flex items-center justify-between  hover:bg-gray-light'>
                            <div className='flex items-center space-x-2 my-3 hover:bg-gray-light'>
                                <input type="checkbox" className="appearance-none enabled:ring-green checked:ring-green text-green border-[#DEDCDC] checked:bg-gray-mid rounded-md h-6 w-6 mr-2" />
                                <p className='text-dark-green text-sm'>Coffee</p>
                            </div>
                            <div className='flex text-dark-green space-x-2 text-sm '>
                                <button>
                                <PencilSquareIcon className='hover:scale-110 h-5 w-5 text-green' />
                                </button>
                                <button>
                                <TrashIcon className='hover:scale-110 h-5 w-5 text-red-500' />
                                </button>
                            </div>
                        </div>
                        <div className='flex items-center justify-between  hover:bg-gray-light'>
                            <div className='flex items-center space-x-2 my-3 hover:bg-gray-light'>
                                <input type="checkbox" className="appearance-none enabled:ring-green checked:ring-green text-green border-[#DEDCDC] checked:bg-gray-mid rounded-md h-6 w-6 mr-2" />
                                <p className='text-dark-green text-sm'>Orange juice</p>
                            </div>
                            <div className='flex text-dark-green space-x-2 text-sm '>
                                <MinusCircleIcon onClick={reduceCount} className='transition duration-300 hover:scale-110 h-5 w-5 text-green mr-2'></MinusCircleIcon>
                                {count}
                                <PlusCircleIcon onClick={incrementCount} className='transition duration-300 hover:scale-110 h-5 w-5 text-green'></PlusCircleIcon>
                                <button>
                                    <TrashIcon className='transition duration-300 hover:scale-110 h-5 w-5 text-red-500' />
                                </button>
                            </div>
                        </div>
                        <div className='flex items-center justify-between hover:bg-gray-light'>
                            <div className='flex items-center space-x-2 my-3 hover:bg-gray-light'>
                                <input type="checkbox" className="appearance-none enabled:ring-green checked:ring-green text-green border-[#DEDCDC] checked:bg-gray-mid rounded-md h-6 w-6 mr-2" />
                                <p className='text-dark-green text-sm'>Paprika</p>
                            </div>
                            <div className='flex text-dark-green space-x-2 text-sm '>
                                <MinusCircleIcon onClick={reduceCount} className='transition duration-300 hover:scale-110 h-5 w-5 text-green mr-2'></MinusCircleIcon>
                                {count}
                                <PlusCircleIcon  onClick={incrementCount} className='transition duration-300 hover:scale-110 solid h-5 w-5 text-white fill-green' />
                                <button>
                                    <TrashIcon className='transition duration-300 hover:scale-110 h-5 w-5 text-red-500' />
                                </button>
                            
                            </div>
                        </div> */}
                        <div className='flex items-center justify-between hover:bg-gray-light'>
                            <div className='flex items-center space-x-2 my-3 hover:bg-gray-light'>
                                <input type="checkbox" className="appearance-none enabled:ring-green checked:ring-green text-green border-[#DEDCDC] checked:bg-gray-mid rounded-md h-6 w-6 mr-2" />
                                <p className='text-gray text-sm line-through'>Avocado</p>
                            </div>
                            <div className='flex text-dark-green space-x-2 text-sm '>
                            <p className=' text-gray'>4</p>
                            <p className=' text-dark-green'>🥑</p>
                            </div>
                        </div>

                        <div className='flex items-center justify-between hover:bg-gray-light'>
                            <div className='flex items-center space-x-2 my-3'>
                            <input type="checkbox" className="appearance-none enabled:ring-green checked:ring-green text-green border-[#DEDCDC] checked:bg-gray-mid rounded-md h-6 w-6 mr-2" />
                            <p className='text-gray text-sm line-through'>Tomatoes</p>
                            </div>
                            <div className='flex text-dark-green space-x-2 text-sm '>
                            <p className=' text-gray'>1</p>
                            <p className=' text-dark-green'>🍅</p>
                            </div>
                        </div>

                    </div>
                </section>



            </div>
        </>
    )
}

export default List;