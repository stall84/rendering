// This problem will require two functions working together. One for the whole student body that will take
// input from a function making the html for each individual student (by use of if/then statement)
// Will attempt to use map method instead of for loop in this example.
    


function renderStudents(students) {

    // create HTML variable to hold the final output of HTML we're making
    // using map method instead of for loop. call the map function on each individual
    // student's html block that we made below in renderStudent. Then use join method
    
    var outputHTML = students.map(renderStudent).join('');

    // Use template literal notation to create the overall container div, then insert 
    // the individual student's div blocks (we just saved into outputHTML above) into it
    
    return `
        <div class="container">
        <h1>Roll Call!</h1>
        ${outputHTML}
        </div>
    `

}

// function that will create the html for each individual student (necessary to parse through the booleans of is Present & to 
// set background color accordingly). Will take parameter of student's name
function renderStudent(student) {
    // if statement accessing 'isPresent' object key
    if (student.isPresent) {
        // create variable to hold string saying 'Present' if isPresent is true
        var presenceString = "Present!!";
        // define a variable to store the css classname that will determine the styling for either present or absent students
        var className = "student-present";
    } else {
        var presenceString = "Absent";
        var className = "student-absent" ;
    }
    // now return/create the individual student HTML using the values sorted through above
    return `
        <div class="${className}>
        <h2>${student.name}</h2>
        <h3>${presenceString}</h3>
        </div>
    
    `
}

function students() {
    var content = document.getElementById('content');

    var studentsAbstraction = [
        {
            name: "Kamilah",
            isPresent: true
        },
        {
            name: "Kim",
            isPresent: true
        },
        {
            name: "Stuart",
            isPresent: false
        },
        {
            name: "Ron",
            isPresent: true
        },
        {
            name: "Krissy",
            isPresent: false
        }
    ]

    content.innerHTML = renderStudents(studentsAbstraction);
}