// Create a function that takes a number (step) as an argument and returns the amount of boxes in that step of the sequence.

// Box Sequence Image

// Step 0: Start with 0
// Step 1: Add 3
// Step 2: Subtract 1
// Repeat Step 1 & 2 
function boxSeq(num) {
    const arr = [];
    for (let i = 0; i <= num; i++) {
        if (i == 0) {
            arr.push(i)
        } else if (i == 1) {
            arr.push(3)
        } else if (i == 2) {
            arr.push(2)
        } else if (i == 3) {
            arr.push(5)
        } else {

            arr.push(arr[arr.length - 1] - 1)


            arr.push(arr[arr.length - 3] + (arr[arr.length - 2]))

        }
    }
    console.log(arr[num])
}
boxSeq(5)