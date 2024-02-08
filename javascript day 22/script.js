// const clouds = [0, 0, 1, 0, 0, 1, 0];

// function jumpingClouds(c) {
//   let countToJump = 0;
//   for (let i = 0; i < c.length - 1; ) {
//     if (i + 2 < c.length && c(i + 2) == 0) {
//       i += 2;
//     } else {
//       i++;
//     }
//     countToJump++;
//   }
//   return countToJump;
// }
// console.log(jumpingClouds(clouds));

//find the sum of sales in North region
const data = [
  { product: "widget", sales: 100, region: "North" },
  { product: "widget", sales: 150, region: "south" },
  { product: "widget", sales: 120, region: "North" },
  { product: "widget", sales: 200, region: "south" },
];
let sum = 0;
data
  .filter((item) => {
    return item.region === "North";
  })
  .forEach((value) => {
    sum += value.sales;
  });
console.log(`${sum} is in north region.`);

//
const charcaterCount = "The quick clever brown fox jumps over a lazy dog";

let characterFrequency = {};

for (let char of charcaterCount) {
  if (characterFrequency[char]) {
    characterFrequency[char]++; //  ++ vaneko +=1
    console.log(characterFrequency);
  } else {
    characterFrequency[char] = 1;
    console.log(characterFrequency);
  }
}

//word count
const wordCount = "The quick clever brown fox jumps over a lazy dog";
const words = wordCount.split(" ");
console.log(words);
