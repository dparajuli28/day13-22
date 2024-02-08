// const str = "madam";
// let reverseString = "";
// for (let i = str.length - 1; i >= 0; i--) {
//   reverseString += str[i]; //reverseString=reverseString+str[i]
// }
// if (str == reverseString) {
//   console.log(`${str} is palindrome`);
// } else {
//   console.log(`${str} is not palindrome`);
// }

const arr = ["Ram", "Sita", "Gita", "Rita", "Neeta", "Hari"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//first way to loop inside aray -for loop
const length = arr.length;
for (let i = 0; i < length; i++) {
  console.log(arr[i]);
}

//second way to loop inside array
//for(variable of array){}
for (let i of numbers) {
  console.log(i);
}

//array methods
//length
console.log(numbers);
//push-Add a new element to an array (end)
numbers.push(22);
numbers.push(44);

console.log(numbers);

//pop-Remove a new element to an array(end)
numbers.pop();
numbers.pop();
console.log(`popped ${numbers}`);

//unshift- add anew element to ann Array(beginning)
numbers.unshift("New data added");
console.log(numbers);

//shift-remove a new element to an array(beginning)
numbers.shift();
numbers.shift();
numbers.shift();
console.log(numbers);
console.log(numbers.length);

//concat array
//first method
const concatArray = arr.concat(numbers);
console.log(concatArray);

//second method
const concatArr2 = [...arr, ...numbers];
console.log(concatArr2);

//sort
const students = ["Samaya", "Samyam", "Aayush", "Ramhari", "Prasanna"];
console.log(students.sort());

// // from side of function: return
// function sum(a, b) {
//   return a + b;
// }

// const s = sum(2, 3);
// console.log(s); // if there is no return you will get undefined

// function concatString(str1, str2, str3) {
//   return str1 + str2 + str3;
// }
// console.log(typeof concatString("We are ", "Concatting", " new string."));

// function discount(percent, originalPrice) {
//   return originalPrice - (percent / 100) * originalPrice;
// }
// console.log(discount(71, 300));
// console.log(discount(65, 100));

const nums = [97, 45, 78, 34, 65, 39];
const sortedNumber = nums.sort(function (a, b) {
  return b - a; //a-b for increasing order and b-a for decreasing order
});
console.log(sortedNumber);
console.log(`${sortedNumber[0]} is our maximum number`);
console.log(`${sortedNumber[sortedNumber.length - 1]} is our minimum number`);

//reverse
const test = [1, 2, 3];
console.log(test.reverse());

//another method using for loop to reverse
const reverseArray = [];
for (let i = test.length - 1; i >= 0; i--) {
  reverseArray.push(test[i]);
}
console.log(reverseArray);
