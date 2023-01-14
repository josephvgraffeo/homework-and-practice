// create a function that counts the number of true and false values in an array
const testArray = [true, false, false, true, false, false, false, true, true, true, false];

const countTF = (testArray) => {
    let trueCount = 0;
    let falseCount = 0;
    for (i=0; i < testArray.length; i++) {
        if (testArray[i] === true) {
            trueCount++
        } else {
            falseCount++
        }; 
    };
    let totalCount = `True: ${trueCount} | False: ${falseCount}`;
    return totalCount;
};
console.log(countTF(testArray));


// write a function called combineTwoArrays which take in
// two arrays as arguments and returns one array that combines both
const combineTwoArrays = (array1, array2) => { 
    const newArray = [...array1, ...array2]
    return newArray
};
console.log(combineTwoArrays([2,3,"cat"], [4,5]));

// given a shopping list and cart arrays create a new array that removes cart items from shopping list
// const shoppingList = [water, milk, cereal, plates, chips];
// const shoppingCart = [milk, cereal];

// const shoppingChecker = (shoppingList, shoppingCart) => {
// }