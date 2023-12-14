const min = (num1, num2, num3) => num1 < num2 && num1 < num3 ? num1 : num2 < num3 ? num2 : num3;
console.log(min(1, 2, 3));
console.log(min(2, 1, 3));
console.log(min(3, 2, 1));
