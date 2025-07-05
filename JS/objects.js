//objects can be declared in 2 ways : singleton and literals
//singleton are always created using constructor

//object literals
const jsuser = {
    name : "hitesh",
    age : 45,
    //[mySym] : "mykey1",
    location : 'jaipur', 
    email : "jhingala@gmail.com"
}


//symbols
const mySym = Symbol("key1")

console.log(jsuser.email) //this is not always thew right way
console.log(jsuser["email"]) 
console.log(jsuser["name"])
//console.log(jsuser[mysym]);


jsuser.email = "yolo@gmail.com" // this is used to rewrite the value
Object.freeze(jsuser) // to stop the value of variable from chnaging
console.log(jsuser);

jsuser.greeting = function(){
    console.log("hello js user");
}

console.log(jsuser.greeting);


