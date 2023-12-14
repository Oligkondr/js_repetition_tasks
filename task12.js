const count = (sentence, letter) => {
    let ans = 0;
    for (const elem of sentence) {
        if (elem === letter) {
            ans++;
        }
    }
    return ans;
};

console.log(count('hihihihihihihihihihihihhihihih', 'i'));
console.log(count('tasty apple', 'p'));
console.log(count('huh cat', 'h'));
