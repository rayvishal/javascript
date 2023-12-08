
function rapdigit(num) {
    const numbers = (num + "").split("");
    if (num > 0) {
        const find = numbers.every((e) => { return e == numbers[0] });
        if (find == true) { return true } else { return false }
    } else { return false }
}
console.log(rapdigit(66666))