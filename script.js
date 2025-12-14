// meal = {
//     rate: 4.5,
//     reviews: 278,
//     mealName: "Beef Tacos",
//     prepTime: 15,
//     cookTime: 20,
//     serving: 4,
//     image: "./imgs/image1.avif",
//     difficulty: "Easy",
//     type: "American",
//     description: "Flavorful Mexican tacos with seasoned ground beef",
//     ingredients: [   
//     ` Heat a large skillet over medium-high heat. Cook ground beef until browned.`,
//     ` Heat a large skillet over medium-high heat. Cook ground beef until browned.`
//     ],
//     nutritions:{
//         calories:200,
//         protein:20,
//         fat:10,
//         carbs:10,
//         fiber:4,
//         sodium:780
//     },
//      chefTips: [   
//     ` Drain excess fat from beef for healthier tacos`,
//     ` Drain excess fat from beef for healthier tacos`
//     ],
// }



const meals = [
    {
        rate: 4.7,
        reviews: 892,
        mealName: "Lemon Herb Grilled Salmon",
        prepTime: 10,
        cookTime: 15,
        serving: 2,
        image: "./imgs/image1.avif",
        difficulty: "Easy",
        type: "Mediterranean",
        description: "Perfectly grilled salmon marinated with lemon, garlic, and fresh herbs.",
        ingredients: [
            "2 salmon fillets",
            "2 tbsp olive oil",
            "1 tbsp lemon juice",
            "2 cloves garlic, minced",
            "1 tsp dried oregano",
            "Salt and black pepper",
            "Lemon slices for garnish"
        ],
        instructions: [
            "Whisk olive oil, lemon juice, garlic, oregano, salt, and pepper in a bowl.",
            "Marinate salmon for at least 10 minutes.",
            "Grill salmon over medium heat for 4–5 minutes per side.",
            "Serve with lemon slices and fresh herbs."
        ],
        nutritions: {
            calories: "410 kcal",
            protein: "34g ",
            fat: "28g ",
            carbs: "2g ",
            fiber: "0g ",
            sodium: "540mg ",
        },
        chefTips: [
            "Do not overcook salmon—remove when the center is slightly translucent.",
            "Add a bit of smoked paprika for extra flavor."
        ]
    },

    {
        rate: 4.9,
        reviews: 1567,
        mealName: "Spaghetti Carbonara",
        prepTime: 15,
        cookTime: 20,
        serving: 4,
        image: "./imgs/image2.avif",
        difficulty: "Medium",
        type: "Italian",
        description: "A classic Roman pasta dish made with eggs, cheese, pancetta, and black pepper.",
        ingredients: [
            "12 oz spaghetti",
            "4 large eggs",
            "1 cup Pecorino Romano cheese, grated",
            "6 oz pancetta, diced",
            "1 tsp freshly ground black pepper",
            "Salt to taste"
        ],
        instructions: [
            "Cook spaghetti until al dente.",
            "Whisk eggs and cheese in a bowl.",
            "Cook pancetta until crispy, then remove from heat.",
            "Combine hot pasta with pancetta and toss with egg mixture.",
            "Serve immediately with extra cheese and pepper."
        ],
        nutritions: {
            calories: "630kcal",
            protein: "26g",
            fat: "28g",
            carbs: "68g",
            fiber: "3g",
            sodium: "780mg"
        },
        chefTips: [
            "Temper eggs with hot pasta off the heat to avoid scrambling.",
            "Use freshly grated Pecorino for best texture."
        ]
    },

    {
        rate: 4.6,
        reviews: 623,
        mealName: "Vegetable Stir-Fry with Tofu",
        prepTime: 12,
        cookTime: 10,
        serving: 3,
        image: "./imgs/image3.avif",
        difficulty: "Easy",
        type: "Asian",
        description: "Colorful vegetables and crispy tofu tossed in a savory ginger-garlic sauce.",
        ingredients: [
            "1 block firm tofu, cubed",
            "2 cups broccoli florets",
            "1 red bell pepper, sliced",
            "1 carrot, julienned",
            "2 tbsp soy sauce",
            "1 tbsp sesame oil",
            "1 tbsp honey",
            "1 clove garlic, minced",
            "1 tsp fresh ginger, grated"
        ],
        instructions: [
            "Pan-fry tofu until crisp and golden.",
            "Sauté vegetables for 4–5 minutes.",
            "Whisk soy sauce, ginger, garlic, sesame oil, and honey.",
            "Add tofu and sauce to pan and cook for 2 more minutes."
        ],
        nutritions: {
            calories: "360kcal",
            protein: "18g",
            fat: "14g",
            carbs: "40g",
            fiber: "6g",
            sodium: "690mg"
        },
        chefTips: [
            "Press tofu for 15 minutes for maximum crispiness.",
            "Add chili flakes for a spicy version."
        ]
    },

    {
        rate: 4.8,
        reviews: 1345,
        mealName: "Beef Burrito Bowl",
        prepTime: 20,
        cookTime: 25,
        serving: 4,
        image: "./imgs/image4.avif",
        difficulty: "Medium",
        type: "Mexican",
        description: "A hearty burrito bowl loaded with seasoned beef, rice, beans, and fresh toppings.",
        ingredients: [
            "1 lb ground beef",
            "2 cups cooked rice",
            "1 cup black beans, rinsed",
            "1 cup corn kernels",
            "1 tbsp taco seasoning",
            "1 avocado, diced",
            "1/2 cup salsa",
            "1/4 cup shredded cheddar",
            "Fresh cilantro"
        ],
        instructions: [
            "Brown beef with taco seasoning.",
            "Assemble bowls with rice, beans, corn, and beef.",
            "Top with salsa, avocado, cheese, and cilantro."
        ],
        nutritions: {
            calories: "540kcal",
            protein: "32g",
            fat: "22g",
            carbs: "58g",
            fiber: "8g",
            sodium: "820mg"
        },
        chefTips: [
            "Use lime juice to brighten the flavors.",
            "Swap beef for chicken or tofu for a lighter version."
        ]
    }
];


