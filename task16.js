const isLeapYear = (year) => {
    let leep = false;
    if (year % 4 === 0 && year % 100 !== 0) {
        leep = !leep;
    }
    return leep;
};
console.log(isLeapYear(2024));
console.log(isLeapYear(2022));
console.log(isLeapYear(2023));
console.log(isLeapYear(2100));
