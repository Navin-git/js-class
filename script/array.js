let arr = [1, 2, 3, 4, 5, 6];

// length
console.log(arr.length, arr[arr.length - 1]);

// to string
console.log(arr.toString());

// pop only last element

arr.pop();
console.log(arr);

// push only last element

arr.push("nabin");
console.log(arr);

// shift in array  only first element

arr.shift();
console.log(arr);

// unshift in array  only first element

arr.unshift("sabin");
console.log(arr);

// join in array

console.log(arr.join(" "));

// delation in obj

let obj = {
  name: "nabin",
  cast: "hahah",
  age: "32",
};

// delete obj.cast;
obj.cast = undefined;
console.log(obj.cast, obj.id);
let newObj = { ...obj };
console.log(newObj);

// delation in array
delete arr[2];

console.log(arr);

let arr2 = ["kharel", "shayam"];

console.log(arr.concat(arr2), "concat");

// let newArr = arr;

// newArr[1] = {};

// console.log(newArr, arr);

let newArr = [...arr];
newArr[1] = {};

console.log(newArr, arr);
