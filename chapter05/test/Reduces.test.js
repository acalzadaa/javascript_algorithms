const reduces = require('../Reduces');

test('Testing reduces sum of all values', () => {
    expect(reduces.reduces_sums_all_values([1,2,3])).toEqual(6);
});

