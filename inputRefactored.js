//https://adventofcode.com/2018/day/1

var fs = require('fs');

//Synchronously append data to a file
var input = fs.readFileSync('input.txt').toString();
var numberStrings = input.split("\n");

var sum = 0; 
for (num of numberStrings) {
    if (!isNaN(num)) {
        sum += parseInt(num);
    }
}
console.log(sum);
