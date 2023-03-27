import Link from "next/link";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Ingredients from "@/components/Ingredients";
import Switcher from "@/components/Switcher";
import Instructions from "@/components/Instructions";
import { useRouter } from 'next/router'
import {
  HiOutlineChevronLeft,
  HiOutlineFire,
  HiOutlineClock,
  HiHeart,
  HiOutlineHeart,
} from "react-icons/hi";
import {
  RECIPES,
} from "@/components/Constants";
import classNames from "classnames";

// import Modal from "@/components/Modal";


const Recipe =  () => {
  
  const [showIngredients, setShowIngredients] = useState(true);
  
  const handleIgredientsSection = () => {
    setShowIngredients((showIngredients) ? false : true)
  }
  
  const [recipeCard, setRecipeCard] = useState();
  
  // dopo il click sulla card deve prendere l'id della ricetta ${recipe.id} + CHIAMATA ALLE API - renderizza la ricetta
  async function fetchRecipe(recipeID){
    const response = await fetch(`${RECIPES}/${recipeID}/information?apiKey=5ea4af906f4443dba9c723a359aa6533&includeNutrition=true`)      
    if(!response.ok){
      return <div>Oops! Something went wrong: the server did not return the recipe info... </div>
    }
    
    const data = await response.json()
    setRecipeCard(data);
  }
  const router = useRouter()
  useEffect(() => {
    if (router.query.recipeId !== undefined) {
      fetchRecipe(router.query.recipeId)
    }
  }, [router.query.recipeId]);
  
  const [isActive, setIsActive] = useState(false);

  
  if (recipeCard === undefined) {
    return (
      <div className="h-screen flex justify-center items-center text-base text-dark-green">
        Loading...
      </div>
    );
  }

  return (
    <div>
        <div className="h-36 w-full sm:h-64 sm:w-56 md:h-72 md:w-full lg:h-80 lg:w-80 2xl:h-96 2xl:w-full">
          <Image
            className="object-contain object-top 2xl:object-fill 2xl:object-top contrast-[1.1] saturate-[1.4] hover:transition hover:duration-300"
            priority
            src={recipeCard.image}
            alt={recipeCard.title}
            fill
          />

          <div className="px-4 md:px-8 lg:px-16  pt-16 flex justify-between items-center mb-36 lg:mb-64">
            <Link href="/" className="lg:hidden absolute left-4 bg-white rounded-lg p-1">
              <HiOutlineChevronLeft className="h-6 w-6" />
            </Link>
            <div className="absolute right-4 lg:right-16 2xl:right-24 bg-white rounded-lg p-1">

              <div>
                {isActive ? <HiHeart onClick={() => { setIsActive(!isActive) }} className="h-6 w-6 text-green" /> 
                : <HiOutlineHeart onClick={() => {setIsActive(!isActive) }} className="h-6 w-6 text-green" />
                }
              </div>
            </div>
          </div>
          
        </div>

      <div className=" bg-no-repeat contrast-[1.1]">
        <div className="h-screen mt-8 rounded-t-3xl bg-white shadow-sm">
          <section className="px-4 md:px-8 lg:px-16 2xl:px-36 pb-4 ">
            <div className="pt-8 lg:pt-16 flex justify-between items-baseline">
              <h1 className=" mb-6 text-dark-green text-xl 2xl:text-2xl 2xl:mb-10 font-bold">
                {recipeCard.title}
              </h1>
              <p className="flex items-center text-gray">
                <HiOutlineClock className="h-4 w-4 2xl:h-5 2xl:w-5 mr-1" />
                <span className="font-light text-xs 2xl:text-sm">
                  {recipeCard.readyInMinutes} min
                </span>
              </p>
            </div>

            <div className="2xl:px-44 flex justify-between text-dark-green">
              <div className="text-sm 2xl:text-base font-semibold">
                <div className="mb-4 flex items-center">
                  <div className="bg-gray-mid rounded-lg p-1 2xl:p-2 mr-2 2xl:mr-4">
                    <Image
                      src="/spaghetti.svg"
                      alt="spaghetti carbs icon"
                      width={20}
                      height={20}
                    />
                  </div>
                  <p>{recipeCard.nutrition.nutrients[3].amount}g carbs</p>
                </div>

                <div className="mb-4 2xl:mb-8 flex items-center">
                  <div className="bg-gray-mid rounded-lg p-1 2xl:p-2 mr-2 2xl:mr-4">
                    <Image
                      src="/taco.svg"
                      alt="protein taco icon"
                      width={20}
                      height={20}
                    />
                  </div>
                  <p>{recipeCard.nutrition.nutrients[9].amount}g proteins</p>
                </div>
              </div>
              <div className="text-sm 2xl:text-base font-semibold">
                <div className="mb-4 flex items-center">
                  <div className="bg-gray-mid rounded-lg p-1 2xl:p-2 mr-2 2xl:mr-4">
                    <HiOutlineFire className="h-5 w-5" />
                  </div>
                  <p>{recipeCard.nutrition.nutrients[0].amount} Kcal</p>
                </div>
                <div className="mb-4 flex items-center">
                  <div className="bg-gray-mid rounded-lg p-1 2xl:p-2 mr-2 2xl:mr-4">
                    <Image
                      src="/avocado.svg"
                      alt="avocado fat icon"
                      width={20}
                      height={20}
                    />
                  </div>
                  <p>{recipeCard.nutrition.nutrients[1].amount}g fats</p>
                </div>
              </div>
            </div>
          </section>
            {/* 2xl:px-24  */}
            <div className="px-4 md:px-8 lg:px-16 2xl:px-80 pb-4 2xl:pb-8  ">
              <Switcher
              handleSectionVisibility={handleIgredientsSection}
              />
            </div>            

          {/* INGREDIENTS SECTION */}
          <section className={`px-4 md:px-8 lg:px-16 2xl:px-36 ${showIngredients ? "" : "hidden"}`}>
            <div className="flex justify-between items-baseline">
              <h1 className=" mb-6 text-dark-green text-xl 2xl:text-2xl font-bold">
                Ingredients
              </h1>
              <p className="flex text-gray">
                <span className="font-light text-xs 2xl:text-sm">Quantity</span>
              </p>
            </div>

            <ul>
              {recipeCard.extendedIngredients.map((ingredient) => {
                return (
                  <Ingredients
                    key={ingredient.id}
                    ingredient={ingredient}
                    image={ingredient.image}
                    quantity={ingredient.original}
                    amount={ingredient.amount}
                    unit={ingredient.unit}
                    className=" "
                  />
                );
              })}
            </ul>
          </section>
          
          {/* INSTRUCTIONS SECTION */}
          <section className={`px-4 md:px-8 lg:px-16 2xl:px-36 ${!showIngredients ? "" : "hidden"}`}>
            <div className="flex justify-between items-baseline">
              <h1 className=" mb-6 text-dark-green text-xl 2xl:text-2xl font-bold">
                Instructions
              </h1>
              <p className="flex text-gray">
                <span className="font-light text-xs 2xl:text-sm">Steps</span>
              </p>
            </div>
            <div>
              {recipeCard.extendedIngredients.map((instruction, index = 0) => {
                return (
                  <Instructions
                    key={instruction.id}
                    instruction={instruction}
                    index={index}
                    className=" "
                  />
                );
              })}
            </div>
          </section>
          
        </div>

      </div>

    </div>
  );
};
export default Recipe;
