import Image from "next/image";

const Ingredients = ({ ingredient }) => {

  return (
    <li className="bg-gray-lighter transition hover:shadow-md text-sm font-medium mb-2 2xl:mb-3 py-2 2xl:py-3 px-2 2xl:px-3 flex justify-between items-center rounded-xl text-dark-green">
      <div className="rounded-xl flex items-center">
        <div className="relative flex bg-white rounded-lg h-7 w-7 2xl:h-10 2xl:w-10 p-1 2xl:p-2 mr-2 2xl:mr-4 text-green">
        <Image
              priority 
              src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`} 
              alt={ingredient.name} 
              width={50}
              height={50}
              style={{ objectFit: "cover" }}
              />
        </div>
        <p className="first-letter:uppercase 2xl:text-base">{ingredient.name}</p>
      </div>
      <p className="pr-2 2xl:text-base">
        {ingredient.amount} {ingredient.unit}
      </p>
    </li>
  );
};

export default Ingredients;