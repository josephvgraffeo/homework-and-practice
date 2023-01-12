// Loop that prints a pyramid of choice emoji
// Struggling to conceptualize this one, found resources to make it work but need explanation
let pyramid = "";
for (let i = 0; i < 5; i++) {
    pyramid += "🌀"
    for (k = 0; k < i; k++) {
        pyramid += "🌀"
    }
    pyramid += "\n";
}
console.log(pyramid)

// Function that shifts first term in given array and pushes "kiwi"
let favoriteFruits = ["mango", "lychee", "rambutan", "papya"]

function kiwiMachine() {
    favoriteFruits.push("kiwi");
    favoriteFruits.shift();
    return favoriteFruits
}
console.log(kiwiMachine());

// *Bonus* create a function that returns a letter grade
function assignGrade(grade) {
    if (grade > 100) {
        return "You can get that much extra credit?"
    } else if (grade >= 90) {
        return "A";
    } else if (grade >= 80) {
        return "B";
    } else if (grade >= 70) {
        return "C";
    } else if (grade >= 60) {
        return "D";
    } else if (grade >= 0) {
        return "F"
    } else {
        return "Not a valid grade!"
    }
}
console.log(assignGrade(2000));
