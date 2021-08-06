module.exports = function reverse(n) {
    if (n < 0) {
        n = n * -1;
    }

    let reversed = 0;

    while (n) {
        reversed = reversed * 10 + (n % 10);
        n = Math.floor(n / 10);
    }
    return reversed;
};
