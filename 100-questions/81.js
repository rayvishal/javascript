// Mary wants to run a 25-mile marathon. When she attempts to sign up for the marathon, she notices the sign-up sheet doesn't directly state the marathon's length. Instead, the marathon's length is listed in small, different portions. Help Mary find out how long the marathon actually is.

// Return true if the marathon is 25 miles long, otherwise, return false.

// Examples
// marathonDistance([1, 2, 3, 4]) ➞ false

// marathonDistance([1, 9, 5, 8, 2]) ➞ true

// marathonDistance([-6, 15, 4]) ➞ true
function marathonDistance(arr) {
    arr.forEach((e, index) => {

        if (e < 0) {
            let num = arr[index]
            arr.splice(index, 1, num * -1)
        }
    })
    const add = arr.reduce((a, b) => {
        return a + b

    })
    if (add == 25) {
        return true
    } else { return false }


};
console.log(marathonDistance([1, 9, 5, 8, 2]))