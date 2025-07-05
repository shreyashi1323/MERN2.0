const arr = [0,1,,2,3,4,5]
const myarr = new Array(1,2,23,4,5)

arr.push(9);
arr.push(10);
arr.pop();
console.log(arr);
console.log(arr[0]);

console.log(arr.includes(9)) // gives true or false

const newArr = myarr.join();


//slice , splice
console.log("A ", myarr);
const myn1 = myarr.slice(1,3); // deoesnt inlcudees the last element of the array

const myn2 = myarr.splice(1,3); // includes the last element of the array


//Non-destructive (does NOT modify original array)
// Purpose: Returns a shallow copy of a portion of an array.

// splice() – Destructive (modifies the original array)
// Purpose: Changes the contents of an array by removing or replacing elements.


// Js in array copy operation creates shallow copies rather tha DEEP COPIES
// SHALLOW COPIES :- shallow copy of an object is a copy whose
// properties share the same references as those of the source object from which the copy was made.
//  as a result , when u change either the source or the copy , you may also cause the other object to change too. 


/*DEEP COPY
 deep copy of an object is a copy whose properties do not share the same reference as those of the source obj from which the copy was made.*/

/* SPREAD OPERATOR*/
 const marvels = ['spiderman' , 'batman ' , 'thoe'];
 const models = ['gigi' , 'kylie' , 'kandel'];
 const combine = marvels.concat(models);
 console.log(combine);

 const combo = [...marvels , ...models , ...myarr];
 console.log(combo);

 