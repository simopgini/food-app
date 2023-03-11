import React, { useState } from "react";
import Image from "next/image";
import { HiOutlineClock, HiOutlineFire, HiOutlineArrowLeft, HiHeart } from 'react-icons/hi';


const Modal = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button
        className="bg-blue-200 text-black active:bg-blue-500 
      font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Fill Details
      </button>
      {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-red-100 outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 rounded-t ">
                  {/* <h3 className="text-3xl font=semibold">General Info</h3> */}
                  {/* <button
                    className="bg-transparent"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-black opacity-7 h-6 w-6 text-xl block bg-gray-400 py-0 rounded-full">
                      x
                    </span>
                  </button> */}
                  <div className="bg-cover bg-center " alt="sd" 
                //   style="background-image: url(https://spoonacular.com/recipeImages/716429-556x370.jpg)"
                  >
                    
                        <div className='px-4 mt-16 flex justify-between items-center'>
                            <button onClick={() => setShowModal(false)} className='bg-gray-mid rounded-lg p-1'><HiOutlineArrowLeft className='h-6 w-6'/></button>
                            <div className='bg-gray-mid rounded-lg p-1'><HiHeart className='h-6 w-6 text-green'/></div>
                        </div>
                        {/* <Image src="/avocado.jpg" width="130" height="130"/> */}
                        {/* <div className="bg-cover bg-center" style={{backgroundImage: url('/avocado.jpg')}}></div> */}
                        {/* <div className="bg-[url('/avocado.jpg')]"></div> */}
                        {/* <div className='pt-28'></div> */}
                        <div className=' rounded-t-3xl'></div>
                        <section className='px-4 pb-4 '>
                            <div className='flex justify-between items-baseline'>
                            <h1 className=' mb-6 text-dark-green text-xl font-bold'>
                                Avocado Toast
                            </h1>
                            <p className='flex text-gray'>
                                <HiOutlineClock className='h-4 w-4 mr-1' />
                                <span className='font-light text-xs'>10 min</span>
                            </p>
                            </div>
                            <div className='flex justify-between text-dark-green'>
                            <div className='text-sm font-semibold'>
                                <div className='mb-4 flex items-center'>
                                <div className='bg-gray-mid rounded-lg p-1 mr-2'><Image src="/spaghetti.svg" alt="spaghetti icon" width={20} height={20}/></div>
                                <p>80g carbs</p>
                                </div>
                                <div className='mb-4 flex items-center'>
                                <div className='bg-gray-mid rounded-lg p-1 mr-2'><HiOutlineFire className='h-5 w-5'/></div>
                                <p>275 Kcal</p>
                                </div>
                            </div>
                            <div className='mb-8 text-sm font-semibold'>
                                <div className='mb-4 flex items-center'>
                                <div className='bg-gray-mid rounded-lg p-1 mr-2'><Image src="/taco.svg" alt="spaghetti icon" width={20} height={20}/></div>
                                <p>29g proteins</p>
                                </div>
                                <div className='mb-4 flex items-center'>
                                <div className='bg-gray-mid rounded-lg p-1 mr-2'><Image src="/avocado.svg" alt="spaghetti icon" width={18} height={20}/></div>
                                <p>96g fats</p>
                                </div>
                            </div>
                            </div>
                            <div className='bg-gray-mid py-1.5 px-1 flex rounded-xl font-medium'>
                            <button className='text-gray-mid bg-dark-green px-10 py-2 rounded-xl'>Ingredients</button>
                            <button className='text-dark-green pl-10'>Instructions</button>
                            </div>
                        </section>
                        <section className='px-4'>
                            <div className='flex justify-between items-baseline'>
                            <h1 className=' mb-6 text-dark-green text-xl font-bold'>
                                Ingredients
                            </h1>
                            <p className='flex text-gray'>
                                <span className='font-light text-xs'>4 items</span>
                            </p>
                            </div>
                            <div>
                            <div className='bg-gray-lighter text-sm font-medium mb-2 py-2 px-2 flex justify-between items-center rounded-xl text-dark-green'>
                                
                            <div className='rounded-xl flex items-center'>
                                <div className='bg-white rounded-lg p-1 mr-2'>🥑</div>
                                <p>Avocado</p>
                                </div>
                                <p className='pr-2'>2</p>
                            </div>
                            <div className='bg-gray-lighter text-sm font-medium mb-2 py-2 px-2 flex justify-between items-center rounded-xl text-dark-green'>
                                <div className='rounded-xl flex items-center'>
                                <div className='bg-white rounded-lg p-1 mr-2'>🍋</div>
                                <p>Lime</p>
                                </div>
                                <p className='pr-2'>1/2</p>
                            </div>
                            <div className='bg-gray-lighter text-sm font-medium mb-2 py-2 px-2 flex justify-between items-center rounded-xl text-dark-green'>
                                <div className='rounded-xl flex items-center'>
                                <div className='bg-white rounded-lg p-1 mr-2'>🍅</div>
                                <p>Cherry Tomatoes</p>
                                </div>
                                <p className='pr-2'>8</p>
                            </div>
                            <div className='bg-gray-lighter text-sm font-medium mb-2 py-2 px-2 flex justify-between items-center rounded-xl text-dark-green'>
                            <div className='rounded-xl flex items-center'>
                                <div className='bg-white rounded-lg p-1 mr-2'>🌶️</div>
                                <p>Paprika</p>
                                </div>
                                <p className='pr-2'>q.b.</p>
                            </div>
                            </div>
                        </section>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </>
      ) : null}

{/* <button
        className="bg-blue-200 text-black active:bg-blue-500 
      font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Prova
      </button>
      {showModal ? (
        <>
          <div className="fixed top-0 left-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none">
            <div className="pointer-events-none relative w-auto translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[0px]:m-0 min-[0px]:h-full min-[0px]:max-w-none">
              <div className="pointer-events-auto relative flex w-full flex-col rounded-md bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600 min-[0px]:h-full min-[0px]:rounded-none min-[0px]:border-0">
                <div className="fflex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50 min-[0px]:rounded-none">
                  <h3 className="text-3xl font=semibold">General Info</h3>
                  <button
                    className="bg-transparent"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-black opacity-7 h-6 w-6 text-xl block bg-gray-400 py-0 rounded-full">
                      x
                    </span>
                  </button>
                </div>


              </div>
            </div>
          </div>
        </>
      ) : null} */}
    </>
  );
};



                {/* <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="text-white bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Submit
                  </button>
                </div> */}

export default Modal;