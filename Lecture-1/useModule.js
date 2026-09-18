const isEven = require("./isEven");

const number = Number(process.argv[2]);

if (isNaN(number)) {
    console.log("Please enter a valid number.");
} else if (isEven(number)) {
    console.log(number + " is Even.");
} else {
    console.log(number + " is Odd.");
}