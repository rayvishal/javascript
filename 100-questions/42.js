// Define a class named Rectangle which can be constructed by a length and width. The Rectangle class has a method which can compute the area.

class Rectangle {
    constructor(length, Width) {
        this.length = length;
        this.Width = Width
    }
    ComputeArea() {
        console.log(this.length * this.Width)
    }
}
const area = new Rectangle(7, 3);
area.ComputeArea()