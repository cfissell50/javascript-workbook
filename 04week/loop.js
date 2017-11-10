'use strict';

// Create a new file called loops.js in the /04week folder of your workbook.
// Complete each of the following exercises.
// for loop

// Use a for loop to console.log each item in the array carsInReverse.
const carsInReverse = ['Ford', 'Chevy', 'Tesla', 'Nissan', 'Toyota'];
for (i = 0; i < carsInReverse.length; i++) {
  console.log(carsInReverse[i]);
}

// Create an object (an array with keys and values) called persons with the following data:
// firstName: "Jane"
// lastName: "Doe"
// birthDate: "Jan 5, 1925"
// gender: "female"
const persons = {
  firstName: "Jane",
  lastName: "Doe",
  birthDate: "Jan 5, 1925",
  gender: "female"
};

// Use a for...in loop to console.log each key.
for (const keys in persons) {
  console.log(Object.keys(persons));
}

// Then use a for...in loop and if state to console.log the value associated with the key birthDate.
for (const keys in persons) {
  if (keys === 'birthDate') {
    console.log(persons[keys]);
  }
}

// Use a while loop to console log numbers 1 to 1000
let num = 1;
while(num <= 1000) {
  console.log(num);
  num++;
}

// Use a do...while loop to console.log the numbers from 1 to 1000.
do {
  console.log(num);
  num++;
}
while(num <= 1000);

// When is a for loop better than a while loop?
  // A forLoop is better when you know the amount of loops you need to do. When you know the cap.

// How is the readability of the code affected?
  // A while loop can break easier because of the open ended autonomy. The for loop has a set limit which can be easier to control.

// What is the difference between a for loop and a for...in loop?
  // for in loops are used mostly for objects

// What is the difference between a while loop and a do...while loop?
  // A while loop goes until something is the argument is false and a do while goes while the condition is true.
