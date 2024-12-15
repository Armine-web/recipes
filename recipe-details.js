const baseUrl = "https://dummyjson.com";
const path = "recipes";

window.onload = function () {
    loadRecipeDetails();
}

function loadRecipeDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const recipeId = urlParams.get('recipeId'); 

    fetch(`${baseUrl}/${path}/${recipeId}`)
        .then((response) => response.json())
        .then((data) => {
            displayRecipeDetails(data);
        })
}

function displayRecipeDetails(data) {
    const recipeDetails = document.getElementById("recipe-details");
    recipeDetails.innerHTML = `
        <h2 class="recipe-details-title">${data.name}</h2>
        <div class="recipe-details-content">
            <img class="recipe-details-img" src="${data.image}" alt="${data.title}" width="400" height="400">
            <div class="recipe-details-instruction">
                <p class="recipe-ingridients-heading">Ingredients <br></p>
                <p class="recipe-ingridients"> ${data.ingredients.join('<br> ')}</p>  
            </div>
        </div>
        <p class="recipe-instruction-heading">Instructions</p>
        <p class="recipe-instruction">${data.instructions}</p>  
    `;
}