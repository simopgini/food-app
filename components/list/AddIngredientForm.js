const AddIngredientForm = ({ isEditing, handleSubmit, name, setName }) => {
  return (
    <form
      className="px-4 md:px-8 lg:px-16 2xl:px-24 grocery-form"
      onSubmit={handleSubmit}
    >
      <div className="flex form-control">
        <input
          className="flex-1 placeholder:text-sm lg:placeholder:text-base placeholder:text-gray block  bg-gray-light w-full  rounded-lg py-2 lg:py-3.5 pr-3 shadow-md focus:outline-none 
                                    focus:border-green focus:ring-green focus:ring-1 sm:text-sm"
          style={{ borderWidth: 0 }}
          placeholder="e.g. avocado"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button
          type="submit"
          className="submit-btn lg:text-base drop-shadow-lg drop-shadow-white hover:shadow-[#A4D3C5] hover:bg-[#55a78e] duration-500 hover:scale-105 ml-3 lg:ml-5 px-4 py-2 bg-green text-sm text-white rounded-lg"
        >
          {isEditing ? "Edit" : "Add"}
        </button>
      </div>
    </form>
  );
};

export default AddIngredientForm;
