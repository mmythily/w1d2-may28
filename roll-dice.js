/*Write a program that takes a single parameter from the command line, 
a number, and rolls that many six-sided dice. 
*/
var numOfDice = process.argv.slice(2)[0];

function rollDice (numOfDice) {
    var arrayOfRolls = [];
    for (dice = 0; dice <= numOfDice - 1; dice++) {
        var roll = parseInt(Math.random() * 6) + 1;
        arrayOfRolls.push(roll)
    }
    var rollsInString = arrayOfRolls.join();
    return `Rolled ${numOfDice} dice: ${rollsInString}`;
}

console.log(rollDice(numOfDice));