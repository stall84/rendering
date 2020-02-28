
function renderRectangle(rectangle) {

    
    // pretty simple with this one. no empty array to push into needed & no looping needed for the single instance of rectangle.
    return `
    <div class = "ml-4 mt-4">
       <div style="width:${rectangle.width}px; height:${rectangle.height}px; background-color:${rectangle.color};"></div>
    </div>
    `
}

function rectangle() {
    var content = document.getElementById('content');

    var rectangleAbstraction = {
        width: 100,
        height: 200,
        color: "#FF00FF"
    }

    content.innerHTML = renderRectangle(rectangleAbstraction);

}