// Please write a program to print the running time of execution of "1+1" for 100 times.

console.time("myTimer")
function runningTime() {
    for (let i = 0; i <= 100; i++) {
        console.log("1+1")
    }
}
runningTime()
console.timeEnd("myTimer")