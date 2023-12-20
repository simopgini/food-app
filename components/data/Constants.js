// ATTENZIONE:  FREE API LIMITED TO A CERTAIN AMOUNT OF DAILY REQUESTS
// IF TOO MANY API CALLS ARE MADE TO THE DIFFERENT ENDPOINTS IN A DAY, THE RECIPE CARDS
// WHERE THE FETCH IS MADE DISAPPEAR AND REAPPEAR THE FOLLOWING DAY

const BASE = `https://api.spoonacular.com`;

const API_KEY = `?apiKey=5ea4af906f4443dba9c723a359aa6533`;

// BASE ENDPOINT
const RECIPES = `${BASE}/recipes`;

const RECIPES_COMPLEX_SEARCH = `${RECIPES}/complexSearch${API_KEY}`;

export { RECIPES_COMPLEX_SEARCH, RECIPES };

// MOCK API TO USE IN CASE YOU'VE EXCEEDED THE  API CALLS' DAILY LIMIT
// DOMINIO
// const DEBUG = true

// const BASE = (DEBUG) ? `http://localhost:9999` :`https://api.spoonacular.com`

// HOMEPAGE ENDPOINTS
// SEARCH
//const SEARCH_RECIPES_CUISINE = `https://api.spoonacular.com/recipes/complexSearch${API_KEY}&addRecipeNutrition=true&addRecipeInformation=true&number=3&cuisine=${cuisineButton.cuisine}`
// const SEARCH_RECIPES_CUISINE = `${RECIPES}&cuisine=${cuisineButton.cuisine}`
//   function fetchVegetarianRecipes() {
//   if (DEBUG) {
//     return JSON.parse(vegetarianDishesJson)
//   }

//   // const response = await fetch(`${RECIPES_COMPLEX_SEARCH}&addRecipeNutrition=true&addRecipeInformation=true&number=3&diet=vegetarian`);
//   // if (!response.ok) {
//   //   return (
//   //     <div>
//   //       Oops! Something went wrong: the server did not return the recipes...{" "}
//   //     </div>
//   //   );
//   // }

//   // return await response.json();
// }
