import Image from "next/image";
import Link from "next/link";
import { HiOutlineFire, HiOutlineClock } from "react-icons/hi";

const VerticalCard = ({ recipe }) => {
  return (
    <>
      <Link
        href={`/${recipe.id}`}
        className="w-48 lg:w-52 first-of-type:ml-1.5 last-of-type:mr-2 mb-4 bg-white rounded-xl drop-shadow hover:scale-105 duration-500 cursor-pointer"
      >
        <div className="py-2 pt-4 md:pt-4 md:py-2 lg:pb-4 flex justify-center">
          <div className="mx-4 relative h-28 w-36 md:h-38 md:w-44 xl:mx-4">
            <Image
              className="hover:transition hover:duration-300 rounded-xl contrast-[1.1] saturate-[1.4]"
              priority
              src={recipe.image}
              alt={recipe.title}
              fill
              style={{ objectFit: "fill" }}
            />
          </div>
        </div>
        <div className="px-4 py-2">
          <h2 className="text-sm pb-1 font-semibold lg:text-base text-dark-green  mb-1.5 lg:mb-2">
            {recipe.title}
          </h2>
          <div className="flex justify-between text-gray pb-6">
            <div className="flex items-center">
              <HiOutlineFire className="h-4 w-4 mr-1" />
              <span className="font-light text-xs lg:text-sm">{recipe.nutrition.nutrients[0].amount} Kcal</span>
            </div>
            <div className="flex items-center">
              <HiOutlineClock className="h-4 w-4 mr-1" />
              <span className="font-light text-xs lg:text-sm">{recipe.readyInMinutes} min</span>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default VerticalCard;
