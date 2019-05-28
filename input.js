//https://adventofcode.com/2018/day/1

var fs = require('fs');

//Synchronously append data to a file
var input = fs.readFileSync('input.txt').toString();
var numberStrings = input.split("\n");

//Convert numberStrings into an array of integers.
var numArray = [];
for (i = 0; i < numberStrings.length; i++) {
    var nums = parseInt(numberStrings[i], 10);
    if (!isNaN(nums)) {
        (numArray.push(nums));
    }
}

//Create sum of numArray
var sum = 0;
for (i = 0; i < numArray.length; i++) {
    sum += numArray[i];
}
console.log(sum);
