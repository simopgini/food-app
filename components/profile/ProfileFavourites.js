import Image from "next/image";
import Link from "next/link";
import { HiOutlineX } from "react-icons/hi";

const ProfileFavourites = ({ recipe }) => {
  return (
    <li className="flex items-center p-2 h-16 w-full  bg-white  rounded-xl drop-shadow hover:scale-105 md:hover:scale-100 md:hover:shadow-md duration-500 cursor-pointer mb-4">
      <div className="flex flex-1 items-center gap-4">
        <Image
          src={recipe.image}
          alt={recipe.title}
          width={30}
          height={30}
          className="h-12 w-12 rounded-xl"
        />
        <p className="first-letter:uppercase">{recipe.title}</p>
      </div>
      <div className="flex justify-end">
        <button>
          <HiOutlineX className="transition duration-300 hover:scale-110 h-5 w-5 lg:h-6 lg:w-6" />
        </button>
      </div>
    </li>
  );
};

export default ProfileFavourites;
