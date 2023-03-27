// import { useState, useEffect } from "react";

const Instructions = ({ instruction, index }) => {

  return (
    <div className="mb-4 flex items-center text-sm font-medium">
      <div className="bg-green text-white rounded-xl h-6 w-6 2xl:h-10 2xl:w-10 mr-2 2xl:mr-4 flex items-center justify-center">
        <span className="px-2 2xl:text-base">{index + 1}</span>
      </div>
      <p className="2xl:text-base">{instruction.original}</p>
    </div>
  );
};

export default Instructions;