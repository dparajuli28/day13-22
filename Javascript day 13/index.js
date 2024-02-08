console.log("I'm here");

//syntax, Declaring variables, Datatypes

//var, let, const
let newtest;

const cd = 1;
//8 Data Types
//1. Number 1,2,3,4,5
let num = 2;
const secNum = 2;
console.log(num, typeof num);
console.log(secNum, typeof secNum);

//2. string
let str = "Hi my name's test; bsahbqjbdkjqbdj";
const str1 = "2";

console.log(str1, typeof str1);
console.log(str, typeof str);

//3. Boolean
let bool1 = true;
let bool2 = false;

console.log(bool1, typeof bool1);
console.log(bool2, typeof bool2);

//4. undefined
let notDef;
console.log(typeof notDef);

//5.null
let abc = null;
console.log(typeof abc);

//6.BigInt

//7.Symbol

//8.Object
//key: value pair
let student1 = {
  name: "prashant",
  age: 28,
  rollNo: 30,
  isPresent: false,
};
console.log(student1, typeof student1);
console.log(student1.name, typeof student1.name);
console.log(student1.isPresent, typeof student1.isPresent);

//Array
let newar = [1, 2, 3, 4, 5];
let students = ["Ram", "Shyam", "Hari", "Gita"];
console.log(students, typeof students);
let data = [1, "str", true, false, -99];

let newarObj = [
  student1,
  {
    test: "124",
  },
  true,
  false,
  { data: 123 },
];
console.log(typeof newarObj);

//operators
//1.Arithmetic operators
let num1 = 10;
let num2 = 20;

const sum = num1 + num2; //add
console.log("sum", sum);

const sub = num1 - num2; //subtract
console.log("sub", sub);

const mul = num1 * num2; //multiply
console.log("mul", mul);

const div = num1 / num2; //divide
console.log("div", div);

const rem = num2 % num1; //remainder
console.log("rem", rem);

const exponential = 2 ** 5; //power
console.log("exponential", exponential);

num1++; //increment value by 1
console.log(num1);

num2--; //decrement value by 1
console.log(num2);

//Assignment operator
let y = 10;
let z = 30;

z += 30; //z=z+30
console.log("z", z);

z -= 10; //z=z-10
console.log("z", z);
