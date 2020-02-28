
function renderNametags(nametags) {

    // as with circles problem. create an array to store each iterated name.. we have to make a tag for each
    var outputTags = [];
    
    for (var i=0; i < nametags.length; i++) {
        // create variable to hold the name of each element of array this for loop loops over
        var currTag = nametags[i];
        // make variable that will take info from above variable and write the actual HTML
        var tagHTML = `<div class="d-flex flex-column justify-content-center" style="width:200px; height:150px">
                        <div style="background-color:blue; color:white; text-align:center;">Hello, my name is:</div>
                        <div style="height:70px; background-color:grey; text-align:center;">${currTag}</div>
                        </div>
        `
        // push the html we created above into the outputTags array variable
        outputTags.push(tagHTML);
       
        
    }

    // return the array of html elements, remembering to join them at the whitespace
    return outputTags.join('');
}

function nametags() {
    var content = document.getElementById('content');

    var nametagsAbstraction = [
       "Kamilah",
       "Kim",
       "Stuart",
       "Ron",
       "Krissy"
    ]

    content.innerHTML = renderNametags(nametagsAbstraction);
    
}