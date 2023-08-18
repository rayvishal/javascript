// Create a function that calculates the area of a rectangle. If the arguments are invalid, your function must return -1.

function areaOfRec(length, breadth) {
    console.log(length > 0 && breadth > 0 ? length * breadth : -1);
}
areaOfRec(0, 6)