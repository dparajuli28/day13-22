//find
//new set
const arr = [
  {
    name: "Ram",
  },
  {
    name: "Ram",
  },
  {
    name: "Sita",
  },
  {
    name: "Hari",
  },
];
//find method
const data1 = arr.find((val) => {
  return val.name === "Ram";
});
console.log(data1);

// const arr1 = ["Ram", "Ram", "Sita", "Hari"];

const newArr = arr.map((val) => {
  return val.name;
});
console.log(new Set(newArr)); //converting array into set

//destructuring , spread operator
// const { name, age } = {
//   name: "Ram",
//   age: 22,
// };
// const { name1, age1 } = {
//   name1: "Shyam",
//   age1: "23",
// };

// console.log(name, age, name1, age1);

//...rest operator
const { name, age, ...data } = {
  name: "Hari",
  age: 30,
  isActive: true,
  address: "Jhapa",
  contact: 9845545451,
};

console.log(data);

const [b] = [{ name: "abc" }, { name: "test1" }];
console.log(b);
//Rest operator
const [c, d, ...e] = [1, 23, 4, 56, 6];

console.log(c);
console.log(e);
console.log(d);

//spread operator
const variable = {
  name: "Hari",
  age: 30,
  isActive: true,
  address: "Jhapa",
  contact: 9845545451,
};
const variable1 = {
  name1: "Hari",
  age1: 30,
  isActive1: true,
  address1: "Jhapa",
  contact1: 9845545451,
};
// console.log(variable);
let variable3 = {
  a: variable,
  b: variable1,
};
let variable2 = {
  ...variable,
  ...variable1,
};
console.log(variable2);
console.log(variable3);

const sum = [1, 2, 3, 4, 5];
console.log(...sum); //it is spreading the data  //you can make array using array brace inside it ([...sum])

const dupArr = [
  {
    id: 1,
    name: "Ram",
  },
  {
    id: 1,
    name: "Ram",
  },
  {
    id: 2,
    name: "Gita",
  },
  {
    id: 3,
    name: "Rita",
  },
  {
    id: 4,
    name: "Jita",
  },
];

//method 1
// const newArr1 = dupArr.map((val) => {
//   //using map method to return name of object
//   return val.name;
// });
// const uniqueDatas = [...new Set(newArr1)]; // finding unique values of newArr using new set,spreading and converting to array using array brace
// const newDatas = uniqueDatas.map((val) => {
//   //aagain using map method
//   return dupArr.find((item) => {
//     //finding item of dupArr and returning compared result with values of unique datas
//     return item.name === val;
//   });
// });
// console.log(newDatas);
// console.log(uniqueDatas);
// console.log(newArr1);

//method 2
const unq = dupArr
  .map((item) => item.id)
  .filter((value, index, self) => {
    return self.indexOf(value) === index;
  });
console.log(unq);

//method 3
const unique = [];
const distinct = [];
for (let i = 0; (i = arr.length); i++) {
  console.log(distinct);
  distinct.push(arr[i].name); //uncomplete
}
