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
    { name: "Animal", category: "Animal"},
    { name: "Animal", category: "Animal"},
    { name: "Animal", category: "Animal"},
    { name: "Basil", category: "Herb" },
    { name: "Cactus", category: "Succulent" },
    // Add more plant data as needed
];

function filterPlants(letter) {
    const filteredPlants = plantData.filter(plant => plant.name.charAt(0).toUpperCase() === letter);
    displayPlants(filteredPlants);
}

function displayPlants(plants) {
    const plantListElement = document.getElementById("plantList");
    plantListElement.innerHTML = ""; // Clear previous plant list

    plants.forEach(plant => {
        const plantItem = document.createElement("div");
        plantItem.textContent = plant.name;
        plantListElement.appendChild(plantItem);
    });
}

// Initially display plants starting with "A"
filterPlants('A');