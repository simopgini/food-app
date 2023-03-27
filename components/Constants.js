// ATTENZIONE: API GRATIS LIMITATE AD UN TOT DI RICHIESTE GIORNALIERE. 
// SE CI SONO TROPPE CHIAMATE AI VARI ENDPOINTS IN UNA GIORNATA, POI SPARISCONO LE SCHEDE DELLE RICETTE DOVE VIENE FATTA LA FETCH E RIAPPAIONO IL GIORNO DOPO

// DOMINIO
const DEBUG = true

const BASE = (DEBUG) ? `http://localhost:9999` :`https://api.spoonacular.com`

const API_KEY = `?apiKey=5ea4af906f4443dba9c723a359aa6533`

// ENDPOINT UGUALE PER TUTTI
const RECIPES = `${BASE}/recipes`

const RECIPES_COMPLEX_SEARCH = `${RECIPES}/complexSearch${API_KEY}`

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

export { RECIPES_COMPLEX_SEARCH, RECIPES }