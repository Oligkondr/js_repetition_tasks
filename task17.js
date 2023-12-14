const quad = (a, b, c) => {
    const dis = b ** 2 - 4 * a * c;
    if (dis < 0) {
        return 'Нет корней';
    }
    const x1 = (-b + Math.sqrt(dis)) / (a * 2);
    const x2 = (-b - Math.sqrt(dis)) / (a * 2);
    return [x1.toFixed(2), x2.toFixed(2)];
};

console.log(quad(3.2, -7.8, 1));
