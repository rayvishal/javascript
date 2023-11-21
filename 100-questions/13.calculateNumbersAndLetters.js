// Write a program that accepts a sentence and calculate the number of letters and digits.

function counter(value) {
    // let value='hello world! 123'
    value = value.replace(/[^a-zA-Z0-9]/g, '')
    // value=value.replaceAll(' ','')
    const char = []
    const num = []
    for (i = 0; i < value.length; i++) {
        isNaN(value[i]) === true ? char.push(value[i]) : num.push(value[i]);
    }
    console.log(`LETTERS ${char.length}
  DIGITS ${num.length}
  `)

}
counter('hello world! 123')
