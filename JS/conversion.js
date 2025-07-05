let score = 33;
console.log(typeof score);

let valueInNumber = Number(score)
console.log(typeof valueInNumber);

// + keyword se bhi conversion hota hai,, -ve to +ve
console.log(+true);  //0
console.log(+""); //1

 let a = null + 5 // out -> 5
 console.log(a); 

 //for addition - String + Any data type => js will convert both to string
 // int + any data type other than string => js will convert both to string

 let b = undefined +"5" ;  //output -> undefined5
 let c = undefined +5; //output -> NaN -> which means not a number..type conversion cannot be made
 let d = NaN + "3" ; //OUT -> NaN3 -> bcoz if one value is also string pura hi string bna dega

 let e = 43 + true + "4"+null+ 12; //output ->444null12

/* for substraction , multiplication , division
   convert both the types to string
*/

let f = 5 - undefined; // out -> NAn
let g = 5 - "5"; // 0 
let h = 5 - "hello" ; // NaN
let i = 5 - ""; // 5 -> empty h usko int m krege to 0 hi aaega
let j = 55 + true - null - "44" + 12 - "1.77";
var k ; // output -> undefined
var t = 12335272635452627263535; //this is bigint but console will treat it as number only