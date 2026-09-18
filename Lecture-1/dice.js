const crypto = require("crypto");

console.log("=================================");
console.log("     SMART DICE GENERATOR");
console.log("=================================");

console.log("Starting dice rolls...");

for (let i = 1; i <= 5; i++) {

    const dice = crypto.randomInt(1, 7);

    console.log(`Roll ${i}: Dice Rolled: ${dice}`);
}

console.log("All dice rolls completed.");