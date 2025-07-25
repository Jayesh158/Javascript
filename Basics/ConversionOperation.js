let age = "25" 
console.log(typeof age);
let convertedAge = Number(age); // Convert string to number
console.log(typeof convertedAge); 

let name = 123
console.log(typeof name)
let convertName = String(name) // Convert number to string
console.log(typeof convertName)

let isStudent = 1
let convertedIsStudent = Boolean(isStudent) // Convert number to boolean
console.log(typeof convertedIsStudent); 

/*
"123abc" => it shows NaN after converting in number
"123" => it shows 123 after converting in number
"null" => it shows 0 after converting in number
"true" => it shows 1 after converting in number 
"undefined" => it shows NaN after converting in number
*/