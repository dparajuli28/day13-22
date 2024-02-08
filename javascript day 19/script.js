const array = [
  {
    id: 1,
    productName: "Phone",
    description: "loremloremlorem",
    price: 1000,
    currency: "USD",
    address: {
      city: "Washington",
      postalCode: 2000,
    },
    discountPercent: 20,
    rating: 3,
  },
  {
    id: 2,
    productName: "Phone2",
    description: "loremloremlorem",
    price: 10000,
    currency: "MXN",
    address: {
      city: "Mexico",
      postalCode: 3000,
    },
    discountPercent: 30,
    rating: 4,
  },
  {
    id: 3,
    productName: "Phone3",
    description: "loremloremlorem",
    price: 15000,
    currency: "NPR",
    address: {
      city: "Kathmandu",
      postalCode: 44600,
    },
    discountPercent: 70,
    rating: 1,
  },
  {
    id: 4,
    productName: "Phone4",
    description: "loremloremlorem",
    price: 100000,
    currency: "MXN",
    address: {
      city: "Mexico",
      postalCode: 1000,
    },
    discountPercent: 20,
    rating: 2,
  },
  {
    id: 5,
    productName: "Phone5",
    description: "loremloremlorem",
    price: 50000,
    currency: "NPR",
    address: {
      city: "Pokhara",
      postalCode: 10000,
    },
    discountPercent: 245,
    rating: 4,
  },
  {
    id: 6,
    productName: "Phone6",
    description: "loremloremlorem",
    price: 100000,
    currency: "USD",
    address: {
      city: "Washington",
      postalCode: 1000,
    },
    discountPercent: 65,
    rating: 4.6,
  },
];

// const data = array.filter((val, i) => {
//   return i % 2 === 0;
// });
// console.log(data);

//Delete->backend api call-> database delete-filter method

const deleteProduct = (id) => {
  const filteredProducts = array.filter((val) => {
    return val.id !== id;
  });
  console.log("filteredProducts", filteredProducts);
};
deleteProduct(2);

//syncronous-upper line of code should be run for running of next code-
// console.log("1");
// for (let i = 0; i < 10000; i++) {
//   console.log("ok");
// }
// console.log("3");
// console.log("4");

//asyncronous- it can hold and run at the end also after the next code of line -start initially and finish it later
//console.log("1");
// setTimeout(() => {
//   console.log("2");
// }, 5000);
// console.log("3");
// console.log("4");

//call back functions

//single callback

// const addition = (a, b, callback) => {
//   setTimeout(() => {
//     callback(a + b);
//   }, 2000);
// };
// const logger = (value) => {
//   console.log(`Added value is following:`, value);
// };
// addition(1, 2, logger);

//callback inside callback

//const multification = (a, b, callback) => {
//   setTimeout(() => {
//     callback(a * b, nextCallback);
//   }, 3000);
// };
// const logger1 = (value, callback) => {
//   console.log(`Added value is following:`, value);
//   callback();
// };
// const nextCallback = () => {
//   console.log("running callback");
// };
// multification(1, 2, logger1);

//promises
let error = false;
const returnProducts = () => {
  return new Promise((resolve, reject) => {
    if (!error) {
      resolve(array);
    } else {
      reject("Failed to fetch data from backend");
    }
  });
};
//console.log(returnProducts());
returnProducts()
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.log("error comming here", err);
  });

//fetch-promises

fetch("https://dummyjson.com/products")
  .then((val) => {
    return val.json();
  })
  .then((val) => {
    console.log(typeof val);
    console.log(val.products);
    console.log(val.limit);
  });
