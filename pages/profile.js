import ProfileFavourites from "@/pages/[recipeId]/ProfileFavourites";
import { useFavourites } from "@/store/FavoritesContext";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { HiOutlineChevronLeft } from "react-icons/hi";

const Profile = () => {
  const { favourites } = useFavourites();
  const [isSaved, setIsSaved] = useState(true);

  return (
    <>
      <div className="h-screen mb-8">
        <div className="lg:mt-20">
          <div className="lg:hidden px-4 md:px-8 lg:px-16 mb-6 mt-16 flex justify-between items-center">
            <Link
              href="/"
              className="hover:scale-105 bg-white rounded-lg p-1 shadow-md"
            >
              <HiOutlineChevronLeft className="hover:animate-pulse h-6 w-6" />
            </Link>
            <div className="flex-1 bg-white"></div>
            <div className="flex-auto p-1 font-bold text-xl">Profile</div>
          </div>
          <section className="px-4 md:px-8 lg:px-16">
            <div className="flex flex-col justify-center">
              <div className="flex justify-center rounded-full ">
                <Image
                  className="hover:transition hover:duration-300 contrast-[1.1] saturate-[1.4]"
                  priority
                  src="/profile-stats.jpg"
                  alt="Shopping list"
                  sizes="100vw"
                  style={{
                    width: "30%",
                    height: "30%",
                  }}
                  width={500}
                  height={500}
                />
              </div>
              <p className="text-sm md:text-lg lg:text-xl xl:text-xl text-center px-4 md:px-8 lg:px-16 2xl:px-24 mb-6">
                Hello,
              </p>
            </div>
            <h2 className="font-bold text-xl text-[#0A2533] mb-8">
              Saved favourite recipes
            </h2>
            {/* <p>No recipes added yet.</p> */}
            <ul>
              {favourites.length > 0 ? (
                favourites.map((recipe) => (
                  <ProfileFavourites key={recipe.id} recipe={recipe} />
                ))
              ) : (
                <p>No recipes added yet.</p>
              )}
            </ul>
          </section>
        </div>
      </div>
    </>
  );
};
export default Profile;
