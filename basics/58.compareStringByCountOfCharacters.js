// Create a function that takes two strings as arguments and return either true or false depending on whether the total number of characters in the first string is equal to the total number of characters in the second string.

function compare(str1, str2) {
    console.log(str1.length === str2.length ? true : false)
}
compare('hello', 'edabit');