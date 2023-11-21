// Write a program that accepts a sentence and calculate the number of upper case letters and lower case letters.
function letters(sen) {
    sen = sen.replace(/[^a-zA-Z0-9]+/g, '')

    const upperCase = []
    const lowerCase = []
    for (let i = 0; i < sen.length; i++) {
        sen[i] === sen[i].toUpperCase() ? upperCase.push(sen[i]) : lowerCase.push(sen[i])
    }
    console.log(`UPPER CASE ${upperCase.length}`)
    console.log(`LOWER CASE ${lowerCase.length}`)

}
letters('Hello world!')