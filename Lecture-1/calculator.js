const operation = process.argv[2];
const num1 = Number(process.argv[3]);
const num2 = Number(process.argv[4]);

console.log("Calculator Started");
console.log("Operation:", operation);
console.log("Numbers:", num1, num2);

if (isNaN(num1) || isNaN(num2)) {
    console.log("Error: Please enter valid numbers.");
    process.exit();
}

switch (operation) {

    case "add":
        console.log("Result:", num1 + num2);
        break;

    case "subtract":
        console.log("Result:", num1 - num2);
        break;

    case "multiply":
        console.log("Result:", num1 * num2);
        break;

    case "divide":
        if (num2 === 0) {
            console.log("Error: Cannot divide by zero.");
        } else {
            console.log("Result:", num1 / num2);
        }
        break;

    default:
        console.log("Error: Invalid operation.");
        console.log("Use: add, subtract, multiply, divide");
}