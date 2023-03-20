import React from "react";
import Head from "next/head";
import { useState, useEffect } from "react";
import VerticalCard from "@/components/VerticalCard";
import { Inter } from "@next/font/google";
import Image from "next/image";
import HorizontalCardHome from "@/components/HorizontalCardHome";
import Modal from "@/components/Modal";
import { useRouter } from "next/router";
import DesktopNavbar from "@/components/DesktopNavbar";
import RecipeVerticalCard from "@/components/RecipeVerticalCard";
import Link from "next/link";
import CategoryHomeButtons from "@/components/CategoryHomeButtons";
import recipeJson from "@/components/recipeJson";
import vegetarianDishesJson from "@/components/vegetarianDishesJson";
import {VEGETARIAN_RECIPES_HOME, RECIPES_TYPE_URL, RECIPES } from "@/components/Constants"


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();


  const [vegetarianRecipeCards, setVegetarianRecipeCards] = useState(undefined);

  
  // 1° CHIAMATA ALLE API - VEGETARIAN che renderizza le recipe cards vegetariane
  useEffect(() => {
    async function fetchVegetarianRecipes(){
      const response = await fetch(VEGETARIAN_RECIPES_HOME)      
      if(!response.ok){
        return <div>Oops! Something went wrong: the server did not return the recipes... </div>
      }
      
      const data = await response.json()
      setVegetarianRecipeCards(data);
    }
    fetchVegetarianRecipes()
  }, [])
  
  // const fetchVegetarianRecipes = async () => {
    //   // const fetchRecipes = async (type) => {
      //   console.log();
      //   //1) DA AGGIUNGERE A QUESTO END POINT - VEGETARIAN &addRecipeInformation=true
      //     //const response = await fetch("https://api.spoonacular.com/recipes/complexSearch?apiKey=5ea4af906f4443dba9c723a359aa6533&diet=vegetarian&addRecipeInformation=true&number=3");
      //   // const data = await response.json();
      
      //   const response = vegetarianDishesJson.results;
      
      // const dataVeg = JSON.parse(response);
      
      // setVegetarianRecipeCards(dataVeg);
      // }
      
      
      
      
      const [recipes, setrecipes] = useState(undefined);
      

  // 2° CHIAMATA ALLE API - BOTTONE CON CATEGORY-TYPE che renderizza le recipe cards in base al tipo es. breakfast, dinner, ecc.
    async function fetchRecipes(type){
      // const response = await fetch("https://api.spoonacular.com/recipes/complexSearch?apiKey=5ea4af906f4443dba9c723a359aa6533&type=${type}&number=3&addRecipeNutrition=true&addRecipeInformation=true")

      const response = await fetch(`${RECIPES_TYPE_URL}&type=${type}`)
      
      if(!response.ok){
        return <div>Oops! Something went wrong: the server did not return the recipes... </div>
      }

      const data = await response.json()
      setrecipes(data);
    }

    useEffect(()=> {
      fetchRecipes("breakfast")
    }, [])


    const [recipeCard, setRecipeCard] = useState();

    // dopo il click sulla card deve prendere l'id della ricetta ${recipe.id}
    // CHIAMATA ALLE API - renderizza la ricetta
    async function fetchRecipe(recipeID){
      const response = await fetch("https://api.spoonacular.com/recipes/${recipe.id}/information?apiKey=5ea4af906f4443dba9c723a359aa6533&includeNutrition=true")      
      if(!response.ok){
        return <div>Oops! Something went wrong: the server did not return the recipe info... </div>
      }
      
      const data = await response.json()
      setRecipeCard(data);
    }

  //  const fetchRecipes = async (type) => {
    // const fetchRecipes = async (type) => {
    // const response = await fetch("https://api.spoonacular.com/recipes/complexSearch?apiKey=5ea4af906f4443dba9c723a359aa6533&type=${type}&number=3");
    // const data = await response.json();
    // https://api.spoonacular.com/recipes/complexSearch?apiKey=5ea4af906f4443dba9c723a359aa6533&type=${type}&number=3&addRecipeNutrition=true&addRecipeInformation=true


  //   const response = `{
  //   "offset": 0,
  //   "number": 2,
  //   "results": [
  //     {
  //       "id": 716429,
  //       "title": "Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs",
  //       "image": "https://spoonacular.com/recipeImages/716429-556x370.jpg",
  //       "imageType": "jpg"
  //     },
  //     {
  //       "id": 715538,
  //       "title": "Bruschetta Style",
  //       "image": "https://spoonacular.com/recipeImages/715538-312x231.jpg",
  //       "imageType": "jpg"
  //     },
  //     {
  //       "id": 7,
  //       "title": "Caprese Pasta",
  //       "image": "https://spoonacular.com/recipeImages/511728-312x231.jpg",
  //       "imageType": "jpg"
  //     },
  //     {
  //       "id": 38,
  //       "title": "aaaaaSmoothie",
  //       "image": "https://spoonacular.com/recipeImages/655235-312x231.jpg",
  //       "imageType": "jpg"
  //     }
  //   ],
  //   "totalResults": 86
  // }`;
  //   const data = JSON.parse(response);

  //   setrecipes(data);
  // };


  const categoryTypeHome = [
    {
      id: 1,
      type: "breakfast",
    },
    {
      id: 2,
      type: "snack",
    },
    {
      id: 3,
      type: "dinner",
    },
    {
      id: 4,
      type: "dessert",
    },
    {
      id: 5,
      type: "soup",
    },
    {
      id: 6,
      type: "salad",
    },
    {
      id: 7,
      type: "appetizer",
    },
    {
      id: 8,
      type: "beverage",
    },
    {
      id: 9,
      type: "sauce",
    },
    {
      id: 10,
      type: "drink",
    },
  ];
  // API ENDPOINT DELLA RICETTA SINGOLA DI POPULAR RECIPES
  // https://api.spoonacular.com/recipes/716429/information?apiKey=5ea4af906f4443dba9c723a359aa6533&includeNutrition=true
  // {

  const [active, setActive] = useState("active-btn");
  const handleActive = () => {
    setActive("deactive-btn");
  };

  if (vegetarianRecipeCards === undefined) {
    return (
      <div className="flex justify-center items-center text-base text-dark-green">
        Loading...
      </div>
    );
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

        <div className="h-full mb-8">
          <div className="mt-14 mb-6 pl-4 text-dark-green text-xl font-bold">
            Hello 👋
          </div>

          {/* NEW ricette veg */}
          <section className="mb-6">
            <div className="px-4 pb-3 flex justify-between items-center font-bold">
              <h1 className="text-dark-green text-lg font-bold">
                Getting Inspired
              </h1>
            </div>
            <div className="flex-grow w-full mx-auto">
              <div className="pl-4">
                <div className="my-4">
                  <div className="">
                    <div className="flex flex-no-wrap overflow-x-auto gap-3 lg:gap-6 scrolling-touch items-start mb-4">
                      {vegetarianRecipeCards.results.map((vegetarianRecipeCard) => {
                        return (
                          <HorizontalCardHome key={vegetarianRecipeCard.id} vegetarianRecipeCard={vegetarianRecipeCard} title={vegetarianRecipeCard.title} />
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* RICETTE NON VEG */}
          {/* <section className="mb-6">
            <div className="px-4 pb-3 flex justify-between items-center font-bold">
              <h1 className="text-dark-green text-lg font-bold">
                Getting Inspired
              </h1>
            </div>
            <div className="flex-grow w-full mx-auto">
              <div className="pl-4">
                <div className="my-4">
                  <div className="">
                    <div className="flex flex-no-wrap overflow-x-auto gap-3 lg:gap-6 scrolling-touch items-start mb-4">
                      {recipes.results.map((recipe) => {
                        return (
                          <HorizontalCardHome key={recipe.id} recipe={recipe} />
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section> */}

          <section className="mb-3">
            <div className="px-4 flex justify-between items-center font-bold">
              <h1 className="text-dark-green text-lg font-bold">Category</h1>
              {/* <Link href="/allRecipes" className='text-green text-xs'>See all</Link> */}
            </div>
            <div className="flex-grow w-full mx-auto">
              <div className="pl-4">
                <div className="my-4">
                  <div className="">
                    <ul className=" flex flex-no-wrap overflow-x-auto gap-3 scrolling-touch items-start mb-4">
                      {categoryTypeHome.map((type) => {
                        {
                          type.callback = fetchRecipes;
                        }
                        return (
                          <CategoryHomeButtons
                            category={type}
                            key={type.id}
                            className=""
                          />
                        );
                      })}

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
                          Dessert
                          </button> */}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-6">
            <div className="px-4 pb-3 flex justify-between items-center font-bold">
              <h1 className="text-dark-green text-lg font-bold">
                Popular Recipes
              </h1>
              {/* <Link href="/allRecipes" className='text-green text-xs'>See all</Link> */}
            </div>

            <div className="flex-grow w-full mx-auto">
              <div className="pl-4">
                <div className="my-4">
                  <div className="">
                    <div className="flex flex-no-wrap overflow-x-auto gap-3 lg:gap-6 scrolling-touch items-start mb-4">
                      {recipes.results.map((recipe) => {
                        return (
                          <VerticalCard
                            // onClick={recipeJson}
                            key={recipe.id}
                            id={recipe.id}
                            recipe={recipe}
                            className=" "
                          />
                        );
                      })}
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
      

      {/* </main> */}
    </>
  );
}
