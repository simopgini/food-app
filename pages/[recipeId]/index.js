import Link from "next/link";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  HiOutlineChevronLeft,
  HiOutlineFire,
  HiOutlineClock,
  HiHeart,
  HiOutlineHeart,
} from "react-icons/hi";
import Modal from "@/components/Modal";
import recipeJson from "@/components/recipeJson";
import Ingredients from "@/components/Ingredients";
import Switcher from "@/components/Switcher";
import Instructions from "@/components/Instructions";
// import recipeJson from "../components/recipeJson";

const Recipe = ({ recipe }) => {
  const [recipeCard, setRecipeCard] = useState();
  const fetchRecipe = async () => {
    // const r = await fetch("https://api.spoonacular.com/recipes/716429/information?apiKey=5ea4af906f4443dba9c723a359aa6533&includeNutrition=true")
    // const r = await fetch(`https://api.spoonacular.com/recipes/${recipe.id}/information?apiKey=5ea4af906f4443dba9c723a359aa6533&includeNutrition=true`)

    // const data =await r.text();
    const data = JSON.parse(recipeJson);
    // console.log(recipeJson.extendedIngredients.name)
    setRecipeCard(data);
  };

  useEffect(() => {
    fetchRecipe();
  }, []);

  if (recipeCard === undefined) {
    return (
      <div className="flex justify-center items-center text-base text-dark-green">
        Loading...
      </div>
    );
  }
  // console.log(recipeCard.extendedIngredients.name)
  // console.log(recipeJson)
  return (
    <>
      {/* c'è un import chiamato classNames che permette di prendere più classNames, prova per vedere 
          se si riesce a mettere l'img come sfondo in maniera dinamica */}
      <div className="immagine bg-no-repeat hover:transition hover:duration-300 hover:object-none hover:object-center contrast-[1.1] saturate-[1.4]">
        {/* h-96  */}
        <div className="px-4 pt-16 flex justify-between items-center mb-24">
          <Link href="/" className="bg-gray-mid rounded-lg p-1">
            <HiOutlineChevronLeft className="h-6 w-6" />
          </Link>
          <div className="bg-gray-mid rounded-lg p-1">
            <HiHeart className="h-6 w-6 text-green" />
          </div>
        </div>

        <div className=" rounded-t-3xl bg-white shadow-sm">
          <section className="px-4 pb-4 ">
            <div className="pt-8 flex justify-between items-baseline">
              {/* {recipeCard.map((recipeTitle) => { */}
              <h1 className=" mb-6 text-dark-green text-xl font-bold">
                {recipeCard.title}
              </h1>
              {/* })} */}
              <p className="flex text-gray">
                <HiOutlineClock className="h-4 w-4 mr-1" />
                <span className="font-light text-xs">
                  {recipeCard.readyInMinutes} min
                </span>
              </p>
            </div>

            {/* <div>{recipeCard.nutrition.nutrients[0].amount}prova</div>

              {recipeCard.extendedIngredients.map((elem) => { 
                <div>{elem.name}</div>                  
              })} */}

            <div className="flex justify-between text-dark-green">
              <div className="text-sm font-semibold">
                <div className="mb-4 flex items-center">
                  <div className="bg-gray-mid rounded-lg p-1 mr-2">
                    <Image
                      src="/spaghetti.svg"
                      alt="spaghetti icon"
                      width={20}
                      height={20}
                    />
                  </div>
                  <p>{recipeCard.nutrition.nutrients[3].amount}g carbs</p>
                </div>

                <div className="mb-4 flex items-center">
                  <div className="bg-gray-mid rounded-lg p-1 mr-2">
                    <HiOutlineFire className="h-5 w-5" />
                  </div>
                  <p>{recipeCard.nutrition.nutrients[0].amount} Kcal</p>
                </div>
              </div>
              <div className="mb-8 text-sm font-semibold">
                <div className="mb-4 flex items-center">
                  <div className="bg-gray-mid rounded-lg p-1 mr-2">
                    <Image
                      src="/taco.svg"
                      alt="spaghetti icon"
                      width={20}
                      height={20}
                    />
                  </div>
                  <p>{recipeCard.nutrition.nutrients[9].amount}g proteins</p>
                </div>
                <div className="mb-4 flex items-center">
                  <div className="bg-gray-mid rounded-lg p-1 mr-2">
                    <Image
                      src="/avocado.svg"
                      alt="spaghetti icon"
                      width={20}
                      height={20}
                    />
                  </div>
                  <p>{recipeCard.nutrition.nutrients[1].amount}g fats</p>
                </div>
              </div>
            </div>
          </section>
            
            <div className="px-4 pb-4 ">
              <Switcher />
            </div>

            {/* <div className="bg-gray-mid py-1.5 px-1 flex rounded-xl font-medium">
              <button className="text-gray-mid bg-dark-green px-10 py-2 rounded-xl">
                Ingredients
              </button>
              <button className="text-dark-green pl-10">Instructions</button>
            </div> */}
            

          {/* INGREDIENTS SECTION */}
          <section className="px-4">
            <div className="flex justify-between items-baseline">
              <h1 className=" mb-6 text-dark-green text-xl font-bold">
                Ingredients
              </h1>
              <p className="flex text-gray">
                <span className="font-light text-xs">Quantity</span>
              </p>
            </div>

            <div>
              {recipeCard.extendedIngredients.map((ingredient) => {
                return (
                  <Ingredients
                    key={ingredient.id}
                    ingredient={ingredient}
                    quantity={ingredient.original}
                    amount={ingredient.amount}
                    unit={ingredient.unit}
                    className=" "
                  />
                );
              })}
            </div>
          </section>

          <section>
            <div className="px-4 flex justify-between items-baseline">
              <h1 className=" mb-6 text-dark-green text-xl font-bold">
                Instructions
              </h1>
              <p className="flex text-gray">
                <span className="font-light text-xs">Steps</span>
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
          {/* INSTRUCTIONS SECTION */}
          <section>
            <div className="mb-4 mx-4 flex items-center text-sm font-medium">
              <div className="bg-green text-white rounded-lg h-6 w-6 mr-2 flex items-center justify-center">
                <span className="px-2">1</span>
              </div>
              <p>
                {recipeCard.extendedIngredients[0].original} Mash your avocado
                separately.
              </p>
            </div>
            <div className="mb-4 mx-4 flex items-center text-sm font-medium">
              <div className="bg-green text-white rounded-lg h-6 w-6 mr-2 flex items-center justify-center">
                <span className="px-2">2</span>
              </div>
              <p>Slice cherry tomatoes and add salt and pepper.</p>
            </div>
            <div className="mb-4 mx-4 flex items-center text-sm font-medium">
              <div className="bg-green text-white rounded-lg h-6 w-6 mr-2 flex items-center justify-center">
                <span className="px-2">3</span>
              </div>
              <p>
                Buy good bread and toast it well. It offers a sturdy base and a
                crisp contrast against the creamy avocado.
              </p>
            </div>
            <div className="mb-4 mx-4 flex items-center text-sm font-medium">
              <div className="bg-green text-white rounded-lg h-6 w-6 mr-2 flex items-center justify-center">
                <span className="px-2">4</span>
              </div>
              <p>Don’t forget lime and paprika. </p>
            </div>
          </section>
          {/* </div>
            </div> */}
        </div>
        {/* 
        </div> */}
      </div>
    </>
  );
};
export default Recipe;
