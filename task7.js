const line = (start, end) => {
    let result = '';
    for (let i = start; i <= end; i++) {
        result += `${i} `;
    }
    return result.trim();
};
console.log(line(5, 20));
