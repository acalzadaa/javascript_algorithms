const filters = require('../Filters');

test('Testing slice', () => {
    expect(filters.filters_values_above_x([1, 2, 3, 10, 20, 30, 100, 200, 300], 50)).toEqual([100, 200, 300]);
});