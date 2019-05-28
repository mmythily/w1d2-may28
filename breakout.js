var a = 3;

function doStuff(){
    console.log('1', a);
    a = 5; //if using 'alias' var a=5; this gives different result
    console.log('2', a);
}

console.log('3', a);
doStuff();
console.log('4', a);

// 3. 3
// 1. 3
// 2. 5
// 4. 5


var b = 3;

function doStuff(){
    console.log('1', b);
    var b = 5; //if using 'alias' var a=5; this gives different result
    console.log('2', b);
}

console.log('3', b);
doStuff();
console.log('4', b);