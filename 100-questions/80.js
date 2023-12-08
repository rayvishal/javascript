// Create a function that returns the thickness (in meters) of a piece of paper after folding it n number of times. The paper starts off with a thickness of 0.5mm.

// Examples
// numLayers(1) ➞ "0.001m"
// // Paper folded once is 1mm (equal to 0.001m)

// numLayers(4) ➞ "0.008m"
// // Paper folded 4 times is 8mm (equal to 0.008m)

// numLayers(21) ➞ "1048.576m"
// // Paper folded 21 times is 1048576mm (equal to 1048.576m
function numLayers(mm) {
    const arr = [];
    const thick = 0.5;
    for (let i = 1; i <= mm; i++) {
        if (i == 1) {
            arr.push((thick + thick))

        } else {

            arr.push(arr[i - 2] * 2)
        }
    }
    console.log(`${arr[arr.length - 1] / 1000}m`)
}
numLayers(21)