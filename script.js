// Slice Method

let arr = ["a", "b", "c", "d", "e"];

console.log(arr.slice(2)); // it will all the all the values after index no. 2
console.log(arr.slice(1, 4)); // it will print value from index no 1 till index 3 (it will not print index no 4)
console.log(arr.slice(-3)); // It will Last Three value of this array.
console.log(arr.slice(1, -2)); // it will print index no from 1 till -2 index
console.log(arr.slice()); // it will print all the arr array as it is (or can say it is making a copy of array)
// Slice does not mutate Original Array

// Splice Method

arr = ["a", "b", "c", "d", "e"];

arr.splice(2); // It is taking out values from index no 2 till end.
console.log(arr); // also its mutating the original array.
arr.splice(-1);
console.log(arr);
// It's Mutating the Original Array

// Reverse Method
const arr1 = ["j", "i", "h", "g", "f"];

arr1.reverse(); // Here this reverse method will reverse all the values of this array.
console.log(arr1);

// Concat Method
arr = ["a", "b", "c", "d", "e"];
const allLetters = arr.concat(arr1); // It will add both the arr & arr1 array together
console.log(allLetters);

// Join Method

console.log(allLetters.join("-")); // It will join all the letter with - and extract from array

// New At Method

const arre = [12, 34, 56, 89, 10];

console.log(arre[0]); // A traditional Way to do it
console.log(arre.at(0)); // New morden way to do it

console.log(arre[arre.length - 1]); //  a way of finding last element of the array
console.log(arre.at(-1)); // A new method to do it.

console.log("Roshan".at(0)); // works with string also
console.log("Roshan".at(-1));

// For Each Method

let nums = [23, 45, 56, 67, 78, 12, 10];

nums.forEach(function (num) {
  // We can do with arrow function as well
  console.log(num); // forEach Prints your Value Sepretly
});

nums.forEach((num, ind, arr) => {
  // forEach can take three Arguments (1. will be Actual Value) (2. Will be index Number) (3. Will be complete Array)
  console.log(num, ind, arr); // here we are printing all three using arrow Function
});

// Another Example of forEach
let amount = [-150, 230, -400, 105, -700, 900, 650];

amount.forEach(function (amt) {
  if (amt > 0) {
    console.log(`Your Account is credited with ${amt}.`); // Small Task using forEach
  } else {
    console.log(`Your Account is Debited with ${amt}.`);
  }
});

// We can Arrange this also by using index only.
amount.forEach(function (amt, ind) {
  if (amt > 0) {
    console.log(
      `transaction ${ind + 1} : Your Account is credited with ${amt}.`
    );
  } else {
    console.log(
      `transaction ${ind + 1} : Your Account is Debited with ${amt}.`
    );
  }
});

// forEach with Maps and Set

// Example With Map

let employee = new Map([
  ["Name", "Roshan"],
  ["Age", 22],
  ["Gender", "Male"],
  ["Salary", 22000],
]);

employee.forEach(function (value, key, map) {
  console.log(`Value of ${key} is ${value}`);
});

// Example with Map 2

const currencies = new Map([
  ["USD", "United States Dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound Sterling"],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key} : ${value}`);
});

// Exmaple with Set

let roles = new Set(["Admin", "Readonly", "Readwrite"]);

roles.forEach(function (value, key, set) {
  console.log(`${value} ${key}`); // There is no key in set.
});

// **Map Method**

// Example 1

const movs = [200, 450, -400, 3000, -650, -130, 70, 1300];

const cRate = 1.1;

const movUSD = movs.map(function (mov) {
  return Math.round(mov * cRate);
});

// Example Using Arrow Function

const movUSD1 = movs.map((mov) => Math.round(mov * cRate));

console.log(movs);
console.log(movUSD);
console.log(movUSD1);

// It also has 3 parameter like forEach()

const movsOne = [200, 450, -400, 3000, -650, -130, 70, 1300];

const movScr = movsOne.map((mov, i) => {
  return `Movement ${i + 1} : Your Account is ${
    mov > 0 ? "Credited" : "Debited"
  } with ${Math.abs(mov)}   `;
});

console.log(movScr);


// The Filter Method

// Example 1
const movsTwo = [200, 450, -400, 3000, -650, -130, 70, 1300];

const deposits = movsTwo.filter(function(mov){    // this is filtering out all the value which is greator then 0.
  return mov > 0;
});

console.log(deposits);

// Example using for of

const deposits1 = [];
for(const mov of movs){
  if(mov>0){
    deposits1.push(mov);      // Doing same thing with for of loop
  }; 
};

console.log(deposits1);

// Example filtering out all the negitive value.

const withdraws = movsTwo.filter((mov)=>mov <= 0);

console.log(withdraws);