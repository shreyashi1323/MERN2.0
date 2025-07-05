/* the 3 ways of declaring variables are let , var and const but there is a prob with var bcoz it is not block scoped and ambuiguity arises */

if(true){
    let a = 10
    const b = 20 
    var c = 30
    console.log("Inner: " , a)
}

//whereever variable is declared using var it is accessible outside the block also ..whereas let and const are not therefpre we have to handle it with care
// pr always keep in mind ki jo bhi variable ya kuch bhi declare kro vo scope ke bahar ni jaani chahiye

//console.log(b);



//nested function me child functions ca acess parent function things

/*function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username)
    }
    console.log(website)

    two()
}
one()*/


//++++++++++++++++ Interesting +++++++++++++++++

//here we decalred function in 2 ways : the first one is normal way but in the sec one we have saved it to a const variable 
//the diff is the other one can only be called after the declaration of the function this is called function hoisting
// Function hoisting in JavaScript is a mechanism where function declarations are moved to the top of their containing scope during the compilation phase, before the code is executed. This allows you to call a function before its actual declaration in the source code. 

function addone(num){
    return num+1
}

addone(5)

const  addTwo = function(num){
    return num+2
}
console.log(addTwo(5))

