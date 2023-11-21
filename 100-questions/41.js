// Define a class named Circle which can be constructed by a radius. The Circle class has a method which can compute the area.

class Circle {
    constructor(radius) {
        this.radius = radius
    }
    AreaOfCircle() {
        return (22 / 7) * (this.radius ** 2)
    }
}
const area = new Circle(3)
console.log(area.AreaOfCircle())