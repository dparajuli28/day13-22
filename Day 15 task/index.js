//get a number from prompt and check if its (odd+prime)or(even+prime)

let number = Number(prompt("Enter your number here"));
let num1;
if (number % 2 === 0) {
  num1 = "even";
} else {
  num1 = "odd";
}
let isNum2 = true;
if (number === 1) {
  document.write("It is " + num1 + " but neither prime nor composite number ");
  // } else if (num1 < 1) {
  //   document.write("It is not a prime number");
} else if (number > 1) {
  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      isNum2 = false;
      break;
    }
  }
  if (isNum2) {
    document.write(
      "The number " + number + " is " + num1 + " and is prime number."
    );
  } else {
    document.write(
      "The number " + number + " is " + num1 + " and is not a prime number."
    );
  }
}
