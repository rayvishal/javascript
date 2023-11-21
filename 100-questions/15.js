// Write a program that computes the value of a+aa+aaa+aaaa with a given digit as the value of a.

function add(num) {
    console.log(num + Number(`${num}` + `${num}`) + Number(`${num}` + `${num}` + `${num}`) + Number(`${num}` + `${num}` + `${num}` + `${num}`))


}