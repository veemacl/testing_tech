/* Q1 Write an arrow function expression called greet(). 
* It should accept a single argument representing a person's name. 
* It should return a greeting string as shown below: */
greet("Luna"); //"Hey Luna!"
// Solution:
let greet = name => console.log(`Hey ${name}!`);

// Q2 Convert the function isEven() into an equivalent arrow function.
function isEven(num){
    return num%2 === 0;
  }
// Solution:
let isEven = num => num%2 === 0;

// Q3 Convert the following JavaScript function declaration to arrow function syntax:
  function counterFunc(counter) {
    if (counter > 100) {
      counter = 0;
    } else {
      counter++;
    }
    
    return counter;
  }
// Solution:
let counterFunc = counter => {
    if (counter > 100) {
        counter = 0;
      } else {
        counter++;
      }
      return counter;
    }

// Q4 Write an arrow function for the following JavaScript function:
function nameAge(name, age) {
    console.log("Hello " + name);
    console.log("You are " + age + " years old");
  }
// Solution:
let nameAge = (name, age) => {
    console.log("Hello " + name);
    console.log("You are " + age + " years old");
    }

// Q5 Write the arrow function for the following:
function printOnly(){
    console.log("printing");
  }
// Solution:
let printOnly = () => console.log("printing");

// Q6 Write the arrow function for the following:
function sum(num1, num2){
    return num1 + num2
}
// Solution:
let sum = (num1, num2) => {
  return num1 + num2
};