const user ={ 
    username : "shreyy",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username} , welcome to website`);

    }
}

// Q - what will be the output of this only?
// this keyword only refers current instance of an object and cannot be explicitly used by functions

/*function chai(){
    let username = "shreyy"
    console.log(this.username); // output is undefined bcoz this keyword only refers to objects not functions .. no matter how u declare fuction : by using arrow function , normallly or by a variable



}

chai(); */

//explicit way
const addTwo = (num1 , num2) =>{
    return num1 + num2
} 
console.log(addTwo(3,4))

//implicit way
const add = (num1 , num2) => num1+num2