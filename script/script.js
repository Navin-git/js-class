var age = 24;
let name = "nabin";
const list = [
  "sabin",
  "rabin",
  8,
  [
    "san",
    "dsaa",
    {
      name: "dsaa",
      place: "dsaca",
    },
  ],
];
// additional data type
let a = null;
let b = undefined;
let c = false;
const detail = {
  name: "jubin",
  class: 11,
  sec: "C",
  phone: "98328238487",
  id: 21,
};

name = "nabin kharel";
list[1] = "rabin kharel";
detail.class = 12;

console.log(
  age,
  name,
  list[1],
  detail["phone"],
  detail.class,
  list[3][2]["place"]
);

const stdList = [
  {
    name: "nabin",
    id: "J2_500",
    class: "11",
    age: "11",
    teachers: [
      {
        name: "dsadsa",
        id: "d3",
      },
      {
        name: "dsadsafdsa",
        id: "d4",
      },
    ],
  },
  {
    name: "nadsfdsfbin",
    id: "Jsdf2_500",
    class: "11",
    age: "11",
    teachers: [
      {
        name: "dsadsa",
        id: "d3",
      },
      {
        name: "dsadsafdsa",
        id: "d4",
      },
    ],
  },
  {
    name: "nadsfbin",
    id: "J2sd_500",
    class: "11",
    age: "11",
    teachers: [
      {
        name: "dsadsa",
        id: "d3",
      },
      {
        name: "dsadsafdsa",
        id: "d4",
      },
    ],
  },
];

let fname = null;
let username = "";
// let nub = 1;
// let sub = "1";

// console.log(nub + sub);

// if else use case

// if (username) {
//   alert(`Welcome ${username}`);
// } else if (fname) {
//   alert(`welcome user ${fname}`);
// } else {
//   alert(`welcome user`);
// }

// username
//   ? alert(`Welcome ${username}`)
//   : fname
//   ? alert(`Welcome ${fname}`)
//   : alert(`welcome user`);

// value which return false

console.log(
  Boolean(0),
  "0",
  Boolean(""),
  "empty string",
  Boolean(null),
  "null",
  Boolean(undefined),
  "undefined",
  Boolean(NaN),
  "NaN",
  Boolean(false),
  "false"
);

let s = 6;

if (s % 2 == 0) {
  console.log("even");
} else {
  console.log("odd");
}

// === check type and value while == check value only

// let sad = "111";
// let dad = 111;
// if (sad === dad) {
//   console.log("equal");
// } else {
//   console.log("not");
// }

// let obj = {
//   name: "das",
//   age: 21,
// };
// console.log(obj?.age, "age");
