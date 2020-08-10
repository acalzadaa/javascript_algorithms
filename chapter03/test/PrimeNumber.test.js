const primeNumber = require('../PrimeNumber'); 

test('This is an important test', () => {
    expect(primeNumber(5)).toBe(true);
    expect(primeNumber(0)).toBe(false);
    expect(primeNumber(8)).toBe(false);

});

