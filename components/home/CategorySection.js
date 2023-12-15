import { HiOutlineClock, HiOutlineFire } from "react-icons/hi";
import Ingredients from "../Ingredients";
import Instructions from "../Instructions";
import Image from "next/image";
import CategoryHomeButtons from "./CategoryHomeButtons";

const CategorySection = ({ categoryTypeHome }) => {
  return (
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
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
