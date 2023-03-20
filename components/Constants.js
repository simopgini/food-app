// ENDPOINT UGUALE PER TUTTI
const RECIPES = "https://api.spoonacular.com/recipes/complexSearch?apiKey=5ea4af906f4443dba9c723a359aa6533&addRecipeNutrition=true&addRecipeInformation=true&number=3"
// HOMEPAGE ENDPOINTS
const VEGETARIAN_RECIPES_HOME = "https://api.spoonacular.com/recipes/complexSearch?apiKey=5ea4af906f4443dba9c723a359aa6533&addRecipeNutrition=true&addRecipeInformation=true&number=3&diet=vegetarian"
// const VEGETARIAN_RECIPES_HOME = `${RECIPES}&diet=vegetarian`

const RECIPES_TYPE_URL =
  "https://api.spoonacular.com/recipes/complexSearch?apiKey=5ea4af906f4443dba9c723a359aa6533&addRecipeNutrition=true&addRecipeInformation=true&number=3&type=${type}"
// const RECIPES_TYPE_URL = `${RECIPES}&type=${type}`

// SEARCH
const SEARCH_RECIPE_NAME = "https://api.spoonacular.com/recipes/complexSearch?apiKey=5ea4af906f4443dba9c723a359aa6533&addRecipeNutrition=true&addRecipeInformation=true&number=3&query=${inputRecipeName}"
// const SEARCH_RECIPE_NAME = `${RECIPES}&query=${inputRecipeName}`

const SEARCH_RECIPES_CUISINE = "https://api.spoonacular.com/recipes/complexSearch?apiKey=5ea4af906f4443dba9c723a359aa6533&addRecipeNutrition=true&addRecipeInformation=true&number=3&cuisine=${cuisineButton.cuisine}"
// const SEARCH_RECIPES_CUISINE = `${RECIPES}&cuisine=${cuisineButton.cuisine}`

// RECIPE
const RECIPE_INFO = "https://api.spoonacular.com/recipes/${recipe.id}/information?apiKey=5ea4af906f4443dba9c723a359aa6533&includeNutrition=true"


export { RECIPES_TYPE_URL, VEGETARIAN_RECIPES_HOME, SEARCH_RECIPE_NAME, SEARCH_RECIPES_CUISINE, RECIPE_INFO, RECIPES }