const add = function(x,y) {
	return x + y;
};

const subtract = function(x,y) {
	return x - y;
};

const sum = function(arr) {
	return arr.reduce((acc,x) => acc + x , 0);
};

const multiply = function(arr) {
  return arr.reduce((acc,x) => acc * x , 1);
};

const power = function(x,y) {
	return x ** y
};

const factorial = function(x) {
  let product = 1;
  for (let i = x; i > 0; i--) {
    product *= i;
  }
  return product; 
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
