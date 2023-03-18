

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

            {/* HORIZONTAL CARD HOME OLD */}
            {/* <section className='mb-6'>
              <div className='pl-4'>
                <h1 className=' text-dark-green text-lg font-bold'>Getting Inspired</h1>

                // SCROLL-X CARDS
                // container
                // pl-4 py-4 sm:py-16
                <div className="container flex-grow w-full mx-auto">
                  // mx-auto w-full md:w-4/5 px-4 //
                  <div className="">
                    <div className="container my-4">
                      
                      <div className="flex flex-no-wrap overflow-x-auto gap-3 lg:gap-4 scrolling-touch items-start mb-4" >
                          
                        {recipes.results.map((recipe) => {
                          return (
                            <HorizontalCardHome key={recipe.id} recipe={recipe} className=" "/>
                              )
                            })
                        }
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>
            </section> */}







        {/* <section className='mb-6'>
              <div className="container flex-grow w-full mx-auto">
                  <div className="pl-4">
                    <div className=" my-4">
                      
                      <div id="scrollContainer"
                        className="flex flex-no-wrap overflow-x-scroll scrolling-touch items-start" >
                        <div className="flex-none mb-2 mr-2 md:pb-4 rounded-lg">
                            <button className='relative btn-tag bg-green hover:bg-green text-white px-5 rounded-full text-sm'>
                              <span className='mr-2'>Italian</span> 
                              <span className='inset-y-0 absolute py-4 border-l-2 border-white'></span>
                              <span className='ml-2'>🍕</span>
                            </button>
                        </div>

                        <div className="flex-none mb-2 mr-2 md:pb-4 rounded-lg">
                            <button className='relative btn-tag bg-gray-light disabled:bg-gray-light hover:text-white active:text-white text-dark-green active:bg-green hover:bg-green px-5 rounded-full text-sm'>
                              <span className='mr-2'>Spanish</span> 
                              <span className='inset-y-0 absolute py-4 border-l-2 border-white'></span>
                              <span className='ml-2'>🥘</span>
                            </button>
                        </div>

                        <div className="flex-none mb-2 mr-2 md:pb-4 rounded-lg">
                            <button className='relative btn-tag bg-gray-light disabled:bg-gray-light hover:text-white active:text-white text-dark-green active:bg-green hover:bg-green px-5 rounded-full text-sm'>
                              <span className='mr-2'>Japanese</span> 
                              <span className='inset-y-0 absolute py-4 border-l-2 border-white'></span>
                              <span className='ml-2'>🍱</span>
                            </button>
                        </div>

                        <div className="flex-none mb-2 mr-2 md:pb-4 rounded-lg">
                            <button className='relative btn-tag bg-gray-light disabled:bg-gray-light hover:text-white active:text-white text-dark-green active:bg-green hover:bg-green px-5 rounded-full text-sm'>
                              <span className='mr-2'>India</span> 
                              <span className='inset-y-0 absolute py-4 border-l-2 border-white'></span>
                              <span className='ml-2'>🍛</span>
                            </button>
                        </div>

                        <div className="flex-none mb-2 mr-2 md:pb-4 rounded-lg">
                            <button className='relative btn-tag bg-gray-light disabled:bg-gray-light hover:text-white active:text-white text-dark-green active:bg-green hover:bg-green px-5 rounded-full text-sm'>
                              <span className='mr-2'>Mexican</span> 
                              <span className='inset-y-0 absolute py-4 border-l-2 border-white'></span>
                              <span className='ml-2'>🌮</span>
                            </button>
                        </div>

                        <div className="flex-none mb-2 mr-2 md:pb-4 rounded-lg">
                            <button className='relative btn-tag bg-gray-light disabled:bg-gray-light hover:text-white active:text-white text-dark-green active:bg-green hover:bg-green px-5 rounded-full text-sm'>
                              <span className='mr-2'>Middle Eastern</span> 
                              <span className='inset-y-0 absolute py-4 border-l-2 border-white'></span>
                              <span className='ml-2'>🧆</span>
                            </button>
                        </div>

                        <div className="flex-none mb-2 mr-2 md:pb-4 rounded-lg">
                            <button className='relative btn-tag bg-gray-light disabled:bg-gray-light hover:text-white active:text-white text-dark-green active:bg-green hover:bg-green px-5 rounded-full text-sm'>
                              <span className='mr-2'>Chinese</span> 
                              <span className='inset-y-0 absolute py-4 border-l-2 border-white'></span>
                              <span className='ml-2'>🥟</span>
                            </button>
                        </div>

                        <div className="flex-none mb-2 mr-2 md:pb-4 rounded-lg">
                            <button className='relative btn-tag bg-gray-light disabled:bg-gray-light hover:text-white active:text-white text-dark-green active:bg-green hover:bg-green px-5 rounded-full text-sm'>
                              <span className='mr-2'>Greek</span> 
                              <span className='inset-y-0 absolute py-4 border-l-2 border-white'></span>
                              <span className='ml-2'>🥙</span>
                            </button>
                        </div>

                        <div className="flex-none mb-2 mr-2 md:pb-4 rounded-lg">
                            <button className='relative btn-tag bg-gray-light disabled:bg-gray-light hover:text-white active:text-white text-dark-green active:bg-green hover:bg-green px-5 rounded-full text-sm'>
                              <span className='mr-2'>French</span> 
                              <span className='inset-y-0 absolute py-4 border-l-2 border-white'></span>
                              <span className='ml-2'>🥐</span>
                            </button>
                        </div>

                        <div className="flex-none mb-2 mr-2 md:pb-4 rounded-lg">
                            <button className='relative btn-tag bg-gray-light disabled:bg-gray-light hover:text-white active:text-white text-dark-green active:bg-green hover:bg-green px-5 rounded-full text-sm'>
                              <span className='mr-2'>American</span> 
                              <span className='inset-y-0 absolute py-4 border-l-2 border-white'></span>
                              <span className='ml-2'>🍔</span>
                            </button>
                        </div>

                        <div className="flex-none mb-2 mr-2 md:pb-4 rounded-lg">
                            <button className='relative btn-tag bg-gray-light disabled:bg-gray-light hover:text-white active:text-white text-dark-green active:bg-green hover:bg-green px-5 rounded-full text-sm'>
                              <span className='mr-2'>German</span> 
                              <span className='inset-y-0 absolute py-4 border-l-2 border-white'></span>
                              <span className='ml-2'>🥨</span>
                            </button>
                        </div>

                        <div className="flex-none mb-2 mr-2 md:pb-4 rounded-lg">
                            <button className='relative btn-tag bg-gray-light disabled:bg-gray-light hover:text-white active:text-white text-dark-green active:bg-green hover:bg-green px-5 rounded-full text-sm'>
                              <span className='mr-2'>British</span> 
                              <span className='inset-y-0 absolute py-4 border-l-2 border-white'></span>
                              <span className='ml-2'>🫖</span>
                            </button>
                        </div>
                      </div>
                    </div>
                    
                  </div>
                </div>
            </section> */}
        







            {/* <section className='mb-6'>

              <div className='pl-4'>
                <div className='pr-4 pb-3 flex justify-between items-center font-bold'>
                  <h1 className='text-dark-green text-lg font-bold'>Category</h1>
                  <div className='text-green text-xs'>See all</div>
                </div>
                <div className='flex overflow-auto gap-3 md:gap-4 lg:gap-6'>
                  <div className="flex-none">
                    <div className='flex'>
                            <div className="flex-none mb-2 md:pb-4 rounded-lg">
                                <button className='btn-tag bg-green hover:bg-green text-white px-5 py-2 rounded-full text-sm hover:scale-105 duration-500 cursor-pointer' onClick={fetchRecipes}>Breakfast</button>
                            </div>
                    </div>
                  </div>
                  <div className="flex-none">
                    <div className='flex gap-3'>
                            <div className="flex-none mb-2 md:pb-4 rounded-lg">
                                <button className='btn-tag bg-green hover:bg-green text-white px-5 py-2 rounded-full text-sm hover:scale-105 duration-500 cursor-pointer' onClick={fetchRecipes}>ciaociaooo</button>
                            </div>
                    </div>
                  </div>
                  <div className="flex-none">
                    <div className='flex gap-3'>
                            <div className="flex-none mb-2 md:pb-4 rounded-lg">
                                <button className='btn-tag bg-green hover:bg-green text-white px-5 py-2 rounded-full text-sm hover:scale-105 duration-500 cursor-pointer' onClick={fetchRecipes}>hola</button>
                            </div>
                    </div>
                  </div>
                  <div className="flex-none">
                    <div className='flex gap-3'>
                            <div className="flex-none mb-2 md:pb-4 rounded-lg">
                                <button className='btn-tag bg-green hover:bg-green text-white px-5 py-2 rounded-full text-sm hover:scale-105 duration-500 cursor-pointer' onClick={fetchRecipes}>Bast</button>
                            </div>
                    </div>
                  </div>
                  <div className="flex-none">
                    <div className='flex gap-3'>
                            <div className="flex-none mb-2 md:pb-4 rounded-lg">
                                <button className='btn-tag bg-green hover:bg-green text-white px-5 py-2 rounded-full text-sm hover:scale-105 duration-500 cursor-pointer' onClick={fetchRecipes}>asfast</button>
                            </div>
                    </div>
                  </div>
                  <div className="flex-none">
                    <div className='flex gap-3'>
                            <div className="flex-none mb-2 md:pb-4 rounded-lg">
                                <button className='btn-tag bg-green hover:bg-green text-white px-5 py-2 rounded-full text-sm hover:scale-105 duration-500 cursor-pointer' onClick={fetchRecipes}>Breakfast</button>
                            </div>
                    </div>
                  </div>
                  <div className="flex-none">
                    <div className='flex gap-3'>
                            <div className="flex-none mb-2 md:pb-4 rounded-lg">
                                <button className='btn-tag bg-green hover:bg-green text-white px-5 py-2 rounded-full text-sm hover:scale-105 duration-500 cursor-pointer' onClick={fetchRecipes}>dfg</button>
                            </div>
                    </div>
                  </div>
              
                </div>
              </div>
            </section> */}




            {/* CHECK FINALE CON TAILWIND, poi aggiungi nel componente vertical card */}
            {/* <section class="flex overflow-x-auto pl-4 mb-3">
              <div className="flex-none">
                <div className='flex gap-3'>
                  <div className="bg-white rounded-xl drop-shadow hover:scale-105 duration-500 cursor-pointer px-3 pb-4">
                    <div className="p-4 h-fit">
                      <img className="h-auto w-auto hover:transition hover:duration-300 hover:object-none hover:object-center rounded-xl contrast-[1.1] saturate-[1.4]" src="https://spoonacular.com/recipeImages/511728-312x231.jpg" alt="content"/>
                    </div>
                    <div className="px-4 py-2"> 
                      <h2 className="text-sm pb-1 font-semibold text-dark-green mb-1">
                          Readers
                      </h2>
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
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-none">
                <div className='flex gap-3'>
                  <div className="bg-white rounded-xl drop-shadow hover:scale-105 duration-500 cursor-pointer px-3 pb-4">
                    <div className="p-4 h-fit">
                      <img className="h-auto w-auto hover:transition hover:duration-300 hover:object-none hover:object-center rounded-xl contrast-[1.1] saturate-[1.4]" src="https://spoonacular.com/recipeImages/511728-312x231.jpg" alt="content"/>
                    </div>
                    <div className="px-4 py-2"> 
                      <h2 className="text-sm pb-1 font-semibold text-dark-green mb-1">
                          Readers
                      </h2>
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
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-none">
                <div className='flex gap-3'>
                  <div className="bg-white rounded-xl drop-shadow hover:scale-105 duration-500 cursor-pointer px-3 pb-4">
                    <div className="p-4 h-fit">
                      <img className="h-auto w-auto hover:transition hover:duration-300 hover:object-none hover:object-center rounded-xl contrast-[1.1] saturate-[1.4]" src="https://spoonacular.com/recipeImages/511728-312x231.jpg" alt="content"/>
                    </div>
                    <div className="px-4 py-2"> 
                      <h2 className="text-sm pb-1 font-semibold text-dark-green mb-1">
                          Readers
                      </h2>
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
                    </div>
                  </div>
                </div>
              </div>
              
              

            </section> */}


            {/* CHECK CON TAILWIND DIRETTAMENTE */}
            {/* <section className='mt-4 -mb-3'>
              <div className='not-prose relative bg-slate-50 rounded-xl overflow-hidden dark:bg-slate-800/25'>
                <div style="background-position: 10px 10px;"
                    className='absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]'>
                </div>
                <div className='relative rounded-xl overflow-auto'>
                  <div className='max-w-md mx-auto bg-white shadow-xl min-w-0 dark:bg-slate-800 dark:highlight-white/5'>
                    <div className='overflow-x-auto flex'>
                      <div className='flex-none py-6 px-3 first:pl-6 last:pr-6'>
                        <div className='flex flex-col items-center justify-center gap-3'>
                          
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section> */}

            {/* <section className=''>
              <div className='px-4 pb-3 flex justify-between items-center font-bold'>
                <h1 className='text-dark-green text-lg font-bold'>Popular Recipes</h1>
                <div className='text-green text-xs'>See all</div>
              </div>

              <div className='items-stretch grid 2xl:grid-cols-7 xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 md:gap-x-10 md:gap-y-10 sm:gap-x-8 sm:gap-y-8 gap-x-2 gap-y-2 text-white px-4'>
                {recipes.results.map((recipe) => {
                return (
                  <VerticalCard key={recipe.id} recipe={recipe} className=" "/>
                    )
                  })
                }
              </div>
            </section>
          </div>
        
        </div> */}



        {/* NEW: TEST AGGIUNGENDO LINK E ACIVE SUL ROUTING: bottoni homepage */}
                      {/* <div id="scrollContainer"
                          className="flex flex-no-wrap overflow-x-scroll scrolling-touch items-center mb-4" >
                          <div className="flex-none mb-2 mr-2 md:py-4 rounded-lg">
                              <Link href="/recipe" legacyBehavior>
                                <a className={router.pathname == "/recipe" ? "active-btn btn-tag active:hover:text-white hover:bg-green px-5 py-2 rounded-full text-sm" : "deactive-btn btn-tag  hover:bg-green px-5 py-2 rounded-full text-sm"}
                                  onClick={handleActive}>
                                      Breakfast
                                </a>                            
                              </Link>
                          </div>
                          
                          <div
                            className="flex-none mr-2 md:py-4 rounded-lg">
                              <Link href="/recipe" legacyBehavior>
                                <button className={ router.pathname == "/recipe" ? "active-btn btn-tag  hover:bg-green px-5 py-2 rounded-full text-sm" : "deactive-btn btn-tag  hover:bg-green px-5 py-2 rounded-full text-sm"}
                                  onClick={handleActive}>
                                      prova
                                </button>                            
                              </Link>
                          </div>
                          
                        </div> */}







            {/* <section className='mb-3'>
              <div className='px-4 flex justify-between items-center font-bold'>
                <h1 className='text-dark-green text-lg font-bold'>Category</h1>
                <div className='text-green text-xs'>See all</div>
              </div>
              <div className='pl-4'>
                // container flex-grow w-full mx-auto
                  <div className="">
                    <div className="">
                      <div className="container">
                        <div className="flex flex-no-wrap overflow-x-auto gap-3 scrolling-touch items-start mb-4">

                          <button onClick={fetchRecipes}
                                  className="my-6 px-5  py-2.5 flex-none text-white bg-green rounded-full text-sm hover:scale-105 duration-500 cursor-pointer">
                            Breakfast
                          </button>

                          <button onClick={fetchRecipes}
                                  className="my-6 px-5  py-2.5 flex-none hover:text-white bg-gray-light hover:bg-green active:bg-green rounded-full text-sm hover:scale-105 duration-500 cursor-pointer">
                                Main course
                          </button>

                          <button onClick={fetchRecipes}
                                  className="my-6 px-5  py-2.5 flex-none hover:text-white bg-gray-light hover:bg-green rounded-full text-sm hover:scale-105 duration-500 cursor-pointer">
                          Snack
                          </button>

                          <button onClick={fetchRecipes}
                                  className="my-6 px-5  py-2.5 flex-none hover:text-white bg-gray-light hover:bg-green rounded-full text-sm hover:scale-105 duration-500 cursor-pointer">
                          Dinner
                          </button>

                          <button onClick={fetchRecipes}
                                  className="my-6 px-5  py-2.5 flex-none hover:text-white bg-gray-light hover:bg-green rounded-full text-sm hover:scale-105 duration-500 cursor-pointer">
                          Dessert
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                
              </div>
            </section> */}



        {/* LIST PAGE */}
        {/* <div className=''>
            <div>
              <div className='px-4 mb-6 mt-16 flex justify-between items-center'>
                  <button className='hover:scale-105 bg-white rounded-lg p-1 shadow-md'><ChevronLeftIcon className='hover:animate-pulse h-6 w-6'/></button>
                  <div className='flex-1 bg-white'></div>
                  <div className='flex-auto p-1 font-bold text-xl'>LIST</div>
              </div>
            </div>
          
            <div className='px-4 mb-8'>
              <h2 className='font-bold text-xl text-[#0A2533]'>My ingredients list:</h2>
            </div>

            <section className='px-4'>
              <div className='flex items-center space-x-2 my-3'>
                <input type="checkbox" className="appearance-none enabled:ring-green checked:ring-green text-green border-[#DEDCDC] checked:bg-gray-mid indeterminate:bg-gray-300 rounded-md h-6 w-6 mr-2" />
                <p className='text-dark-green text-sm'>Lime</p>
              </div>
              <hr></hr>
              <div className='flex items-center space-x-2 my-3'>
                <input type="checkbox" className="appearance-none enabled:ring-green checked:ring-green text-green border-[#DEDCDC] checked:bg-gray-mid rounded-md h-6 w-6 mr-2" />
                <p className='text-dark-green text-sm'>Bread</p>
              </div>
              <hr></hr>
              <div className='flex items-center justify-between'>
                <div className='flex items-center space-x-2 my-3'>
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
              <hr></hr>
              <div className='flex items-center justify-between'>
                <div className='flex items-center space-x-2 my-3'>
                  <input type="checkbox" className="appearance-none enabled:ring-green checked:ring-green text-green border-[#DEDCDC] checked:bg-gray-mid rounded-md h-6 w-6 mr-2" />
                  <p className='text-dark-green text-sm'>Orange juice</p>
                </div>
                <div className='flex text-dark-green space-x-2 text-sm '>
                  <button>
                    <MinusCircleIcon className='transition duration-300 hover:scale-110 h-5 w-5 text-green'/>
                  </button>
                  <p className=' text-dark-green'>0</p>
                  <button>
                    <PlusCircleIcon className='transition duration-300 hover:scale-110 h-5 w-5 text-green' />
                  </button>
                  <button>
                    <TrashIcon className='transition duration-300 hover:scale-110 h-5 w-5 text-red-500' />
                  </button>
                </div>
              </div>
              <hr></hr>
              <div className='flex items-center justify-between'>
                <div className='flex items-center space-x-2 my-3'>
                  <input type="checkbox" className="appearance-none enabled:ring-green checked:ring-green text-green border-[#DEDCDC] checked:bg-gray-mid rounded-md h-6 w-6 mr-2" />
                  <p className='text-dark-green text-sm'>Paprika</p>
                </div>
                <div className='flex text-dark-green space-x-2 text-sm '>
                  <button>
                    <MinusCircleIcon className=' transition duration-300 hover:scale-110 h-5 w-5 text-green'/>
                  </button>
                  <p className=' text-dark-green'>1</p>
                  <button>
                    <PlusCircleIcon className='transition duration-300 hover:scale-110 solid h-5 w-5 text-white fill-green' />
                  </button>
                  <button>
                    <TrashIcon className='transition duration-300 hover:scale-110 h-5 w-5 text-red-500' />
                  </button>
                  
                </div>
              </div>
              <hr></hr>
              <div className='flex items-center justify-between'>
                <div className='flex items-center space-x-2 my-3'>
                  <input type="checkbox" className="appearance-none enabled:ring-green checked:ring-green text-green border-[#DEDCDC] checked:bg-gray-mid rounded-md h-6 w-6 mr-2" />
                  <p className='text-gray text-sm line-through'>Avocado</p>
                </div>
                <div className='flex text-dark-green space-x-2 text-sm '>
                  <p className=' text-gray'>4</p>
                  <p className=' text-dark-green'>🥑</p>
                </div>
              </div>
              <hr></hr>
              <div className='flex items-center justify-between'>
                <div className='flex items-center space-x-2 my-3'>
                  <input type="checkbox" className="appearance-none enabled:ring-green checked:ring-green text-green border-[#DEDCDC] checked:bg-gray-mid rounded-md h-6 w-6 mr-2" />
                  <p className='text-gray text-sm line-through'>Tomatoes</p>
                </div>
                <div className='flex text-dark-green space-x-2 text-sm '>
                  <p className=' text-gray'>1</p>
                  <p className=' text-dark-green'>🍅</p>
                </div>
              </div>
            </section>

            <div className='mt-36 px-4 flex items-center'>
              <label className="flex-1  block">
                <span className="sr-only">Search</span>
                <input style={{borderWidth: 0}}
                  className="flex-1 placeholder:text-sm placeholder:text-gray block  bg-gray-lighter w-full  rounded-lg py-2 pr-3 shadow-md focus:outline-none 
                  focus:border-green focus:ring-green focus:ring-1 sm:text-sm" 
                  placeholder="Type the first ingredient" type="text" name="search"/>
              </label>
              <button className="drop-shadow-lg drop-shadow-white hover:shadow-[#A4D3C5] hover:bg-[#55a78e] duration-500 hover:scale-105 ml-3 px-4 py-2 bg-green text-sm text-white rounded-lg">
                Add
              </button>
            </div>



            <div className='pt-8'>
              <hr className='text-gray-line'></hr>
              <div className='pt-6 px-10 flex justify-between items-center text-sm'>
                <HomeIcon className='h-6 w-6 mr-1 text-gray' />
                <ClipboardIcon className='h-6 w-6 mr-1  text-green' />
                <MagnifyingGlassIcon className='h-6 w-6 mr-1 text-gray' />
                <UserIcon className='h-6 w-6 mr-1 text-gray' />
              </div>
            </div>
          </div> */}


          // start SEARCH SECTION
          // CUISINE BUTTONS
          {/* <div className="flex-none mb-4 mr-2 md:pb-4 rounded-lg">
                            <button className='relative btn-tag bg-green hover:bg-green text-white px-5 rounded-full text-sm'>
                              <span className='mr-2'>Italian</span> 
                              <span className='inset-y-0 absolute py-4 border-l-2 border-white'></span>
                              <span className='ml-2'>🍕</span>
                            </button>
                        </div> */}

                  {/* <div className="flex-none mb-4  mr-2 md:pb-4 rounded-lg">
                            <button className='relative btn-tag bg-gray-light disabled:bg-gray-light hover:text-white active:text-white text-dark-green active:bg-green hover:bg-green px-5 rounded-full text-sm'>
                              <span className='mr-2'>Spanish</span> 
                              <span className='inset-y-0 absolute py-4 border-l-2 border-white'></span>
                              <span className='ml-2'>🥘</span>
                            </button>
                        </div>

                        <div className="flex-none mb-4 mr-2 md:pb-4 rounded-lg">
                            <button className='relative btn-tag bg-gray-light disabled:bg-gray-light hover:text-white active:text-white text-dark-green active:bg-green hover:bg-green px-5 rounded-full text-sm'>
                              <span className='mr-2'>Japanese</span> 
                              <span className='inset-y-0 absolute py-4 border-l-2 border-white'></span>
                              <span className='ml-2'>🍱</span>
                            </button>
                        </div>

                        <div className="flex-none mb-4 mr-2 md:pb-4 rounded-lg">
                            <button className='relative btn-tag bg-gray-light disabled:bg-gray-light hover:text-white active:text-white text-dark-green active:bg-green hover:bg-green px-5 rounded-full text-sm'>
                              <span className='mr-2'>India</span> 
                              <span className='inset-y-0 absolute py-4 border-l-2 border-white'></span>
                              <span className='ml-2'>🍛</span>
                            </button>
                        </div>

                        <div className="flex-none mb-4 mr-2 md:pb-4 rounded-lg">
                            <button className='relative btn-tag bg-gray-light disabled:bg-gray-light hover:text-white active:text-white text-dark-green active:bg-green hover:bg-green px-5 rounded-full text-sm'>
                              <span className='mr-2'>Mexican</span> 
                              <span className='inset-y-0 absolute py-4 border-l-2 border-white'></span>
                              <span className='ml-2'>🌮</span>
                            </button>
                        </div>

                        <div className="flex-none mb-4 mr-2 md:pb-4 rounded-lg">
                            <button className='relative btn-tag bg-gray-light disabled:bg-gray-light hover:text-white active:text-white text-dark-green active:bg-green hover:bg-green px-5 rounded-full text-sm'>
                              <span className='mr-2'>Middle Eastern</span> 
                              <span className='inset-y-0 absolute py-4 border-l-2 border-white'></span>
                              <span className='ml-2'>🧆</span>
                            </button>
                        </div>

                        <div className="flex-none mb-4 mr-2 md:pb-4 rounded-lg">
                            <button className='relative btn-tag bg-gray-light disabled:bg-gray-light hover:text-white active:text-white text-dark-green active:bg-green hover:bg-green px-5 rounded-full text-sm'>
                              <span className='mr-2'>Chinese</span> 
                              <span className='inset-y-0 absolute py-4 border-l-2 border-white'></span>
                              <span className='ml-2'>🥟</span>
                            </button>
                        </div>

                        <div className="flex-none mb-4 mr-2 md:pb-4 rounded-lg">
                            <button className='relative btn-tag bg-gray-light disabled:bg-gray-light hover:text-white active:text-white text-dark-green active:bg-green hover:bg-green px-5 rounded-full text-sm'>
                              <span className='mr-2'>Greek</span> 
                              <span className='inset-y-0 absolute py-4 border-l-2 border-white'></span>
                              <span className='ml-2'>🥙</span>
                            </button>
                        </div>

                        <div className="flex-none mb-4 mr-2 md:pb-4 rounded-lg">
                            <button className='relative btn-tag bg-gray-light disabled:bg-gray-light hover:text-white active:text-white text-dark-green active:bg-green hover:bg-green px-5 rounded-full text-sm'>
                              <span className='mr-2'>French</span> 
                              <span className='inset-y-0 absolute py-4 border-l-2 border-white'></span>
                              <span className='ml-2'>🥐</span>
                            </button>
                        </div>

                        <div className="flex-none mb-4 mr-2 md:pb-4 rounded-lg">
                            <button className='relative btn-tag bg-gray-light disabled:bg-gray-light hover:text-white active:text-white text-dark-green active:bg-green hover:bg-green px-5 rounded-full text-sm'>
                              <span className='mr-2'>American</span> 
                              <span className='inset-y-0 absolute py-4 border-l-2 border-white'></span>
                              <span className='ml-2'>🍔</span>
                            </button>
                        </div>

                        <div className="flex-none mb-4 mr-2 md:pb-4 rounded-lg">
                            <button className='relative btn-tag bg-gray-light disabled:bg-gray-light hover:text-white active:text-white text-dark-green active:bg-green hover:bg-green px-5 rounded-full text-sm'>
                              <span className='mr-2'>German</span> 
                              <span className='inset-y-0 absolute py-4 border-l-2 border-white'></span>
                              <span className='ml-2'>🥨</span>
                            </button>
                        </div>
                        
                        <div className="flex-none mb-4 mr-2 md:pb-4 rounded-lg">
                            <button className='relative btn-tag bg-gray-light disabled:bg-gray-light hover:text-white active:text-white text-dark-green active:bg-green hover:bg-green px-5 rounded-full text-sm'>
                              <span className='mr-2'>British</span> 
                              <span className='inset-y-0 absolute py-4 border-l-2 border-white'></span>
                              <span className='ml-2'>🫖</span>
                            </button>
                        </div> */}

          // end SEARCH SECTION
                        // OLD
          {/* <button class="flex-none mr-2 md:pb-4 px-5 py-2 rounded-full text-sm hover:duration-300 hover:bg-green active:bg-green bg-gray-light disabled:bg-gray-light flex divide-x-2 divide-white hover:text-white active:text-white text-dark-green ...">
                          <div className='pr-2'>Greek</div>
                          <div className='pl-2'>🥙</div>
                        </button> */}

        {/* <div className='pl-4 mb-8 flex justify-between'>
                  <button className='bg-green text-white px-4 py-2 rounded-full text-sm'>Smoothie | 🍹</button>
                  <button className='bg-gray-light text-dark-green px-4 py-2 rounded-full text-sm'>Snack | 🍿</button>
                  <button className='bg-gray-light text-dark-green px-4 py-2 rounded-full text-sm'>Salad | 🥗</button>
            </div> */}

          // CUISINE BUTTONS