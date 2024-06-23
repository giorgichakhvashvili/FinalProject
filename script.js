let burger = document.getElementById("burger-menu");
let burgerListMobile = document.querySelector(".nav-list-mobile");

burger.addEventListener("click", () => {
 burgerListMobile.classList.toggle("active")
});

// fetch

async function fetchRecipes() {
    let response = await fetch("https://dummyjson.com/recipes");
    let recipes = await response.json();
    return recipes.recipes;
}

async function createCards() {
let recipes = await fetchRecipes();
console.log(recipes);
let filteredRecipes = recipes.filter((recipe) => recipe.id < 4);
console.log(filteredRecipes);
let cardsContainerRight = document.querySelector(".cards-container-right")
for (let element of filteredRecipes) {
let card = document.createElement("div");
card.classList.add("card");
cardsContainerRight.appendChild(card);
let cardRight = document.createElement("div");
cardRight.classList.add("card-right");
let name = document.createElement("h3");
name.classList.add("card-title")
name.innerText = element.name;
let description = document.createElement("p");
description.classList.add("card-paragraph")
description.innerText = element.ingredients[0];
let image = document.createElement("img");
image.classList.add("card-image")
image.src = element.image;
card.append(image, cardRight);
cardRight.append(name, description);
 }
}
createCards();

// slider

let sliderUp = document.getElementById("slider-up");
let sliderDown = document.getElementById("slider-down");
let sliderItem = document.getElementsByClassName("slider-item");
let currentIndex = 0;

function removeActive() {
    for(let element of sliderItem) {
        element.classList.remove("active");
    }
};

sliderUp.addEventListener("click", () => {
    removeActive();
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = sliderItem.length - 1;
    }
    sliderItem[currentIndex].classList.add("active");
});

sliderDown.addEventListener("click", () => {
    removeActive();
    if (currentIndex < sliderItem.length-1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    sliderItem[currentIndex].classList.add("active");
});
