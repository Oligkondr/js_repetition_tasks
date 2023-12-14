const sum = (num1, num2, num3, num4, num5, num6, num7, num8, num9, num10) => {
    let ans = 0;
    const allNums = [num1, num2, num3, num4, num5, num6, num7, num8, num9, num10];
    for (const num of allNums) {
        ans += num;
    }
    return ans;
};

console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
