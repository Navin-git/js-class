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
