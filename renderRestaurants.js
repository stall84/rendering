
function renderRestaurants(restaurants) {
    // HINT: You can use <img /> tags that point to these playing card images: 
    // https://commons.wikimedia.org/wiki/Category:SVG_playing_cards
    return `
        <div class="container" id="restaurantBar">
        <h1>Placeholder</h1>
        </div>
    `
}

// as in renderStudents we're going to make a separate function which will take each restaurant
// object and apply the dollar signs equaling the priceRating value. We will use a switch/case statement

function renderRestaurant(restaurant) {
    switch (restaurant.priceRating) {
        case 1: 
            var className = "oneDollar";
            break;
    }
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