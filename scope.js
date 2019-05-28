var foo = "Global variable";
function globalFunc() {
    var bar = "Scoped variable";
    function scopedFunc() {
        console.log('foo is: ' + foo);
        console.log('bar is: ' + bar);
    };
    scopedFunc(); 
} 
globalFunc();
//scopedFunc();



var reassignable = 'I am in the global scope';
function reassigner() {
    reassignable = 'I am in the block scope'; 
}
console.log('global scope: ' + reassignable);
// &gt;&gt; “I am in the global scope”  
reassigner();
console.log('block scope: ' + reassignable);
// &gt;&gt; “I am in the block scope” 