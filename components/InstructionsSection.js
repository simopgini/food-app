import Ingredients from "./Ingredients";
import Instructions from "./Instructions";

const InstructionsSection = ({ showIngredients, recipeCard }) => {
  return (
    <section
      className={`px-4 md:px-8 lg:px-16 2xl:px-36 ${
        !showIngredients ? "" : "hidden"
      }`}
    >
      <div className="flex justify-between items-baseline">
        <h1 className=" mb-6 text-dark-green text-xl 2xl:text-2xl font-bold">
          Instructions
        </h1>
        <p className="flex text-gray">
          <span className="font-light text-xs 2xl:text-sm">Steps</span>
        </p>
      </div>
      <div>
        {recipeCard.extendedIngredients.map((instruction, index = 0) => {
          return (
            <Instructions
              key={instruction.id}
              instruction={instruction}
              index={index}
              className=" "
            />
          );
        })}
      </div>
    </section>
  );
};

export default InstructionsSection;
