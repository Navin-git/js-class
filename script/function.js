// const print = (text) => {
//   console.log(text);
// };

// const sum = (a, b) => {
//   return a + b;
// };
// print(sum(10, 20));

const arr = [1, 2, 3, 4, 5, 6, 10];

const totalSum = (array) => {
  return array.reduce((acc, item) => {
    return acc + item;
  }, 0);
};

console.log(totalSum(arr));
