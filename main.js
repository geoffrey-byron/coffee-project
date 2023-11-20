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
    e.preventDefault(); // don't submit the form, we just want to update the data
    const selectedRoast = roastSelection.value;
    const filteredCoffees = [];
    coffees.forEach( coffee => {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
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
