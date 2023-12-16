import { createContext, useContext, useState } from "react";

const FavouritesContext = createContext();

export const FavouritesProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

  const addFavourite = (recipe) => {
    setFavourites((prevFavourites) => [...prevFavourites, recipe]);
  };

  const removeFavourite = (recipeId) => {
    setFavourites((prevFavourites) =>
      prevFavourites.filter((recipe) => recipe.id !== recipeId)
    );
  };

  return (
    <FavouritesContext.Provider
      value={{ favourites, addFavourite, removeFavourite }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};

export const useFavourites = () => {
  return useContext(FavouritesContext);
};
