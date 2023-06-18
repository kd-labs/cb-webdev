/**
 * QUESTION ON REDUCE
 */

const input1 = [
  [1, 2, 3],
  [4, 5],
  [6, 7, 8, 9, 10],
];

const res = input1.reduce((acc, curr) => acc.concat(curr), []);

/**
 * QUESTION ON SUM OF 2D ARRAY
 */

const input1_sum = input1.flat().reduce((acc, curr) => acc + curr, 0);
console.log(input1_sum);

console.log(res);

/**
 * QUESTION ON FLATTEN ARRAY
 */

const input2 = [[1, 2], [2, 3, 4], [5], 6, 7, 10];

console.log(input2.flat());

/**
 * QUESTION ON SORTING
 */
const input3 = [
  {
    id: 1,
    name: "Apple AirPods",
    price: 15000,
  },
  {
    id: 2,
    name: "Macbook Pro",
    price: 150000,
  },
  {
    id: 3,
    name: "Iphone 12",
    price: 89000,
  },
  {
    id: 4,
    name: "Apple Watch",
    price: 22000,
  },
];

input3.sort((a, b) => a.price - b.price);
console.log(input3);

let outer = 10;

function fun() {
  let inner = 100;
  function innerFun() {
    inner++;
    outer++;
    console.log(`outer : ${outer}, inner : ${inner}`);
  }
  return innerFun;
}

const f1 = fun();
f1();
f1();
f1();

/**
 * POLYFILLING FLAT AND FILTER FUNCTION
 */

Array.prototype.myFlat = function () {
  let res = [];
  for (let curr of this) {
    if (Array.isArray(curr)) {
      res = res.concat(curr);
    } else {
      res.push(curr);
    }
  }
  return res;
};

const myFlatRes = input2.myFlat();
console.log(myFlatRes);

Array.prototype.myFilter = function (testFn) {
  const res = [];
  for (let curr of this) {
    if (testFn(curr)) res.push(curr);
  }

  return res;
};

const myFilterResp = myFlatRes.myFilter((e) => e % 2 === 0);

console.log(myFilterResp);
