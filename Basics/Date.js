let myDate = new Date();

console.log(myDate);    
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.getDate()); 
console.log(myDate.getDay());
console.log(myDate.getFullYear());
console.log(myDate.getHours());
console.log(myDate.getMinutes());
console.log(myDate.getSeconds()); 


let myBirthDate = new Date(2004 , 1 , 15 )
console.log(`I was born on ${ myBirthDate.toDateString() }`);

