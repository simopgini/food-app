import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const CategoryHomeButtons = ({category}) => {
  const router = useRouter();

  const [recipes, setrecipes] = useState({
    results: [
      {
        id: 716429,
        title: "Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs",
        image: "https://spoonacular.com/recipeImages/716429-556x370.jpg",
        imageType: "jpg",
      },
      {
        id: 715538,
        title: "Bruschetta Style",
        image: "https://spoonacular.com/recipeImages/715538-312x231.jpg",
        imageType: "jpg",
      },
      {
        id: 7,
        title: "Caprese Pasta",
        image: "https://spoonacular.com/recipeImages/511728-312x231.jpg",
        imageType: "jpg",
      },
      {
        id: 38,
        title: "Smoothie",
        image: "https://spoonacular.com/recipeImages/655235-312x231.jpg",
        imageType: "jpg",
      },
    ],
  });

  const [toggle, setToggle] = useState("active");
  const handleClick = () => {
    setToggle("deactive");
  };

  {
    /* <li key={type.id}
    className="flex-none mb-4 mr-2 md:pb-4 rounded-lg">
        <button onClick={handleClick}
                className='relative btn-tag bg-gray-lighter  hover:bg-green hover:text-white px-5 rounded-full text-sm'>
            <span className='mr-2'>{type.type}</span> 
            <span className='inset-y-0 absolute py-4 border-l-2 border-white'></span>
            <span className='ml-2'>{cuisine.emoji}</span>
        </button>
</li> */
  }

  return ( 
    <li className="list-none">
      {/* <Link href={`...`}> */}
      <button onClick={() => category.callback(category.type)}
              className="first-letter:uppercase mb-4 px-5  py-2.5 flex-none text-white bg-green rounded-full text-sm hover:scale-105 duration-500 cursor-pointer">
        {category.type}
      </button>
        {console.log(category)}
    </li>
  );
};

export default CategoryHomeButtons;
