import { HiOutlineClock, HiOutlineFire } from "react-icons/hi";
import Ingredients from "../recipePage/Ingredients";
import Instructions from "../Instructions";
import Image from "next/image";
import CategoryHomeButtons from "./CategoryHomeButtons";
import HorizontalCardHome from "./HorizontalCardHome";

const InspiredSection = ({ vegetarianRecipeCards }) => {
  return (
    <section className="lg:mt-14 mb-6">
      <div className="px-4 md:px-8 lg:px-16 2xl:px-24 pb-3 flex justify-between items-center font-bold">
        <h1 className="text-dark-green text-lg lg:text-xl font-bold">
          Getting Inspired
        </h1>
      </div>
      <div className="flex-grow w-full mx-auto">
        <div className="pl-4 px-4 md:pl-8 lg:pl-16 2xl:pl-24">
          <div className="my-4">
            <div className="">
              <div className="flex flex-no-wrap overflow-x-auto gap-3 lg:gap-6 scrolling-touch items-start mb-4">
                {vegetarianRecipeCards.results.map((vegetarianRecipeCard) => {
                  return (
                    <HorizontalCardHome
                      key={vegetarianRecipeCard.id}
                      vegetarianRecipeCard={vegetarianRecipeCard}
                      title={vegetarianRecipeCard.title}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InspiredSection;
