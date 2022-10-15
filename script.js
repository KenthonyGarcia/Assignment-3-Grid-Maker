// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

let table = document.getElementById("grid");
// Add a row
function addR() {
    let row = table.insertRow(); 
    if(numCols == 0) //if there are no columns we add one so that we can add the rows
    {
        numCols=1;
    }
    for(let i = 0; i < numCols; i++)//adds a row cell based on how many columns the user has
    {
        let cell = row.insertCell();
        cell.onclick = function(event)
        {
            this.style.backgroundColor = colorSelected;//chooses the backgroundColor of the cell based on the color that is selected
        }
    }
    numRows++;//after each click on addR one row is added
}

// Add a column
function addC() {
    if(numRows == 0) //if there are no rows we add one so that we can add the columns
    {
        addR();
    }
    for(let i = 0; row = table.rows[i]; i++)
    {
        let cell = row.insertCell();
        cell.onclick = function(event)
        {
            this.style.backgroundColor = colorSelected;//chooses the backgroundColor of the cell based on the color that is selected
        }
    }
    numCols++;//after each click on addC one columnn is added
}

// Remove a row
function removeR() {
    alert("Clicked Remove Row"); // Replace this line with your code.
}

// Remove a column
function removeC() {
    alert("Clicked Remove Col"); // Replace this line with your code.
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    alert("Clicked Fill All Uncolored"); // Replace this line with your code.
}

// Fill all cells
function fillAll(){
    alert("Clicked Fill All"); // Replace this line with your code.
}

// Clear all cells
function clearAll(){
    alert("Clicked Clear All"); // Replace this line with your code.
}