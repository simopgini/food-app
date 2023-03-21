// API di SEARCH.JS

  // CHIAMATA ALLE API - ricette quando fa la search o clicca sul bottone



  // const fetchSearchedRecipes = async (inputRecipeName) => {
  //   if (inputRecipeName === ""){
  //     return
  //   }
    // const response = await fetch("https://api.spoonacular.com/recipes/complexSearch?apiKey=5ea4af906f4443dba9c723a359aa6533&type=${type}");
    // const data = await response.json();

    // CAMBIA LA QUERY IN ${query} in base a quello che è scritto nell'input in maniera dinamica
    // https://api.spoonacular.com/recipes/complexSearch?apiKey=5ea4af906f4443dba9c723a359aa6533&query=${inputRecipeName}&number=3&addRecipeInformation=true&addRecipeNutrition=true
  //   const response = `{
  //       "results": [
  //       {
  //       "id": 631762,
  //       "title": "Strawberry Tart",
  //       "image": "https://spoonacular.com/recipeImages/631762-312x231.jpg",
  //       "imageType": "jpg"
  //       },
  //       {
  //       "id": 661904,
  //       "title": "Strawberry Syrup",
  //       "image": "https://spoonacular.com/recipeImages/661904-312x231.jpg",
  //       "imageType": "jpg"
  //       },
  //       {
  //       "id": 661760,
  //       "title": "Strawberry Bites",
  //       "image": "https://spoonacular.com/recipeImages/661760-312x231.jpg",
  //       "imageType": "jpg"
  //       },
  //       {
  //       "id": 1646939,
  //       "title": "Strawberry Scones",
  //       "image": "https://spoonacular.com/recipeImages/1646939-312x231.jpg",
  //       "imageType": "jpg"
  //       },
  //       {
  //       "id": 1470917,
  //       "title": "Strawberry Cobbler",
  //       "image": "https://spoonacular.com/recipeImages/1470917-312x231.jpg",
  //       "imageType": "jpg"
  //       }
  //       ],
  //       "offset": 0,
  //       "number": 5,
  //       "totalResults": 150
  //       }`;

  //   const data = JSON.parse(response);

  //   setSearchedRecipes(data);
  // };


  // 2°CHIAMATA ALLE API - SEARCH: al click del bottone=CUISINE renderizza le recipe cards relative al tipo di CUISINE
  // controlla se è l'endpoint corretto &cuisine=${cuisineButton.cuisine}
  // useEffect(() => {
  //   async function fetchCuisineRecipes(){
  //     const response = await fetch(SEARCH_RECIPES_CUISINE)      
  //     if(!response.ok){
  //       return <div>Oops! Something went wrong: the server did not return the recipes... </div>
  //     }

  //     const data = await response.json()
  //     setCuisineRecipes(data);
  //   }
  // fetchCuisineRecipes()
  // }, [])