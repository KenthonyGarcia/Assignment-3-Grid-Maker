// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

let table = document.getElementById("grid");
let cells = document.querySelectorAll("td");
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
        addR();//using addR function to add one row which also adds one column while returning after so that 2 columns do not appear
        return;
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
    if(numRows == 0) //if there are no rows, then we can not remove a row so we return
    {
        return;
    }
    table.deleteRow(-1);//we remove the row from the table
    numRows--; //decrement the value of rows
    if(numRows == 0) //if there are no rows left then the number of columns are set to zero
    {
        numCols=0;
    }
}

// Remove a column
function removeC() {
    if(numCols == 0) //if there are no columns, then we can not remove a column so we return
    {
        return;
    }
    for(let i = 0; row = table.rows[i]; i++)
    {
        row.deleteCell(-1)//deletes all the rows cells from the right side going left
    }
    numCols--; //decrement the value of columns
    if(numCols == 0) //if the number of columns is zero then the all the rows shall be removed
    {
        for(let i =0; i < numRows; i++)
        {
            removeR();//calls removeR function to remove all the rows 
        }
    }
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    for(var i = 0; i < cells.length; i++)//for every cell
    {
        if(cells[i].style.backgroundColor == "white")//if the cells current background color is set to "white" then it is set to the color selected by the user.
        {
            cells[i].style.backgroundColor == colorSelected;
        }
    }
}

// Fill all cells
function fillAll(){
    alert("Clicked Fill All"); // Replace this line with your code.
}

// Clear all cells
function clearAll(){
    alert("Clicked Clear All"); // Replace this line with your code.
}