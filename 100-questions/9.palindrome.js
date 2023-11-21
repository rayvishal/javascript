
//To find the palindrome of a number


function palindrmic(a) {
    const changestr = String(a)
    const arr = changestr.split('')
    const newArr = []

    arr.forEach((a) => { newArr.push(Number(a)) })
    const copyofnewArr = newArr.slice(0)

    const compareArr = newArr.reverse()
    copyofnewArr.toString() === compareArr.toString() ? console.log('The number is palindromic number') : console.log('This is not a palindromic number')

}
palindrmic(117)