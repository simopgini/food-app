import Image from "next/image";
import Link from "next/link";
import { HiOutlineFire, HiOutlineClock } from "react-icons/hi";
import { useState } from "react";
import recipeJson from "./recipeJson";

const VerticalCard = ({ recipe }) => {

  // const [recipeCard, setRecipeCard] = useState({"extendedIngredients": [{}]})
  // const fetchRecipe = async () => { 
  //   // const r = await fetch("https://api.spoonacular.com/recipes/716429/information?apiKey=5ea4af906f4443dba9c723a359aa6533&includeNutrition=true")
  //   // const r = await fetch(`https://api.spoonacular.com/recipes/${recipe.id}/information?apiKey=5ea4af906f4443dba9c723a359aa6533&includeNutrition=true`)

  //   // const data =await r.text();
  // const data = JSON.parse(recipeJson)
  //   // console.log(recipeJson.extendedIngredients.name)
  //   setRecipeCard(data);
  // }

  // href="/recipe/{id}"
  // href="/recipe/{recipe.key}"
  // "/recipe/[recipe.key]"
  
  return (
    <>
      <Link
        href={`/${recipe.id}`}
        // href={`/recipe/1234`}
        // onClick={fetchRecipe}
        className="w-48 first-of-type:ml-1.5 last-of-type:mr-2 mb-4 bg-white rounded-xl drop-shadow hover:scale-105 duration-500 cursor-pointer"
      >
        <div className="pt-4 py-2 md:pt-4 md:py-2 flex justify-center">
          <div className="mx-4 relative h-28 w-36 md:h-38 md:w-44 xl:mx-4">
            <Image
              className="hover:transition hover:duration-300 rounded-xl contrast-[1.1] saturate-[1.4]"
              priority
              src={recipe.image}
              alt={recipe.title}
              fill
              style={{ objectFit: "fill" }}
            />
          </div>
        </div>
        <div className="px-4 py-2">
          <h2 className="text-sm pb-1 font-semibold text-dark-green truncate mb-1">
            {recipe.title}
          </h2>
          <div className="flex justify-between text-gray pb-6">
            <div className="flex items-center text-sm">
              <HiOutlineFire className="h-4 w-4 mr-1" />
              <span className="font-light text-xs">200 Kcal</span>
            </div>
            <div className="flex items-center text-sm">
              <HiOutlineClock className="h-4 w-4 mr-1" />
              <span className="font-light text-xs">30 min</span>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default VerticalCard;
