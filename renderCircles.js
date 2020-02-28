
function renderCircles(circles) {
    // HINT: You probably need to write a for loop!
    //       Or, if you're feeling fancy, use .map() 


    
    var outputArr = [];

    for (var i=0; i<circles.length; i++) {

        var currCirc = circles[i]
        var circHTML = `
        <div style="border-radius:50%; background-color:${currCirc.color}; height:${currCirc.radius}px; width:${currCirc.radius}px;"></div>
        `
        outputArr.push(circHTML);


    }
    return outputArr.join('');
        
}

function circles() {
    var content = document.getElementById('content');

    var circlesAbstraction = [
        {
            radius: 50,
            color: "#FF00FF"
        },
        {
            radius: 30,
            color: "#FF99AA"
        },
        {
            radius: 60,
            color: "#0000FF"
        },
        {
            radius: 10,
            color: "#000000"
        },
    ];

    content.innerHTML = renderCircles(circlesAbstraction);

}