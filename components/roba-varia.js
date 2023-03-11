

// HOMEPAGE: bottoni tag categoria
// <section className='mb-6'>
//               <div className='pl-4'>
//                 <h1 className=' text-dark-green text-lg font-bold'>Category</h1>
//                   <div className="container flex-grow w-full mx-auto">
//                     <div className="">
//                       <div className="container my-4">
//                         <div className="flex flex-no-wrap overflow-x-scroll gap-3 scrolling-touch items-start mb-4">

//                           <button className="mb-2 flex-none bg-green rounded-full text-sm hover:scale-105 duration-500 cursor-pointer">
//                                 <div className="px-5  py-2 text-white">
//                                     <p className="">breakfast</p>
//                                 </div>
//                           </button>

//                           <button className="mb-2 flex-none   bg-green rounded-full text-sm hover:scale-105 duration-500 cursor-pointer">
//                                 <div className="px-5  py-2 text-white">
//                                     <p className="">breakfast</p>
//                                 </div>
//                           </button>

//                           <button className="mb-2 flex-none  bg-green rounded-full text-sm hover:scale-105 duration-500 cursor-pointer">
//                                 <div className="px-5  py-2 text-white">
//                                     <p className="">breakfast</p>
//                                 </div>
//                           </button>

//                           <button className="mb-2 flex-none bg-green rounded-full text-sm hover:scale-105 duration-500 cursor-pointer">
//                                 <div className="px-5  py-2 text-white">
//                                     <p className="">breakfast</p>
//                                 </div>
//                           </button>

//                           <button className="mb-2 flex-none  bg-green rounded-full text-sm hover:scale-105 duration-500 cursor-pointer">
//                                 <div className="px-5 py-2 text-white">
//                                     <p className="">breakfast</p>
//                                 </div>
//                           </button>
//                           <button className="mb-2 flex-none  bg-green rounded-full text-sm hover:scale-105 duration-500 cursor-pointer">
//                                 <div className="px-5 py-2 text-white">
//                                     <p className="">prova</p>
//                                 </div>
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
                