var rate = document.getElementById("rate");
var reviews = document.getElementById("reviews");
var prepTime = document.getElementById("prepTime");
var cookTime = document.getElementById("cookTime");
var serving = document.getElementById("serving");
var image = document.getElementById("image");
var difficulty = document.getElementById("difficulty");
var type = document.getElementById("type");
var mealName = document.getElementById("mealName");
var description = document.getElementById("description");
var warning = document.getElementById("warning");
var ingredients = document.getElementById("ingredients");
var instructions = document.getElementById("instructions");
var tips = document.getElementById("tips");
var nutritions = document.getElementById("nutritions");
var btn = document.getElementById("generate-btn");

console.log(prepTime);

var index =0; 


function display() {
    getRandomMeal();
    rate.innerHTML = meals[index].rate;
    reviews.innerHTML = `( ${meals[index].reviews} reviews )`;
    prepTime.innerHTML = meals[index].prepTime + " min";
    cookTime.innerHTML = meals[index].cookTime + " min";
    serving.innerHTML = meals[index].serving + " people";
    image.src = meals[index].image;
    difficulty.innerHTML = meals[index].difficulty;
    type.innerHTML = meals[index].type;
    mealName.innerHTML = meals[index].mealName;
    description.innerHTML = meals[index].description;
    meals[index].prepTime >= 45 ?
        warning.classList.remove("none")
        : warning.classList.add("none");

    displayIngredients(index);
    displayInstructions(index);
    displayTips(index);
    displayNutritions(index);

}

function displayIngredients(index) {
    ingredients.innerHTML = "";
    for (var i = 0; i < meals[index].ingredients.length; i++) {
        ingredients.innerHTML += `
         <li class="d-flex align-items-center gap-2">
                                    <span style="width: 20px ; height: 20px; "
                                        class="p-2 rounded-circle d-flex justify-content-center align-items-center bg-danger text-white">
                                        ${i + 1}
                                        </span>
                                    ${meals[index].ingredients[i]}
                                </li>

        `
    }
}
function displayInstructions(index) {
    instructions.innerHTML = "";
    for (var i = 0; i < meals[index].instructions.length; i++) {
        instructions.innerHTML += `
         <li class="d-flex align-items-center gap-2">
                                    <span style="width: 40px ; height: 40px; "
                                        class="p-2 rounded-2 d-flex justify-content-center align-items-center bg-warning text-white">${i + 1}</span>
                                   ${meals[index].instructions[i]}
                                </li>

        `
    }
}

function displayTips(index) {
    tips.innerHTML = "";
    for (var i = 0; i < meals[index].chefTips.length; i++) {
        tips.innerHTML += `<div
                                class="d-flex align-items-center p-3 bg-warning-subtle rounded-3  border-start border-3 border-warning">
                                <div class="icon p-1 rounded-circle d-flex justify-content-center align-items-center bg-warning text-white me-1">
                                    <i class="fa-solid fa-check "></i>
                                </div>
                              ${meals[index].chefTips[i]}
                            </div>

        `
    }
}


function displayNutritions(index) {
    nutritions.innerHTML = "";
    for (var key in meals[index].nutritions) {
        nutritions.innerHTML += `
<div class="col-md-6">
                                    <div
                                        class="inner d-flex justify-content-between bg-light-subtle p-3 rounded-2 align-items-center border border-2">
                                        <div class="d-flex align-items-center gap-2">
                                            <div class="icon bg-danger text-white p-2 rounded-2"><i
                                                    class="fa-solid fa-fire"></i>

                                            </div>
                                            <span>${key}</span>
                                        </div>
                                        <span class="fw-bold">${meals[index].nutritions[key]}</span>
                                    </div>
                                </div>
`
    }
}

function getRandomMeal(){
    console.log(index);
    var tempIndex ;
    do{
       tempIndex = Math.floor(Math.random()*meals.length);    
    }while(index==tempIndex)
       
    index = tempIndex;
}
btn.addEventListener("click",display);
display();

//old 0
//new  0 0 1