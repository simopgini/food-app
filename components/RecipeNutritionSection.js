import { HiOutlineClock, HiOutlineFire } from "react-icons/hi";
import Ingredients from "./recipePage/Ingredients";
import Instructions from "./Instructions";
import Image from "next/image";

const RecipeNutritionSection = ({ recipeCard }) => {
  return (
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
  );
};

export default RecipeNutritionSection;
