// Write a program which accepts a string as input to print "Yes" if the string is "yes" or "YES" or "Yes", otherwise print "No".
function isYes(str) {
    if (str === "yes" || str === "Yes" || str === "YES") {
        console.log("Yes")
    } else {
        console.log("No")
    }
}
isYes("YES")
