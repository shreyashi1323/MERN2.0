// Imediately invoked function expressions (IIFE)
//iife creates a private scope , allows the encapsulation of variables and functions. this means u can define "private " members within iife that are not directly accessible from outside,
// while selectively  exposing "public" members throough a returned  object.

// useful for creating one time initialisation , creating closures

// in easy language this can be understood as iife is used to : global scope ke pollution se problem hoti h kyi baar to usko global scope ke variation se bachne ya usko hatane ke liye hum iife ka use krte h

//this is named iifee
(function chai(){
    console.log(`DB CONNECTED`);
}) ();
// here semicolon is imp bcoz the function doesnt knows when to stop its execution

//wrap the function within parenthesis for , and then the other braces is for execution 

//this is without named iife
((name) =>{
    console.log(`DB Connected to ${name}`)
}) ('shreyy')







