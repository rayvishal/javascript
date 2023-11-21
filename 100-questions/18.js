// A robot moves in a plane starting from the original point (0,0). The robot can move toward UP, DOWN, LEFT and RIGHT with a given steps. The trace of robot movement is shown as the following:

// UP 5
// DOWN 3
// LEFT 3
// RIGHT 2
// The numbers after the direction are steps. Please write a program to compute the distance from current position after a sequence of movement and original point. If the distance is a float, then just print the nearest integer. Example: If the following tuples are given as input to the program:

// UP 5
// DOWN 3
// LEFT 3
// RIGHT 2
// Then, the output of the program should be:

// 2
function trackMovement(...movement) {
    const upDown = []
    const leftRight = []

    movement.forEach((item) => {
        switch (item[0]) {
            case "Up":
                upDown.push(+item[1]);
                break;
            case "Down":
                upDown.push(+item[1])
                break;
            case "Left":
                leftRight.push(+item[1])
                break;
            case "Right":
                leftRight.push(+item[1])
        }
    })

    const a = upDown.reduce((c, d) => { return c - d })
    const b = leftRight.reduce((e, f) => { return e - f })
    const c = Math.round(Math.sqrt(a ** 2 + b ** 2))
    console.log(c)


}
trackMovement(['Up', "5"], ['Down', "3"], ['Left', "3"], ["Right", "2"])