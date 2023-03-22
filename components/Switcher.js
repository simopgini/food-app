import { useState } from "react";
import classNames from "classnames";

const Switcher = ({handleSectionVisibility}) => {
  const [isSelected, setIsSelected] = useState(true);

  return (
    <button
      onClick={() => {
        setIsSelected(!isSelected);
        handleSectionVisibility(!isSelected)
      }}
      className={classNames(
        " hover:shadow-lg  outline-1 flex items-center  pl-1 w-full h-12 rounded-2xl font-medium ",
        isSelected ? `bg-gray-mid text-dark-green` : `bg-dark-green text-white`
      )}
    >
      <span
        className={classNames(
          " active:shadow-dark-green-500/50 hover:shadow-dark-green-500/50 transition-400 hover:shadow-xl  h-10 w-1/2 rounded-xl mr-2 font-medium flex items-center justify-center",
          isSelected ? `bg-dark-green text-white` : `bg-gray-mid text-dark-green`
        )}
      >
        Ingredients
      </span>
      <span className="flex-1">Instructions</span>
    </button>
  );
};

export default Switcher;
