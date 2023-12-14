const rev = str => {
    let res = '';
    for (const elem of str) {
        res = `${elem}${res}`;
    }
    return res;
};
console.log(rev('oleg'));
console.log(rev('apple'));
