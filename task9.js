const exception = n => {
    let res = '';
    for (let i = 1; i <= n; i++) {
        if (i >= 15 && i <= 19 || i >= 37 && i <= 45) {
            continue;
        } else {
            res += `${i} `;
        }
    }
    return res.trim();
};

console.log(exception(50));
