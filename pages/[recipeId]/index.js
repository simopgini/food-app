import Link from "next/link";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Switcher from "@/components/Switcher";
import { useRouter } from "next/router";
import { HiOutlineChevronLeft, HiHeart, HiOutlineHeart } from "react-icons/hi";
import { RECIPES } from "@/components/data/Constants";
import IngredientSection from "@/components/IngredientSection";
import InstructionsSection from "@/components/InstructionsSection";
import RecipeNutritionSection from "@/components/RecipeNutritionSection";
import { useFavourites } from "@/store/FavoritesContext";

const Recipe = () => {
  const { addFavourite, removeFavourite } = useFavourites();
  const [showIngredients, setShowIngredients] = useState(true);

  const handleHeartClick = () => {
    if (isFavorite) {
      removeFavourite(recipeCard.id);
    } else {
      addFavourite(recipeCard);
    }
    setIsFavorite(!isFavorite);
  };

  const handleIgredientsSection = () => {
    setShowIngredients(showIngredients ? false : true);
  };

  const [recipeCard, setRecipeCard] = useState();

  // When you click on the card it takes the recipe id ${recipe.id} + Calls the API and renders the recipe
  async function fetchRecipe(recipeID) {
    const response = await fetch(
      `${RECIPES}/${recipeID}/information?apiKey=5ea4af906f4443dba9c723a359aa6533&includeNutrition=true`
    );
    if (!response.ok) {
      return (
        <div>
          Oops! Something went wrong: the server did not return the recipe
          info...{" "}
        </div>
      );
    }

    const data = await response.json();
    setRecipeCard(data);
  }
  const router = useRouter();
  useEffect(() => {
    if (router.query.recipeId !== undefined) {
      fetchRecipe(router.query.recipeId);
    }
  }, [router.query.recipeId]);

  const [isFavorite, setIsFavorite] = useState(false);

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
          <Link
            href="/"
            className="lg:hidden absolute left-4 bg-white rounded-lg p-1"
          >
            <HiOutlineChevronLeft className="h-6 w-6" />
          </Link>
          <div className="absolute right-4 lg:right-16 2xl:right-24 bg-white rounded-lg p-1">
            <button onClick={handleHeartClick}>
              {isFavorite ? (
                <HiHeart className="h-6 w-6 text-green" />
              ) : (
                <HiOutlineHeart className="h-6 w-6 text-green" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div className=" bg-no-repeat contrast-[1.1]">
        <div className="h-screen mt-8 rounded-t-3xl bg-white shadow-sm">
          <RecipeNutritionSection recipeCard={recipeCard} />

          <div className="px-4 md:px-8 lg:px-16 2xl:px-80 pb-4 2xl:pb-8  ">
            <Switcher handleSectionVisibility={handleIgredientsSection} />
          </div>

          {/* INGREDIENTS SECTION */}
          <IngredientSection
            showIngredients={showIngredients}
            recipeCard={recipeCard}
          />

          {/* INSTRUCTIONS SECTION */}
          <InstructionsSection
            showIngredients={showIngredients}
            recipeCard={recipeCard}
          />
        </div>
      </div>
    </div>
  );
};
export default Recipe;
