import Link from "next/link";
import SearchCard from "@/components/SearchCard";
import { useState } from "react";

import {
  HiOutlineSearch,
  HiOutlineChevronLeft,
  HiOutlineAdjustments,
} from "react-icons/hi";
import CuisineSearchButtons from "@/components/CuisineSearchButtons";

export default function Search() {
  const [searchRecipes, setSearchedRecipes] = useState({ results: [] });

  const fetchSearchedRecipes = async () => {
    // const response = await fetch("https://api.spoonacular.com/recipes/complexSearch?apiKey=5ea4af906f4443dba9c723a359aa6533&type=${type}");
    // const data = await response.json();

    const response = `{
        "results": [
        {
        "id": 631762,
        "title": "Strawberry Tart",
        "image": "https://spoonacular.com/recipeImages/631762-312x231.jpg",
        "imageType": "jpg"
        },
        {
        "id": 661904,
        "title": "Strawberry Syrup",
        "image": "https://spoonacular.com/recipeImages/661904-312x231.jpg",
        "imageType": "jpg"
        },
        {
        "id": 661760,
        "title": "Strawberry Bites",
        "image": "https://spoonacular.com/recipeImages/661760-312x231.jpg",
        "imageType": "jpg"
        },
        {
        "id": 1646939,
        "title": "Strawberry Scones",
        "image": "https://spoonacular.com/recipeImages/1646939-312x231.jpg",
        "imageType": "jpg"
        },
        {
        "id": 1470917,
        "title": "Strawberry Cobbler",
        "image": "https://spoonacular.com/recipeImages/1470917-312x231.jpg",
        "imageType": "jpg"
        }
        ],
        "offset": 0,
        "number": 5,
        "totalResults": 150
        }`;

    const data = JSON.parse(response);

    setSearchedRecipes(data);
  };

  const cuisineButton = [
    {
      id: 1,
      cuisine: "italian",
      emoji: "🍕",
    },
    {
      id: 2,
      cuisine: "spanish",
      emoji: "🥘",
    },
    {
      id: 3,
      cuisine: "japanese",
      emoji: "🍱",
    },
    {
      id: 4,
      cuisine: "indian",
      emoji: "🍛",
    },
    {
      id: 5,
      cuisine: "mexican",
      emoji: "🌮",
    },
    {
      id: 6,
      cuisine: "middle Eastern",
      emoji: "🧆",
    },
    {
      id: 7,
      cuisine: "chinese",
      emoji: "🥟",
    },
    {
      id: 8,
      cuisine: "greek",
      emoji: "🥙",
    },
    {
      id: 9,
      cuisine: "french",
      emoji: "🥐",
    },
    {
      id: 10,
      cuisine: "american",
      emoji: "🍔",
    },
    {
      id: 11,
      cuisine: "german",
      emoji: "🥨",
    },
    {
      id: 12,
      cuisine: "british",
      emoji: "🫖",
    },
  ];

  return (
    <>
      <div className="h-screen mb-8">
        <div>
          <div className="px-4 mb-6 mt-16 flex justify-between items-center">
            <Link href="/" className=" bg-white rounded-lg p-1 shadow-md">
              <HiOutlineChevronLeft className="h-6 w-6" />
            </Link>
            <div className="flex-1 bg-white"></div>
            <div className="flex-auto uppercase p-1 font-bold text-xl">
              Search
            </div>
          </div>
        </div>

        <div className="px-4 flex items-center mb-6">
          <label className="flex-1 relative block uppercase">
            <div className="sr-only">SEARCH</div>
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <HiOutlineSearch className="h-5 w-5 mr-1 text-gray" />
            </span>
            <input
              style={{ borderWidth: 0 }}
              className="flex-1 placeholder:text-sm placeholder:text-gray block  bg-gray-light w-full  rounded-md py-2 pl-9 pr-3 shadow-md focus:outline-none 
                  focus:border-green focus:ring-green focus:ring-1 sm:text-sm"
              placeholder="Search by food name"
              type="text"
              name="search"
            />
          </label>
          <button onClick={fetchSearchedRecipes} className="ml-2">
            <HiOutlineAdjustments className="h-7 w-7 mr-1 text-gray rotate-90" />
          </button>
        </div>

        <section className="mb-6">
          <div className="flex-grow w-full mx-auto">
            <div className="pl-4">
              <div className=" my-4">
                <ul className="flex flex-no-wrap overflow-x-auto scrolling-touch items-start">
                  {cuisineButton.map((cuisine) => {
                    return (
                      <CuisineSearchButtons
                        key={cuisine.id}
                        cuisine={cuisine}
                        emoji={cuisine.emoji}
                        className=" "
                      />
                    );
                  })}

                  {/* <div className="flex-none mb-4 mr-2 md:pb-4 rounded-lg">
                            <button className='relative btn-tag bg-green hover:bg-green text-white px-5 rounded-full text-sm'>
                              <span className='mr-2'>Italian</span> 
                              <span className='inset-y-0 absolute py-4 border-l-2 border-white'></span>
                              <span className='ml-2'>🍕</span>
                            </button>
                        </div> */}

                  {/* <div className="flex-none mb-4  mr-2 md:pb-4 rounded-lg">
                            <button className='relative btn-tag bg-gray-light disabled:bg-gray-light hover:text-white active:text-white text-dark-green active:bg-green hover:bg-green px-5 rounded-full text-sm'>
                              <span className='mr-2'>Spanish</span> 
                              <span className='inset-y-0 absolute py-4 border-l-2 border-white'></span>
                              <span className='ml-2'>🥘</span>
                            </button>
                        </div>

                        <div className="flex-none mb-4 mr-2 md:pb-4 rounded-lg">
                            <button className='relative btn-tag bg-gray-light disabled:bg-gray-light hover:text-white active:text-white text-dark-green active:bg-green hover:bg-green px-5 rounded-full text-sm'>
                              <span className='mr-2'>Japanese</span> 
                              <span className='inset-y-0 absolute py-4 border-l-2 border-white'></span>
                              <span className='ml-2'>🍱</span>
                            </button>
                        </div>

                        <div className="flex-none mb-4 mr-2 md:pb-4 rounded-lg">
                            <button className='relative btn-tag bg-gray-light disabled:bg-gray-light hover:text-white active:text-white text-dark-green active:bg-green hover:bg-green px-5 rounded-full text-sm'>
                              <span className='mr-2'>India</span> 
                              <span className='inset-y-0 absolute py-4 border-l-2 border-white'></span>
                              <span className='ml-2'>🍛</span>
                            </button>
                        </div>

                        <div className="flex-none mb-4 mr-2 md:pb-4 rounded-lg">
                            <button className='relative btn-tag bg-gray-light disabled:bg-gray-light hover:text-white active:text-white text-dark-green active:bg-green hover:bg-green px-5 rounded-full text-sm'>
                              <span className='mr-2'>Mexican</span> 
                              <span className='inset-y-0 absolute py-4 border-l-2 border-white'></span>
                              <span className='ml-2'>🌮</span>
                            </button>
                        </div>

                        <div className="flex-none mb-4 mr-2 md:pb-4 rounded-lg">
                            <button className='relative btn-tag bg-gray-light disabled:bg-gray-light hover:text-white active:text-white text-dark-green active:bg-green hover:bg-green px-5 rounded-full text-sm'>
                              <span className='mr-2'>Middle Eastern</span> 
                              <span className='inset-y-0 absolute py-4 border-l-2 border-white'></span>
                              <span className='ml-2'>🧆</span>
                            </button>
                        </div>

                        <div className="flex-none mb-4 mr-2 md:pb-4 rounded-lg">
                            <button className='relative btn-tag bg-gray-light disabled:bg-gray-light hover:text-white active:text-white text-dark-green active:bg-green hover:bg-green px-5 rounded-full text-sm'>
                              <span className='mr-2'>Chinese</span> 
                              <span className='inset-y-0 absolute py-4 border-l-2 border-white'></span>
                              <span className='ml-2'>🥟</span>
                            </button>
                        </div>

                        <div className="flex-none mb-4 mr-2 md:pb-4 rounded-lg">
                            <button className='relative btn-tag bg-gray-light disabled:bg-gray-light hover:text-white active:text-white text-dark-green active:bg-green hover:bg-green px-5 rounded-full text-sm'>
                              <span className='mr-2'>Greek</span> 
                              <span className='inset-y-0 absolute py-4 border-l-2 border-white'></span>
                              <span className='ml-2'>🥙</span>
                            </button>
                        </div>

                        <div className="flex-none mb-4 mr-2 md:pb-4 rounded-lg">
                            <button className='relative btn-tag bg-gray-light disabled:bg-gray-light hover:text-white active:text-white text-dark-green active:bg-green hover:bg-green px-5 rounded-full text-sm'>
                              <span className='mr-2'>French</span> 
                              <span className='inset-y-0 absolute py-4 border-l-2 border-white'></span>
                              <span className='ml-2'>🥐</span>
                            </button>
                        </div>

                        <div className="flex-none mb-4 mr-2 md:pb-4 rounded-lg">
                            <button className='relative btn-tag bg-gray-light disabled:bg-gray-light hover:text-white active:text-white text-dark-green active:bg-green hover:bg-green px-5 rounded-full text-sm'>
                              <span className='mr-2'>American</span> 
                              <span className='inset-y-0 absolute py-4 border-l-2 border-white'></span>
                              <span className='ml-2'>🍔</span>
                            </button>
                        </div>

                        <div className="flex-none mb-4 mr-2 md:pb-4 rounded-lg">
                            <button className='relative btn-tag bg-gray-light disabled:bg-gray-light hover:text-white active:text-white text-dark-green active:bg-green hover:bg-green px-5 rounded-full text-sm'>
                              <span className='mr-2'>German</span> 
                              <span className='inset-y-0 absolute py-4 border-l-2 border-white'></span>
                              <span className='ml-2'>🥨</span>
                            </button>
                        </div>
                        
                        <div className="flex-none mb-4 mr-2 md:pb-4 rounded-lg">
                            <button className='relative btn-tag bg-gray-light disabled:bg-gray-light hover:text-white active:text-white text-dark-green active:bg-green hover:bg-green px-5 rounded-full text-sm'>
                              <span className='mr-2'>British</span> 
                              <span className='inset-y-0 absolute py-4 border-l-2 border-white'></span>
                              <span className='ml-2'>🫖</span>
                            </button>
                        </div> */}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <div>
          {searchRecipes.results.map((searchRecipe) => {
            return (
              <SearchCard
                key={searchRecipe.id}
                searchRecipe={searchRecipe}
                className=" "
              />
            );
          })}
        </div>
        {/* <button class="flex-none mr-2 md:pb-4 px-5 py-2 rounded-full text-sm hover:duration-300 hover:bg-green active:bg-green bg-gray-light disabled:bg-gray-light flex divide-x-2 divide-white hover:text-white active:text-white text-dark-green ...">
                          <div className='pr-2'>Greek</div>
                          <div className='pl-2'>🥙</div>
                        </button> */}

        {/* <div className='pl-4 mb-8 flex justify-between'>
                  <button className='bg-green text-white px-4 py-2 rounded-full text-sm'>Smoothie | 🍹</button>
                  <button className='bg-gray-light text-dark-green px-4 py-2 rounded-full text-sm'>Snack | 🍿</button>
                  <button className='bg-gray-light text-dark-green px-4 py-2 rounded-full text-sm'>Salad | 🥗</button>
            </div> */}
      </div>
    </>
  );
}
