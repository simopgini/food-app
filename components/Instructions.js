import { useState, useEffect } from "react";

const Instructions = ({ instruction, index }) => {

  return (
    <div className="mb-4 flex items-center text-sm font-medium">
      <div className="bg-green text-white rounded-lg h-6 w-6 mr-2 flex items-center justify-center">
        <span className="px-2">{index + 1}</span>
      </div>
      <p>{instruction.original}</p>
    </div>
  );
};

export default Instructions;