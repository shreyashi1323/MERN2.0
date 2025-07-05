//declaring a function

function sayMyName(){
    console.log("s");
    console.log("h");
    console.log("r");
    console.log("e");
    console.log("y");
    console.log("y");
}

sayMyName(); //function execute krne ke liye parenthesis bhut jruri h..kyuki this tells that execute the function ...without it ,, it wont give any error but it wont print anything

function addTwoNumver(num1 , num2){
    console.log(num1+num2);
}

addTwoNumver(2, 7);

function loginUserMessage(username){
    if(username === undefined || !username) {
        console.log("pls enter a username");
        return ;
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("shreyy"))//agr aap function m values pass na kro toh ... undefined return kr deta hai


function calculate(...num1){ //becox of this spread operator whatever value are being passed to the function then all of them are included , without spread operator it would only take the first input as its parameter

    return num1;
}

console.log(calculate(200 , 300 , 400));

// consider one more new scenario now
function calculateprice(val1 , val2 , ...num1){
    return num1;
}
console.log(calculateprice(200 , 400 , 500 , 2000)) // isme val1 or val2 me first or sec value chle jayenge then baaki ka sb bacha kucha will be treated as array
