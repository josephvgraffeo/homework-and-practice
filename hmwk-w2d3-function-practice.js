// function that converts age in years to age in minutes
const yearsToMinutes = (years) => {
    let conversion = ((365*24)*60) * years
    console.log(`If ${years} is your age in years, then you would be ${conversion} minutes old! \n`)
}

yearsToMinutes(25);

// function that take an array of numbers and gives the sum of all even numbers in the array
const sumOfEven = (array) => {
    let trueArray = [];
    for (i = 0; i <= array.length; i++) {
        if (array[i] % 2 === 0) {
            trueArray.push(array[i])
        };
    };
    let sum = 0
    for (i = 0; i < trueArray.length; i++) {
        sum += trueArray[i]
    };
    console.log(`${sum} is the sum of all true values in the array!`);
};

sumOfEven([2,3,7,6,8,12,17,32,125,130,10]);