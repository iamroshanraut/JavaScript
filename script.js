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

const deposits = movsTwo.filter(function (mov) {
  // this is filtering out all the value which is greator then 0.
  return mov > 0;
});

console.log(deposits);

// Example using for of

const deposits1 = [];
for (const mov of movs) {
  if (mov > 0) {
    deposits1.push(mov); // Doing same thing with for of loop
  }
}

console.log(deposits1);

// Example filtering out all the negitive value.

const withdraws = movsTwo.filter((mov) => mov <= 0);

console.log(withdraws);

// Reduce Method

// Example

const movsThree = [200, 450, -400, 3000, -650, -130, 70, 1300];

const balance = movsThree.reduce((acc, cur, i) => {
  // In Reduce method there first parameter is accumulator.
  console.log(`Accumulator ${i} is ${acc}`); // Printing & checking it
  return acc + cur; // returning it
}, 0); // Here the zero is initial value
console.log(balance);

// Example using For of Loop
const movsfour = [200, 450, -400, 3000, -650, -130, 70, 1300];
let balance1 = 0;
for (const mov of movsfour) balance1 += mov;
console.log(balance1);

// Finding Maximum Value using Reduce() Method

const max = movsfour.reduce((acc, cur) => {
  if (acc > cur) return acc;
  else return cur;
}, movsfour[0]);

console.log(max);

// More Example of Map() Method

const arrr = [5, 1, 3, 2, 6];

const double = arrr.map((val) => val * 2);
console.log(double);

const triple = arrr.map((val) => val * 3);
console.log(triple);

const binary = arrr.map((val) => val.toString(2));
console.log(binary);

// More Example of Filter() Method

const arrr1 = [5, 1, 3, 2, 6];

const isodd = arrr.filter((val) => val % 2 === 0);
console.log(isodd);

// More Example of Reduce() Method
//(SUM OR MAX)

const arrr2 = [5, 1, 3, 2, 6];

// using for loop
function findSum(arr) {
  let total = 0;
  for (const val of arr) {
    total += val;
  }
  return total;
}
console.log(findSum(arrr2));

// Same using reduce() Method.
const arrr3 = [5, 1, 3, 2, 6];

let totalSum = 0;
const sumTotal = arrr3.reduce((Acc, cur) => Acc + cur); // Accumulator
console.log(sumTotal);

// Finding Max Value using Reduce()
const arrr4 = [5, 1, 3, 2, 6];

let Max1 = arrr4.reduce((acc, val) => {
  if (acc > val) return acc;
  else return val;
}, 0); // Initial Value of acc is 0

console.log(Max1);

// Example
const user = [
  { firstName: "Roshan", lastName: "Raut", age: 22 },
  { firstName: "Vikas", lastName: "Singh", age: 23 },
  { firstName: "Raman", lastName: "Kumar", age: 23 },
  { firstName: "Risabh", lastName: "Negi", age: 23 },
];

const fullNameArr = user.map((x) => x.firstName + " " + x.lastName);
console.log(fullNameArr);

// Example
const user1 = [
  { firstName: "Roshan", lastName: "Raut", age: 22 },
  { firstName: "Vikas", lastName: "Singh", age: 23 },
  { firstName: "Raman", lastName: "Kumar", age: 23 },
  { firstName: "Risabh", lastName: "Negi", age: 23 },
];

const output1 = user1.reduce((acc, cur) => {
  if (acc[cur.age]) {
    acc[cur.age] = ++acc[cur.age];
  } else {
    acc[cur.age] = 1;
  }
  return acc;
}, {});

console.log(output1);

// Example

const user2 = [
  { firstName: "Roshan", lastName: "Raut", age: 22 },
  { firstName: "Vikas", lastName: "Singh", age: 23 },
  { firstName: "Raman", lastName: "Kumar", age: 23 },
  { firstName: "Risabh", lastName: "Negi", age: 23 },
];

const check = user2.filter((cur) => cur.age < 30).map((x) => x.firstName);

console.log(check);

// Chaining with methods.

const eurtousd = 1.1;
const transc = [200, 100, -350, 400, 2000, -500];

const totalDepositeUSD = transc
  .filter((mov) => mov > 0)
  .map((mov) => mov * eurtousd)
  .reduce((acc, ind) => acc + ind, 0);

  console.log(totalDepositeUSD);


  // Find Method()
 
  // Example 1
  const transc1 = [200, 100, -350, 400, 2000, -500];
  // It will only return first one element which match to the condition.
  const firstWithdrawal = transc1.find(mov => mov < 0);
  console.log(firstWithdrawal);

  // Example 2

  const user3 = [
    { firstName: "Roshan", lastName: "Raut", age: 22 },
    { firstName: "Vikas", lastName: "Singh", age: 23 },
    { firstName: "Raman", lastName: "Kumar", age: 23 },
    { firstName: "Risabh", lastName: "Negi", age: 23 },
  ];

  const account = user3.find(acc => acc.firstName === "Roshan");
  console.log(account);


  // Some & Every Method

  const movements10 = [200, 100, -350, 400, -130, -700,  2000, -500];
  const checkmovs = movements10.some(mov => mov > 1000);
  console.log(checkmovs);

  console.log(movements10.some(mov => mov ===  -150));

 console.log(movements10.every(mov => mov >= -1000));

 //separate callback
const vrvr1 = [200, 100, -350, 400, -130, -700,  2000, -500];
const deposit = mov => mov > 0;
console.log(vrvr1.some(deposit));
console.log(vrvr1.every(deposit));
console.log(vrvr1.filter(deposit));