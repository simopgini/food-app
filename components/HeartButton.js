import { HiOutlineHeart, HiHeart } from "react-icons/hi";
// import { useContext } from "react";

export const HeartButton = ({ isActive, setIsActive }) => {
  // const recipeCtx = useContext(RecipeInfoContext);

  // const handleHeartClick = () => {
  //   recipe.isFavorite = !recipe.isFavorite;
  //   recipeCtx.handleFavoriteToggle(recipe);
  // };

  return (
    <div>
      {isActive ? (
        <HiHeart
          onClick={() => {
            setIsActive(!isActive);
          }}
          className="h-6 w-6 text-green"
        />
      ) : (
        <HiOutlineHeart
          onClick={() => {
            setIsActive(!isActive);
          }}
          className="h-6 w-6 text-green"
        />
      )}
    </div>
    // <button onClick={handleHeartClick}>
    //   {recipe.isFavorite ? (
    //     <HiHeart className="h-7 w-7 text-rose-500" />
    //   ) : (
    //     <HiOutlineHeart className="h-7 w-7 text-rose-500" />
    //   )}
    // </button>
  );
};
