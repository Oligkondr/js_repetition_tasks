const exist = (a, b, c) => {
    const max = Math.max(a, b, c);
    return ((a + b + c) - max) > max;
};

const triangle = (a, b, c) => {
    if (exist(a, b, c)) {
        let sum = (a ** 2 + b ** 2).toFixed(2);
        let side = (c ** 2).toFixed(2);
        return (sum === side);
    } else {
        return 'Невозможный треугольник';
    }
};

console.log(triangle(2, 4, 6));
console.log(triangle(3, 4, 5));
console.log(triangle(7, 12, 8));
