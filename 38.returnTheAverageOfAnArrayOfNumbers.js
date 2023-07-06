function myFunction(arr) {
    return arr.reduce(((acc, curr) => {
        return acc + curr
    })) / arr.length
};
myFunction([3, 5, 2])