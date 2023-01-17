// // Write a function that prints from 1 to 100. But log “Fizz” instead of the number if it is divisible by 3, “Buzz” if the number is divisible by 5, and “FizzBuzz” if the number is divisible by both 3 and 5.

function buzzFizzRite() {
    for (i = 1; i < 101; i++) {
        switch (true) {
            case i % 3 === 0 && i % 5 === 0:
                console.log("FizzBuzz");
                break;
            case i % 5 === 0:
                console.log("Fizz");
                break;
            case i % 3 === 0:
                console.log("Buzz");
                break;
            default:
                console.log(i)
        }
    }
}

buzzFizzRite(); 


// // Same function but using else if
// function buzzFizz() {
//     for (i = 1; i < 101; i++) {
//         if (i % 3 ===0 && i % 5 === 0) {
//             console.log("FizzBuzz");
//         } else if (i % 5 === 0) {
//             console.log("Fizz");
//         } else if (i % 3 === 0) {
//             console.log("Buzz");
//         } else {
//             console.log(i)
//         }
//     }
// }

// buzzFizz()
