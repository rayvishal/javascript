// A number n is automorphic if n^2 ends in n.

// For example: n=5, n^2=25

// Create a function that takes a number and returns true if the number is automorphic, false if it isn't.

// Examples
// isAutomorphic(5) ➞ true

// isAutomorphic(8) ➞ false

// isAutomorphic(76) ➞ true



function isAutomorphic(num) {
    const numbers = String(num).split('');
    const newNumbers = numbers.map((e) => { return +e })
    console.log(newNumbers)

    const product = String(num * num).split('');
    const newproduct = product.map((e) => { return +e })
    const answer = [];

    for (let i = newNumbers.length - 1; i >= 0; i--) {
        for (let j = newproduct.length - 1; j >= 0; j--) {

            if (newNumbers[i] === newproduct[j]) {
                answer.push(newproduct[j])
                break;
            }
        }
    }

    const left = (answer.reverse());
    function check() {
        return left.length === newNumbers.length && left.every((e, index) => { return e == newNumbers[index] })

    }
    console.log(check())
};
isAutomorphic(5)
