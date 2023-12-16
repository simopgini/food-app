import { HiClock } from "react-icons/hi";
import Image from "next/image";
import Link from "next/link";

const HorizontalCardHome = ({ vegetarianRecipeCard }) => {
  return (
    <div className="my-4 flex-none  rounded-xl drop-shadow hover:scale-105 duration-500 cursor-pointer shadow-md hover:shadow-lg">
      <Link href={`/${vegetarianRecipeCard.id}`} className="">
        <div className="relative h-40 w-64 sm:h-40 sm:w-56 lg:h-52 lg:w-80">
          <Image
            className="contrast-[1.1] saturate-[1.4] rounded-xl"
            priority
            src={vegetarianRecipeCard.image}
            alt={vegetarianRecipeCard.title}
            fill
            style={{ objectFit: "cover" }}
          />
          <div className="w-full rounded-b-xl bg-gradient-to-t from-dark-green to-transparent bottom-0 absolute px-2 py-2 lg:px-4 lg:py-4 text-white">
            <h2 className="text-base pb-1 font-semibold lg:text-lg truncate">
              {vegetarianRecipeCard.title}
            </h2>
            <div className="flex items-center text-sm lg:text-sm">
              <HiClock className="h-4 w-4 mr-1 text-white" />
              <span className="font-light text-xs lg:text-sm">
                {vegetarianRecipeCard.readyInMinutes} min
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default HorizontalCardHome;
