const superQuiz = () => {
    let result = '';
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0) {
            result += `Super `;
        } else if (i % 5 === 0) {
            result += `Quiz `;
        } else if (i % 3 === 0 && i % 5 === 0) {
            result += `Super Quiz `;
        } else {
            result += `${i} `;
        }
    }
    return result.trim();
};

console.log(superQuiz());
