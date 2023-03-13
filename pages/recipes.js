import Link from "next/link";
import React from "react";
import Image from "next/image";
import Modal from "@/components/Modal";
import RecipeVerticalCard from "@/components/RecipeVerticalCard";

// questa route non funziona: Uncaught TypeError: Cannot read properties of undefined (reading 'map') index.js?46cb:598
const recipes = () => {
  return (
    <>
      <section className="">
        <div className="px-4 pb-3 flex justify-between items-center font-bold">
          <h1 className="text-dark-green text-lg font-bold">See recipes</h1>
        </div>

        <div className="items-stretch grid 2xl:grid-cols-7 xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 md:gap-x-10 md:gap-y-10 sm:gap-x-8 sm:gap-y-8 gap-x-2 gap-y-2 text-white px-4">
          {recipes.results.map((recipe) => {
            return (
              <RecipeVerticalCard
                key={recipe.id}
                recipe={recipe}
                className=" "
              />
            );
          })}
        </div>
      </section>
    </>
  );
};
export default recipes;

// ET http://localhost:3000/recipes 500 (Internal Server Error)
