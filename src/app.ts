function multiply(x: number, y: number = 25) {
  // Effectively saying:
  // if (!b) {
  //   y = 25
  // }
  return x * y;
}

console.log(multiply(5));
console.log(multiply(2, 8));
