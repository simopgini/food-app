import Link from "next/link";
import SearchCard from "@/components/SearchCard";
import { useState } from "react";
import {
  HiOutlineSearch,
  HiOutlineChevronLeft,
  HiOutlineAdjustments,
} from "react-icons/hi";
import CuisineSearchButtons from "@/components/CuisineSearchButtons";
import Alert from "@/components/Alert";
import {
  SEARCH_RECIPE_NAME,
} from "@/components/Constants";

export default function Search() {
  const [searchRecipes, setSearchedRecipes] = useState({ results: [] });

  // 1°CHIAMATA ALLE API - SEARCH che renderizza le recipe cards del nome che è stato dato all'input
  async function fetchSearchedRecipes(inputRecipeName) {
    if (inputRecipeName === "") {
      return;
    }
    const response = await fetch(
      `${SEARCH_RECIPE_NAME}&query=${inputRecipeName}`
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

  // SEARCH STATE AND ERRORS HANDLING
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

        {/* COME FACCIO A PUSHARE CIò CHE è STATO SCRITTO NELL'INPUT DINAMICAMENTE DENTRO LA API REQUEST? */}
        <div className=" mb-4 px-4 items-center">
          <form className="" onSubmit={handleSubmit}>
            <div className="flex form-control">
              <label className="flex-1 relative block uppercase">
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                  <HiOutlineSearch className="h-5 w-5 mr-1 text-gray" />
                </span>
                <input
                  className="pl-9 flex-1 placeholder:text-sm placeholder:text-gray block  bg-gray-light w-full  rounded-lg py-2 pr-3 shadow-md focus:outline-none 
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
                className="submit-btn drop-shadow-sm drop-shadow-white hover:shadow-[#A4D3C5] hover:scale-105 ml-2"
              >
                <HiOutlineAdjustments className="h-7 w-7 mr-1 text-gray rotate-90" />
              </button>
            </div>
          </form>
        </div>
        {alert.show && (
          <Alert className="pl-8" {...alert} removeAlert={showAlert} />
        )}

        <section className="mb-6">
          <div className="flex-grow w-full mx-auto">
            <div className="pl-4">
              <div className=" my-4">
                <ul className="flex flex-no-wrap overflow-x-auto scrolling-touch items-start">
                  {cuisineButton.map((cuisine) => {
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

        {/* <div 
        className={showCards ? "" : "hidden"}
        >  */}
        {searchRecipes.results.length > 0
          ? searchRecipes.results.map((searchRecipe) => {
              return (
                <SearchCard
                  onHandleChange={handleChangeCards}
                  key={searchRecipe.id}
                  searchRecipe={searchRecipe}
                  className=" "
                />
              );
            })
          : ""}
      </div>
    </>
  );
}
