import React from 'react'
import Head from 'next/head'
import { useState } from 'react'
import VerticalCard from '@/components/VerticalCard'
import { Inter } from '@next/font/google'
import Image from 'next/image'
import HorizontalCardHome from '@/components/HorizontalCardHome'
import Modal from '@/components/Modal'
import { useRouter } from 'next/router';
import DesktopNavbar from '@/components/DesktopNavbar'
import RecipeVerticalCard from '@/components/RecipeVerticalCard'
import Link from 'next/link'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const router = useRouter();

  const [recipes, setrecipes] = useState({results:[
    {
        "id": 716429,
        "title": "Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs",
        "image": "https://spoonacular.com/recipeImages/716429-556x370.jpg",
        "imageType": "jpg"
    },
    {
        "id": 715538,
        "title": "Bruschetta Style",
        "image": "https://spoonacular.com/recipeImages/715538-312x231.jpg",
        "imageType": "jpg"
    },
    {
      "id": 7,
      "title": "Caprese Pasta",
      "image": "https://spoonacular.com/recipeImages/511728-312x231.jpg",
      "imageType": "jpg"
    },
    {
        "id": 38,
        "title": "Smoothie",
        "image": "https://spoonacular.com/recipeImages/655235-312x231.jpg",
        "imageType": "jpg"
    }
]});

  const type = ["breakfast", "main course", "snack", "dinner", "dessert", "soup", "salad", "appetizer", "beverage", "sauce", "drink" ]

  const fetchRecipes = async () => {
  // const response = await fetch("https://api.spoonacular.com/recipes/complexSearch?apiKey=5ea4af906f4443dba9c723a359aa6533&type=${type}");
  // const data = await response.json();
  
  const response = `{
      "offset": 0,
      "number": 2,
      "results": [
          {
              "id": 716429,
              "title": "Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs",
              "image": "https://spoonacular.com/recipeImages/716429-556x370.jpg",
              "imageType": "jpg"
          },
          {
              "id": 715538,
              "title": "Bruschetta Style",
              "image": "https://spoonacular.com/recipeImages/715538-312x231.jpg",
              "imageType": "jpg"
          },
          {
            "id": 7,
            "title": "Caprese Pasta",
            "image": "https://spoonacular.com/recipeImages/511728-312x231.jpg",
            "imageType": "jpg"
          },
          {
              "id": 38,
              "title": "Smoothie",
              "image": "https://spoonacular.com/recipeImages/655235-312x231.jpg",
              "imageType": "jpg"
          }
      ],
      "totalResults": 86
  }`
  const data = JSON.parse(response);

  setrecipes(data);
};

  const [active, setActive] = useState("active-btn")
    const handleActive = () => {
    setActive("deactive-btn")
  }

  return (
    <>
      <Head>
        <title>Avocado Tribe App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* HOME SECTION */}
      <div>
        
        {/* <DesktopNavbar /> */}

          <div className=" mb-8">
            <div className='mt-14 mb-6 pl-4 text-dark-green text-xl font-bold'>
              Hello 👋
            </div>
            
            <section className='mb-6'>
              <div className='px-4 pb-3 flex justify-between items-center font-bold'>
                <h1 className='text-dark-green text-lg font-bold'>Getting Inspired</h1>
              </div>
              <div className='flex-grow w-full mx-auto'>
                  <div className="pl-4">
                    <div className="my-4">
                      <div className="">
                        <div className="flex flex-no-wrap overflow-x-auto gap-3 lg:gap-6 scrolling-touch items-start mb-4">

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
            </section>

            <section className='mb-3'>
              <div className='px-4 flex justify-between items-center font-bold'>
                <h1 className='text-dark-green text-lg font-bold'>Category</h1>
                {/* <Link href="/allRecipes" className='text-green text-xs'>See all</Link> */}
              </div>
              <div className='flex-grow w-full mx-auto'>
                  <div className="pl-4">
                    <div className="my-4">
                      <div className="">
                        <div className=" flex flex-no-wrap overflow-x-auto gap-3 scrolling-touch items-start mb-4">

                          <button onClick={fetchRecipes}
                                  className="mb-4 px-5  py-2.5 flex-none text-white bg-green rounded-full text-sm hover:scale-105 duration-500 cursor-pointer">
                            Breakfast
                          </button>

                          <button onClick={fetchRecipes}
                                  className="mb-4 px-5  py-2.5 flex-none hover:text-white bg-gray-light hover:bg-green active:bg-green rounded-full text-sm hover:scale-105 duration-500 cursor-pointer">
                                Main course
                          </button>

                          <button onClick={fetchRecipes}
                                  className="mb-4 px-5  py-2.5 flex-none hover:text-white bg-gray-light hover:bg-green rounded-full text-sm hover:scale-105 duration-500 cursor-pointer">
                          Snack
                          </button>

                          <button onClick={fetchRecipes}
                                  className="mb-4 px-5  py-2.5 flex-none hover:text-white bg-gray-light hover:bg-green rounded-full text-sm hover:scale-105 duration-500 cursor-pointer">
                          Dinner
                          </button>

                          <button onClick={fetchRecipes}
                                  className="mb-4 px-5  py-2.5 flex-none hover:text-white bg-gray-light hover:bg-green rounded-full text-sm hover:scale-105 duration-500 cursor-pointer">
                          Dessert
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                
              </div>
            </section>


            <section className='mb-6'>
              <div className='px-4 pb-3 flex justify-between items-center font-bold'>
                <h1 className='text-dark-green text-lg font-bold'>Popular Recipes</h1>
                {/* <Link href="/allRecipes" className='text-green text-xs'>See all</Link> */}
              </div>

              <div className='flex-grow w-full mx-auto'>
                  <div className="pl-4">
                    <div className="my-4">
                      <div className="">
                        <div className="flex flex-no-wrap overflow-x-auto gap-3 lg:gap-6 scrolling-touch items-start mb-4">

                          {recipes.results.map((recipe) => {
                            return (
                              <VerticalCard key={recipe.id} recipe={recipe} className=" "/>
                                )
                              })
                          }
                          
                        </div>
                      </div>
                    </div>
                  </div>
                
              </div>
            </section>
          
          </div>
      </div>

      
            {/* ROUTING PAGE WITH SEE RECIPES/CATEGORY ALL E CHE APRE TUTTE LE RICETTE CLICCANDO LA CARD
            DI GETTING INSPIRED */}
            {/* <section className=''>
              <div className='px-4 pb-3 flex justify-between items-center font-bold'>
                <h1 className='text-dark-green text-lg font-bold'>Popular Recipes</h1>
                <div className='text-green text-xs'>See all</div>
              </div>

              <div className='items-stretch grid 2xl:grid-cols-7 xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 md:gap-x-10 md:gap-y-10 sm:gap-x-8 sm:gap-y-8 gap-x-2 gap-y-2 text-white px-4'>
                {recipes.results.map((recipe) => {
                return (
                  <RecipeVerticalCard key={recipe.id} recipe={recipe} className=" "/>
                    )
                  })
                }
              </div>
            </section> */}




            {/* <div className="App ">
              <Modal />
            </div> */}


        {/* PAGINA RICETTA: dopo aver cliccato ricette sulla home o su cerca */}
        {/* <div>
          <div className=''> */}
            {/* <div className='px-4 mt-16 flex justify-between items-center'>
              <div className='bg-gray-mid rounded-lg p-1'><ChevronLeftIcon className='h-6 w-6'/></div>
              <div className='bg-gray-mid rounded-lg p-1'><HeartIcon className='h-6 w-6 text-green'/></div>
            </div> */}
            {/* <Image src="/avocado.jpg" width="130" height="130"/> */}
            {/* <div className="bg-cover bg-center" style={{backgroundImage: url('/avocado.jpg')}}></div> */}
            {/* <div className="bg-[url('/avocado.jpg')]"></div>

            <div className='pt-28'></div>
            <div className=' rounded-t-3xl'> */}
              {/* <section className='px-4 pb-4 '>
                <div className='flex justify-between items-baseline'>
                  <h1 className=' mb-6 text-dark-green text-xl font-bold'>
                    Avocado Toast
                  </h1>
                  <p className='flex text-gray'>
                    <ClockIcon className='h-4 w-4 mr-1' />
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
                      <div className='bg-gray-mid rounded-lg p-1 mr-2'><FireIcon className='h-5 w-5'/></div>
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
              </section> */}

              {/* INGREDIENTS SECTION */}
              {/* <section className='px-4'>
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
              </section> */}


              {/* INSTRUCTIONS SECTION */}
              {/* <section>
                <div className='px-4 flex justify-between items-baseline'>
                  <h1 className=' mb-6 text-dark-green text-xl font-bold'>
                    Instructions
                  </h1>
                  <p className='flex text-gray'>
                    <span className='font-light text-xs'>4 steps</span>
                  </p>
                </div>

                <div className='mb-4 mx-4 flex items-center text-sm font-medium'>
                      <div className='bg-green text-white rounded-lg h-6 w-6 mr-2 flex items-center justify-center'><span>1</span></div>
                      <p>Mash your avocado separately.</p>
                </div>
                <div className='mb-4 mx-4 flex items-center text-sm font-medium'>
                      <div className='bg-green text-white rounded-lg h-6 w-6 mr-2 flex items-center justify-center'><span>2</span></div>
                      <p>Slice cherry tomatoes and add salt and pepper.</p>
                </div>
                <div className='mb-4 mx-4 flex items-center text-sm font-medium'>
                      <div className='bg-green text-white rounded-lg h-6 w-6 mr-2 flex items-center justify-center'><span>3</span></div>
                      <p>Buy good bread and toast it well. It offers a sturdy base and a crisp contrast against the creamy avocado.</p>
                </div>
                <div className='mb-4 mx-4 flex items-center text-sm font-medium'>
                      <div className='bg-green text-white rounded-lg h-6 w-6 mr-2 flex items-center justify-center'><span>4</span></div>
                      <p>Don’t forget lime and paprika. </p>
                </div>
              </section> */}
            {/* </div>
          </div> */}
          {/* <div className='pt-8'>
            <hr className='text-gray-line'></hr>
            <div className='pt-6 px-10 flex justify-between items-center text-sm'>
              <HomeIcon className='h-6 w-6 mr-1 text-green' />
              <ClipboardIcon className='h-6 w-6 mr-1 text-gray' />
              <MagnifyingGlassIcon className='h-6 w-6 mr-1 text-gray' />
              <UserIcon className='h-6 w-6 mr-1 text-gray' />
            </div>
          </div>
        </div> */}

          
      {/* </main> */}
    </>
  )
}
