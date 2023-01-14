// *** create a function that takes an array of numbers and returns a new array the square of those numbers
arr = [2, 4, 6, 8, 10]

function squareArray(arr) {
    let newArr = [];
    for (i = 0; i < arr.length; i++) {
        newArr[i] = (arr[i] ** 2)
    }
    return newArr
}

console.log(squareArray(arr));
console.log("\n") // just to make the terminal look cleaner

// *** create a function that shows a score based on how many 2 and 3 point shots are made
function teamScore(x, y) {
    let twoPoints = x*2
    let threePoints = y*3
    let totalPoints = twoPoints + threePoints
    return `The team scored ${totalPoints} points. They had ${twoPoints} points on ${x} two-point shots and ${threePoints} points on ${y} shots from beyond the arc.`
}

console.log(teamScore(31, 13));
console.log("\n") // just to make the terminal look cleaner

// *** function that uppercases a string
function upperCaseString(string) {
    let newString = string.toUpperCase();
    return newString
}

console.log(upperCaseString("make this all caps please"));
