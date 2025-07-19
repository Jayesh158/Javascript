const id = 15  // const keyword uses to declare a constant variable The value of a constant variable cannot be changed
console.log(id);  // console.log() is used to print the value of a variable or expression in the console
//id = 20;  This line will throw an error because 'id' is a constant and cannot be reassigned

let name = "Sonu" // let keyword is used to declare a variable that can be reassigned
var age = 20 // var keyword is used to declare a variable that can be reassigned, but it has function scope hence we used let instead of var

name = "Ganu" // reassigning the value of 'name' variable
console.log(name)
console.log(age)

City = "Mumbai"
console.log(City)   /* 'It is the worst way to declare a variable in javascript, as it creates a global variable
                     without using var, let, or const. This can lead to unexpected behavior and bugs in the code.*/ 
