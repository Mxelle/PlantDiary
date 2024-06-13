function plantDiaryClicked() {
    window.location.href = "/homepage/homepage.html"
}

function navigateTo(url) {
    window.location.href = url;
}

document.addEventListener("DOMContentLoaded", function() {
    const dropdownContent = document.querySelector('.dropdown-content');
    const dropdownButtons = dropdownContent.querySelectorAll('.dropdown-btn');

    // Prevent the dropdown from closing when a button is clicked
    dropdownButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.stopPropagation();
        });
    });
});

const plantData = [
    { name: "Aloe Vera", category: "Succulent" },
    { name: "Azalea", category: "Flower"},
    { name: "Aster", category: "Flower"},
    { name: "Anemone", category: "Flower"},
    { name: "Basil", category: "Herb" },
    { name: "Cactus", category: "Succulent" },
    { name: "Dandelion", category: "Herb" },
    { name: "Eucalyptus", category: "Tree" },
    { name: "Fennel", category: "Herb" },
    { name: "Ginger", category: "Root" },
    { name: "Hibiscus", category: "Flower" },
    { name: "Ivy", category: "Vine" },
    { name: "Jasmine", category: "Flower" },
    { name: "Kale", category: "Vegetable" },
    { name: "Lavender", category: "Flower" },
    { name: "Mint", category: "Herb" },
    { name: "Nasturtium", category: "Flower" },
    { name: "Orchid", category: "Flower" },
    { name: "Parsley", category: "Herb" },
    { name: "Poppy", category: "Flower"},
    { name: "Peony", category: "Flower"},
    { name: "Primrose", category: "Flower"},
    { name: "Petunia", category: "Flower"},
    { name: "Pepper", category: "Herb"},
    { name: "Pepper", category: "Herb"},
    { name: "Pepper", category: "Herb"},
    { name: "Pepper", category: "Herb"},
    { name: "Pepper", category: "Herb"},
    { name: "Pepper", category: "Herb"},
    { name: "Pepper", category: "Herb"},
    { name: "Pepper", category: "Herb"},
    { name: "Pepper", category: "Herb"},
    { name: "Pepper", category: "Herb"},
    { name: "Pepper", category: "Herb"},
    { name: "Pepper", category: "Herb"},
    { name: "Pepper", category: "Herb"},
    { name: "Pepper", category: "Herb"},
    { name: "Pepper", category: "Herb"},
    { name: "Pepper", category: "Herb"},
    { name: "Pepper", category: "Herb"},
    { name: "Pepper", category: "Herb"},
    { name: "Quince", category: "Fruit" },
    { name: "Rosemary", category: "Herb" },
    { name: "Sage", category: "Herb" },
    { name: "Thyme", category: "Herb" },
    { name: "Umbrella Plant", category: "Succulent" },
    { name: "Violet", category: "Flower" },
    { name: "Watercress", category: "Vegetable" },
    { name: "Xerophyte", category: "Succulent" },
    { name: "Yarrow", category: "Flower" },
    { name: "Zinnia", category: "Flower" },
];

function filterPlants(letter) {
    const filteredPlants = plantData.filter(plant => plant.name.charAt(0).toUpperCase() === letter);
    displayPlants(filteredPlants);
}

function displayPlants(plants) {
    const plantListElement = document.getElementById("plantList");
    plantListElement.innerHTML = "";

    plants.forEach(plant => {
    const plantItem = document.createElement("li");
        plantItem.className = "plant-item";

        const plantButton = document.createElement("button", type="button");
        plantButton.textContent = plant.name;
        plantButton.className = "plant-btn";
        
        plantButton.setAttribute('onclick', `redirectToFlower('${plant.name}')`);

        plantItem.appendChild(plantButton);
        plantListElement.appendChild(plantItem);
    });
}

document.addEventListener('DOMContentLoaded', (event) => {
    filterPlants('A');
});

function redirectToFlower(plantName) {
    const flowerPageName = plantName.toLowerCase();
    const flowerURL = '/flowers/' + flowerPageName + '.html';
    window.location.href = flowerURL;
}
