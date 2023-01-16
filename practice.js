/*
= Object Destructuring
*/

obj1 = { 1: 1, 2: 2 };
obj2 = { 1: 3, 4: 4 };

({ 1: one, 2: two } = obj1);
var { 1: e, 2: two } = obj2;

obj3 = { ...obj2, ...obj1 };

console.log(obj3);

console.log(e);
//@ Take ways
//1.When we destructure two objects in a new object values the one that destructured at last will get priority
//As there will be no duplicate value in the new object.

/*
= Array Destructuring
*/
array1 = [2, 3, 4, 6];
array2 = [2, 4, 5];

array3 = [...array1, ...array2];
console.log("🚀 ~ file: practice.js ~ line 25 ~ array3.length", array3.length);

//@ Take ways
//1. When two arrays are destructured in a new array all the values of both array gets added from left to right order
