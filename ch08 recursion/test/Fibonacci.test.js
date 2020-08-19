const fibo = require('../Fibonacci');

test('Testing recursion', () => {
    expect(fibo.fibonacci(0)).toEqual(0);
    expect(fibo.fibonacci(1)).toEqual(1);
    expect(fibo.fibonacci(2)).toEqual(1);
    expect(fibo.fibonacci(3)).toEqual(2);
    expect(fibo.fibonacci(4)).toEqual(3);
    expect(fibo.fibonacci(5)).toEqual(5);

});