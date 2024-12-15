const baseUrl = "https://dummyjson.com";
const path = "recipes";

    window.onload = function () {
        loadRecipes();
    }

    function loadRecipes() {
        fetch(`${baseUrl}/${path}`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                displayRecipes(data);
            })
    }

    function displayRecipes(data) {
        const recipeList = document.getElementById("recipe-list");

        data.recipes.forEach((recipe) => {
            const card = document.createElement("div");
            card.classList.add("recipe-card");
            card.innerHTML = `
                <h3 class="recipe-name">${recipe.name}</h3>
                <img src="${recipe.image}" alt="${recipe.title}" width="100%" height="100%">
                <p class="cuisine">Cuisine: ${recipe.cuisine}</p>
                <a class="link" href="recipe-details.html?recipeId=${recipe.id}">View Details</a>
            `;
            recipeList.appendChild(card);
        });
    }