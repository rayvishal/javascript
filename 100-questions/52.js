// Please write a binary search function which searches an item in a sorted list. The function should return the index of element to be searched in the list.

function binarySearch(arr, value) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2)
        if (arr[mid] == value) {
            return mid
        } else if (arr[mid] < value) {
            low = mid + 1
        } else {
            high = mid - 1
        }
    }
    return -1;
}
console.log(binarySearch([3, 5, 6, 9, 10], 3))