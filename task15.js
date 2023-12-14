const whatAge = (year) => {
    let age = 0;
    if (year % 100 === 0) {
        age = Number((year / 100).toFixed());
    } else
        age = Number((year / 100).toFixed()) + 1;
    return age;
};
console.log(whatAge(2023));
console.log(whatAge(2123));
console.log(whatAge(100));
console.log(whatAge(1));
console.log(whatAge(200));
