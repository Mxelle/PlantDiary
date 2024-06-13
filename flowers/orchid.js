function plantDiaryClicked() {
    window.location.href = "/homepage/homepage.html"
}

function navigateTo(url) {
    window.location.href = url;
}

function addWatering() {
    var newWatering = document.getElementById('new-watering').value;

    document.getElementById('new-watering').value = '';

    var li = document.createElement('li');
    li.textContent = newWatering;

    var ul = document.getElementById('watering-list');
    ul.appendChild(li);
}

function toggleDay(dayElement) {
    dayElement.classList.toggle('active');
}