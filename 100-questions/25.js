// Define a function that can accept two strings as input and print the string with maximum length in console. If two strings have the same length, then the function should print all strings line by line.
function maximumLength(...a) {
    if (a[0].length == a[1].length) {
        a.map((e) => { console.log(e) })
    } else {
        a[0].length > a[1].length ? console.log(a[0]) : console.log(a[1])
    }

}
maximumLength("Grapes", "Apple")