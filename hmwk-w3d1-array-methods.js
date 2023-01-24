// Write a function that takes an array of numbers as a parameter and uses .forEach() to double the value of all even numbers in the array
const numbers = [2,4,6,9,10,11,231,250]

const doubleEvenNums = numbers.forEach( (numbers) => {
    if (numbers % 2 === 0) {
        console.log(numbers * 2)
    } else {
        console.log(numbers)
    };
});

// remove first element of array, your dream car as new first element, remove last element, your first car as last element
// let myDreamCars = ["Charger", "“Cayenne", "Cyber Truck", "G-Wagon", "Civic"];
let myDreamCars = ["Charger", "“Cayenne", "Cyber Truck", "G-Wagon", "Civic"];

const myDreamCarsCopy = [...myDreamCars]
myDreamCarsCopy.shift();
myDreamCarsCopy.pop();
myDreamCarsCopy.push("Durango")
myDreamCarsCopy.unshift("BMW i7")

console.log(myDreamCarsCopy);

