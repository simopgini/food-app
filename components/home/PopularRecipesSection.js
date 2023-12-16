import VerticalCard from "./VerticalCard";

const PopularRecipesSection = ({ recipes }) => {
  return (
    <section className="mb-6">
      <div className="px-4 md:px-8 lg:px-16 2xl:px-24 pb-3 lg:pb-6 flex justify-between items-center font-bold">
        <h1 className="text-dark-green text-lg lg:text-xl font-bold">
          Popular Recipes
        </h1>
      </div>

      <div className="flex-grow w-full mx-auto">
        <div className="pl-4 md:pl-8 lg:pl-16 2xl:pl-24">
          <div className="my-4">
            <div className="">
              <div className="flex flex-no-wrap overflow-x-auto gap-3 lg:gap-6 scrolling-touch items-start mb-4">
                {recipes.results.map((recipe) => {
                  return (
                    <VerticalCard
                      key={recipe.id}
                      id={recipe.id}
                      recipe={recipe}
                      className=" "
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

export default PopularRecipesSection;
