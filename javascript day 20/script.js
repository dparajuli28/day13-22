// //call back
// const addition = (a, b) => {
//   setTimeout(() => {
//     return a + b;
//   }, 1000);
// };
// const logger = (value) => {
//   console.log(`Added value is following:`, value);
// };
// const data = addition(2, 3, logger);

//map filter foreach -> Higher order array methods
const num = [10, 30, 50, 40];
const a = num.forEach((val) => {
  if (val % 2 === 0) {
    console.log("even");
  }
  return "abc"; //for each method doesnot return value it is only for making loop. so you dont use return
});
console.log(a);

//map
const num1 = [33, 45, 66, 77, 89, 5, 4];
const b = num1.map((val) => {
  if (val % 2 === 0) {
    return `value is even: ${val}`;
  }
});
console.log(b);

const backendResp = [
  { firstName: "deepa", LastName: "sharma" },
  { firstName: "ram", LastName: "thapa" },
  { firstName: "deepak", LastName: "sharmaa" },
  { firstName: "ramram", LastName: "thapaa" },
];

const newData = backendResp.map((val) => {
  //map is used to customize backend data
  return { fullName: `${val.firstName} ${val.LastName}` };
});
console.log(newData);

//filter- it will only return the object from array filtering if its true
const filteredData = backendResp.filter((val, index) => {
  return index % 2 === 0;
});
console.log(filteredData);
const filteredData2 = filteredData.map((val) => {
  //map is using inside filter loop
  return { fullName: `${val.firstName} ${val.LastName}` };
});
console.log(filteredData2);

//push-use map method to make easier than push
const KhaliArr = [];
backendResp.filter((val) => {
  KhaliArr.push({ fullName: `${val.firstName} ${val.LastName}` });
});
console.log("KhaliArr", KhaliArr);

//call back
const addition = (a, b, cb) => {
  setTimeout(() => {
    cb(a + b);
  }, 5000);
};
const logger = (value) => {
  console.log(`Added value is :`, value);
};
addition(2, 3, logger);

//HTTP methods: GET POST PUT/PATCH DELETE
fetch("https://dummyjson.com/products", {
  method: "GET",
})
  .then((val) => {
    return val.json();
  })
  .then((val) => {
    const filteredProducts = val.products.filter((item) => {
      return item.category === "smartphones";
    });
    console.log(filteredProducts);
  });
