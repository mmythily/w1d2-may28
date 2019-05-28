/*Write a program that takes a single parameter from the command line, 
a number, and rolls that many six-sided dice. 
*/

function rollDice (num) {
    var arrayOfRolls = [];
    for (dice = 0; dice <= num - 1; dice++) {
        var roll = parseInt(Math.random() * 6) + 1;
        arrayOfRolls.push(roll)
    }
    var rollsInString = arrayOfRolls.join();
    return `Rolled ${num} dice: ${rollsInString}`;
}

var numOfDice = process.argv.slice(2)[0];
console.log(rollDice(numOfDice));