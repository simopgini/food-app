import React from "react";
import Head from "next/head";
import { useState } from "react";
import VerticalCard from "@/components/VerticalCard";
import { Inter } from "@next/font/google";
import Image from "next/image";
import HorizontalCardHome from "@/components/HorizontalCardHome";
import Modal from "@/components/Modal";
import { useRouter } from "next/router";
import DesktopNavbar from "@/components/DesktopNavbar";
import RecipeVerticalCard from "@/components/RecipeVerticalCard";
import Link from "next/link";
import CategoryHomeButtons from "@/components/CategoryHomeButtons";
import recipeJson from "@/components/recipeJson";
import vegetarianDishesJson from "@/components/vegetarianDishesJson";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();


  const [vegetarianRecipeCards, setVegetarianRecipeCards] = useState({
    "results": [
      {
        "vegetarian": true,
        "vegan": false,
        "glutenFree": false,
        "dairyFree": false,
        "veryHealthy": true,
        "cheap": false,
        "veryPopular": true,
        "sustainable": false,
        "lowFodmap": false,
        "weightWatcherSmartPoints": 15,
        "gaps": "no",
        "preparationMinutes": 5,
        "cookingMinutes": 0,
        "aggregateLikes": 689,
        "healthScore": 64,
        "creditsText": "Jen West",
        "sourceName": "Pink When",
        "pricePerServing": 206.79,
        "id": 715497,
        "title": "Berry Banana Breakfast Smoothie",
        "readyInMinutes": 5,
        "servings": 1,
        "sourceUrl": "http://www.pinkwhen.com/berry-banana-breakfast-smoothie/",
        "image": "https://spoonacular.com/recipeImages/715497-312x231.jpg",
        "imageType": "jpg",
        "summary": "If you want to add more <b>lacto ovo vegetarian</b> recipes to your recipe box, Berry Banana Breakfast Smoothie might be a recipe you should try. One portion of this dish contains about <b>21g of protein</b>, <b>10g of fat</b>, and a total of <b>457 calories</b>. This recipe serves 1 and costs $2.07 per serving. 689 people have tried and liked this recipe. It works well as a rather inexpensive breakfast. A mixture of banana, graham cracker crumbs, vanilla yogurt, and a handful of other ingredients are all it takes to make this recipe so yummy. From preparation to the plate, this recipe takes roughly <b>5 minutes</b>. It is brought to you by Pink When. Overall, this recipe earns a <b>super spoonacular score of 99%</b>. Similar recipes include <a href=\"https://spoonacular.com/recipes/berry-banana-breakfast-smoothie-1364145\">Berry Banana Breakfast Smoothie</a>, <a href=\"https://spoonacular.com/recipes/berry-banana-breakfast-smoothie-1405583\">Berry Banana Breakfast Smoothie</a>, and <a href=\"https://spoonacular.com/recipes/berry-banana-breakfast-smoothie-1601311\">Berry Banana Breakfast Smoothie</a>.",
        "cuisines": [],
        "dishTypes": [
          "morning meal",
          "brunch",
          "beverage",
          "breakfast",
          "drink"
        ],
        "diets": [
          "lacto ovo vegetarian"
        ],
        "occasions": [],
        "analyzedInstructions": [{
          "name": "",
          "steps": [{
              "number": 1,
              "step": "Take some yogurt in your favorite flavor and add 1 container to your blender.",
              "ingredients": [{
                "id": 1116,
                "name": "yogurt",
                "localizedName": "yogurt",
                "image": "plain-yogurt.jpg"
              }],
              "equipment": [{
                "id": 404726,
                "name": "blender",
                "localizedName": "blender",
                "image": "blender.png"
              }]
            },
            {
              "number": 2,
              "step": "Add in the berries, banana, and soy milk and blend. Top your glass with a few graham cracker crumbs and serve.",
              "ingredients": [{
                  "id": 10018617,
                  "name": "graham cracker crumbs",
                  "localizedName": "graham cracker crumbs",
                  "image": "graham-crackers.jpg"
                },
                {
                  "id": 16223,
                  "name": "soymilk",
                  "localizedName": "soymilk",
                  "image": "soy-milk.jpg"
                },
                {
                  "id": 1009054,
                  "name": "berries",
                  "localizedName": "berries",
                  "image": "berries-mixed.jpg"
                },
                {
                  "id": 9040,
                  "name": "banana",
                  "localizedName": "banana",
                  "image": "bananas.jpg"
                }
              ],
              "equipment": []
            }
          ]
        }],
        "spoonacularSourceUrl": "https://spoonacular.com/berry-banana-breakfast-smoothie-715497"
      },
      {
        "vegetarian": true,
        "vegan": true,
        "glutenFree": true,
        "dairyFree": true,
        "veryHealthy": true,
        "cheap": false,
        "veryPopular": false,
        "sustainable": false,
        "lowFodmap": false,
        "weightWatcherSmartPoints": 12,
        "gaps": "no",
        "preparationMinutes": -1,
        "cookingMinutes": -1,
        "aggregateLikes": 309,
        "healthScore": 100,
        "creditsText": "blogspot.com",
        "sourceName": "blogspot.com",
        "pricePerServing": 134.63,
        "id": 782585,
        "title": "Cannellini Bean and Asparagus Salad with Mushrooms",
        "readyInMinutes": 45,
        "servings": 6,
        "sourceUrl": "http://foodandspice.blogspot.com/2016/05/cannellini-bean-and-asparagus-salad.html",
        "image": "https://spoonacular.com/recipeImages/782585-312x231.jpg",
        "imageType": "jpg",
        "summary": "Cannellini Bean and Asparagus Salad with Mushrooms requires approximately <b>45 minutes</b> from start to finish. This main course has <b>482 calories</b>, <b>31g of protein</b>, and <b>6g of fat</b> per serving. This gluten free, dairy free, lacto ovo vegetarian, and vegan recipe serves 6 and costs <b>$1.35 per serving</b>. 309 people were impressed by this recipe. Head to the store and pick up grain mustard, sea salt, lemon zest, and a few other things to make it today. It is brought to you by foodandspice.blogspot.com. Taking all factors into account, this recipe <b>earns a spoonacular score of 70%</b>, which is pretty good. Similar recipes are <a href=\"https://spoonacular.com/recipes/cannellini-bean-salad-422994\">Cannellini Bean Salad</a>, <a href=\"https://spoonacular.com/recipes/refreshing-cannellini-bean-salad-113127\">Refreshing Cannellini Bean Salad</a>, and <a href=\"https://spoonacular.com/recipes/cannellini-and-green-bean-salad-33177\">Cannellini-and-Green Bean Salad</a>.",
        "cuisines": [],
        "dishTypes": [
          "side dish",
          "lunch",
          "main course",
          "salad",
          "main dish",
          "dinner"
        ],
        "diets": [
          "gluten free",
          "dairy free",
          "lacto ovo vegetarian",
          "vegan"
        ],
        "occasions": [],
        "analyzedInstructions": [{
          "name": "",
          "steps": [{
              "number": 1,
              "step": "Rinse the cannellini beans and soak for 8 hours or overnight in several inches of water.",
              "ingredients": [{
                  "id": 10716050,
                  "name": "cannellini beans",
                  "localizedName": "cannellini beans",
                  "image": "cooked-cannellini-beans.png"
                },
                {
                  "id": 14412,
                  "name": "water",
                  "localizedName": "water",
                  "image": "water.png"
                }
              ],
              "equipment": [],
              "length": {
                "number": 480,
                "unit": "minutes"
              }
            },
            {
              "number": 2,
              "step": "Drain and rinse, then transfer to a medium saucepan and cover with fresh water.",
              "ingredients": [{
                "id": 14412,
                "name": "water",
                "localizedName": "water",
                "image": "water.png"
              }],
              "equipment": [{
                "id": 404669,
                "name": "sauce pan",
                "localizedName": "sauce pan",
                "image": "sauce-pan.jpg"
              }]
            },
            {
              "number": 3,
              "step": "Add the curry leaves or bay leaf and bring to a boil. Reduce heat to medium-low, cover, and simmer for 1 hour or until the beans are tender but not falling apart.",
              "ingredients": [{
                  "id": 93604,
                  "name": "curry leaves",
                  "localizedName": "curry leaves",
                  "image": "curry-leaves.jpg"
                },
                {
                  "id": 2004,
                  "name": "bay leaves",
                  "localizedName": "bay leaves",
                  "image": "bay-leaves.jpg"
                },
                {
                  "id": 0,
                  "name": "beans",
                  "localizedName": "beans",
                  "image": "kidney-beans.jpg"
                }
              ],
              "equipment": [],
              "length": {
                "number": 60,
                "unit": "minutes"
              }
            },
            {
              "number": 4,
              "step": "Drain and transfer to a large salad bowl.Meanwhile, snap the woody ends off of the asparagus spears and steam the spears for 6 minutes or until just tender but still retaining their crunch.",
              "ingredients": [{
                "id": 11011,
                "name": "asparagus",
                "localizedName": "asparagus",
                "image": "asparagus.png"
              }],
              "equipment": [{
                "id": 404783,
                "name": "bowl",
                "localizedName": "bowl",
                "image": "bowl.jpg"
              }],
              "length": {
                "number": 6,
                "unit": "minutes"
              }
            },
            {
              "number": 5,
              "step": "Transfer to the salad bowl.Now cook the mushrooms.",
              "ingredients": [{
                "id": 11260,
                "name": "mushrooms",
                "localizedName": "mushrooms",
                "image": "mushrooms.png"
              }],
              "equipment": [{
                "id": 404783,
                "name": "bowl",
                "localizedName": "bowl",
                "image": "bowl.jpg"
              }]
            },
            {
              "number": 6,
              "step": "Heat the oil in a large skillet over high heat. As soon as the oil is hot, drop in the mushrooms and cook, stirring constantly, for 5 minutes or until the mushrooms begin to brown and lose some of their liquid.",
              "ingredients": [{
                  "id": 11260,
                  "name": "mushrooms",
                  "localizedName": "mushrooms",
                  "image": "mushrooms.png"
                },
                {
                  "id": 4582,
                  "name": "cooking oil",
                  "localizedName": "cooking oil",
                  "image": "vegetable-oil.jpg"
                }
              ],
              "equipment": [{
                "id": 404645,
                "name": "frying pan",
                "localizedName": "frying pan",
                "image": "pan.png"
              }],
              "length": {
                "number": 5,
                "unit": "minutes"
              }
            },
            {
              "number": 7,
              "step": "Transfer to the bowl with the asparagus.To make the dressing, combine the tarragon, lemon zest, garlic, lemon juice, olive oil and mustard in a small food processor or blender. Process until smooth.",
              "ingredients": [{
                  "id": 9152,
                  "name": "lemon juice",
                  "localizedName": "lemon juice",
                  "image": "lemon-juice.jpg"
                },
                {
                  "id": 9156,
                  "name": "lemon zest",
                  "localizedName": "lemon zest",
                  "image": "zest-lemon.jpg"
                },
                {
                  "id": 11011,
                  "name": "asparagus",
                  "localizedName": "asparagus",
                  "image": "asparagus.png"
                },
                {
                  "id": 4053,
                  "name": "olive oil",
                  "localizedName": "olive oil",
                  "image": "olive-oil.jpg"
                },
                {
                  "id": 2041,
                  "name": "tarragon",
                  "localizedName": "tarragon",
                  "image": "tarragon.jpg"
                },
                {
                  "id": 2046,
                  "name": "mustard",
                  "localizedName": "mustard",
                  "image": "regular-mustard.jpg"
                },
                {
                  "id": 11215,
                  "name": "garlic",
                  "localizedName": "garlic",
                  "image": "garlic.png"
                }
              ],
              "equipment": [{
                  "id": 404771,
                  "name": "food processor",
                  "localizedName": "food processor",
                  "image": "food-processor.png"
                },
                {
                  "id": 404726,
                  "name": "blender",
                  "localizedName": "blender",
                  "image": "blender.png"
                },
                {
                  "id": 404783,
                  "name": "bowl",
                  "localizedName": "bowl",
                  "image": "bowl.jpg"
                }
              ]
            },
            {
              "number": 8,
              "step": "Pour the dressing over the salad, season with salt and pepper, and toss.",
              "ingredients": [{
                "id": 1102047,
                "name": "salt and pepper",
                "localizedName": "salt and pepper",
                "image": "salt-and-pepper.jpg"
              }],
              "equipment": []
            },
            {
              "number": 9,
              "step": "Serve at room temperature or chilled.",
              "ingredients": [],
              "equipment": []
            }
          ]
        }],
        "spoonacularSourceUrl": "https://spoonacular.com/cannellini-bean-and-asparagus-salad-with-mushrooms-782585"
      },
      {
        "vegetarian": true,
        "vegan": true,
        "glutenFree": true,
        "dairyFree": true,
        "veryHealthy": true,
        "cheap": false,
        "veryPopular": true,
        "sustainable": false,
        "lowFodmap": false,
        "weightWatcherSmartPoints": 4,
        "gaps": "no",
        "preparationMinutes": -1,
        "cookingMinutes": -1,
        "aggregateLikes": 3689,
        "healthScore": 75,
        "creditsText": "Full Belly Sisters",
        "license": "CC BY-SA 3.0",
        "sourceName": "Full Belly Sisters",
        "pricePerServing": 112.39,
        "id": 716426,
        "title": "Cauliflower, Brown Rice, and Vegetable Fried Rice",
        "readyInMinutes": 30,
        "servings": 8,
        "sourceUrl": "http://fullbellysisters.blogspot.com/2012/01/cauliflower-fried-rice-more-veggies.html",
        "image": "https://spoonacular.com/recipeImages/716426-312x231.jpg",
        "imageType": "jpg",
        "summary": "You can never have too many Chinese recipes, so give Cauliflower, Brown Rice, and Vegetable Fried Rice a try. This recipe serves 8 and costs $1.12 per serving. This hor d'oeuvre has <b>192 calories</b>, <b>7g of protein</b>, and <b>6g of fat</b> per serving. Head to the store and pick up broccoli, sesame seeds, soy sauce, and a few other things to make it today. 3689 people were impressed by this recipe. It is brought to you by fullbellysisters.blogspot.com. It is a good option if you're following a <b>gluten free, dairy free, lacto ovo vegetarian, and vegan</b> diet. From preparation to the plate, this recipe takes roughly <b>30 minutes</b>. Overall, this recipe earns a <b>spectacular spoonacular score of 100%</b>. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/cauliflower-brown-rice-and-vegetable-fried-rice-1584601\">Cauliflower, Brown Rice, and Vegetable Fried Rice</a>, <a href=\"https://spoonacular.com/recipes/cauliflower-brown-rice-and-vegetable-fried-rice-1238897\">Cauliflower, Brown Rice, and Vegetable Fried Rice</a>, and <a href=\"https://spoonacular.com/recipes/cauliflower-brown-rice-and-vegetable-fried-rice-1230097\">Cauliflower, Brown Rice, and Vegetable Fried Rice</a>.",
        "cuisines": [
          "Chinese",
          "Asian"
        ],
        "dishTypes": [
          "side dish",
          "antipasti",
          "starter",
          "snack",
          "appetizer",
          "antipasto",
          "hor d'oeuvre"
        ],
        "diets": [
          "gluten free",
          "dairy free",
          "lacto ovo vegetarian",
          "vegan"
        ],
        "occasions": [],
        "analyzedInstructions": [{
          "name": "",
          "steps": [{
              "number": 1,
              "step": "Remove the cauliflower's tough stem and reserve for another use. Using a food processor, pulse cauliflower florets until they resemble rice or couscous. You should end up with around four cups of \"cauliflower rice.\"",
              "ingredients": [{
                  "id": 10011135,
                  "name": "cauliflower florets",
                  "localizedName": "cauliflower florets",
                  "image": "cauliflower.jpg"
                },
                {
                  "id": 10111135,
                  "name": "cauliflower rice",
                  "localizedName": "cauliflower rice",
                  "image": "cauliflower.jpg"
                },
                {
                  "id": 11135,
                  "name": "cauliflower",
                  "localizedName": "cauliflower",
                  "image": "cauliflower.jpg"
                },
                {
                  "id": 20028,
                  "name": "couscous",
                  "localizedName": "couscous",
                  "image": "couscous-cooked.jpg"
                },
                {
                  "id": 20444,
                  "name": "rice",
                  "localizedName": "rice",
                  "image": "uncooked-white-rice.png"
                }
              ],
              "equipment": [{
                "id": 404771,
                "name": "food processor",
                "localizedName": "food processor",
                "image": "food-processor.png"
              }]
            },
            {
              "number": 2,
              "step": "Heat 1T butter and 1T oil in a large skillet over medium heat.",
              "ingredients": [{
                  "id": 1001,
                  "name": "butter",
                  "localizedName": "butter",
                  "image": "butter-sliced.jpg"
                },
                {
                  "id": 4582,
                  "name": "cooking oil",
                  "localizedName": "cooking oil",
                  "image": "vegetable-oil.jpg"
                }
              ],
              "equipment": [{
                "id": 404645,
                "name": "frying pan",
                "localizedName": "frying pan",
                "image": "pan.png"
              }]
            },
            {
              "number": 3,
              "step": "Add garlic and the white and light green pieces of scallion. Sauté about a minute.",
              "ingredients": [{
                  "id": 11291,
                  "name": "green onions",
                  "localizedName": "green onions",
                  "image": "spring-onions.jpg"
                },
                {
                  "id": 11215,
                  "name": "garlic",
                  "localizedName": "garlic",
                  "image": "garlic.png"
                }
              ],
              "equipment": []
            },
            {
              "number": 4,
              "step": "Add the cauliflower to the pan. Stir to coat with oil, then spread out in pan and let sit; you want it cook a bit and to caramelize (get a bit brown), which will bring out the sweetness. After a couple of minutes, stir and spread out again.",
              "ingredients": [{
                  "id": 11135,
                  "name": "cauliflower",
                  "localizedName": "cauliflower",
                  "image": "cauliflower.jpg"
                },
                {
                  "id": 0,
                  "name": "spread",
                  "localizedName": "spread",
                  "image": ""
                },
                {
                  "id": 4582,
                  "name": "cooking oil",
                  "localizedName": "cooking oil",
                  "image": "vegetable-oil.jpg"
                }
              ],
              "equipment": [{
                "id": 404645,
                "name": "frying pan",
                "localizedName": "frying pan",
                "image": "pan.png"
              }]
            },
            {
              "number": 5,
              "step": "Add cold rice (it separates easily, so it won't clump up during cooking), plus the additional grapeseed and coconut oil or butter. Raise heat to medium-high. Toss everything together and, again, spread the mixture out over the whole pan and press a bit into the bottom.",
              "ingredients": [{
                  "id": 4047,
                  "name": "coconut oil",
                  "localizedName": "coconut oil",
                  "image": "oil-coconut.jpg"
                },
                {
                  "id": 1001,
                  "name": "butter",
                  "localizedName": "butter",
                  "image": "butter-sliced.jpg"
                },
                {
                  "id": 0,
                  "name": "spread",
                  "localizedName": "spread",
                  "image": ""
                },
                {
                  "id": 20444,
                  "name": "rice",
                  "localizedName": "rice",
                  "image": "uncooked-white-rice.png"
                }
              ],
              "equipment": [{
                "id": 404645,
                "name": "frying pan",
                "localizedName": "frying pan",
                "image": "pan.png"
              }]
            },
            {
              "number": 6,
              "step": "Let it sit for about two minutes—so the rice can get toasted and a little crispy.",
              "ingredients": [{
                "id": 20444,
                "name": "rice",
                "localizedName": "rice",
                "image": "uncooked-white-rice.png"
              }],
              "equipment": [],
              "length": {
                "number": 2,
                "unit": "minutes"
              }
            },
            {
              "number": 7,
              "step": "Add the peas and broccoli and stir again.",
              "ingredients": [{
                  "id": 11090,
                  "name": "broccoli",
                  "localizedName": "broccoli",
                  "image": "broccoli.jpg"
                },
                {
                  "id": 11304,
                  "name": "peas",
                  "localizedName": "peas",
                  "image": "peas.jpg"
                }
              ],
              "equipment": []
            },
            {
              "number": 8,
              "step": "Drizzle soy sauce and toasted sesame oil over rice.Cook for another minute or so and turn off heat.",
              "ingredients": [{
                  "id": 4058,
                  "name": "sesame oil",
                  "localizedName": "sesame oil",
                  "image": "sesame-oil.png"
                },
                {
                  "id": 16124,
                  "name": "soy sauce",
                  "localizedName": "soy sauce",
                  "image": "soy-sauce.jpg"
                },
                {
                  "id": 20444,
                  "name": "rice",
                  "localizedName": "rice",
                  "image": "uncooked-white-rice.png"
                }
              ],
              "equipment": []
            },
            {
              "number": 9,
              "step": "Add chopped scallion tops and toss.I like to toast some sesame seeds in a dry pan; I sprinkle these and some more raw, chopped scallion over the top of the rice for added flavor and crunch.Season to taste with salt and, if you'd like, more soy sauce. Keep in mind that if you're serving this with something salty and saucy (ie. teriyaki chicken) you may want to hold off on adding too much salt to the fried rice.",
              "ingredients": [{
                  "id": 12023,
                  "name": "sesame seeds",
                  "localizedName": "sesame seeds",
                  "image": "sesame-seeds.png"
                },
                {
                  "id": 16124,
                  "name": "soy sauce",
                  "localizedName": "soy sauce",
                  "image": "soy-sauce.jpg"
                },
                {
                  "id": 11291,
                  "name": "green onions",
                  "localizedName": "green onions",
                  "image": "spring-onions.jpg"
                },
                {
                  "id": 5006,
                  "name": "whole chicken",
                  "localizedName": "whole chicken",
                  "image": "whole-chicken.jpg"
                },
                {
                  "id": 0,
                  "name": "sandwich bread",
                  "localizedName": "sandwich bread",
                  "image": "white-bread.jpg"
                },
                {
                  "id": 20444,
                  "name": "rice",
                  "localizedName": "rice",
                  "image": "uncooked-white-rice.png"
                },
                {
                  "id": 2047,
                  "name": "salt",
                  "localizedName": "salt",
                  "image": "salt.jpg"
                }
              ],
              "equipment": [{
                "id": 404645,
                "name": "frying pan",
                "localizedName": "frying pan",
                "image": "pan.png"
              }]
            }
          ]
        }],
        "spoonacularSourceUrl": "https://spoonacular.com/cauliflower-brown-rice-and-vegetable-fried-rice-716426"
      }
    ],
    "offset": 0,
    "number": 3,
    "totalResults": 2128
  });

  const fetchVegetarianRecipes = async () => {
    // const fetchRecipes = async (type) => {
    console.log();
    // DA AGGIUNGERE A QUESTO END POINT &addRecipeInformation=true
      //const response = await fetch("https://api.spoonacular.com/recipes/complexSearch?apiKey=5ea4af906f4443dba9c723a359aa6533&diet=vegetarian&addRecipeInformation=true&number=3");
    // const data = await response.json();

    const response = `{
      "results": [{
          "vegetarian": true,
          "vegan": true,
          "glutenFree": true,
          "dairyFree": true,
          "veryHealthy": true,
          "cheap": false,
          "veryPopular": false,
          "sustainable": false,
          "lowFodmap": false,
          "weightWatcherSmartPoints": 12,
          "gaps": "no",
          "preparationMinutes": -1,
          "cookingMinutes": -1,
          "aggregateLikes": 309,
          "healthScore": 100,
          "creditsText": "blogspot.com",
          "sourceName": "blogspot.com",
          "pricePerServing": 134.63,
          "id": 782585,
          "title": "Cannellini Bean and Asparagus Salad with Mushrooms",
          "readyInMinutes": 45,
          "servings": 6,
          "sourceUrl": "http://foodandspice.blogspot.com/2016/05/cannellini-bean-and-asparagus-salad.html",
          "image": "https://spoonacular.com/recipeImages/782585-312x231.jpg",
          "imageType": "jpg",
          "summary": "Cannellini Bean and Asparagus Salad with Mushrooms requires approximately <b>45 minutes</b> from start to finish. This main course has <b>482 calories</b>, <b>31g of protein</b>, and <b>6g of fat</b> per serving. This gluten free, dairy free, lacto ovo vegetarian, and vegan recipe serves 6 and costs <b>$1.35 per serving</b>. 309 people were impressed by this recipe. Head to the store and pick up grain mustard, sea salt, lemon zest, and a few other things to make it today. It is brought to you by foodandspice.blogspot.com. Taking all factors into account, this recipe <b>earns a spoonacular score of 70%</b>, which is pretty good. Similar recipes are <a href=\"https://spoonacular.com/recipes/cannellini-bean-salad-422994\">Cannellini Bean Salad</a>, <a href=\"https://spoonacular.com/recipes/refreshing-cannellini-bean-salad-113127\">Refreshing Cannellini Bean Salad</a>, and <a href=\"https://spoonacular.com/recipes/cannellini-and-green-bean-salad-33177\">Cannellini-and-Green Bean Salad</a>.",
          "cuisines": [],
          "dishTypes": [
            "side dish",
            "lunch",
            "main course",
            "salad",
            "main dish",
            "dinner"
          ],
          "diets": [
            "gluten free",
            "dairy free",
            "lacto ovo vegetarian",
            "vegan"
          ],
          "occasions": [],
          "analyzedInstructions": [{
            "name": "",
            "steps": [{
                "number": 1,
                "step": "Rinse the cannellini beans and soak for 8 hours or overnight in several inches of water.",
                "ingredients": [{
                    "id": 10716050,
                    "name": "cannellini beans",
                    "localizedName": "cannellini beans",
                    "image": "cooked-cannellini-beans.png"
                  },
                  {
                    "id": 14412,
                    "name": "water",
                    "localizedName": "water",
                    "image": "water.png"
                  }
                ],
                "equipment": [],
                "length": {
                  "number": 480,
                  "unit": "minutes"
                }
              },
              {
                "number": 2,
                "step": "Drain and rinse, then transfer to a medium saucepan and cover with fresh water.",
                "ingredients": [{
                  "id": 14412,
                  "name": "water",
                  "localizedName": "water",
                  "image": "water.png"
                }],
                "equipment": [{
                  "id": 404669,
                  "name": "sauce pan",
                  "localizedName": "sauce pan",
                  "image": "sauce-pan.jpg"
                }]
              },
              {
                "number": 3,
                "step": "Add the curry leaves or bay leaf and bring to a boil. Reduce heat to medium-low, cover, and simmer for 1 hour or until the beans are tender but not falling apart.",
                "ingredients": [{
                    "id": 93604,
                    "name": "curry leaves",
                    "localizedName": "curry leaves",
                    "image": "curry-leaves.jpg"
                  },
                  {
                    "id": 2004,
                    "name": "bay leaves",
                    "localizedName": "bay leaves",
                    "image": "bay-leaves.jpg"
                  },
                  {
                    "id": 0,
                    "name": "beans",
                    "localizedName": "beans",
                    "image": "kidney-beans.jpg"
                  }
                ],
                "equipment": [],
                "length": {
                  "number": 60,
                  "unit": "minutes"
                }
              },
              {
                "number": 4,
                "step": "Drain and transfer to a large salad bowl.Meanwhile, snap the woody ends off of the asparagus spears and steam the spears for 6 minutes or until just tender but still retaining their crunch.",
                "ingredients": [{
                  "id": 11011,
                  "name": "asparagus",
                  "localizedName": "asparagus",
                  "image": "asparagus.png"
                }],
                "equipment": [{
                  "id": 404783,
                  "name": "bowl",
                  "localizedName": "bowl",
                  "image": "bowl.jpg"
                }],
                "length": {
                  "number": 6,
                  "unit": "minutes"
                }
              },
              {
                "number": 5,
                "step": "Transfer to the salad bowl.Now cook the mushrooms.",
                "ingredients": [{
                  "id": 11260,
                  "name": "mushrooms",
                  "localizedName": "mushrooms",
                  "image": "mushrooms.png"
                }],
                "equipment": [{
                  "id": 404783,
                  "name": "bowl",
                  "localizedName": "bowl",
                  "image": "bowl.jpg"
                }]
              },
              {
                "number": 6,
                "step": "Heat the oil in a large skillet over high heat. As soon as the oil is hot, drop in the mushrooms and cook, stirring constantly, for 5 minutes or until the mushrooms begin to brown and lose some of their liquid.",
                "ingredients": [{
                    "id": 11260,
                    "name": "mushrooms",
                    "localizedName": "mushrooms",
                    "image": "mushrooms.png"
                  },
                  {
                    "id": 4582,
                    "name": "cooking oil",
                    "localizedName": "cooking oil",
                    "image": "vegetable-oil.jpg"
                  }
                ],
                "equipment": [{
                  "id": 404645,
                  "name": "frying pan",
                  "localizedName": "frying pan",
                  "image": "pan.png"
                }],
                "length": {
                  "number": 5,
                  "unit": "minutes"
                }
              },
              {
                "number": 7,
                "step": "Transfer to the bowl with the asparagus.To make the dressing, combine the tarragon, lemon zest, garlic, lemon juice, olive oil and mustard in a small food processor or blender. Process until smooth.",
                "ingredients": [{
                    "id": 9152,
                    "name": "lemon juice",
                    "localizedName": "lemon juice",
                    "image": "lemon-juice.jpg"
                  },
                  {
                    "id": 9156,
                    "name": "lemon zest",
                    "localizedName": "lemon zest",
                    "image": "zest-lemon.jpg"
                  },
                  {
                    "id": 11011,
                    "name": "asparagus",
                    "localizedName": "asparagus",
                    "image": "asparagus.png"
                  },
                  {
                    "id": 4053,
                    "name": "olive oil",
                    "localizedName": "olive oil",
                    "image": "olive-oil.jpg"
                  },
                  {
                    "id": 2041,
                    "name": "tarragon",
                    "localizedName": "tarragon",
                    "image": "tarragon.jpg"
                  },
                  {
                    "id": 2046,
                    "name": "mustard",
                    "localizedName": "mustard",
                    "image": "regular-mustard.jpg"
                  },
                  {
                    "id": 11215,
                    "name": "garlic",
                    "localizedName": "garlic",
                    "image": "garlic.png"
                  }
                ],
                "equipment": [{
                    "id": 404771,
                    "name": "food processor",
                    "localizedName": "food processor",
                    "image": "food-processor.png"
                  },
                  {
                    "id": 404726,
                    "name": "blender",
                    "localizedName": "blender",
                    "image": "blender.png"
                  },
                  {
                    "id": 404783,
                    "name": "bowl",
                    "localizedName": "bowl",
                    "image": "bowl.jpg"
                  }
                ]
              },
              {
                "number": 8,
                "step": "Pour the dressing over the salad, season with salt and pepper, and toss.",
                "ingredients": [{
                  "id": 1102047,
                  "name": "salt and pepper",
                  "localizedName": "salt and pepper",
                  "image": "salt-and-pepper.jpg"
                }],
                "equipment": []
              },
              {
                "number": 9,
                "step": "Serve at room temperature or chilled.",
                "ingredients": [],
                "equipment": []
              }
            ]
          }],
          "spoonacularSourceUrl": "https://spoonacular.com/cannellini-bean-and-asparagus-salad-with-mushrooms-782585"
        },
        {
          "vegetarian": true,
          "vegan": true,
          "glutenFree": true,
          "dairyFree": true,
          "veryHealthy": true,
          "cheap": false,
          "veryPopular": true,
          "sustainable": false,
          "lowFodmap": false,
          "weightWatcherSmartPoints": 4,
          "gaps": "no",
          "preparationMinutes": -1,
          "cookingMinutes": -1,
          "aggregateLikes": 3689,
          "healthScore": 75,
          "creditsText": "Full Belly Sisters",
          "license": "CC BY-SA 3.0",
          "sourceName": "Full Belly Sisters",
          "pricePerServing": 112.39,
          "id": 716426,
          "title": "Cauliflower, Brown Rice, and Vegetable Fried Rice",
          "readyInMinutes": 30,
          "servings": 8,
          "sourceUrl": "http://fullbellysisters.blogspot.com/2012/01/cauliflower-fried-rice-more-veggies.html",
          "image": "https://spoonacular.com/recipeImages/716426-312x231.jpg",
          "imageType": "jpg",
          "summary": "You can never have too many Chinese recipes, so give Cauliflower, Brown Rice, and Vegetable Fried Rice a try. This recipe serves 8 and costs $1.12 per serving. This hor d'oeuvre has <b>192 calories</b>, <b>7g of protein</b>, and <b>6g of fat</b> per serving. Head to the store and pick up broccoli, sesame seeds, soy sauce, and a few other things to make it today. 3689 people were impressed by this recipe. It is brought to you by fullbellysisters.blogspot.com. It is a good option if you're following a <b>gluten free, dairy free, lacto ovo vegetarian, and vegan</b> diet. From preparation to the plate, this recipe takes roughly <b>30 minutes</b>. Overall, this recipe earns a <b>spectacular spoonacular score of 100%</b>. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/cauliflower-brown-rice-and-vegetable-fried-rice-1584601\">Cauliflower, Brown Rice, and Vegetable Fried Rice</a>, <a href=\"https://spoonacular.com/recipes/cauliflower-brown-rice-and-vegetable-fried-rice-1238897\">Cauliflower, Brown Rice, and Vegetable Fried Rice</a>, and <a href=\"https://spoonacular.com/recipes/cauliflower-brown-rice-and-vegetable-fried-rice-1230097\">Cauliflower, Brown Rice, and Vegetable Fried Rice</a>.",
          "cuisines": [
            "Chinese",
            "Asian"
          ],
          "dishTypes": [
            "side dish",
            "antipasti",
            "starter",
            "snack",
            "appetizer",
            "antipasto",
            "hor d'oeuvre"
          ],
          "diets": [
            "gluten free",
            "dairy free",
            "lacto ovo vegetarian",
            "vegan"
          ],
          "occasions": [],
          "analyzedInstructions": [{
            "name": "",
            "steps": [{
                "number": 1,
                "step": "Remove the cauliflower's tough stem and reserve for another use. Using a food processor, pulse cauliflower florets until they resemble rice or couscous. You should end up with around four cups of \"cauliflower rice.\"",
                "ingredients": [{
                    "id": 10011135,
                    "name": "cauliflower florets",
                    "localizedName": "cauliflower florets",
                    "image": "cauliflower.jpg"
                  },
                  {
                    "id": 10111135,
                    "name": "cauliflower rice",
                    "localizedName": "cauliflower rice",
                    "image": "cauliflower.jpg"
                  },
                  {
                    "id": 11135,
                    "name": "cauliflower",
                    "localizedName": "cauliflower",
                    "image": "cauliflower.jpg"
                  },
                  {
                    "id": 20028,
                    "name": "couscous",
                    "localizedName": "couscous",
                    "image": "couscous-cooked.jpg"
                  },
                  {
                    "id": 20444,
                    "name": "rice",
                    "localizedName": "rice",
                    "image": "uncooked-white-rice.png"
                  }
                ],
                "equipment": [{
                  "id": 404771,
                  "name": "food processor",
                  "localizedName": "food processor",
                  "image": "food-processor.png"
                }]
              },
              {
                "number": 2,
                "step": "Heat 1T butter and 1T oil in a large skillet over medium heat.",
                "ingredients": [{
                    "id": 1001,
                    "name": "butter",
                    "localizedName": "butter",
                    "image": "butter-sliced.jpg"
                  },
                  {
                    "id": 4582,
                    "name": "cooking oil",
                    "localizedName": "cooking oil",
                    "image": "vegetable-oil.jpg"
                  }
                ],
                "equipment": [{
                  "id": 404645,
                  "name": "frying pan",
                  "localizedName": "frying pan",
                  "image": "pan.png"
                }]
              },
              {
                "number": 3,
                "step": "Add garlic and the white and light green pieces of scallion. Sauté about a minute.",
                "ingredients": [{
                    "id": 11291,
                    "name": "green onions",
                    "localizedName": "green onions",
                    "image": "spring-onions.jpg"
                  },
                  {
                    "id": 11215,
                    "name": "garlic",
                    "localizedName": "garlic",
                    "image": "garlic.png"
                  }
                ],
                "equipment": []
              },
              {
                "number": 4,
                "step": "Add the cauliflower to the pan. Stir to coat with oil, then spread out in pan and let sit; you want it cook a bit and to caramelize (get a bit brown), which will bring out the sweetness. After a couple of minutes, stir and spread out again.",
                "ingredients": [{
                    "id": 11135,
                    "name": "cauliflower",
                    "localizedName": "cauliflower",
                    "image": "cauliflower.jpg"
                  },
                  {
                    "id": 0,
                    "name": "spread",
                    "localizedName": "spread",
                    "image": ""
                  },
                  {
                    "id": 4582,
                    "name": "cooking oil",
                    "localizedName": "cooking oil",
                    "image": "vegetable-oil.jpg"
                  }
                ],
                "equipment": [{
                  "id": 404645,
                  "name": "frying pan",
                  "localizedName": "frying pan",
                  "image": "pan.png"
                }]
              },
              {
                "number": 5,
                "step": "Add cold rice (it separates easily, so it won't clump up during cooking), plus the additional grapeseed and coconut oil or butter. Raise heat to medium-high. Toss everything together and, again, spread the mixture out over the whole pan and press a bit into the bottom.",
                "ingredients": [{
                    "id": 4047,
                    "name": "coconut oil",
                    "localizedName": "coconut oil",
                    "image": "oil-coconut.jpg"
                  },
                  {
                    "id": 1001,
                    "name": "butter",
                    "localizedName": "butter",
                    "image": "butter-sliced.jpg"
                  },
                  {
                    "id": 0,
                    "name": "spread",
                    "localizedName": "spread",
                    "image": ""
                  },
                  {
                    "id": 20444,
                    "name": "rice",
                    "localizedName": "rice",
                    "image": "uncooked-white-rice.png"
                  }
                ],
                "equipment": [{
                  "id": 404645,
                  "name": "frying pan",
                  "localizedName": "frying pan",
                  "image": "pan.png"
                }]
              },
              {
                "number": 6,
                "step": "Let it sit for about two minutes—so the rice can get toasted and a little crispy.",
                "ingredients": [{
                  "id": 20444,
                  "name": "rice",
                  "localizedName": "rice",
                  "image": "uncooked-white-rice.png"
                }],
                "equipment": [],
                "length": {
                  "number": 2,
                  "unit": "minutes"
                }
              },
              {
                "number": 7,
                "step": "Add the peas and broccoli and stir again.",
                "ingredients": [{
                    "id": 11090,
                    "name": "broccoli",
                    "localizedName": "broccoli",
                    "image": "broccoli.jpg"
                  },
                  {
                    "id": 11304,
                    "name": "peas",
                    "localizedName": "peas",
                    "image": "peas.jpg"
                  }
                ],
                "equipment": []
              },
              {
                "number": 8,
                "step": "Drizzle soy sauce and toasted sesame oil over rice.Cook for another minute or so and turn off heat.",
                "ingredients": [{
                    "id": 4058,
                    "name": "sesame oil",
                    "localizedName": "sesame oil",
                    "image": "sesame-oil.png"
                  },
                  {
                    "id": 16124,
                    "name": "soy sauce",
                    "localizedName": "soy sauce",
                    "image": "soy-sauce.jpg"
                  },
                  {
                    "id": 20444,
                    "name": "rice",
                    "localizedName": "rice",
                    "image": "uncooked-white-rice.png"
                  }
                ],
                "equipment": []
              },
              {
                "number": 9,
                "step": "Add chopped scallion tops and toss.I like to toast some sesame seeds in a dry pan; I sprinkle these and some more raw, chopped scallion over the top of the rice for added flavor and crunch.Season to taste with salt and, if you'd like, more soy sauce. Keep in mind that if you're serving this with something salty and saucy (ie. teriyaki chicken) you may want to hold off on adding too much salt to the fried rice.",
                "ingredients": [{
                    "id": 12023,
                    "name": "sesame seeds",
                    "localizedName": "sesame seeds",
                    "image": "sesame-seeds.png"
                  },
                  {
                    "id": 16124,
                    "name": "soy sauce",
                    "localizedName": "soy sauce",
                    "image": "soy-sauce.jpg"
                  },
                  {
                    "id": 11291,
                    "name": "green onions",
                    "localizedName": "green onions",
                    "image": "spring-onions.jpg"
                  },
                  {
                    "id": 5006,
                    "name": "whole chicken",
                    "localizedName": "whole chicken",
                    "image": "whole-chicken.jpg"
                  },
                  {
                    "id": 0,
                    "name": "sandwich bread",
                    "localizedName": "sandwich bread",
                    "image": "white-bread.jpg"
                  },
                  {
                    "id": 20444,
                    "name": "rice",
                    "localizedName": "rice",
                    "image": "uncooked-white-rice.png"
                  },
                  {
                    "id": 2047,
                    "name": "salt",
                    "localizedName": "salt",
                    "image": "salt.jpg"
                  }
                ],
                "equipment": [{
                  "id": 404645,
                  "name": "frying pan",
                  "localizedName": "frying pan",
                  "image": "pan.png"
                }]
              }
            ]
          }],
          "spoonacularSourceUrl": "https://spoonacular.com/cauliflower-brown-rice-and-vegetable-fried-rice-716426"
        },
        {
          "vegetarian": true,
          "vegan": false,
          "glutenFree": false,
          "dairyFree": false,
          "veryHealthy": true,
          "cheap": false,
          "veryPopular": true,
          "sustainable": false,
          "lowFodmap": false,
          "weightWatcherSmartPoints": 15,
          "gaps": "no",
          "preparationMinutes": 5,
          "cookingMinutes": 0,
          "aggregateLikes": 689,
          "healthScore": 64,
          "creditsText": "Jen West",
          "sourceName": "Pink When",
          "pricePerServing": 206.79,
          "id": 715497,
          "title": "Berry Banana Breakfast Smoothie",
          "readyInMinutes": 5,
          "servings": 1,
          "sourceUrl": "http://www.pinkwhen.com/berry-banana-breakfast-smoothie/",
          "image": "https://spoonacular.com/recipeImages/715497-312x231.jpg",
          "imageType": "jpg",
          "summary": "If you want to add more <b>lacto ovo vegetarian</b> recipes to your recipe box, Berry Banana Breakfast Smoothie might be a recipe you should try. One portion of this dish contains about <b>21g of protein</b>, <b>10g of fat</b>, and a total of <b>457 calories</b>. This recipe serves 1 and costs $2.07 per serving. 689 people have tried and liked this recipe. It works well as a rather inexpensive breakfast. A mixture of banana, graham cracker crumbs, vanilla yogurt, and a handful of other ingredients are all it takes to make this recipe so yummy. From preparation to the plate, this recipe takes roughly <b>5 minutes</b>. It is brought to you by Pink When. Overall, this recipe earns a <b>super spoonacular score of 99%</b>. Similar recipes include <a href=\"https://spoonacular.com/recipes/berry-banana-breakfast-smoothie-1364145\">Berry Banana Breakfast Smoothie</a>, <a href=\"https://spoonacular.com/recipes/berry-banana-breakfast-smoothie-1405583\">Berry Banana Breakfast Smoothie</a>, and <a href=\"https://spoonacular.com/recipes/berry-banana-breakfast-smoothie-1601311\">Berry Banana Breakfast Smoothie</a>.",
          "cuisines": [],
          "dishTypes": [
            "morning meal",
            "brunch",
            "beverage",
            "breakfast",
            "drink"
          ],
          "diets": [
            "lacto ovo vegetarian"
          ],
          "occasions": [],
          "analyzedInstructions": [{
            "name": "",
            "steps": [{
                "number": 1,
                "step": "Take some yogurt in your favorite flavor and add 1 container to your blender.",
                "ingredients": [{
                  "id": 1116,
                  "name": "yogurt",
                  "localizedName": "yogurt",
                  "image": "plain-yogurt.jpg"
                }],
                "equipment": [{
                  "id": 404726,
                  "name": "blender",
                  "localizedName": "blender",
                  "image": "blender.png"
                }]
              },
              {
                "number": 2,
                "step": "Add in the berries, banana, and soy milk and blend. Top your glass with a few graham cracker crumbs and serve.",
                "ingredients": [{
                    "id": 10018617,
                    "name": "graham cracker crumbs",
                    "localizedName": "graham cracker crumbs",
                    "image": "graham-crackers.jpg"
                  },
                  {
                    "id": 16223,
                    "name": "soymilk",
                    "localizedName": "soymilk",
                    "image": "soy-milk.jpg"
                  },
                  {
                    "id": 1009054,
                    "name": "berries",
                    "localizedName": "berries",
                    "image": "berries-mixed.jpg"
                  },
                  {
                    "id": 9040,
                    "name": "banana",
                    "localizedName": "banana",
                    "image": "bananas.jpg"
                  }
                ],
                "equipment": []
              }
            ]
          }],
          "spoonacularSourceUrl": "https://spoonacular.com/berry-banana-breakfast-smoothie-715497"
        }
      ],
      "offset": 0,
      "number": 3,
      "totalResults": 2128
    }`;

  const dataVeg = JSON.parse(response);
  
  setVegetarianRecipeCards(dataVeg);
}
  

  const [recipes, setrecipes] = useState({
    results: [
      {
        id: 716429,
        title: "Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs",
        image: "https://spoonacular.com/recipeImages/716429-556x370.jpg",
        imageType: "jpg",
      },
      {
        id: 715538,
        title: "Bruschetta Style",
        image: "https://spoonacular.com/recipeImages/715538-312x231.jpg",
        imageType: "jpg",
      },
      {
        id: 7,
        title: "Caprese Pasta",
        image: "https://spoonacular.com/recipeImages/511728-312x231.jpg",
        imageType: "jpg",
      },
      {
        id: 38,
        title: "Smoothie",
        image: "https://spoonacular.com/recipeImages/655235-312x231.jpg",
        imageType: "jpg",
      },
    ],
  });

  const fetchRecipes = async (type) => {
    // const fetchRecipes = async (type) => {
    // const response = await fetch("https://api.spoonacular.com/recipes/complexSearch?apiKey=5ea4af906f4443dba9c723a359aa6533&type=${type}&number=3");
    // const data = await response.json();

    const response = `{
    "offset": 0,
    "number": 2,
    "results": [
      {
        "id": 716429,
        "title": "Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs",
        "image": "https://spoonacular.com/recipeImages/716429-556x370.jpg",
        "imageType": "jpg"
      },
      {
        "id": 715538,
        "title": "Bruschetta Style",
        "image": "https://spoonacular.com/recipeImages/715538-312x231.jpg",
        "imageType": "jpg"
      },
      {
        "id": 7,
        "title": "Caprese Pasta",
        "image": "https://spoonacular.com/recipeImages/511728-312x231.jpg",
        "imageType": "jpg"
      },
      {
        "id": 38,
        "title": "aaaaaSmoothie",
        "image": "https://spoonacular.com/recipeImages/655235-312x231.jpg",
        "imageType": "jpg"
      }
    ],
    "totalResults": 86
  }`;
    const data = JSON.parse(response);

    setrecipes(data);
  };
  // PRIMA QUERY DELLA HOME quando clicca sulla card di getting inspired es. "Pasta", "Pizza",  "Curry" ecc ecc
  // https://api.spoonacular.com/recipes/complexSearch?query=pasta&number=3
  // const categoryTypeHome = ["breakfast", "snack", "dinner", "dessert", "soup", "salad", "appetizer", "beverage", "sauce", "drink" ]

  const categoryTypeHome = [
    {
      id: 1,
      type: "breakfast",
    },
    {
      id: 2,
      type: "snack",
    },
    {
      id: 3,
      type: "dinner",
    },
    {
      id: 4,
      type: "dessert",
    },
    {
      id: 5,
      type: "soup",
    },
    {
      id: 6,
      type: "salad",
    },
    {
      id: 7,
      type: "appetizer",
    },
    {
      id: 8,
      type: "beverage",
    },
    {
      id: 9,
      type: "sauce",
    },
    {
      id: 10,
      type: "drink",
    },
  ];
  // API ENDPOINT DELLA RICETTA SINGOLA DI POPULAR RECIPES
  // https://api.spoonacular.com/recipes/716429/information?apiKey=5ea4af906f4443dba9c723a359aa6533&includeNutrition=true
  // {

  const [active, setActive] = useState("active-btn");
  const handleActive = () => {
    setActive("deactive-btn");
  };

  return (
    <>
      <Head>
        <title>Avocado Tribe App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* HOME SECTION */}
      <div>
        {/* <DesktopNavbar /> */}

        <div className="h-full mb-8">
          <div className="mt-14 mb-6 pl-4 text-dark-green text-xl font-bold">
            Hello 👋
          </div>

          {/* NEW ricette veg */}
          <section className="mb-6">
            <div className="px-4 pb-3 flex justify-between items-center font-bold">
              <h1 className="text-dark-green text-lg font-bold">
                Getting Inspired
              </h1>
            </div>
            <div className="flex-grow w-full mx-auto">
              <div className="pl-4">
                <div className="my-4">
                  <div className="">
                    <div className="flex flex-no-wrap overflow-x-auto gap-3 lg:gap-6 scrolling-touch items-start mb-4">
                      {vegetarianRecipeCards.results.map((vegetarianRecipeCard) => {
                        return (
                          <HorizontalCardHome key={vegetarianRecipeCard.id} vegetarianRecipeCard={vegetarianRecipeCard} title={vegetarianRecipeCard.title} />
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* RICETTE NON VEG */}
          {/* <section className="mb-6">
            <div className="px-4 pb-3 flex justify-between items-center font-bold">
              <h1 className="text-dark-green text-lg font-bold">
                Getting Inspired
              </h1>
            </div>
            <div className="flex-grow w-full mx-auto">
              <div className="pl-4">
                <div className="my-4">
                  <div className="">
                    <div className="flex flex-no-wrap overflow-x-auto gap-3 lg:gap-6 scrolling-touch items-start mb-4">
                      {recipes.results.map((recipe) => {
                        return (
                          <HorizontalCardHome key={recipe.id} recipe={recipe} />
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section> */}

          <section className="mb-3">
            <div className="px-4 flex justify-between items-center font-bold">
              <h1 className="text-dark-green text-lg font-bold">Category</h1>
              {/* <Link href="/allRecipes" className='text-green text-xs'>See all</Link> */}
            </div>
            <div className="flex-grow w-full mx-auto">
              <div className="pl-4">
                <div className="my-4">
                  <div className="">
                    <ul className=" flex flex-no-wrap overflow-x-auto gap-3 scrolling-touch items-start mb-4">
                      {categoryTypeHome.map((type) => {
                        {
                          type.callback = fetchRecipes;
                        }
                        return (
                          <CategoryHomeButtons
                            category={type}
                            key={type.id}
                            className=""
                          />
                        );
                      })}

                      {/* TO DO:  */}
                      {/* <button onClick={() => fetchRecipes("breakfast")}
                                  className="mb-4 px-5  py-2.5 flex-none text-white bg-green rounded-full text-sm hover:scale-105 duration-500 cursor-pointer">
                            Breakfast
                          </button> */}

                      {/* <button onClick={fetchRecipes}
                                  className="mb-4 px-5  py-2.5 flex-none hover:text-white bg-gray-light hover:bg-green active:bg-green rounded-full text-sm hover:scale-105 duration-500 cursor-pointer">
                                Salad
                          </button>

                          <button onClick={fetchRecipes}
                                  className="mb-4 px-5  py-2.5 flex-none hover:text-white bg-gray-light hover:bg-green rounded-full text-sm hover:scale-105 duration-500 cursor-pointer">
                          Dessert
                          </button> */}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-6">
            <div className="px-4 pb-3 flex justify-between items-center font-bold">
              <h1 className="text-dark-green text-lg font-bold">
                Popular Recipes
              </h1>
              {/* <Link href="/allRecipes" className='text-green text-xs'>See all</Link> */}
            </div>

            <div className="flex-grow w-full mx-auto">
              <div className="pl-4">
                <div className="my-4">
                  <div className="">
                    <div className="flex flex-no-wrap overflow-x-auto gap-3 lg:gap-6 scrolling-touch items-start mb-4">
                      {recipes.results.map((recipe) => {
                        return (
                          <VerticalCard
                            // onClick={recipeJson}
                            key={recipe.id}
                            id={recipe.id}
                            recipe={recipe}
                            className=" "
                          />
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>

      {/* ROUTING PAGE WITH SEE RECIPES/CATEGORY ALL E CHE APRE TUTTE LE RICETTE CLICCANDO LA CARD
            DI GETTING INSPIRED */}
      {/* <section className=''>
              <div className='px-4 pb-3 flex justify-between items-center font-bold'>
                <h1 className='text-dark-green text-lg font-bold'>Popular Recipes</h1>
                <div className='text-green text-xs'>See all</div>
              </div>

              <div className='items-stretch grid 2xl:grid-cols-7 xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 md:gap-x-10 md:gap-y-10 sm:gap-x-8 sm:gap-y-8 gap-x-2 gap-y-2 text-white px-4'>
                {recipes.results.map((recipe) => {
                return (
                  <RecipeVerticalCard key={recipe.id} recipe={recipe} className=" "/>
                    )
                  })
                }
              </div>
            </section> */}

      {/* <div className="App ">
              <Modal />
            </div> */}

      {/* PAGINA RICETTA: dopo aver cliccato ricette sulla home o su cerca */}
      {/* <div>
          <div className=''> */}
      {/* <div className='px-4 mt-16 flex justify-between items-center'>
              <div className='bg-gray-mid rounded-lg p-1'><ChevronLeftIcon className='h-6 w-6'/></div>
              <div className='bg-gray-mid rounded-lg p-1'><HeartIcon className='h-6 w-6 text-green'/></div>
            </div> */}
      {/* <Image src="/avocado.jpg" width="130" height="130"/> */}
      {/* <div className="bg-cover bg-center" style={{backgroundImage: url('/avocado.jpg')}}></div> */}
      {/* <div className="bg-[url('/avocado.jpg')]"></div>

            <div className='pt-28'></div>
            <div className=' rounded-t-3xl'> */}
      {/* <section className='px-4 pb-4 '>
                <div className='flex justify-between items-baseline'>
                  <h1 className=' mb-6 text-dark-green text-xl font-bold'>
                    Avocado Toast
                  </h1>
                  <p className='flex text-gray'>
                    <ClockIcon className='h-4 w-4 mr-1' />
                    <span className='font-light text-xs'>10 min</span>
                  </p>
                </div>
                <div className='flex justify-between text-dark-green'>
                  <div className='text-sm font-semibold'>
                    <div className='mb-4 flex items-center'>
                      <div className='bg-gray-mid rounded-lg p-1 mr-2'><Image src="/spaghetti.svg" alt="spaghetti icon" width={20} height={20}/></div>
                      <p>80g carbs</p>
                    </div>
                    <div className='mb-4 flex items-center'>
                      <div className='bg-gray-mid rounded-lg p-1 mr-2'><FireIcon className='h-5 w-5'/></div>
                      <p>275 Kcal</p>
                    </div>
                  </div>
                  <div className='mb-8 text-sm font-semibold'>
                    <div className='mb-4 flex items-center'>
                      <div className='bg-gray-mid rounded-lg p-1 mr-2'><Image src="/taco.svg" alt="spaghetti icon" width={20} height={20}/></div>
                      <p>29g proteins</p>
                    </div>
                    <div className='mb-4 flex items-center'>
                      <div className='bg-gray-mid rounded-lg p-1 mr-2'><Image src="/avocado.svg" alt="spaghetti icon" width={18} height={20}/></div>
                      <p>96g fats</p>
                    </div>
                  </div>
                </div>
                <div className='bg-gray-mid py-1.5 px-1 flex rounded-xl font-medium'>
                  <button className='text-gray-mid bg-dark-green px-10 py-2 rounded-xl'>Ingredients</button>
                  <button className='text-dark-green pl-10'>Instructions</button>
                </div>
              </section> */}

      {/* INSTRUCTIONS SECTION */}
      {/* <section>
                <div className='px-4 flex justify-between items-baseline'>
                  <h1 className=' mb-6 text-dark-green text-xl font-bold'>
                    Instructions
                  </h1>
                  <p className='flex text-gray'>
                    <span className='font-light text-xs'>4 steps</span>
                  </p>
                </div>

                <div className='mb-4 mx-4 flex items-center text-sm font-medium'>
                      <div className='bg-green text-white rounded-lg h-6 w-6 mr-2 flex items-center justify-center'><span>1</span></div>
                      <p>Mash your avocado separately.</p>
                </div>
                <div className='mb-4 mx-4 flex items-center text-sm font-medium'>
                      <div className='bg-green text-white rounded-lg h-6 w-6 mr-2 flex items-center justify-center'><span>2</span></div>
                      <p>Slice cherry tomatoes and add salt and pepper.</p>
                </div>
                <div className='mb-4 mx-4 flex items-center text-sm font-medium'>
                      <div className='bg-green text-white rounded-lg h-6 w-6 mr-2 flex items-center justify-center'><span>3</span></div>
                      <p>Buy good bread and toast it well. It offers a sturdy base and a crisp contrast against the creamy avocado.</p>
                </div>
                <div className='mb-4 mx-4 flex items-center text-sm font-medium'>
                      <div className='bg-green text-white rounded-lg h-6 w-6 mr-2 flex items-center justify-center'><span>4</span></div>
                      <p>Don’t forget lime and paprika. </p>
                </div>
              </section> */}
      {/* </div>
          </div> */}
      

      {/* </main> */}
    </>
  );
}
