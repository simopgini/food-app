import Link from "next/link";
import SearchCard from "@/components/search/SearchCard";
import { useState } from "react";
import {
  HiOutlineSearch,
  HiOutlineChevronLeft,
  HiOutlineAdjustments,
} from "react-icons/hi";
import CuisineSearchButtons from "@/components/search/CuisineSearchButtons";
import Alert from "@/components/list/Alert";
import { RECIPES_COMPLEX_SEARCH } from "@/components/data/Constants";
import Image from "next/image";
import { cuisineSearchButton } from "@/components/data/categoryButtons";

const Search = () => {
  const [searchRecipes, setSearchedRecipes] = useState({ results: [] });

  // 1°CHIAMATA ALLE API - SEARCH che renderizza le recipe cards del nome che è stato dato all'input
  async function fetchSearchedRecipes(inputRecipeName) {
    if (inputRecipeName === "") {
      return;
    }
    const response = await fetch(
      `${RECIPES_COMPLEX_SEARCH}&query=${inputRecipeName}&addRecipeNutrition=true&addRecipeInformation=true&number=4`
    );
    if (!response.ok) {
      return (
        <div>
          Oops! Something went wrong: the server did not return the recipes...{" "}
        </div>
      );
    }

    const data = await response.json();
    setSearchedRecipes(data);
  }

  // SEARCH STATE AND ERROR HANDLING
  const [name, setName] = useState("");

  const [showCards, setShowCards] = useState(false);

  const handleChangeCards = () => {
    setShowCards(showCards) ? true : false;
  };

  const [alert, setAlert] = useState({
    show: false,
    msg: "",
    type: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      // display alert
      showAlert(true, "danger", "Please enter the name of the recipe");
    } else {
      setShowCards(true);
      setName("");
    }
  };

  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  };

  return (
    <>
      <div className="h-screen mb-8">
        <div className="">
          <div className="lg:mt-20">
            <div className="lg:hidden px-4 md:px-8 lg:px-16 mb-6 mt-16 flex justify-between items-center">
              <Link href="/" className=" bg-white rounded-lg p-1 shadow-md">
                <HiOutlineChevronLeft className="h-6 w-6" />
              </Link>
              <div className="flex-1 bg-white"></div>
              <div className="flex-auto uppercase p-1 font-bold text-xl">
                Search
              </div>
            </div>
          </div>

          <div className="lg:mb-8 px-4 md:px-8 lg:px-16 2xl:px-24 items-center">
            <form className="" onSubmit={handleSubmit}>
              <div className="flex form-control">
                <label className="flex-1 relative block uppercase">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-2 lg:pl-3">
                    <HiOutlineSearch className="h-5 w-5 mr-1 text-gray lg:h-6 lg:w-6" />
                  </span>
                  <input
                    className="pl-9 flex-1 placeholder:text-sm lg:placeholder:text-base lg:pl-14 placeholder:text-gray block  bg-gray-light w-full  rounded-lg py-2 lg:py-3.5 pr-3 shadow-md focus:outline-none 
                            focus:border-green focus:ring-green focus:ring-1 sm:text-sm"
                    style={{ borderWidth: 0 }}
                    placeholder="Search your recipe"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </label>

                <button
                  type="submit"
                  onClick={() => {
                    fetchSearchedRecipes(name);
                  }}
                  className="submit-btn drop-shadow-sm drop-shadow-white hover:shadow-[#A4D3C5] hover:scale-105 ml-2 lg:ml-4"
                >
                  <HiOutlineAdjustments className="h-7 w-7 mr-1 lg:h-8 lg:w-8 text-gray rotate-90" />
                </button>
              </div>
            </form>
          </div>
          {alert.show && (
            <Alert className="ml-10" {...alert} removeAlert={showAlert} />
          )}
        </div>

        <section className="mb-6">
          <div className="flex-grow w-full mx-auto">
            <div className="pl-4 md:pl-8 lg:pl-16 2xl:pl-24">
              <div className=" my-4">
                <ul className="flex flex-no-wrap overflow-x-auto scrolling-touch items-start">
                  {cuisineSearchButton.map((cuisine) => {
                    {
                      cuisine.callback = fetchSearchedRecipes;
                    }
                    return (
                      <CuisineSearchButtons
                        key={cuisine.id}
                        cuisine={cuisine}
                        emoji={cuisine.emoji}
                        className=" "
                      />
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {searchRecipes.results.length === 0 && (
          <div className="flex flex-col justify-center">
            <div className="flex justify-center">
              <Image
                className="hover:transition hover:duration-300 rounded-xl contrast-[1.1] saturate-[1.4]"
                priority
                src="/food-recipe.jpg"
                alt="Picture of a food recipe"
                sizes="100vw"
                style={{
                  width: "75%",
                  height: "auto",
                }}
                width={500}
                height={300}
              />
            </div>
            <p className="text-sm md:text-lg lg:text-xl xl:text-xl text-center px-4 md:px-8 lg:px-16 2xl:px-24 mb-6">
              Are you looking for a yummy recipe? Type the dish you would love
              to discover. Bon appetit!
            </p>
          </div>
        )}
        {searchRecipes.results.length > 0 &&
          searchRecipes.results.map((searchRecipe) => {
            return (
              <SearchCard
                onHandleChange={handleChangeCards}
                key={searchRecipe.id}
                searchRecipe={searchRecipe}
                className=" "
              />
            );
          })}
      </div>
    </>
  );
};
export default Search;
