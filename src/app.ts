// OG Way
const pizza = {
  name: 'Pepperoni',
  price: 15,
  getName: function() {
    return this.name;
  },
};

// With ES6
const pizza2 = {
  name: 'Pepperoni',
  price: 15,
  getName() {
    return this.name;
  },
};

console.log(pizza.getName());
console.log(pizza.getName());

const toppings = ['pepperoni'];

// OG way
const order = {
  pizza: pizza,
  toppings: toppings,
};

// With ES5 or ES6 we are able to do:
const order2 = {
  pizza,
  toppings,
};

function createOrder(pizza: object, toppings: object) {
  return { pizza, toppings };
}

console.log(order);
console.log(order2);
console.log(createOrder(pizza, toppings));
