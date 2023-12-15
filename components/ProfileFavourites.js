import Image from "next/image";
import Link from "next/link";
import { HiOutlineX } from "react-icons/hi";

const ProfileFavourites = ({}) => {
  return (
    <li className="flex items-center p-6 h-20 w-full gap-4 bg-white  rounded-xl drop-shadow hover:scale-105 md:hover:scale-100 md:hover:shadow-md duration-500 cursor-pointer mb-6">
      <div className="flex flex-1 items-center gap-4">
        {/* <img src={imageUrl} alt={name} className="h-12 w-12" /> */}
        <div>image</div>
        <p className="first-letter:uppercase">asdasdasdasd</p>
      </div>
      <div className="flex justify-end">
        {/* onClick={onDelete} */}
        <button>
          <HiOutlineX className="transition duration-300 hover:scale-110 h-5 w-5 lg:h-6 lg:w-6" />
        </button>
      </div>
    </li>
  );
};

export default ProfileFavourites;

// <div className="px-4 md:px-8 lg:px-16 2xl:px-24 mb-6">
//   <div className="flex items-center p-4 gap-4 bg-white  rounded-xl drop-shadow hover:scale-105 md:hover:scale-100 md:hover:shadow-md duration-500 cursor-pointer">
//     {/* <Link
//     href={`/${searchRecipe.id}`}
//     className="flex items-center bg-white  rounded-xl drop-shadow hover:scale-105 md:hover:scale-100 md:hover:shadow-md duration-500 cursor-pointer"
//     > */}
//     <div className="mx-2  lg:mx-5 ">
//       {/* h-20 w-20 md:h-24 md:w-24 lg:h-28 lg:w-28 */}
//       {/* <Image
//           className="hover:transition hover:duration-300 rounded-xl	 contrast-[1.1] saturate-[1.4] object-cover shadow-md hover:shadow-xl "
//           src={searchRecipe.image}
//           alt={searchRecipe.title}
//           priority
//           fill
//         /> */}
//       <p>img</p>
//     </div>
//     <div className="">
//       <h2 className="text-base lg:text-xl font-semibold lg:font-bold text-dark-green">
//         {/* {searchRecipe.title} */}recipe title
//       </h2>
//     </div>
//     {/* </Link> */}
//   </div>
//   <div className="flex justify-end">
//     {/* onClick={onDelete} */}
//     <button>
//       <HiOutlineX className="w-7 h-7" />
//     </button>
//   </div>
// </div>
