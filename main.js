"use strict"

function renderCoffee(coffee) {
    return `<div class="coffee card mb-2">
                <div class="card-body">
                <p class="card-text d-none">ID: ${coffee.id}</p>
                <h2 class="card-title">${coffee.name}</h2>
                <p class="card-text">Roast: ${coffee.roast}</p>
                </div>
            </div>`;
}
function renderCoffees(coffees) {
    let html = '';
    for(let i = 0; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault();
    const selectedRoast = roastSelection.value;
    if (selectedRoast === 'All') {
        // If "All" is selected, render all coffees
        tbody.innerHTML = renderCoffees(coffees);
    } else {
        // Otherwise, filter and render based on the selected roast
        const filteredCoffees = coffees.filter(coffee => coffee.roast === selectedRoast);
        tbody.innerHTML = renderCoffees(filteredCoffees);
    }
}

const coffeeSearchInput = document.getElementById('coffee-search');

function updateCoffeesBySearch(e) {
    e.preventDefault();

    const searchTerm = coffeeSearchInput.value.trim().toLowerCase();
    const filteredCoffees = coffees.filter(coffee => coffee.name.toLowerCase().includes(searchTerm));

    tbody.innerHTML = renderCoffees(filteredCoffees);
}

coffeeSearchInput.addEventListener('input', updateCoffeesBySearch);

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
const coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];


const tbody = document.querySelector('#coffees');
const submitButton = document.querySelector('#submit');
const roastSelection = document.querySelector('#roast-selection');

tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);

const image = document.createElement('card-body');
image.src = "img/pexels-igor-haritanovich-1695052.jpg";
document.body.appendChild(image)

//TO-do js

const newCoffeeform = document.querySelector("#add-coffee-form");

newCoffeeform.addEventListener("submit", e =>{
    e.preventDefault();
    const input = document.querySelector("#add-coffee");
    const newCoffeeList = document.querySelector("#add-coffee-list");
    const userInput = input.value;
    input.value = "";

    //creating elements
    const div = document.createElement("div");
    div.classList.add("card-body");

    const p = document.createElement("p");
    p.innerText = userInput;

// Append child elements
    newCoffeeList.appendChild(div);
    div.appendChild(p);

})