import Image from "next/image";
import Link from "next/link";
import { HiOutlineFire, HiOutlineClock } from "react-icons/hi";

const SearchCard = ({ searchRecipe }) => {
  return (
    <div className="px-4 md:px-8 lg:px-16 2xl:px-24 mb-6">
      <Link
        href={`/${searchRecipe.id}`}
        className="flex items-center bg-white  rounded-xl drop-shadow hover:scale-105 md:hover:scale-100 md:hover:shadow-md duration-500 cursor-pointer"
      >
        <div className="py-2 lg:py-4 flex justify-center ">
          <div className="mx-2 relative lg:mx-5 h-20 w-20 md:h-24 md:w-24 lg:h-28 lg:w-28">
            <Image
              className="hover:transition hover:duration-300 rounded-xl	 contrast-[1.1] saturate-[1.4] object-cover shadow-md hover:shadow-xl "
              src={searchRecipe.image}
              alt={searchRecipe.title}
              priority
              fill
              // style={{objectFit:"contain"}}
            />
          </div>
        </div>
        <div>
          <div className="flex flex-col items-start">
            <h2 className="text-base lg:text-xl pb-1 lg:pb-3 font-semibold lg:font-bold text-dark-green">
              {searchRecipe.title}
            </h2>
            <div className="flex justify-between text-gray pb-2 lg:pb-3">
              <div className="flex items-center">
                <HiOutlineClock className="h-4 w-4 mr-1" />
                <span className="font-light text-xs lg:text-sm lg:mr-3">{searchRecipe.readyInMinutes} Min</span>
              </div>
              <div className="flex items-center">
                <HiOutlineFire className="h-4 w-4 mr-1" />
                <span className="font-light text-xs lg:text-sm">{searchRecipe.nutrition.nutrients[0].amount} Kcal</span>
              </div>
            </div>
            <div className="flex">
              <div className="bg-green text-white px-2 lg:py-0.5 rounded-full text-xs mr-1">
                Easy
              </div>
              <div className="bg-orange text-white px-2 lg:py-0.5 rounded-full text-xs">
                Quick
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default SearchCard;
