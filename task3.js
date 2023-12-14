const height = (num1, num2, num3) => {
    let ans;
    if (num1 === num2 || num1 === num3) {
        ans = [num1 + 5, num2 + 5, num3 + 5];
    } else {
        ans = 'равных нет';
    }
    return ans;
};
console.log(height(1, 2, 3));
console.log(height(2, 1, 2));
console.log(height(2, 2, 2));
console.log(height(2, 2, 1));
