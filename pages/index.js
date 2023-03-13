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
import CategoryHomeButtons from '@/components/CategoryHomeButtons'


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


const fetchRecipes = async (type) => {
  // const fetchRecipes = async (type) => {
  console.log(type)
  // const response = await fetch("https://api.spoonacular.com/recipes/complexSearch?apiKey=5ea4af906f4443dba9c723a359aa6533&type=${type}&number=3");
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
  
  // PRIMA QUERY DELLA HOME quando clicca sulla card di getting inspired es. "Pasta", "Pizza",  "Curry" ecc ecc
  // https://api.spoonacular.com/recipes/complexSearch?query=pasta&number=3
  // const categoryTypeHome = ["breakfast", "snack", "dinner", "dessert", "soup", "salad", "appetizer", "beverage", "sauce", "drink" ]

  const categoryTypeHome = [
    {
      "id": 1,
      "type": "breakfast",
    },
    {
      "id": 2,
      "type": "snack",
    },
    {
      "id": 3,
      "type": "dinner",
    },
      {
      "id": 4,
      "type": "dessert",
    },
    {
      "id": 5,
      "type": "soup",
    },
    {
      "id": 6,
      "type": "salad",
    },
    {
      "id": 7,
      "type": "appetizer",
    },
      {
      "id": 8,
      "type": "beverage",
    },
    {
      "id": 7,
      "type": "sauce",
    },
      {
      "id": 8,
      "type": "drink",
    }
  ]

};

