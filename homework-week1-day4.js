// create a function that takes an array of numbers and returns a new array the square of those numbers
function squareArray(arr) {
    let newArr = [];
    for (i = 0; i < arr.length; i++) {
        newArr.push(arr[i] * arr[i])
    }
    return newArr
}

console.log(squareArray([2, 4, 6, 8, 10]));

// create a function that shows a score based on how many 2 and 3 point shots are made
function teamScore(x, y) {
    let twoPointers = x*2
    let threePointers = y*3
    let totalPoints = twoPointers + threePointers
    return `The team scored ${totalPoints} points. They had ${twoPointers} points on ${x} two-point shots and ${threePointers} points on ${y} shots from beyond the arc.`
}

console.log(teamScore(31, 13));

// function that uppercases a string
function upperCaseString(string) {
    let newString = string.toUpperCase();
    return newString
}

console.log(upperCaseString("make this all caps please"));
