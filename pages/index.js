import React from "react";
import Head from "next/head";
import { useState, useEffect } from "react";
// import { Inter } from "@next/font/google";
import { useRouter } from "next/router";
import { RECIPES_COMPLEX_SEARCH, RECIPES } from "@/components/data/Constants";
import { categoryHomeButton } from "@/components/data/categoryButtons";
import InspiredSection from "@/components/home/InspiredSection";
import PopularRecipesSection from "@/components/home/PopularRecipesSection";
import CategoryHomeButtons from "@/components/home/CategoryHomeButtons";

// const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  const router = useRouter();

  const [vegetarianRecipeCards, setVegetarianRecipeCards] = useState(undefined);

  // 1° CHIAMATA ALLE API - VEGETARIAN che renderizza le recipe cards vegetariane
  useEffect(() => {
    async function fetchVegetarianRecipes() {
      const response = await fetch(
        `${RECIPES_COMPLEX_SEARCH}&addRecipeNutrition=true&addRecipeInformation=true&number=4&diet=vegetarian`
      );
      if (!response.ok) {
        return (
          <div>
            Oops! Something went wrong: the server did not return the recipes...{" "}
          </div>
        );
      }

      const data = await response.json();
      setVegetarianRecipeCards(data);
    }
    fetchVegetarianRecipes();
  }, []);

  const [recipes, setrecipes] = useState(undefined);

  // 2° CHIAMATA ALLE API - BOTTONE CON CATEGORY-TYPE che renderizza le recipe cards in base al tipo es. breakfast, dinner, ecc.
  async function fetchRecipes(type) {
    const response = await fetch(
      `${RECIPES_COMPLEX_SEARCH}&type=${type}&addRecipeNutrition=true&addRecipeInformation=true&number=4`
    );

    if (!response.ok) {
      return (
        <div>
          Oops! Something went wrong: the server did not return the recipes...{" "}
        </div>
      );
    }

    const data = await response.json();
    console.log(data);

    setrecipes(data);
  }

  useEffect(() => {
    fetchRecipes("breakfast");
  }, []);

  const [recipeCard, setRecipeCard] = useState();

  // dopo il click sulla card deve prendere l'id della ricetta ${recipe.id} + CHIAMATA ALLE API - renderizza la ricetta
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

  // API ENDPOINT DELLA RICETTA SINGOLA DI POPULAR RECIPES
  // https://api.spoonacular.com/recipes/716429/information?apiKey=5ea4af906f4443dba9c723a359aa6533&includeNutrition=true
  // {

  const [active, setActive] = useState("active-btn");
  const handleActive = () => {
    setActive("deactive-btn");
  };

  if (vegetarianRecipeCards === undefined) {
    return (
      <div className="h-screen flex justify-center items-center text-base text-dark-green">
        Loading...
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Avocado Tribe App</title>
        <meta name="description" content="Avocado Tribe App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        {/* HOME SECTION */}
        <div className="h-screen mb-8">
          <div className="lg:hidden mt-14 mb-6 pl-4 md:pl-8 lg:pl-16 text-dark-green text-xl font-bold">
            Hello 👋
          </div>

          {/* RICETTE VEGETARIANE - GETTING INSPIRED */}
          <InspiredSection vegetarianRecipeCards={vegetarianRecipeCards} />

          {/* <CategorySection categoryTypeHome={categoryTypeHome} /> */}
          <section className="mb-3">
            <div className="px-4 md:px-8 lg:px-16 2xl:px-24 flex justify-between items-center font-bold">
              <h1 className="text-dark-green text-lg lg:text-xl font-bold">
                Category
              </h1>
            </div>
            <div className="flex-grow w-full mx-auto">
              <div className="pl-4 md:pl-8 lg:pl-16 2xl:pl-24">
                <div className="my-4 lg:mt-7 lg:my-6">
                  <div className="">
                    <ul className="last:pr-4 flex flex-no-wrap overflow-x-auto gap-3 scrolling-touch items-start mb-4">
                      {categoryHomeButton.map((type) => {
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
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <PopularRecipesSection recipes={recipes} />
        </div>
      </div>
    </>
  );
};
export default Home;
