function countTrue(array) {
    if (array.length == 0) {
        return 0
    } else {
        let number = 0;
        for (let aray of array) {
            aray == "true" ? number++ : null
        }
        console.log(number)
    }

}
countTrue(["true", "false", "false"])