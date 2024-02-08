//console.log(Date());

// const currDate = new Date();
// const calculateCurrentYear = (date) => {
//   const currYear = date.getFullYear();
//   return currYear;
// };
// console.log(calculateCurrentYear(currDate));

//const d = calculateCurrentYear(currDate);
//calculateCurrentYear();
const currDate = new Date();
const dateFormatter = (date) => {
  const currYear = date.getFullYear();
  const currMonth = date.getMonth();
  const currDay = date.getDate();
  const formattedDate = `${currYear}-${currMonth + 1}-${currDay}`;
  return formattedDate; //returning dynamic value
};
document.write(`current date is ${dateFormatter(currDate)}`);

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
//for each-it loops for each items, its also know as higher order array method
const data = array.forEach((item, i) => {
  return item;
});
console.log("data", data);

//map
const data2 = array.map((item, i) => {
  return item;
});
console.log("data2", data2);

//price more than 15000 using map
const data4 = array.map((item, i) => {
  console.log(item.price);
  if (item.price > 15000) {
    return item;
    // } else {
    //   return "They are cheap";
  }
});
console.log(data4);


//two items mapping
// const data6 = array.map((item, i) => {
//   return item.productName, item.address;
// });
// console.log(data6);
//filter
const data5 = array.filter((item, i) => {
  if (item.price >= 15000) {
    return item;
  }
});
console.log(data5);

//number greater than 30
const numbers = [10, 20, 30, 40, 50, 60, 15, 35, 33];
const filteredNums = numbers.filter((num) => {
  return num > 30;
});
console.log(filteredNums);

//currency having USD
const usdCurrency = array.filter((item) => {
  // if (item.currency == "USD") {
  //   return item;
  // }
  return item.currency === "USD";
});
console.log(usdCurrency);
