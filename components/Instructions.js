import { useState, useEffect } from "react";

const Instructions = ({ instruction, index }) => {

  return (
    <div className="mb-4 px-4 md:px-8 flex items-center text-sm font-medium">
      <div className="bg-green text-white rounded-lg h-6 w-6 mr-2 flex items-center justify-center">
        <span className="px-2">{index + 1}</span>
      </div>
      <p>{instruction.original}</p>
    </div>
  );
};

export default Instructions;

{/* INSTRUCTIONS SECTION */}
          {/* <section>
            <div className="mb-4 mx-4 flex items-center text-sm font-medium">
              <div className="bg-green text-white rounded-lg h-6 w-6 mr-2 flex items-center justify-center">
                <span className="px-2">1</span>
              </div>
              <p>
                {recipeCard.extendedIngredients[0].original} Mash your avocado
                separately.
              </p>
            </div>
            <div className="mb-4 mx-4 flex items-center text-sm font-medium">
              <div className="bg-green text-white rounded-lg h-6 w-6 mr-2 flex items-center justify-center">
                <span className="px-2">2</span>
              </div>
              <p>Slice cherry tomatoes and add salt and pepper.</p>
            </div>
            <div className="mb-4 mx-4 flex items-center text-sm font-medium">
              <div className="bg-green text-white rounded-lg h-6 w-6 mr-2 flex items-center justify-center">
                <span className="px-2">3</span>
              </div>
              <p>
                Buy good bread and toast it well. It offers a sturdy base and a
                crisp contrast against the creamy avocado.
              </p>
            </div>
            <div className="mb-4 mx-4 flex items-center text-sm font-medium">
              <div className="bg-green text-white rounded-lg h-6 w-6 mr-2 flex items-center justify-center">
                <span className="px-2">4</span>
              </div>
              <p>Don’t forget lime and paprika. </p>
            </div>
          </section> */}