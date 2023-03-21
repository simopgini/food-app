import Image from "next/image";
import { HiCheck } from "react-icons/hi";

const Ingredients = ({ ingredient }) => {

  return (
    <li className="bg-gray-lighter transition hover:shadow-md text-sm font-medium mb-2 py-2 px-2 flex justify-between items-center rounded-xl text-dark-green">
      <div className="rounded-xl flex items-center">
        <div className="bg-white rounded-lg p-1 mr-2 text-green text-lg">
        {/* <Image src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`} width={8} height={8} alt={ingredient.name} /> */}
        <HiCheck />
        </div>
        <p className="first-letter:uppercase">{ingredient.name}</p>
      </div>
      <p className="pr-2">
        {ingredient.amount} {ingredient.unit}
      </p>
    </li>
  );
};

export default Ingredients;