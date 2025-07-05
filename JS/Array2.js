// array ki chahe jitni bhi depth ho ..arr.flat operator ure array ko spread out kr deta h

// const arr = [1,2,3,[4,5,6] , 7 , [6,7[4,5]]]

// const real = arr.flat(Infinity);
// console.log(real);

console.log(Array.isArray("Hitesh"));
console.log(Array.from("Hitesh")) //used to print the entire string in the form of array
console.log(Array.from({name:"Hitesh"})) //interesting for interviews

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1 , score2 , score3));
