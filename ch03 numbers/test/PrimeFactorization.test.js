const primeFactorization = require('../PrimeFactorization'); 

test('Testing prime factorization', () => {
    expect(primeFactorization(12)).toEqual([2,2,3]);
    expect(primeFactorization(10)).toEqual([2,5]); 
    expect(primeFactorization(4)).toEqual([2,2]); 

});