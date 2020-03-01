
debugger;

function renderRestaurants(restaurants) {
    // first create variable to hold the final HTML assembly of 2nd function and current function that will return the 
    // array of html formatted objects from original restaurants function at bottom
    var restaurantHTML = restaurants.map(renderRestaurant).join('');

    return `
        <div id="restaurant-holder">
           ${restaurantHTML}
        </div>
    `

}


// Will create a secondary function to render each individual restaurants html with dollarsign styling

function renderRestaurant(restaurant) {

    return `
        <!-- Will use a rounded bootstrap class for styling of restaurant divs -->
        <div class="rounded rest-holder">
            <h2>${restaurant.name}</h2>
            <h3>${restaurant.type}</h3>
            <!-- Using the special string repeat method we will simply use an ordinary dollar sign with a styling class (green color) -->
            <!-- we will set up in the CSS file.. calling the priceRating value in the repeat method Luckily there can be no fewer than 1 dollarsign -->
            <div class="dollar-line">${'$'.repeat(restaurant.priceRating)}</div>
        </div>
    `

}



function restaurants() {
    var content = document.getElementById('content');

    var restaurantsAbstraction = [
        {
            name: "McDonald's",
            type: "Fast Food",
            priceRating: 1
        },
        {
            name: "Gunshow",
            type: "Date Night Dining",
            priceRating: 5
        },
        {
            name: "Iron Age",
            type: "Korean BBQ",
            priceRating: 4
        },
    ];

    content.innerHTML = renderRestaurants(restaurantsAbstraction);

}