function countDownToZero(n) {
    //base... when to STOP!
    if (n < 0) {
        return 0;
    } else {
        //actual + one less
        return countDownToZero(n-1) + n;
    }
}

module.exports = { countDownToZero }