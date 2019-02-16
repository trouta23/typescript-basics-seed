const pizzas = [
  { name: 'Pepperoni', toppings: ['pepperoni'] },
  { name: 'Cheese', toppings: ['cheese'] },
];

// OG way
const mappedPizzas = pizzas.map(function(pizza) {
  return pizza.name.toUpperCase();
});

// Arrow function
const mappedPizzas2 = pizzas.map(pizza => {
  return pizza.name.toUpperCase();
});

// We can also pass other params like `index`
// const mappedPizzas2 = pizzas.map((pizza, index) => {
//   return pizza.name.toUpperCase();
//   // return index;
// });

// Implicit return arrow function
// Need to research arrow functions with `this`
// If it's just a one liner, we can get away with doing something like this:
const mappedPizzas3 = pizzas.map(pizza => pizza.name.toUpperCase());

console.log(mappedPizzas);
console.log(mappedPizzas2);
console.log(mappedPizzas3);
