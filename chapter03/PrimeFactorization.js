function primes(n) {

    let primerList = new Array();

    while (n % 2 === 0) {
        n = n / 2;
        primerList.push(2);
    }

    for (let i = 3; i * i <= n; i = i + 2) {
        while (n % i === 0) {
            primerList.push(i)
            n = n / i;
        }
    }

    if (n > 2) {
        primerList.push(n)
    }
    return primerList;
}

console.log(primes(12));

module.exports = primes;