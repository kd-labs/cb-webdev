/*
const calcAreaPerimeterDiagonal = function (dimensions) {
  for (const dimension of dimensions) {
    dimension.area = dimension.length * dimension.breadth;
    dimension.perimeter = 2 * (dimension.length + dimension.breadth);
    dimension.hypotenuse = Math.hypot(dimension.length, dimension.breadth);
  }
  return dimensions;
};
*/

const calcAreaPerimeterDiagonal = function (dimensions) {
  dimensions = dimensions.map((e) => {
    e.area = e.length * e.breadth;
    e.perimeter = 2 * (e.length + e.breadth);
    e.hypotenuse = Math.hypot(e.length, e.breadth);
    return e;
  });
  return dimensions;
};

const d = [
  { length: 2, breadth: 3 },
  { length: 4, breadth: 5 },
  { length: 6, breadth: 8 },
];

const details = calcAreaPerimeterDiagonal(d);
// console.log(d);
console.log(details);

const foods = [
  "Dal Makhani",
  "Aloo Gobhi",
  "Rajma",
  "Kadhai Paneer",
  "Aloo Jeera",
  "Biryani",
];

const foodDetails = foods.map((e) => {
  return { name: e, price: 0, isAvailable: true };
});

console.log(foodDetails);

const moreFoods = [
  "Chicken Kadhai",
  "Chicken Biryani",
  "Dal Makhani",
  "Garlic Bread",
  "Onion Rings",
  "Paneer Masala",
  "Egg Curry",
  "Egg Bhurji",
  "Paneer Bhurji",
  "Onion Pizza",
];

const vegMenu = moreFoods.filter(
  (e) =>
    !(e.toLowerCase().includes("chicken") || e.toLowerCase().includes("egg"))
);
const jainMenu = vegMenu.filter(
  (e) =>
    !(e.toLowerCase().includes("onion") || e.toLowerCase().includes("garlic"))
);

console.table(vegMenu);
console.table(jainMenu);

const cart = [
  {
    name: "Iphone",
    price: 100,
    qty: 3,
  },
  {
    name: "Macbook",
    price: 200,
    qty: 2,
  },
  {
    name: "Apple Watch",
    price: 500,
    qty: 1,
  },
];

const totalCartValue = cart.reduce(
  (acc, curr) => acc + curr.qty * curr.price,
  0
);
console.log(totalCartValue);
