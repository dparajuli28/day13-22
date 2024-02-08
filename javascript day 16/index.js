//for loop->for of, for in;
//syntax
//for(startIndex; endIndex; increment/decrement){
//    block of code
//}

// for (let i = 1; i <= 50; i++) {
//   console.log("Hello World", i); //to print helloworld fifty times
// }

//To find prime number or not
// let num = Number(prompt("Enter your Number"));
// let isPrime = true; //give your condition is true initially
// for (let j = 2; j <= num / 2; j++) {
//   //(value starts from 2, where j is smaller than equal to half of given value, increment value by 1)
//   console.log(num + "%" + j + " = " + (num % j)); //(console and divide value by increment number)
//   if (num % j === 0) {
//     //if its remainder is 0 then it isPrime will be false and it will break
//     console.log("we are inside the loop");
//     isPrime = false;
//     break;
//   }
// }
// if (isPrime) {
//   //if its remainder is not zero it will be true again then value will be divided by every increment value(j)
//   console.log(num, "is prime"); //untill false it will be true and it will check untill increment less than value by 1. if not remainder 0 from any
// } else {
//   console.log(num, "is not prime"); //only it will print not prime from above condition
// }

//next method to find prime num or not
// let count = 0;              //first of all we have count zero
// //then we start to find divisable factor from 1 to entered number equal to itself.
// for (let j = 1; j <= num; j++) {
//   if (num % j === 0) {                      //checking the factors from 1 to given number
//     count++; // count= count + 1;         count will be added by 1 if it gets it factor.
//   }
// }
// //Finally, we check whether count is equal to 2. If it is, it means that num has exactly two factors (1 and itself),
// // which is the definition of a prime number.
// // If count is equal to 2, we print "is prime," indicating that the number is prime. Otherwise, we print "is not prime."
// if (count == 2) {
//   console.log(num, "prime");
// } else {
//   console.log(num, "not prime");
// }

// let num = Number(prompt("Enter your Number"));
// function checkPrime(num, message) {
//   let isPrime = true;
//   for (let j = 2; j < num / 2; j++) {
//     // console.log(num + "%" + j + "=" + (num % j));
//     if (num % j === 0) {
//       isPrime = false;
//       break;
//     }
//   }
//   if (isPrime) {
//     console.log(num + " is " + message + " and is prime");
//   } else {
//     console.log(num + " is " + message + " and is not prime");
//   }
// }

// function oddEven(num) {
//   if (num % 2 === 0) {
//     checkPrime(num, "even");
//   } else {
//     checkPrime(num, "odd");
//   }
// }

// for (let i = 5; i <= num - 5; i++) {
//   if (i % 5 === 0) {
//     oddEven(i);
//   }
// }

// const num = Number(prompt("Enter a number"));
// function checkPrimeNum(num, message) {
//   let count = 0;
//   for (let i = 1; i <= num; i++) {
//     if (num % i === 0) {
//       count++;
//     }
//   }
//   if (count == 2) {
//     console.log(" Your number " + num + " is prime and " + message + ".");
//   } else {
//     console.log(" Your number " + num + " is not prime and " + message + ".");
//   }
// }

// function oddEven(num) {
//   if (num % 2 == 0) {
//     checkPrimeNum(num, "even");
//   } else {
//     checkPrimeNum(num, "odd");
//   }
// }
// for (let i = 5; i <= num - 5; i++) {
//   if (i % 5 === 0) {
//     oddEven(i);
//   }
// }

// const str = "test abc dsadsa";            //  printing individual elements using for loop using length
// console.log(str.length);

// for (let i = 0; i < str.length; i++) {
//   console.log(str[i]);
// }

// console.log(str[0]);
// console.log(str[1]);
// console.log(str[2]);
// console.log(str[3]);
// console.log(str[4]);
// console.log(str[5]);
// console.log(str[6]);
// console.log(str[7]);

//palindrome  madam=madam, 1221, abba and not palidrome test===tset
// const str = "test abc dsadsa";
// console.log(str.length);
// let strBack = "";
// for (let i = str.length - 1; i >= 0; i--) {
//   strBack = strBack + str[i];     //concading
// }
// console.log(strBack);

const str = "deepak parajuli";
let strName = "";
console.log(str.length);
for (let i = str.length - 1; i >= 0; i--) {
  strName = strName + str[i];
}
console.log(strName);
if (strName == str) {
  console.log("It is palindrome");
} else {
  console.log("It is not palindrome");
}
