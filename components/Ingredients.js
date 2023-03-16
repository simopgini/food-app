import { useState, useEffect } from "react";
import { HiCheck } from "react-icons/hi";

const Ingredients = ({ ingredient }) => {
  return (
    <li className="bg-gray-lighter text-sm font-medium mb-2 py-2 px-2 flex justify-between items-center rounded-xl text-dark-green">
      <div className="rounded-xl flex items-center">
        <div className="bg-white rounded-lg p-1 mr-2 text-green text-lg">
          <HiCheck />
        </div>
        <p className="first-letter:uppercase">{ingredient.name}</p>
      </div>
      <p className="pr-2">
        {ingredient.amount} {ingredient.unit}
      </p>
    </li>
  );
};

export default Ingredients;

{
  /* <section className="px-4">
            <div className="flex justify-between items-baseline">
              <h1 className=" mb-6 text-dark-green text-xl font-bold">
                Ingredients
              </h1>
              <p className="flex text-gray">
                <span className="font-light text-xs">4 items</span>
              </p>
            </div>
            <div>
              <div className="bg-gray-lighter text-sm font-medium mb-2 py-2 px-2 flex justify-between items-center rounded-xl text-dark-green">
                <div className="rounded-xl flex items-center">
                  <div className="bg-white rounded-lg p-1 mr-2">🥑</div>
                  <p>Avocado</p>
                </div>
                <p className="pr-2">2</p>
              </div>
              <div className="bg-gray-lighter text-sm font-medium mb-2 py-2 px-2 flex justify-between items-center rounded-xl text-dark-green">
                <div className="rounded-xl flex items-center">
                  <div className="bg-white rounded-lg p-1 mr-2">🍋</div>
                  <p>Lime</p>
                </div>
                <p className="pr-2">1/2</p>
              </div>
              <div className="bg-gray-lighter text-sm font-medium mb-2 py-2 px-2 flex justify-between items-center rounded-xl text-dark-green">
                <div className="rounded-xl flex items-center">
                  <div className="bg-white rounded-lg p-1 mr-2">🍅</div>
                  <p>Cherry Tomatoes</p>
                </div>
                <p className="pr-2">8</p>
              </div>
              <div className="bg-gray-lighter text-sm font-medium mb-2 py-2 px-2 flex justify-between items-center rounded-xl text-dark-green">
                <div className="rounded-xl flex items-center">
                  <div className="bg-white rounded-lg p-1 mr-2">🌶️</div>
                  <p>Paprika</p>
                </div>
                <p className="pr-2">q.b.</p>
              </div>
            </div>
          </section> */
}
