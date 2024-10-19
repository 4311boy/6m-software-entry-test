/*
    Task 1
    - Create a function that would swap the value of x and y using only x and y as variables.
    - x and y must be numeric.
    - return -1 if either x or y is not numeric.
    - print the swapped values in the console if both x and y are numeric.
    
    Task 2
    - invoke the function "swap" using the following scenarios:
    - "Apple", 10
    - 9, 17
*/

function swap(x, y){
    // Task 1: Add code here

    //if not numeric
    if (typeof x!=='number' || typeof y!=='number'){
        console.log(-1)
        return -1;
    }


    // total =x + y
    x = x + y;
  
    // swapped_y or x = total - y
    y = x - y;

    // swapped_x or y = total - swapped_y
    //                =  total - x
    x = x - y;

    //after swap
    console.log(x,y);

}

// Task 2: Add code here
let x = 9;
let y = 17;

// scenario 1
swap(x,y);

// scenario 2
x = "Apple"
y = 10
swap(x,y)

