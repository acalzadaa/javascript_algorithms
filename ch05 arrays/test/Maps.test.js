const maps = require('../Maps');

test('Testing maps', () => {
    expect(maps.maps_multiply_an_array_by([1,2,3,4], 11)).toEqual([11,22,33,44]);
});