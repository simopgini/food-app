import React from "react";
import {useRouter} from "next/router"

const RecipeId = () => { 
    const router = useRouter();

    const recipeId = router.query.recipeId;

    // send a request to the backend api to fetch the recipe item with recipeId
    
    return <div>prova 1,2,3....</div>
}

export default RecipeId;