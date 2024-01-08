import Ingredients from "./recipePage/Ingredients";

const IngredientSection = ({ showIngredients, recipeCard }) => {
  return (
    <section
      className={`px-4 md:px-8 lg:px-16 2xl:px-36 ${
        showIngredients ? "" : "hidden"
      }`}
    >
      <div className="flex justify-between items-baseline">
        <h1 className=" mb-6 text-dark-green text-xl 2xl:text-2xl font-bold">
          Ingredients
        </h1>
        <p className="flex text-gray">
          <span className="font-light text-xs 2xl:text-sm">Quantity</span>
        </p>
      </div>

      <ul>
        {recipeCard.extendedIngredients.map((ingredient) => {
          return (
            <Ingredients
              key={ingredient.id}
              ingredient={ingredient}
              image={ingredient.image}
              quantity={ingredient.original}
              amount={ingredient.amount}
              unit={ingredient.unit}
              className=" "
            />
          );
        })}
      </ul>
    </section>
  );
};

export default IngredientSection;
