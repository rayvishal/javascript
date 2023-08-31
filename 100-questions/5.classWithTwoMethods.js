// Question:
// Define a class which has at least two methods:

// getString: to get a string from console input
// printString: to print the string in upper case.

class ClassName {
    constructor(str) {
        this.str = str;
    }
    getString() {
        this.str = prompt("Enter the String:")
    }
    printString() {
        console.log((this.str).toUpperCase())
    }
}
const obj = new ClassName();
obj.getString();
obj.printString();