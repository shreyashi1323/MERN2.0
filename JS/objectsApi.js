const course ={
    coursename : "js in hindi", 
    price :999,
    courseInstructor : " hitesh"
}

// using .operator for accessing values could be more hilarious ,, therefore we can do it this way

const {courseInstructor:instructor} =  course
console.log(courseInstructor); //in both of these u will get the same output bcoz there we just deconstructed it 
console.log(instructor)

//u get apis from backend in two forms :  1) in object form 2) in array form

