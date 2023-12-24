const arr = [1, 2, 3, 4, null, 6];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// forEach loop

arr.forEach((item, index) => {
  item % 2 === 0
    ? console.log(item, index, "even")
    : console.log(item, index, "odd");
});

// map loop

let arr2sum = arr
  .map((item, index) => {
    return item === null ? 0 : item;
  })
  .reduce((acc, item) => {
    return acc + item;
  }, 0);

console.log(arr2sum);
// filter loop in js

let filteredArray = arr.filter((item, index) => {
  return item !== null;
});

console.log(filteredArray);

const sutdentList = [
  {
    name: "nabin",
    class: 11,
    roll: 16,
  },
  {
    name: "nabin",
    class: 12,
    roll: 9,
  },
  {
    name: "ram",
    class: 12,
    roll: 5,
  },
  {
    name: "suraj",
    class: 11,
    roll: 8,
  },
  {
    name: "ghan shyam",
    class: 9,
    roll: 16,
  },
  {
    name: "raju",
    class: 1,
    roll: 1,
  },
];

console.log(
  sutdentList.reduce((acc, item) => {
    return acc + item?.class;
  }, 0),
  "SUM"
);

// filter use case

let class11 = sutdentList.filter((item) => {
  return item.class === 11;
});

// filter using forEach

// let class11 = [];
// sutdentList.forEach((item) => {
//   item?.class === 11 && class11.push(item);
// });
console.log(class11);

// find use case

let student = sutdentList.find((item) => {
  return item?.name === "nabin";
});

console.log(student);
