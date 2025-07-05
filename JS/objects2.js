//const tinder = new Object(); // this is singleton type declaration

const tinderuser = {} ; //this is not sigleton type

tinderuser.id = "12345abs";
tinderuser.name = "Shreyy";
tinderuser.isLoggedIn= false;
// console.log(tinderuser);

const regular ={
    email :"sHReyy@gmail.com",
    fullname :{
        userfullname :{
            fisrt:"shreyashi",
            last:"singh"
        }
    }
}
console.log(regular.fullname.userfullname.first);

const users = [ 
{
    id : 1,
    email : "some@gmail.com",
},
{
    id : 2,
    email : "some2@gmail.com",
},
{
    id : 3,
    email : "some3@gmail.com",
}
]