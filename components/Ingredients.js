import { useState, useEffect } from "react";
import { HiCheck } from "react-icons/hi";

const Ingredients = ({ingredient}) => {


return (
            <div className="bg-gray-lighter text-sm font-medium mb-2 py-2 px-2 flex justify-between items-center rounded-xl text-dark-green">
                <div className="rounded-xl flex items-center">
                  <div className="bg-white rounded-lg p-1 mr-2 text-green text-lg"><HiCheck /></div>
                  <p className="first-letter:uppercase">{ingredient.name}</p>
                </div>
                <p className="pr-2">{ingredient.amount} {ingredient.unit}</p>
            </div>
        );
    };

export default Ingredients;