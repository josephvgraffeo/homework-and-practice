// Write a function that prints from 1 to 100. But log “Fizz” instead of the number if it is divisible by 3, “Buzz” if the number is divisible by 5, and “FizzBuzz” if the number is divisible by both 3 and 5.

function buzzFizz() {
    let counter = 0
    for (i = 1; i < 101; i++) {
        counter++
        switch (true) {
            case (counter % 5 === 0) && (counter % 3 === 0):
                console.log("FizzBuzz");
                break
            case (counter % 3 === 0):
                console.log("Fizz");
                break
            case (counter % 5 === 0):
                console.log("Buzz");
                break
        } 
    }
}

buzzFizz();