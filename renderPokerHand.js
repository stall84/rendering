
// dont think we'll need more than the one function for this problem
// will style later (will have to be just the big cars vertically for now)



function renderPokerHand(pokerHand) {
    // create holding array for the output HTML
    var outputHand = [];
    // Use for-loop as in renderCircles case. This will iterate through every item in the 
    // pokerHand function that is essentially just the array of card objects we're taking as input
    for (var i = 0; i < pokerHand.length; i++) {
        // create variable to hold the object value of each iterable in pokerHand array
        var currCard = pokerHand[i];
        // do the magic in creating variable to hold our HTML code done in template literal notation
        var cardHTML = `
        <div class="container">
        <div class="row">
        <img src="cards/${currCard.value}${currCard.suit}.png"></img>
        </div>
        </div>
        `
        // push each cards html formed immediately above onto out outputHand variable
        outputHand.push(cardHTML);
}   // remember to join the array elements (for good practice)
    return outputHand.join('');
       
    
}




function pokerHand() {
    var content = document.getElementById('content');

    var pokerHandAbstraction = [
        {
            value: "K",
            suit: "C"
        },
        {
            value: "K",
            suit: "D"
        },
        {
            value: "9",
            suit: "S"
        },
        {
            value: "2",
            suit: "H"
        },
        {
            value: "9",
            suit: "H"
        }
    ];

    content.innerHTML = renderPokerHand(pokerHandAbstraction);

}