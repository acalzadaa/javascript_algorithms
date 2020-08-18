const iterations = require('../Iterations');

test('Testing for in', () => {
    expect(iterations.for_in(['a', 'b', 'c', 'd'])).toEqual(["0", "1", "2", "3"]);
    expect(iterations.for_in({ make: "honda", year: 2000, model: "civic" })).toEqual(['make', 'year', 'model']);
});

test('Testing for of', () => {
    expect(iterations.for_of("abcde")).toEqual(['a', 'b', 'c', 'd', 'e']);
});

test('Testing for each - element', () => {
    expect(iterations.for_each_element(['a', 'b', 'c', 'd'])).toEqual(['a', 'b', 'c', 'd']);
});

test('Testing for each - index', () => {
    expect(iterations.for_each_index(['a', 'b', 'c', 'd'])).toEqual(['a', 'b', 'c', 'd']);
});
