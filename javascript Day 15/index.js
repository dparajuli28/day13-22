//conditional statement-with comparision operator
//if  else condition

// let age = 17;
// if (age >= 18) {
//   alert("Eligible to drink for age " + age);
// } else {
//   alert("not elegible to drink for age " + age);
// }

// let email = prompt("Enter your email");
// let password = prompt("Enter your password");

// if (!email && !password) {
//   console.log("Please enter your email and password to continue");
// } else {
//   console.log("You can login");
// }

// if (!email) {
//   console.log("Please enter email to continue");
// } else if (!password) {
//   console.log("Please enter password to continue");
// } else {
//   console.log("Email and password are valid");
// }

// let marks = prompt("Enter your marks");
// let num = Number(marks);
// let message;
// if (num % 2 === 0) {
//   message = "even";
// } else {
//   message = "odd";
// }
// if (num <= 100 && num >= 80) {
//   console.log(
//     "Your marks " + num + " is " + message + " and it is distinction"
//   );
// } else if (num < 80 && num >= 70) {
//   console.log(
//     "Your marks " + num + " is " + message + " and it is first Division"
//   );
// } else if (num < 70 && num >= 65) {
//   console.log(
//     "Your marks " + num + " is " + message + " and it is second Division"
//   );
// } else if (num < 65 && num >= 40) {
//   console.log(
//     "Your marks " + num + " is " + message + " and it is third Division"
//   );
// } else if ((num < 40) & (num >= 0)) {
//   console.log("Your marks " + num + " is " + message + " and it is fail");
// } else {
//   console.log("NOt valid marks");
// }

//functions ->block of code which solve specific problem

//camel case
// let firstName;
// let lastNameTest;
//pascal case
// firstName;
// lastNameTest;

// let email, password, gender, postalCode;

//function functionName(){
//syntax;
//}
//function call

//functionName()

// function sum() {
//   let x = 10;
//   let y = 20;
//   let z = 30;
//   console.log(x + y + z);
// }
// sum();
// sum();
// sum();

// function data(a, b) {
//   console.log(a + b);
// }
// data("abc", "def");

// function data(a, b, c) {
//   console.log(a + b + c);
// }
// data(1, 2, 3);
// data("ram", "shyam", "hari");
// data(1, "ram", 2);

//task-2
//sum of natural numbers using prompt value
const str = prompt("Enter a number"); //creating a prompt to assign a value
const num = Number(str); //converting string into number
//naming and creating a function
function sumOfSeries(a) {
  const sum = (a * (a + 1)) / 2; //creating a syntax to calculate sum of natural numbers
  document.write(sum); //printing the result
}
//sumOfSeries(num); //calling a function to pass the value

function documentWrite(a) {
  console.log("I am calling from different function");
  document.write(a);
}
sumOfSeries(num);