//               </div>
//             </section>


                          {/* <button className="my-6 px-5  py-2.5 flex-none  bg-green rounded-full text-sm hover:scale-105 duration-500 cursor-pointer">
                                <div className="px-5 py-2 text-white">
                                    <p className="">prova</p>
                                </div>
                          </button> */}



            {/* TAG DA DECOMMENTARE VECCHIO */}
            {/* <section className='mb-6'>
              <div className='px-4 flex justify-between items-center font-bold'>
                <h1 className='text-dark-green text-lg font-bold'>Category</h1>
                <div className='text-green text-xs'>See all</div>
              </div>
              
              <div className="pl-4 container flex-grow w-full mx-auto">
                    <div className="container my-4">

                      <div id="scrollContainer"
                        className="flex flex-no-wrap overflow-auto scrolling-touch items-start mb-4" >
                        <div className="flex-none mb-2 mr-2 md:pb-4 rounded-lg">
                            <button className='btn-tag bg-green hover:bg-green text-white px-5 py-2 rounded-full text-sm' onClick={fetchRecipes}>Breakfast</button>
                        </div>
                        <div
                          className="flex-none mr-2 mb-2  md:pb-4 rounded-lg">
                            <button  className='btn-tag bg-gray-light hover:bg-green active:bg-green  hover:text-white text-dark-green px-5 py-2 rounded-full text-sm' onClick={fetchRecipes}>Main course</button>
                        </div>
                        <div
                          className="flex-none  mr-2 mb-2 md:pb-4 rounded-lg">
                            <button  className='btn-tag bg-gray-light hover:bg-green active:bg-green hover:text-white text-dark-green px-5 py-2 rounded-full text-sm' onClick={fetchRecipes}>Snack</button>
                        </div>
                        <div
                          className="flex-none  mr-2 mb-2 md:pb-4rounded-lg">
                            <button  className='btn-tag bg-gray-light hover:bg-green active:bg-green hover:text-white text-dark-green px-5 py-2 rounded-full text-sm' onClick={fetchRecipes}>Dinner</button>
                        </div>
                        <div
                          className="flex-none  mr-2 mb-2 md:pb-4  rounded-lg">
                            <button  className='btn-tag bg-gray-light hover:bg-green active:bg-green hover:text-white text-dark-green px-5 py-2 rounded-full text-sm' onClick={fetchRecipes}>Dessert</button>
                        </div>
                        
                      </div>
                    </div>
                    
                </div>
            </section> */}


            {/* HORIZONTALCARDHOME HANDLING */}
    {/* <div className="my-4 flex-none w-2/3 md:w-1/3 mr-8 md:pb-4 bg-green rounded-lg shadow-md hover:shadow-lg">
        <Link href="/recipe" className="">
            <div className="aspect-w-16 aspect-h-9">
                <img 
                    className="contrast-[1.1] saturate-[1.4] object-cover shadow-md hover:shadow-xl h-20 md:h-24 xl:h-40 rounded-br-xl rounded-tl-lg"
                    src={recipe.image} 
                    alt={recipe.title} 
                    />
            </div>
            <div className='relative h-16 w-16 sm:h-16 sm:w-16'>
                <Image 
                    className='contrast-[1.1] saturate-[1.4]  rounded-tl-lg rounded-br-lg'
                    priority
                    src={recipe.image} 
                    alt={recipe.title} 
                    fill
                    style={{objectFit:"cover"}}
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
    </div> */}




    // VERTICALCARD
    // <div className='p-4 h-fit '>
                    {/* <div src={recipe.image} className='h-36 bg-gray-light rounded-xl'>{recipe.image}</div> */}
                    {/* <Image 
                        src={recipe.image} 
                        alt={recipe.title}
                        width={80}
                        height={60} 
                        className='rounded-xl contrast-125 saturate-150'
                    />
                    <img src={recipe.image} 
                        alt={recipe.title} 
                        className='hover:transition hover:duration-300 hover:object-none hover:object-center rounded-xl contrast-[1.1] saturate-[1.4]'>
                    </img>
            </div>
            
            <div className='px-4 py-2'>
            {/* truncate */}
                {/* <h2 className='text-sm pb-1 font-semibold text-dark-green  mb-1'>{recipe.title}</h2>
                <div className='flex justify-between text-gray pb-6'>
                    <div className='flex items-center text-sm'>
                        <FireIcon className='h-4 w-4 mr-1' />
                        <span className='font-light text-xs'>200 Kcal</span>
                    </div>
                    <div className='flex items-center text-sm'>
                        <ClockIcon className='h-4 w-4 mr-1' />
                        <span className='font-light text-xs'>30 min</span>
                    </div>
                </div>
            </div> */}

                        // type="button"
            // data-te-toggle="modal"
            // data-te-target="#exampleModalFullscreen"
            // data-te-ripple-init
            // data-te-ripple-color="light"

            {/* <div
            data-te-modal-init
            className="fixed top-0 left-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
            id="exampleModalFullscreen"
            tabIndex="-1"
            aria-labelledby="exampleModalFullscreenLabel"
            aria-hidden="true">
        <div
            data-te-modal-dialog-ref
            className="pointer-events-none relative w-auto translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[0px]:m-0 min-[0px]:h-full min-[0px]:max-w-none">
            <div
            className="pointer-events-auto relative flex w-full flex-col rounded-md bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600 min-[0px]:h-full min-[0px]:rounded-none min-[0px]:border-0">
            <div
                className="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50 min-[0px]:rounded-none">
                <h5
                className="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200"
                id="exampleModalFullscreenLabel">
                Modal title
                </h5>
                <button
                type="button"
                className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                data-te-modal-dismiss
                aria-label="Close">
                </button>
            </div>
            <div className="relative p-4 min-[0px]:overflow-y-auto">
                <p className="px-10 text-center leading-[3rem]">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Similique nesciunt repellat consectetur rem nam, facere,
                expedita perspiciatis accusamus beatae aliquid dicta fugit ab
                minima qui inventore. Animi tenetur tempore consequuntur!
                Ducimus, praesenagni temporibus.llum quos cum
                perferendis quia voluptatibus tempore beataem? aspernatur,
                dolorem modi?
                </p>
            </div>
            <div
                className="mt-auto flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50 min-[0px]:rounded-none">
                <button
                type="button"
                className="inline-block rounded bg-primary-100 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
                data-te-modal-dismiss>
                Close
                </button>
            </div>
            </div>
        </div>
        </div> */}

        {/* <div className='p-4 h-fit '>
                    <img src={recipe.image} 
                        alt={recipe.title} 
                        className='hover:transition hover:duration-300 hover:object-none hover:object-center rounded-xl contrast-[1.1] saturate-[1.4]'>
                    </img>
            </div>
            
            <div className='px-4 py-2'>
                <h2 className='text-sm pb-1 font-semibold text-dark-green  mb-1'>{recipe.title}</h2>
                <div className='flex justify-between text-gray pb-6'>
                    <div className='flex items-center text-sm'>
                        <FireIcon className='h-4 w-4 mr-1' />
                        <span className='font-light text-xs'>200 Kcal</span>
                    </div>
                    <div className='flex items-center text-sm'>
                        <ClockIcon className='h-4 w-4 mr-1' />
                        <span className='font-light text-xs'>30 min</span>
                    </div>
                </div>
            </div> */}

                        {/* <div className='ml-2 my-1 mr-2 '>
              <div className='h-20 w-20 md:h-24 xl:h-40 md:w-24 xl:w-40 rounded-xl'>
                <img 
                        className="contrast-[1.1] saturate-[1.4] object-cover shadow-md hover:shadow-xl h-20 md:h-24 xl:h-40 rounded-lg"
                        src={searchRecipe.image} 
                        alt={searchRecipe.title} 
                        // fill=true
                        />
              </div>
            </div> */}

                        // SEARCHCARD DENTRO LINK
            // <div className='ml-2 my-1 mr-2 '>
            //   <div className='h-20 w-20 md:h-24 xl:h-40 md:w-24 xl:w-40 rounded-xl'>
            //     <img 
            //             className="contrast-[1.1] saturate-[1.4] object-cover shadow-md hover:shadow-xl h-20 md:h-24 xl:h-40 rounded-lg"
            //             src={searchRecipe.image} 
            //             alt={searchRecipe.title} 
            //             // fill=true
            //             />
            //   </div>
            // </div>