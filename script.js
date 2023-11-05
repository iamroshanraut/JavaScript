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
const allLetters = arr.concat(arr1);   // It will add both the arr & arr1 array together 
console.log(allLetters);



// Join Method

console.log(allLetters.join('-')); // It will join all the letter with - and extract from array