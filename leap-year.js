function isLeapYear(year) {
    return isMultiple(year, 400) || !isMultiple(year, 100) && isMultiple(year, 4);
}

function isMultiple(numerator, denominator) {
    return numerator % denominator === 0;


console.log(isLeapYear(2016))//true
console.log(isLeapYear(1997))//fals3
console.log(isLeapYear(2012))//true
console.log(isLeapYear(2000))//true
console.log(isLeapYear(1900))//false

/*
1. Divide the year you want to check by 4. 
If it is not evenly divisible (it has a remainder), it's is not a leap year. 
If it is evenly divisible (it has no remainder) continue to step 2.

2. Divide the year by 100. If the year is evenly divisible by 4 but is not evenly divisible by 100, 
it is a leap year. If it is evenly divisible by both 4 and 100, continue to step 3.

3. Divide the year by 400. If the year is evenly divisible by 100, but is not evenly divisible by 400,
it is not a leap year. If it is evenly divisible by both 100 and 400, it is a leap year.
*/