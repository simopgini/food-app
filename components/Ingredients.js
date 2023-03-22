import Image from "next/image";

const Ingredients = ({ ingredient }) => {

  return (
    <li className="bg-gray-lighter transition hover:shadow-md text-sm font-medium mb-2 py-2 px-2 flex justify-between items-center rounded-xl text-dark-green">
      <div className="rounded-xl flex items-center">
        <div className="relative flex bg-white rounded-lg h-7 w-7 p-1 mr-2 text-green text-lg">
        <Image
              priority 
              src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`} 
              alt={ingredient.name} 
              width={50}
              height={50}
              style={{ objectFit: "cover" }}
              />
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