const cart = [
  {
    name: "onion pizza",
    price: 100,
  },
  {
    name: "paneer pizza",
    price: 180,
  },
  {
    name: "capsicum pizza",
    price: 150,
  },
];

// modify the price and apply discount
const discountedCart = cart.map((pizza) => {
  const discountedPizza = { ...pizza };
  discountedPizza.price = pizza.price * 0.5;
  return discountedPizza;
});

// sort discounted cart as per increasing price order
discountedCart.sort((a, b) => a.price - b.price);

// log the discounted cart
console.log(discountedCart);

// log the original cart
console.log(cart);
