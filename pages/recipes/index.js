import Link from "next/link";
import React, { useState } from "react";
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
import RecipeVerticalCard from "@/components/RecipeVerticalCard";
// import recipeJson from "../components/recipeJson";



const RecipesPage = () => {
  
  //const [recipeCard, setRecipeCard] = useState({})
  //const fetchRecipe = async () => { 
    // const r = await fetch("https://api.spoonacular.com/recipes/716429/information?apiKey=5ea4af906f4443dba9c723a359aa6533&includeNutrition=true")
    // const data =await r.text();
  //  const data = JSON.parse(recipeJson)

  //  setRecipeCard(data);
 //}

  // console.log(recipeJson)
  return (
    <>
    <section className="">
      <div className="px-4 pb-3 flex justify-between items-center font-bold">
        <h1 className="text-dark-green text-lg font-bold">See recipes</h1>
      </div>

      <div className="items-stretch grid 2xl:grid-cols-7 xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 md:gap-x-10 md:gap-y-10 sm:gap-x-8 sm:gap-y-8 gap-x-2 gap-y-2 text-white px-4">
        {/* {recipes.results.map((recipe) => {
          return (
            <RecipeVerticalCard
              key={recipe.id}
              recipe={recipe}
              className=" "
            />
          );
        })} */}
      </div>
    </section>
  </>
  );
};
export default RecipesPage;
