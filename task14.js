const dayQuantity = (mons, year) => {
    let february = 28;
    if (year % 4 === 0) {
        february = 29;
    }
    switch (mons) {
        case 'январь':
            return 31;
        case 'февраль':
            return february;
        case 'март':
            return 31;
        case 'апрель':
            return 30;
        case 'май':
            return 31;
        case 'июнь':
            return 30;
        case 'июль':
            return 31;
        case 'август':
            return 31;
        case 'сентябрь':
            return 30;
        case 'октябрь':
            return 31;
        case 'ноябрь':
            return 30;
        case 'декабрь':
            return 31;
    }
};

console.log(dayQuantity('февраль', 2023));
console.log(dayQuantity('февраль', 2024));