// API ENDPOINT DELLA RICETTA SINGOLA DI POPULAR RECIPES
// https://api.spoonacular.com/recipes/716429/information?includeNutrition=false
// {
//   "id": 716429,
//   "title": "Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs",
//   "image": "https://spoonacular.com/recipeImages/716429-556x370.jpg",
//   "imageType": "jpg",
//   "servings": 2,
//   "readyInMinutes": 45,
//   "license": "CC BY-SA 3.0",
//   "sourceName": "Full Belly Sisters",
//   "sourceUrl": "http://fullbellysisters.blogspot.com/2012/06/pasta-with-garlic-scallions-cauliflower.html",
//   "spoonacularSourceUrl": "https://spoonacular.com/pasta-with-garlic-scallions-cauliflower-breadcrumbs-716429",
//   "aggregateLikes": 209,
//   "healthScore": 19.0,
//   "spoonacularScore": 83.0,
//   "pricePerServing": 163.15,
//   "analyzedInstructions": [],
//   "cheap": false,
//   "creditsText": "Full Belly Sisters",
//   "cuisines": [],
//   "dairyFree": false,
//   "diets": [],
//   "gaps": "no",
//   "glutenFree": false,
//   "instructions": "",
//   "ketogenic": false,
//   "lowFodmap": false,
//   "occasions": [],
//   "sustainable": false,
//   "vegan": false,
//   "vegetarian": false,
//   "veryHealthy": false,
//   "veryPopular": false,
//   "whole30": false,
//   "weightWatcherSmartPoints": 17,
//   "dishTypes": [
//       "lunch",
//       "main course",
//       "main dish",
//       "dinner"
//   ],
//   "extendedIngredients": [
//       {
//           "aisle": "Milk, Eggs, Other Dairy",
//           "amount": 1.0,
//           "consitency": "solid",
//           "id": 1001,
//           "image": "butter-sliced.jpg",
//           "measures": {
//               "metric": {
//                   "amount": 1.0,
//                   "unitLong": "Tbsp",
//                   "unitShort": "Tbsp"
//               },
//               "us": {
//                   "amount": 1.0,
//                   "unitLong": "Tbsp",
//                   "unitShort": "Tbsp"
//               }
//           },
//           "meta": [],
//           "name": "butter",
//           "original": "1 tbsp butter",
//           "originalName": "butter",
//           "unit": "tbsp"
//       },
//       {
//           "aisle": "Produce",
//           "amount": 2.0,
//           "consitency": "solid",
//           "id": 10011135,
//           "image": "cauliflower.jpg",
//           "measures": {
//               "metric": {
//                   "amount": 473.176,
//                   "unitLong": "milliliters",
//                   "unitShort": "ml"
//               },
//               "us": {
//                   "amount": 2.0,
//                   "unitLong": "cups",
//                   "unitShort": "cups"
//               }
//           },
//           "meta": [
//               "frozen",
//               "thawed",
//               "cut into bite-sized pieces"
//           ],
//           "name": "cauliflower florets",
//           "original": "about 2 cups frozen cauliflower florets, thawed, cut into bite-sized pieces",
//           "originalName": "about frozen cauliflower florets, thawed, cut into bite-sized pieces",
//           "unit": "cups"
//       },
//       {
//           "aisle": "Cheese",
//           "amount": 2.0,
//           "consitency": "solid",
//           "id": 1041009,
//           "image": "cheddar-cheese.png",
//           "measures": {
//               "metric": {
//                   "amount": 2.0,
//                   "unitLong": "Tbsps",
//                   "unitShort": "Tbsps"
//               },
//               "us": {
//                   "amount": 2.0,
//                   "unitLong": "Tbsps",
//                   "unitShort": "Tbsps"
//               }
//           },
//           "meta": [
//               "grated",
//               "(I used romano)"
//           ],
//           "name": "cheese",
//           "original": "2 tbsp grated cheese (I used romano)",
//           "originalName": "grated cheese (I used romano)",
//           "unit": "tbsp"
//       },
//       {
//           "aisle": "Oil, Vinegar, Salad Dressing",
//           "amount": 1.0,
//           "consitency": "liquid",
//           "id": 1034053,
//           "image": "olive-oil.jpg",
//           "measures": {
//               "metric": {
//                   "amount": 1.0,
//                   "unitLong": "Tbsp",
//                   "unitShort": "Tbsp"
//               },
//               "us": {
//                   "amount": 1.0,
//                   "unitLong": "Tbsp",
//                   "unitShort": "Tbsp"
//               }
//           },
//           "meta": [],
//           "name": "extra virgin olive oil",
//           "original": "1-2 tbsp extra virgin olive oil",
//           "originalName": "extra virgin olive oil",
//           "unit": "tbsp"
//       },
//       {
//           "aisle": "Produce",
//           "amount": 5.0,
//           "consitency": "solid",
//           "id": 11215,
//           "image": "garlic.jpg",
//           "measures": {
//               "metric": {
//                   "amount": 5.0,
//                   "unitLong": "cloves",
//                   "unitShort": "cloves"
//               },
//               "us": {
//                   "amount": 5.0,
//                   "unitLong": "cloves",
//                   "unitShort": "cloves"
//               }
//           },
//           "meta": [],
//           "name": "garlic",
//           "original": "5-6 cloves garlic",
//           "originalName": "garlic",
//           "unit": "cloves"
//       },
//       {
//           "aisle": "Pasta and Rice",
//           "amount": 6.0,
//           "consitency": "solid",
//           "id": 20420,
//           "image": "fusilli.jpg",
//           "measures": {
//               "metric": {
//                   "amount": 170.097,
//                   "unitLong": "grams",
//                   "unitShort": "g"
//               },
//               "us": {
//                   "amount": 6.0,
//                   "unitLong": "ounces",
//                   "unitShort": "oz"
//               }
//           },
//           "meta": [
//               "(I used linguine)"
//           ],
//           "name": "pasta",
//           "original": "6-8 ounces pasta (I used linguine)",
//           "originalName": "pasta (I used linguine)",
//           "unit": "ounces"
//       },
//       {
//           "aisle": "Spices and Seasonings",
//           "amount": 2.0,
//           "consitency": "solid",
//           "id": 1032009,
//           "image": "red-pepper-flakes.jpg",
//           "measures": {
//               "metric": {
//                   "amount": 2.0,
//                   "unitLong": "pinches",
//                   "unitShort": "pinches"
//               },
//               "us": {
//                   "amount": 2.0,
//                   "unitLong": "pinches",
//                   "unitShort": "pinches"
//               }
//           },
//           "meta": [
//               "red"
//           ],
//           "name": "red pepper flakes",
//           "original": "couple of pinches red pepper flakes, optional",
//           "originalName": "couple of red pepper flakes, optional",
//           "unit": "pinches"
//       },
//       {
//           "aisle": "Spices and Seasonings",
//           "amount": 2.0,
//           "consitency": "solid",
//           "id": 1102047,
//           "image": "salt-and-pepper.jpg",
//           "measures": {
//               "metric": {
//                   "amount": 2.0,
//                   "unitLong": "servings",
//                   "unitShort": "servings"
//               },
//               "us": {
//                   "amount": 2.0,
//                   "unitLong": "servings",
//                   "unitShort": "servings"
//               }
//           },
//           "meta": [
//               "to taste"
//           ],
//           "name": "salt and pepper",
//           "original": "salt and pepper, to taste",
//           "originalName": "salt and pepper, to taste",
//           "unit": "servings"
//       },
//       {
//           "aisle": "Produce",
//           "amount": 3.0,
//           "consitency": "solid",
//           "id": 11291,
//           "image": "spring-onions.jpg",
//           "measures": {
//               "metric": {
//                   "amount": 3.0,
//                   "unitLong": "",
//                   "unitShort": ""
//               },
//               "us": {
//                   "amount": 3.0,
//                   "unitLong": "",
//                   "unitShort": ""
//               }
//           },
//           "meta": [
//               "white",
//               "green",
//               "separated",
//               "chopped"
//           ],
//           "name": "scallions",
//           "original": "3 scallions, chopped, white and green parts separated",
//           "originalName": "scallions, chopped, white and green parts separated",
//           "unit": ""
//       },
//       {
//           "aisle": "Alcoholic Beverages",
//           "amount": 2.0,
//           "consitency": "liquid",
//           "id": 14106,
//           "image": "white-wine.jpg",
//           "measures": {
//               "metric": {
//                   "amount": 2.0,
//                   "unitLong": "Tbsps",
//                   "unitShort": "Tbsps"
//               },
//               "us": {
//                   "amount": 2.0,
//                   "unitLong": "Tbsps",
//                   "unitShort": "Tbsps"
//               }
//           },
//           "meta": [
//               "white"
//           ],
//           "name": "white wine",
//           "original": "2-3 tbsp white wine",
//           "originalName": "white wine",
//           "unit": "tbsp"
//       },
//       {
//           "aisle": "Pasta and Rice",
//           "amount": 0.25,
//           "consitency": "solid",
//           "id": 99025,
//           "image": "breadcrumbs.jpg",
//           "measures": {
//               "metric": {
//                   "amount": 59.147,
//                   "unitLong": "milliliters",
//                   "unitShort": "ml"
//               },
//               "us": {
//                   "amount": 0.25,
//                   "unitLong": "cups",
//                   "unitShort": "cups"
//               }
//           },
//           "meta": [
//               "whole wheat",
//               "(I used panko)"
//           ],
//           "name": "whole wheat bread crumbs",
//           "original": "1/4 cup whole wheat bread crumbs (I used panko)",
//           "originalName": "whole wheat bread crumbs (I used panko)",
//           "unit": "cup"
//       }
//   ],
//   "summary": "Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs might be a good recipe to expand your main course repertoire. One portion of this dish contains approximately <b>19g of protein </b>,  <b>20g of fat </b>, and a total of  <b>584 calories </b>. For  <b>$1.63 per serving </b>, this recipe  <b>covers 23% </b> of your daily requirements of vitamins and minerals. This recipe serves 2. It is brought to you by fullbellysisters.blogspot.com. 209 people were glad they tried this recipe. A mixture of scallions, salt and pepper, white wine, and a handful of other ingredients are all it takes to make this recipe so scrumptious. From preparation to the plate, this recipe takes approximately  <b>45 minutes </b>. All things considered, we decided this recipe  <b>deserves a spoonacular score of 83% </b>. This score is awesome. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/cauliflower-gratin-with-garlic-breadcrumbs-318375\">Cauliflower Gratin with Garlic Breadcrumbs</a>, < href=\"https://spoonacular.com/recipes/pasta-with-cauliflower-sausage-breadcrumbs-30437\">Pasta With Cauliflower, Sausage, & Breadcrumbs</a>, and <a href=\"https://spoonacular.com/recipes/pasta-with-roasted-cauliflower-parsley-and-breadcrumbs-30738\">Pasta With Roasted Cauliflower, Parsley, And Breadcrumbs</a>.",
//   "winePairing": {
//       "pairedWines": [
//           "chardonnay",
//           "gruener veltliner",
//           "sauvignon blanc"
//       ],
//       "pairingText": "Chardonnay, Gruener Veltliner, and Sauvignon Blanc are great choices for Pasta. Sauvignon Blanc and Gruner Veltliner both have herby notes that complement salads with enough acid to match tart vinaigrettes, while a Chardonnay can be a good pick for creamy salad dressings. The Buddha Kat Winery Chardonnay with a 4 out of 5 star rating seems like a good match. It costs about 25 dollars per bottle.",
//       "productMatches": [
//           {
//               "id": 469199,
//               "title": "Buddha Kat Winery Chardonnay",
//               "description": "We barrel ferment our Chardonnay and age it in a mix of Oak and Stainless. Giving this light bodied wine modest oak character, a delicate floral aroma, and a warming finish.",
//               "price": "$25.0",
//               "imageUrl": "https://spoonacular.com/productImages/469199-312x231.jpg",
//               "averageRating": 0.8,
//               "ratingCount": 1.0,
//               "score": 0.55,
//               "link": "https://www.amazon.com/2015-Buddha-Kat-Winery-Chardonnay/dp/B00OSAVVM4?tag=spoonacular-20"
//           }
//       ]
//   }
// }


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
                          {/* {categoryTypeHome.map((type) => {
                            return (
                              <CategoryHomeButtons onClick={() => fetchRecipes({type})} key={type.id} className=" "/>
                                )
                              })
                          } */}
                          
                          {/* TO DO:  */}
                          {/* <button onClick={() => fetchRecipes("breakfast")}
                                  className="mb-4 px-5  py-2.5 flex-none text-white bg-green rounded-full text-sm hover:scale-105 duration-500 cursor-pointer">
                            Breakfast
                          </button> */}

                          {/* <button onClick={fetchRecipes}
                                  className="mb-4 px-5  py-2.5 flex-none hover:text-white bg-gray-light hover:bg-green active:bg-green rounded-full text-sm hover:scale-105 duration-500 cursor-pointer">
                                Salad
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
                          </button> */}
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
