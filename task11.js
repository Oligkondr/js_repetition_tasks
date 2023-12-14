const multi = (n, str) => {
    let result = '';
    for (let i = 0; i < n; i++) {
        result += str;
    }
    return result;
};

console.log(multi(3, 'x'));
console.log(multi(2, 'apple'));
