const sum = (num1, num2, num3, num4, num5, num6, num7, num8, num9, num10) => {
    const allNums = [num1, num2, num3, num4, num5, num6, num7, num8, num9, num10];
    return (allNums[0] + allNums[allNums.length - 1]) * (allNums.length / 2);
};

console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
