"use strict";
// Day 1 13 August 2023   
// output Function i.e console.log(DISPLAYED ON SCREEM)     
console.log("Hello I am from Rawalpindi");
let first_name = "Hassaan";
console.log(first_name);
console.log("Mohammad " + first_name); // CONCATANATION
console.log(`Hello This is ${first_name}`); // ${VARIABLE}
console.log(typeof first_name); //"type of" is a function that return datatype of the variable
let y = 3;
if (y == 4) { // conditional operators
    console.log("x");
}
else {
    console.log("y");
}
let fruits = ["apple", "banana", "mango", "strawberry", "orange", "watermelon"]; // strings
console.log(fruits);
console.log(fruits[2]);
let animals = ["cats", "dog", "horse", "cow", "bat", "sheeps", "tiger"];
animals.pop(); // function use to remove the last value in string
console.log(animals);
animals.pop();
animals.pop();
animals.pop();
animals.pop();
console.log(animals);
animals.push("elephant"); // function use to add character from last 
console.log(animals);
animals.shift(); // function use to remove 1st character from string
console.log(animals);
animals.unshift("buffalo"); // will add character from start 
animals.splice(2, 0, "crocodile"); //function use to add a charachter syntax stringname.splic(the number you want to add from,no of character you want to remove,the character you want to add)
console.log(animals);
let x = animals.slice(0, 5); // function use to make a new string from the old string as name suggest it made a slice of the original string
console.log(animals);
console.log(x);
function gree() {
    console.log("Hello There ! Welcome to School");
}
gree();
gree();
gree();
function greet(firstname) {
    console.log(`Hello ${firstname} welcome to school`);
}
greet("Hassaan");
for (let x = 5; x < 10; x++) {
    console.log("ISLAMABAD");
}
