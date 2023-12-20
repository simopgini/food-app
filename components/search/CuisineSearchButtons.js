const CuisineSearchButtons = ({ cuisine }) => {
  return (
    <li key={cuisine.id} className="flex-none mb-4 mr-2 md:pb-4 rounded-lg">
      <button
        onClick={() => cuisine.callback(cuisine.cuisine)}
        className="first-letter:uppercase relative btn-tag bg-gray-lighter  hover:bg-green hover:text-white px-5 lg:py-2.5 rounded-full text-sm"
      >
        <span className="mr-2">{cuisine.cuisine}</span>
        <span className="inset-y-0 absolute py-4 border-l-2 border-white"></span>
        <span className="ml-2">{cuisine.emoji}</span>
      </button>
    </li>
  );
};

export default CuisineSearchButtons;
