import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import searchCuisine from "./searchCuisineJson";
const CuisineSearchButtons = ({ cuisine }) => {
  const router = useRouter();

  const [toggle, setToggle] = useState("active");
  const handleClick = () => {
    setToggle("deactive");
  };

  const [searchCuisine, setSearchedCuisine] = useState({ results: [] });
  // CUISINE=${cuisine} aggiungi in maniera dinamica
  // const fetchRecipes = async (type) => {
    // const response = await fetch("https://api.spoonacular.com/recipes/complexSearch?apiKey=5ea4af906f4443dba9c723a359aa6533&cuisine=italian&addRecipeNutrition=true&addRecipeInformation=true&number=3");
    // const data = await response.json();

  const fetchSearchedCuisine = async () => {
    // const response = searchCuisine
    // const response = `{
    //     "results": [
    //         {
    //         "id": 798400,
    //         "title": "Spicy Black-Eyed Pea Curry with Swiss Chard and Roasted Eggplant",
    //         "image": "https://spoonacular.com/recipeImages/798400-312x231.jpg",
    //         "imageType": "jpg"
    //         },
    //         {
    //         "id": 646043,
    //         "title": "Gujarati Dry Mung Bean Curry",
    //         "image": "https://spoonacular.com/recipeImages/646043-312x231.jpg",
    //         "imageType": "jpg"
    //         },
    //         {
    //         "id": 716364,
    //         "title": "Rice and Peas with Coconut Curry Mackerel",
    //         "image": "https://spoonacular.com/recipeImages/716364-312x231.jpg",
    //         "imageType": "jpg"
    //         },
    //         {
    //         "id": 647875,
    //         "title": "Indian-Style Dill and Turmeric Potato Salad",
    //         "image": "https://spoonacular.com/recipeImages/647875-312x231.jpg",
    //         "imageType": "jpg"
    //         },
    //         {
    //         "id": 660290,
    //         "title": "Slow Cooker Lamb Curry",
    //         "image": "https://spoonacular.com/recipeImages/660290-312x231.jpg",
    //         "imageType": "jpg"
    //         },
    //         {
    //         "id": 641128,
    //         "title": "Curry Mussels",
    //         "image": "https://spoonacular.com/recipeImages/641128-312x231.jpg",
    //         "imageType": "jpg"
    //         },
    //         {
    //         "id": 633088,
    //         "title": "Authentic Jamaican Curry Chicken",
    //         "image": "https://spoonacular.com/recipeImages/633088-312x231.jpg",
    //         "imageType": "jpg"
    //         },
    //         {
    //         "id": 643775,
    //         "title": "Indian-Style Pumpkin Side Dish",
    //         "image": "https://spoonacular.com/recipeImages/643775-312x231.jpg",
    //         "imageType": "jpg"
    //         },
    //         {
    //         "id": 641908,
    //         "title": "Easy Chicken Tikka Masala",
    //         "image": "https://spoonacular.com/recipeImages/641908-312x231.jpg",
    //         "imageType": "jpg"
    //         },
    //         {
    //         "id": 641111,
    //         "title": "Curry Beef Over Rice Noodles",
    //         "image": "https://spoonacular.com/recipeImages/641111-312x231.jpg",
    //         "imageType": "jpg"
    //         }
    //         ],
    //         }
    //     }`;

    const data = JSON.parse(searchCuisine);

    setSearchedCuisine(data);


  };

  return (
    <li key={cuisine.id} className="flex-none mb-4 mr-2 md:pb-4 rounded-lg">
      {/* <Link href={`/search/`}> */}
      <button
        // onClick={fetchSearchedCuisine} 
        onClick={() => cuisine.callback(cuisine.cuisine)}
        className="first-letter:uppercase relative btn-tag bg-gray-lighter  hover:bg-green hover:text-white px-5 rounded-full text-sm"
      >
        <span className="mr-2">{cuisine.cuisine}</span>
        <span className="inset-y-0 absolute py-4 border-l-2 border-white"></span>
        <span className="ml-2">{cuisine.emoji}</span>
      </button>
      {/* </Link> */}
    </li>
  );
};

export default CuisineSearchButtons;
