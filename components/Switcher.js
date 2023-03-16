import { useState, useEffect } from "react";
import classNames from "classnames";

const Switcher = () => {
  const [isSelected, setIsSelected] = useState(true);

  return (
    <button
      onClick={() => {
        setIsSelected(!isSelected);
      }}
      className={classNames(
        " hover:shadow-lg  outline-1 flex items-center pl-1 w-full h-12 rounded-2xl font-medium ",
        isSelected ? `bg-gray-mid text-dark-green` : `bg-dark-green text-white`
      )}
    >
                {/* "bg-red-400" : "bg-dark-green" */}
      <span
        // onClick={() => {
        //   setIsSelected(isSelected);
        // }}
        className={classNames(
          " active:shadow-dark-green-500/50 hover:shadow-dark-green-500/50 transition-400 hover:shadow-xl  h-10 w-1/2 rounded-xl mr-2 font-medium flex items-center justify-center",
          isSelected ? `bg-dark-green text-white` : `bg-gray-mid text-dark-green`
        )}
      >
        Ingredients
      </span>
      Instructions
    </button>
    // <button onClick={()=>{setIsSelected(!isSelected)}}
    //         className={classNames("flex items-center pl-1 w-full h-12 bg-gray-lighter rounded-2xl font-medium", {
    //         'bg-dark-green': isSelected,
    //         })}>
    //     <span className={classNames("h-10 w-1/2 bg-dark-green rounded-xl mr-2 font-medium text-white flex items-center justify-center", {
    //         'bg-gray-lighter': !isSelected,
    //     }
    //     )}>Ingredients</span>
    //     Instructions
    // </button>
  );
};

export default Switcher;
