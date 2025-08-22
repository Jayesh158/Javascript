// push , pop , shift , unshift , splice , slice , indexOf , includes , reverse , concat , join

const cities = ["Nashik" , "Mumbai" , "Pune" , "Chennai" , "Banglore" , "Jaipur "]

const states = ["Maharashtra" ,"Punjab" , "Gujrat" , "Kashmir" , "Haryana" , "Rajasthan"]

// cities.push("Mohali") // add element at last
//console.log(cities)
// cities.pop() // remove element from last

const index = states.indexOf("Gujrat") // get index of element
console.log(index);

states.unshift("Hyderabad") // add element at first
//console.log(states)
states.shift() // remove element from first 
//console.log(states)

// const removed = states.splice(2, 5)  // remove elements who dont come in this range
// console.log(removed);

const sliced = cities.slice(3, 5) // get elements in this range
console.log(cities);

console.log(cities.includes("Nashik")); // check if element is present
console.log(cities.includes("Delhi")); 

console.log(cities.reverse()); // reverse the array

const All = cities.concat(states); // combine two arrays
console.log(All);